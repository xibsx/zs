const { Boom } = require('@hapi/boom');
const { useMultiFileAuthState, makeInMemoryStore, delay } = require('@whiskeysockets/baileys');
const pino = require('pino');
const { WAConnection } = require('@whiskeysockets/baileys');

// Initialize logger
const logger = pino({ level: 'silent' });

// Main function to start the bot
async function startBot() {
    // Initialize auth state
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    
    // Create WhatsApp connection
    const conn = WAConnection({
        logger: logger,
        printQRInTerminal: true,
        auth: state
    });
    
    // Store for keeping track of chats and messages
    const store = makeInMemoryStore({ logger: logger });
    store.bind(conn.ev);
    
    // Load message handlers
    const { handleCommands } = require('./handlers/commands');
    const { handleMessages } = require('./handlers/messages');
    
    // Connection events
    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            // Reconnect if not logged out
            if ((lastDisconnect.error)?.output?.statusCode !== 401) {
                startBot();
            }
        } else if (connection === 'open') {
            console.log('Bot is connected and ready!');
        }
    });
    
    // Credentials update event
    conn.ev.on('creds.update', saveCreds);
    
    // Message events
    conn.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify') return;
        
        const message = messages[0];
        if (!message.message) return;
        
        // Check if message is a command
        const isCommand = message.message.conversation?.startsWith('!') || 
                          message.message.extendedTextMessage?.text?.startsWith('!');
        
        if (isCommand) {
            await handleCommands(conn, message, store);
        } else {
            await handleMessages(conn, message, store);
        }
    });
    
    // Connect to WhatsApp
    await conn.connect();
}

// Start the bot
startBot().catch(err => console.log('Error starting bot:', err));

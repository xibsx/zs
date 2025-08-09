const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeWASocket } = require('@whiskeysockets/baileys');
const pino = require('pino');

// Initialize logger
const logger = pino({ level: 'silent' });

// Main function to start the bot
async function startBot() {
    // Initialize auth state
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    
    // Fetch the latest version of Baileys
    const { version } = await fetchLatestBaileysVersion();
    
    // Create WhatsApp connection
    const conn = makeWASocket({
        logger: logger,
        version: version,
        auth: state,
        printQRInTerminal: true, // Still works despite deprecation warning
        browser: ['Baileys Bot', 'Chrome', '1.0.0'],
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true
    });
    
    // Connection events
    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        // Handle QR code (new way)
        if (qr) {
            console.log('Scan the QR code above to authenticate');
        }
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connection closed due to:', lastDisconnect.error, ', reconnecting:', shouldReconnect);
            if (shouldReconnect) {
                startBot();
            }
        } else if (connection === 'open') {
            console.log('Bot is connected and ready!');
        }
    });
    
    // Credentials update event
    conn.ev.on('creds.update', saveCreds);
    
    // Load message handlers
    const { handleCommands } = require('./handlers/commands');
    const { handleMessages } = require('./handlers/messages');
    
    // Message events
    conn.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify') return;
        
        const message = messages[0];
        if (!message.message) return;
        
        // Check if message is a command
        const isCommand = message.message.conversation?.startsWith('!') || 
                          message.message.extendedTextMessage?.text?.startsWith('!');
        
        if (isCommand) {
            await handleCommands(conn, message);
        } else {
            await handleMessages(conn, message);
        }
    });
}

// Start the bot
startBot().catch(err => console.log('Error starting bot:', err));

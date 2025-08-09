async function handleCommands(conn, message, store) {
    const jid = message.key.remoteJid;
    const user = message.pushName || 'User';
    const msg = message.message.conversation || message.message.extendedTextMessage.text;
    const command = msg.split(' ')[0].toLowerCase();
    const args = msg.split(' ').slice(1);
    
    const commands = {
        '!help': async () => {
            const helpText = `🤖 *Bot Commands* 🤖\n\n` +
                            `!help - Show this help message\n` +
                            `!ping - Check if bot is alive\n` +
                            `!info - Get bot information\n` +
                            `!time - Get current time\n` +
                            `!echo [text] - Repeat the text\n` +
                            `!spam [count] [text] - Spam text (max 5 times)`;
            await conn.sendMessage(jid, { text: helpText });
        },
        
        '!ping': async () => {
            await conn.sendMessage(jid, { text: '🏓 Pong!' });
        },
        
        '!info': async () => {
            const infoText = `*Bot Information*\n\n` +
                            `🤖 *Name*: Baileys WhatsApp Bot\n` +
                            `⚙️ *Framework*: Baileys\n` +
                            `📅 *Version*: 1.0.0\n` +
                            `👋 *Greeting*: Hello ${user}!`;
            await conn.sendMessage(jid, { text: infoText });
        },
        
        '!time': async () => {
            const now = new Date();
            await conn.sendMessage(jid, { 
                text: `⏰ Current time: ${now.toLocaleString()}`
            });
        },
        
        '!echo': async () => {
            if (args.length === 0) {
                await conn.sendMessage(jid, { text: 'Please provide text to echo. Usage: !echo [text]' });
                return;
            }
            await conn.sendMessage(jid, { text: args.join(' ') });
        },
        
        '!spam': async () => {
            if (args.length < 2) {
                await conn.sendMessage(jid, { text: 'Usage: !spam [count] [text]' });
                return;
            }
            
            const count = Math.min(parseInt(args[0]), 5); // Max 5 times
            const text = args.slice(1).join(' ');
            
            for (let i = 0; i < count; i++) {
                await conn.sendMessage(jid, { text: `${i+1}. ${text}` });
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    };
    
    if (commands[command]) {
        await commands[command]();
    } else {
        await conn.sendMessage(jid, { 
            text: `❌ Unknown command: ${command}\nType !help for available commands.`
        });
    }
}

module.exports = { handleCommands };

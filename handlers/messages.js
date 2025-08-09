async function handleMessages(conn, message, store) {
    const jid = message.key.remoteJid;
    const user = message.pushName || 'User';
    const msg = message.message.conversation || 
               (message.message.extendedTextMessage?.text || '').toLowerCase();
    
    // Automatic replies to certain messages
    const autoReplies = {
        'hi': `👋 Hello ${user}! How can I help you today?`,
        'hello': `👋 Hello ${user}! How can I help you today?`,
        'how are you': `🤖 I'm just a bot, but I'm functioning well! Thanks for asking.`,
        'what can you do': `🤖 I can respond to commands and messages. Type !help to see what I can do.`,
        'thanks': `😊 You're welcome, ${user}!`,
        'thank you': `😊 You're welcome, ${user}!`,
        'bye': `👋 Goodbye ${user}! Have a great day!`
    };
    
    // Check for auto-reply
    for (const [keyword, reply] of Object.entries(autoReplies)) {
        if (msg.includes(keyword)) {
            await conn.sendMessage(jid, { text: reply });
            return;
        }
    }
    
    // Default reply if no auto-reply matched
    if (Math.random() < 0.3) { // 30% chance to reply to random messages
        await conn.sendMessage(jid, { 
            text: `🤖 Hi ${user}! I'm a bot. Type !help to see what I can do.`
        });
    }
}

module.exports = { handleMessages };

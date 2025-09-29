

<div align="center">
  <h2>📊 GitHub Stats</h2>
  <img src="https://github-stats-alpha.vercel.app/api?username=xibsx&cc=000&tc=fff&ic=fff&bc=000" alt="Stats">
  
  <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=xibsx&theme=tokyonight" width="100%">
  
  <p align="center">
    <img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=xibsx&theme=tokyonight" width="45%">
    <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=xibsx&theme=tokyonight" width="45%">
  </p>
</div>

<div align="center">
  <h2>🏆 GitHub Trophies</h2>
  <img src="https://github-profile-trophy.vercel.app/?username=xibsx&theme=algolia&no-frame=true&no-bg=true&margin-w=4&column=7" width="100%"/>
</div>

<div align="center">
  <h2>📈 Contribution Graph</h2>
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=xibsx&bg_color=0d1117&color=63a4ff&line=83eaf1&point=63a4ff&area=true&hide_border=true&radius=8" width="100%">
</div>



<div align="center">

  

  
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" width="100%">
  

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Google+Sans&weight=600&size=24&pause=1000&color=63A4FF&center=true&vCenter=true&width=435&lines=Thanks+for+visiting!+%F0%9F%91%8B;Let's+code+and+learn+together!+%F0%9F%9A%80" alt="Typing SVG" />
  </a>
</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:83eaf1,100:63a4ff&height=120&section=footer"/>














# za
🎴
# WhatsApp Bot using Baileys

A feature-rich WhatsApp bot built with Baileys library that doesn't require any external API.

## Features

- Command handling (`!help`, `!ping`, `!info`, etc.)
- Automatic replies to common messages
- Message storage and tracking
- Auto-reconnect on disconnect

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/whatsapp-bot-baileys.git
   cd whatsapp-bot-baileys


README.md file on GitHub.
# 🤖 XIBS-XV WhatsApp Bot

<div align="center">

![XIBS-XV Banner](https://files.catbox.moe/q5trr2.jpg)

**A Powerful WhatsApp Bot with Advanced Features, Bug Commands, AI Integration, and Group Management**

[![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/xibs-xv-bot)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/your-template)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)

</div>

## 📋 Table of Contents
- [🌟 Features](#-features)
- [🚀 Quick Deploy](#-quick-deploy)
- [🔧 Manual Installation](#-manual-installation)
- [📁 Project Structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🔐 Session Management](#-session-management)
- [🎯 Command List](#-command-list)
- [🌐 Hosting Platforms](#-hosting-platforms)
- [❓ FAQ](#-faq)
- [⚠️ Disclaimer](#️-disclaimer)
- [📞 Support](#-support)

---

## 🌟 Features

### 🤖 Core Features
- **Multi-Device Support** - Uses latest Baileys library
- **Session Management** - Local & Cloud session support
- **Auto-Reconnect** - Automatic reconnection on disconnect
- **Multi-Prefix** - Supports multiple command prefixes

### 🐛 Bug Commands
- `crash-ios` - iOS device crash
- `delay` - Message delay bug  
- `invis-crash` - Invisible crash
- `spam-close` - Spam close bug
- `host-delay` - Host delay bug

### 👥 Group Management
- **Auto Moderation** - Anti-link, anti-spam, anti-bot
- **Member Management** - Kick, promote, demote, add
- **Group Settings** - Change name, description, picture
- **Welcome System** - Auto welcome new members
- **Tagging Tools** - Tag all, tag admins, hide tag

### 🤖 AI Integration
- `ask` - Smart AI responses
- `chatgpt` - ChatGPT integration
- `bard` - Google Bard AI
- `codex` - Code generation AI
- `dalle` - AI image generation

### 🎵 Media Tools
- **Sticker Creation** - Image/Video to sticker
- **View Once Reveal** - View once message download
- **Media Download** - YouTube, social media download
- **Audio Conversion** - Video to audio conversion

### ⚡ Utility Features
- **Owner System** - Multi-owner support
- **Premium System** - Premium user features
- **Auto Channel Follow** - Auto follow WhatsApp channels
- **Auto Group Join** - Auto join groups via invite links

---

## 🚀 Quick Deploy

### Heroku Deployment (Recommended)

1. **Click the Heroku button above**
2. **Set these environment variables:**

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `SESSION_ID` | ✅ Yes | MEGA.nz Session File ID | `xyz123abc` |
| `OWNER_NUMBER` | ✅ Yes | Bot owner number | `255754206718` |
| `BOT_NAME` | ❌ Optional | Bot display name | `XIBS-XV` |
| `PACKAGE_NAME` | ❌ Optional | Sticker pack name | `XIBS` |
| `PORT` | ❌ Optional | Server port | `3000` |

3. **Deploy and wait for build to complete**
4. **Check logs for QR code or connection status**

### 📋 How to Get SESSION_ID for Heroku

Since Heroku has ephemeral storage (filesystem resets daily), you need to use cloud sessions:

#### Method 1: Using MEGA.nz
1. **Run bot locally first:**
```bash
git clone [https://github.com/yourusername/xibs-xv-bot.git](https://github.com/yourusername/xibs-xv-bot.git)
cd xibs-xv-bot
npm install
npm start```

 * Scan QR code to authenticate
 * Upload session folder to MEGA.nz:
   * Compress sessions folder to ZIP
   * Upload to MEGA.nz
   * Get file ID from share link
   * Example: https://mega.nz/file/abc123xyz#... → abc123xyz
 * Set SESSION_ID = abc123xyz in Heroku
Method 2: Using GitHub Gist
 * Convert session to base64:
<!-- end list -->
# After local authentication
cd sessions
base64 -w 0 creds.json > creds.txt

 * Create GitHub Gist with creds.txt
 * Use raw gist URL as SESSION_ID
🔧 Manual Installation
Prerequisites
 * Node.js 16 or higher
 * Git
 * WhatsApp account
Step-by-Step Setup
 * Clone Repository
<!-- end list -->
git clone [https://github.com/yourusername/xibs-xv-bot.git](https://github.com/yourusername/xibs-xv-bot.git)
cd xibs-xv-bot

 * Install Dependencies
<!-- end list -->
npm install

 * Configure Environment
<!-- end list -->
# Create .env file
cp .env.example .env

# Edit .env file with your settings
nano .env

 * Start Bot
<!-- end list -->
# Development mode
npm run dev

# Production mode
npm start

# With PM2 (recommended for VPS)
npm run pm2

Environment Variables (.env)
# Required
SESSION_ID=your_mega_session_id
OWNER_NUMBER=255754206718

# Optional
BOT_NAME=XIBS-XV
PACKAGE_NAME=XIBS
PORT=3000
WELCOME=true
ANTISPAM=true
AUTOREAD=true

📁 Project Structure
xibs-xv-bot/
├── 📂 lib/                    # Core libraries
│   ├── color.js              # Terminal colors
│   ├── myfunction.js         # Utility functions
│   ├── owner.json            # Owner list
│   ├── premium.json          # Premium users
│   └── menu.mp3              # Menu audio
├── 📂 settings/              # Configuration
│   └── config.js            # Bot settings
├── 📂 sessions/              # Session storage (local)
├── 📄 index.js               # Main bot file
├── 📄 zenok.js               # Command handler
├── 📄 package.json           # Dependencies
├── 📄 app.json               # Deployment config
├── 📄 Procfile               # Process file
├── 📄 ecosystem.config.js    # PM2 configuration
└── 📄 README.md              # This file

🔐 Session Management
Local Sessions (VPS/Local)
 * Stores in sessions/ folder
 * Persistent across restarts
 * Automatic reconnection
Cloud Sessions (Heroku/Railway)
 * Download from MEGA.nz on startup
 * Required for platforms with ephemeral storage
 * Set SESSION_ID environment variable
Session Flow
graph LR
    A[Bot Start] --> B{Check SESSION_ID};
    B -->|Exists| C[Download from Cloud];
    B -->|Not Exists| D[Use Local Session];
    C --> E[Authenticate];
    D --> E;
    E --> F[Bot Ready];

🎯 Command List
👑 Owner Commands
| Command | Description | Usage |
|---|---|---|
| .addowner | Add bot owner | .addowner 234123456789 |
| .delowner | Remove owner | .delowner 234123456789 |
| .addprem | Add premium user | .addprem 234123456789 |
| .delprem | Remove premium | .delprem 234123456789 |
| .public | Set public mode | .public |
| .self | Set private mode | .self |
🐛 Bug Commands
| Command | Description | Target |
|---|---|---|
| .crash-ios | iOS crash bug | Specific number |
| .delay | Message delay | Group/User |
| .invis-crash | Invisible crash | Group/User |
| .spam-close | Spam close | Group/User |
| .host-delay | Host delay | Group/User |
👥 Group Commands
| Command | Description | Permission |
|---|---|---|
| .promote | Promote user | Admin |
| .demote | Demote user | Admin |
| .kick | Remove user | Admin |
| .add | Add user | Admin |
| .tagall | Mention all | Admin |
| .link | Get group link | Anyone |
🤖 AI Commands
| Command | Description | Provider |
|---|---|---|
| .ask | Smart AI | Multiple |
| .chatgpt | ChatGPT | OpenAI |
| .bard | Google Bard | Google |
| .codex | Code generation | OpenAI |
| .dalle | Image generation | OpenAI |
🎵 Media Commands
| Command | Description | Usage |
|---|---|---|
| .sticker | Create sticker | Reply to image/video |
| .vv | View once reveal | Reply to view once |
| .download | Download media | .download youtube-url |
| .getaudiovid | Extract audio | Reply to video |
🌐 Hosting Platforms
✅ Supported Platforms
 * Heroku (Recommended)
   * Pros: Easy deployment, free tier available
   * Cons: Ephemeral storage (requires cloud sessions)
   * Setup: Use SESSION_ID environment variable
 * Railway
   * Pros: Good free tier, easy GitHub integration
   * Cons: Limited resources on free tier
   * Setup: Similar to Heroku
 * Replit
   * Pros: Browser-based, easy editing
   * Cons: May sleep when inactive
   * Setup: Fork and run directly
 * VPS (Ubuntu/CentOS)
   * Pros: Full control, persistent storage
   * Cons: Requires technical knowledge
   * Setup: Use PM2 for process management
 * Render
   * Pros: Simple deployment
   * Cons: Free tier limitations
   * Setup: Connect GitHub repo
🔧 Platform-Specific Setup
Heroku Specific
# Set environment variables
heroku config:set SESSION_ID=your_mega_id
heroku config:set OWNER_NUMBER=255754206718

# View logs
heroku logs --tail

Railway Specific
# Set variables in dashboard
# Deploy from GitHub
# Monitor in dashboard

VPS Setup
# Use PM2 for process management
npm install -g pm2
pm2 start ecosystem.config.js
pm2 startup
pm2 save

❓ FAQ
❓ Why do I need SESSION_ID for Heroku?
Heroku has ephemeral filesystem - all files are reset daily. Cloud sessions ensure your bot stays authenticated.
❓ How to update the bot?
git pull
npm install
pm2 restart xibs-bot

❓ Bot not connecting?
 * Check SESSION_ID is valid
 * Verify owner number format
 * Check hosting platform logs
 * Ensure WhatsApp number is active
❓ How to add more owners?
Use .addowner command or edit lib/owner.json
❓ Session expired?
Delete old session and create new one, then upload to cloud again.
⚠️ Disclaimer
This project is intended for:
 * Educational purposes
 * Personal automation
 * Learning about WhatsApp APIs
Please:
 * Use responsibly
 * Respect WhatsApp's Terms of Service
 * Don't spam or harass users
 * Comply with local laws
The developers are not responsible for any misuse of this software.
📞 Support
🐛 Bug Reports
Create an issue on GitHub with:
 * Error logs
 * Steps to reproduce
 * Platform information
💡 Feature Requests
Suggest new features via GitHub issues
👨‍💻 Developer
 * Name: XIBS
 * Contact: +255754206718
 * GitHub: @xibsx
🌟 Credits
 * Baileys Library - WhatsApp Web API
 * Contributors - Community support
 * Testers - Beta testing team
<div align="center">
⭐ Star this repository if you find it helpful!
Made with ❤️ by XIBS
</div>

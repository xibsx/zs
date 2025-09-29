# 🤖 XIBS-XV WhatsApp Bot

<div align="center">

![XIBS-XV Banner](https://files.catbox.moe/q5trr2.jpg)

**A Powerful WhatsApp Bot with Advanced Features, Bug Commands, AI Integration, and Group Management**

[![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/xibs-xv-bot)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/your-template)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)

</div>

---

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
- **Multi-Device Support** — Built on the Baileys WhatsApp library
- **Session Management** — Local & cloud session support
- **Auto-Reconnect** — Automatic reconnection on disconnect
- **Multi-Prefix** — Supports multiple command prefixes

### 🐛 Bug Commands
> Use responsibly. These commands can disrupt devices or chats.

- `crash-ios` — iOS device crash
- `delay` — Message delay bug
- `invis-crash` — Invisible crash
- `spam-close` — Spam close bug
- `host-delay` — Host delay bug

### 👥 Group Management
- **Auto Moderation** — Anti-link, anti-spam, anti-bot
- **Member Management** — Kick, promote, demote, add
- **Group Settings** — Change name, description, picture
- **Welcome System** — Auto welcome new members
- **Tagging Tools** — Tag all, tag admins, hide tag

### 🤖 AI Integration
- `ask` — Smart AI responses
- `chatgpt` — OpenAI ChatGPT integration
- `bard` — Google Bard (if configured)
- `codex` — Code generation
- `dalle` — AI image generation (if configured)

### 🎵 Media Tools
- **Sticker Creation** — Image/Video → sticker
- **View Once Reveal** — Download view-once messages
- **Media Download** — YouTube, social media downloads
- **Audio Conversion** — Extract audio from video

### ⚡ Utility Features
- **Owner System** — Multi-owner support
- **Premium System** — Premium user features
- **Auto Channel Follow** — Auto follow WhatsApp channels
- **Auto Group Join** — Auto-join groups via invite links

---

## 🚀 Quick Deploy

> Recommended: deploy to Heroku or Railway for quick testing. For production use a VPS with PM2.

### Heroku Deployment (Recommended)

1. Click the **Deploy on Heroku** button above.
2. In the deploy form set these environment variables:

| Variable       | Required | Description                       | Example         |
|----------------|----------|-----------------------------------|-----------------|
| `SESSION_ID`   | ✅ Yes   | Cloud session identifier (MEGA/Gist/raw) | `abc123xyz`     |
| `OWNER_NUMBER` | ✅ Yes   | Bot owner phone number (with country code) | `+255754206718` |
| `BOT_NAME`     | ❌ Optional | Bot display name                 | `XIBS-XV`       |
| `PACKAGE_NAME` | ❌ Optional | Sticker pack name                | `XIBS`          |
| `PORT`         | ❌ Optional | Server port                      | `3000`          |

3. Deploy and watch build logs for the bot startup / QR code (first run).
4. If using Heroku (ephemeral storage), use cloud sessions (see below).

---

### How to obtain `SESSION_ID` (cloud session)

**Method 1 — MEGA.nz (recommended for Heroku/Railway)**

1. Run the bot locally to authenticate:
   ```bash
   git clone https://github.com/yourusername/xibs-xv-bot.git
   cd xibs-xv-bot
   npm install
   npm start

2. Scan the QR code shown in logs to create a local sessions/ folder.


3. Compress the sessions/ folder to sessions.zip.


4. Upload sessions.zip to MEGA.nz and get the file ID from the share link.

Example share: https://mega.nz/file/abc123xyz#<key> → file ID: abc123xyz



5. Set SESSION_ID=abc123xyz in Heroku config vars.



Method 2 — GitHub Gist (raw)

1. After local auth, base64-encode the credentials file:

cd sessions
base64 -w 0 creds.json > creds.txt


2. Create a secret GitHub Gist with creds.txt.


3. Use the raw gist URL as SESSION_ID (or store the raw content in a safe place and reference it).



> NOTE: Keep session credentials private. Anyone with access can control the bot.




---

🔧 Manual Installation

Prerequisites

Node.js 16+ installed

Git

A WhatsApp account for the bot


Setup

# Clone repository
git clone https://github.com/yourusername/xibs-xv-bot.git
cd xibs-xv-bot

# Install dependencies
npm install

# Copy example env
cp .env.example .env
# Edit .env with your settings (SESSION_ID, OWNER_NUMBER, etc.)
nano .env

# Development mode
npm run dev

# Production
npm start

# Using PM2 (recommended for VPS)
npm install -g pm2
pm2 start ecosystem.config.js
pm2 startup
pm2 save

Example .env (minimum)

SESSION_ID=your_cloud_session_id_or_raw_url
OWNER_NUMBER=+255754206718
BOT_NAME=XIBS-XV
PORT=3000
WELCOME=true
ANTISPAM=true
AUTOREAD=true


---

📁 Project Structure

xibs-xv-bot/
├── lib/                    # Core libraries
│   ├── color.js
│   ├── myfunction.js
│   ├── owner.json
│   ├── premium.json
│   └── menu.mp3
├── settings/
│   └── config.js           # Bot settings
├── sessions/               # Session storage (local)
├── index.js                # Main bot file
├── zenok.js                # Command handler
├── package.json
├── app.json                # Deployment config
├── Procfile
├── ecosystem.config.js     # PM2 config
└── README.md


---

🔐 Session Management

Flow (mermaid):

flowchart LR
    A[Bot Start] --> B{Check SESSION_ID}
    B -->|Exists| C[Download from Cloud]
    B -->|Not Exists| D[Use Local Session]
    C --> E[Authenticate]
    D --> E[Authenticate]
    E --> F[Bot Ready]

Local sessions: stored in sessions/ — persistent on VPS.

Cloud sessions: download session on startup using SESSION_ID for ephemeral platforms (Heroku, Railway).



---

🎯 Command List

👑 Owner Commands

Command	Description	Usage

.addowner	Add bot owner	.addowner +234123456789
.delowner	Remove owner	.delowner +234123456789
.addprem	Add premium user	.addprem +234123456789
.delprem	Remove premium	.delprem +234123456789
.public	Set public mode	.public
.self	Set private mode	.self


🐛 Bug Commands

Command	Description	Target

.crash-ios	iOS crash bug	Specific number
.delay	Message delay bug	Group/User
.invis-crash	Invisible crash	Group/User
.spam-close	Spam close bug	Group/User
.host-delay	Host delay bug	Group/User


👥 Group Commands

Command	Description	Permission

.promote	Promote user	Admin
.demote	Demote user	Admin
.kick	Remove user	Admin
.add	Add user	Admin
.tagall	Mention all	Admin
.link	Get group link	Anyone


🤖 AI Commands

Command	Description	Provider

.ask	Smart AI query	Multiple
.chatgpt	ChatGPT	OpenAI
.bard	Google Bard	Google
.codex	Code generation	OpenAI
.dalle	Image generation	OpenAI


🎵 Media Commands

Command	Description	Usage

.sticker	Create sticker from media	Reply to image/video
.vv	Reveal view-once message	Reply to the view-once msg
.download	Download media from URL	.download <youtube-url>
.getaudiovid	Extract audio from video	Reply to video



---

🌐 Hosting Platforms

Supported

Heroku — Easy deploy; ephemeral storage (use cloud sessions)

Railway — Good free tier; easy GitHub integration

Replit — Browser-based; may sleep when idle

VPS (Ubuntu/CentOS) — Persistent; recommended for production with PM2

Render — Simple deployment; free tier limits


Heroku CLI example

heroku config:set SESSION_ID=your_mega_id
heroku config:set OWNER_NUMBER=+255754206718
heroku logs --tail

VPS (PM2)

npm install -g pm2
pm2 start ecosystem.config.js --name xibs-bot
pm2 startup
pm2 save


---

❓ FAQ

Q: Why do I need SESSION_ID for Heroku?
A: Heroku's filesystem is ephemeral — sessions are lost after restarts. SESSION_ID allows the bot to fetch session data from cloud storage on startup.

Q: How to update the bot?

git pull
npm install
pm2 restart xibs-bot

Q: Bot not connecting — what to check?

Ensure SESSION_ID is valid and accessible.

Verify OWNER_NUMBER format (+<country code><number>).

Check hosting platform logs for errors.

Ensure the WhatsApp number used is active.


Q: How to add more owners?
Use .addowner or edit lib/owner.json.


---

⚠️ Disclaimer

This project is provided for educational and personal automation purposes only. Use responsibly:

Respect WhatsApp Terms of Service.

Do not spam, harass, or break local laws.

The maintainers are not responsible for misuse.



---

📞 Support

Bug Reports
Create a GitHub issue with:

Error logs

Steps to reproduce

Platform/environment details


Feature Requests
Open a GitHub issue describing the feature and use-case.

Developer

Name: XIBS

Contact: +255754206718

GitHub: @xibsx



---

🌟 Credits

Baileys Library — WhatsApp Web API

Contributors — Community support

Testers — Beta testing team


<div align="center">
⭐ Star this repository if you find it helpful!  
Made with ❤️ by XIBS
</div>
```
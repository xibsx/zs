{
  "name": "Orion WhatsApp Pairing",
  "description": "OTP-based WhatsApp bot pairing service",
  "repository": "https://github.com/xibsx/orion-pairing",
  "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968841.png",
  "keywords": ["whatsapp", "bot", "baileys", "node"],
  "env": {
    "PORT": {
      "description": "Port for the Express server",
      "value": "3000"
    },
    "NODE_ENV": {
      "description": "Node environment",
      "value": "production"
    },
    "SESSION_SECRET": {
      "description": "Secret for session encryption",
      "generator": "secret"
    }
  },
  "formation": {
    "web": {
      "quantity": 1,
      "size": "free"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ],
  "scripts": {
    "postdeploy": "echo 'Deployment completed'"
  }
}
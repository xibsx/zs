require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { color } = require('./utils'); // Your utils file

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting (100 requests per 15 mins)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);

// ======================
// Session Storage (In-memory for demo)
// ======================
const sessions = new Map();

// ======================
// API Endpoints
// ======================

// Request OTP
app.post('/api/request-otp', async (req, res) => {
  const { phone } = req.body;

  // Validate phone number
  if (!phone?.match(/^\+\d{10,15}$/)) {
    return res.status(400).json({ 
      success: false,
      error: "Invalid phone format (e.g. +1234567890)" 
    });
  }

  try {
    const sessionId = `orion-${Date.now().toString(36)}`;
    sessions.set(sessionId, { 
      phone,
      status: 'pending',
      createdAt: Date.now()
    });

    console.log(color(`[OTP] Requested for ${phone}`, 'yellow'));
    
    // In production: Integrate with Baileys here
    res.json({ 
      success: true,
      sessionId,
      message: "OTP sent successfully (demo: use '123456')"
    });

  } catch (error) {
    console.error(color('[ERROR]', 'red'), error);
    res.status(500).json({ 
      success: false,
      error: "Server error during OTP request" 
    });
  }
});

// Verify OTP
app.post('/api/verify-otp', async (req, res) => {
  const { sessionId, otp } = req.body;

  if (!sessions.has(sessionId)) {
    return res.status(404).json({ 
      success: false,
      error: "Session expired or invalid" 
    });
  }

  // Demo verification (replace with Baileys in production)
  if (otp !== "123456") {
    return res.status(401).json({ 
      success: false,
      error: "Invalid OTP (demo code: 123456)" 
    });
  }

  // Mark as verified
  sessions.get(sessionId).status = 'verified';
  
  res.json({ 
    success: true,
    sessionId,
    message: "Device paired successfully!",
    nextStep: "/deploy.html" // Your deployment page
  });
});

// ======================
// Frontend Routes
// ======================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/verify', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'verify.html'));
});

app.get('/deploy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'deploy.html'));
});

// ======================
// Start Server
// ======================
app.listen(PORT, () => {
  console.log(color(`[SERVER]`, 'green'), 
    `Running on http://localhost:${PORT}`);
});

// Handle uncaught errors
process.on('unhandledRejection', (err) => {
  console.error(color('[CRASH]', 'red'), err);
});
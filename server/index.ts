import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { storage } from './storage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS?.split(',') || ['https://yourdomain.com'] : "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.ALLOWED_ORIGINS?.split(',') || ['https://yourdomain.com'] : true,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Serve static files from the client build directory
const clientPath = path.join(__dirname, '../dist/client');
console.log('Serving static files from:', clientPath);
app.use(express.static(clientPath));

// Apply rate limiting to API routes
app.use('/api/', apiRateLimiter);

// API routes with input validation
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/compile', (req, res) => {
  const { code, language } = req.body;
  
  // Input validation
  if (!code || typeof code !== 'string' || code.length > 10000) {
    return res.status(400).json({ error: 'Invalid code input' });
  }
  
  if (!language || typeof language !== 'string' || !['spiral', 'htsx', 'consciousness', 'quantum'].includes(language)) {
    return res.status(400).json({ error: 'Invalid language specified' });
  }
  
  // Mock compilation response
  res.json({ 
    success: true, 
    output: `Compiled ${language} code successfully`,
    ast: { type: 'Program', body: [] }
  });
});

app.get('/api/quantum-state', (req, res) => {
  res.json({
    phi: 1.618,
    resonance: Math.random() * 100,
    consciousness: Math.random() * 100,
    timestamp: Date.now()
  });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('quantum-update', (data) => {
    socket.broadcast.emit('quantum-state', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Configure rate limiters with proper concurrency handling
const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many API requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
});

const indexRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // higher limit for static content
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Serve the React app for all other routes
app.get('*', indexRateLimiter, (req, res) => {
  const indexPath = path.join(__dirname, '../dist/client/index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Error loading application');
    }
  });
});

const PORT = Number(process.env.PORT) || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SpiralScript IDE Server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for quantum connections`);
});
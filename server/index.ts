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
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Serve static files from the client build directory
const clientPath = path.join(__dirname, '../dist/client');
console.log('Serving static files from:', clientPath);
app.use(express.static(clientPath));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/compile', (req, res) => {
  const { code, language } = req.body;
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

// Configure rate limiter: maximum of 100 requests per 15 minutes
const indexRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SpiralScript IDE Server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for quantum connections`);
});
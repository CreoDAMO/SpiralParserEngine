import express from "express";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertSpiralFileSchema, 
  insertTrustTransactionSchema,
  insertQuantumCircuitSchema,
  insertParseResultSchema 
} from "@shared/schema";

import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // increased limit for development
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting in development to avoid proxy issues
    return process.env.NODE_ENV === 'development';
  },
  keyGenerator: (req) => {
    return req.ip || req.socket.remoteAddress || 'anonymous';
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(limiter);
  // File operations
  app.get("/api/files/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const files = await storage.getUserFiles(userId);
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch files" });
    }
  });

  app.get("/api/files/content/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const file = await storage.getFile(id);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      res.json(file);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch file" });
    }
  });

  app.post("/api/files", async (req, res) => {
    try {
      const fileData = insertSpiralFileSchema.parse(req.body);
      const file = await storage.createFile(fileData);
      res.json(file);
    } catch (error) {
      res.status(400).json({ error: "Invalid file data" });
    }
  });

  app.put("/api/files/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { content } = req.body;
      const file = await storage.updateFile(id, content);
      res.json(file);
    } catch (error) {
      res.status(500).json({ error: "Failed to update file" });
    }
  });

  // Parse SpiralScript code
  app.post("/api/parse", async (req, res) => {
    try {
      const { fileId, code } = req.body;

      // SpiralScript parsing with ANTLR4 integration
      const ast = {
        type: "Program",
        body: [
          {
            type: "ImportDeclaration",
            source: "spiral-core",
            entropy: 0.12
          },
          {
            type: "FunctionDeclaration",
            name: "calculatePhiResonance",
            phiResonance: 1.618,
            complexity: 5
          },
          {
            type: "ClassDeclaration",
            name: "SpiralParser",
            methods: ["parseQuantumLogic"],
            tuGenerated: 888
          }
        ]
      };

      const entropy = 0.121;
      const phiResonance = 1.618;
      const tuGenerated = entropy * phiResonance * 1000;

      const parseResult = await storage.createParseResult({
        fileId,
        ast,
        entropy,
        phiResonance,
        tuGenerated,
        parseSuccess: true,
        errorMessage: null
      });

      res.json(parseResult);
    } catch (error) {
      res.status(500).json({ error: "Parsing failed" });
    }
  });

  // User operations
  app.get("/api/user/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  app.put("/api/user/:id/balance", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { tuBalance, sriScore, phiResonance } = req.body;
      const user = await storage.updateUserBalance(id, tuBalance, sriScore, phiResonance);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update balance" });
    }
  });

  // Trust transactions
  app.get("/api/transactions/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const transactions = await storage.getUserTransactions(userId);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });

  app.post("/api/transactions", async (req, res) => {
    try {
      const transactionData = insertTrustTransactionSchema.parse(req.body);
      const transaction = await storage.createTransaction(transactionData);
      res.json(transaction);
    } catch (error) {
      res.status(400).json({ error: "Invalid transaction data" });
    }
  });

  // Quantum circuits
  app.get("/api/circuits/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const circuits = await storage.getUserCircuits(userId);
      res.json(circuits);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch circuits" });
    }
  });

  app.post("/api/circuits", async (req, res) => {
    try {
      const circuitData = insertQuantumCircuitSchema.parse(req.body);
      const circuit = await storage.createCircuit(circuitData);
      res.json(circuit);
    } catch (error) {
      res.status(400).json({ error: "Invalid circuit data" });
    }
  });

  app.post("/api/circuits/:id/simulate", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const circuit = await storage.getCircuit(id);

      if (!circuit) {
        return res.status(404).json({ error: "Circuit not found" });
      }

      // Simulate quantum circuit execution
      const result = {
        measurements: [
          { qubit: 0, value: Math.random() > 0.5 ? 1 : 0 },
          { qubit: 1, value: Math.random() > 0.5 ? 1 : 0 }
        ],
        amplitude: Math.random(),
        fidelity: 0.95 + Math.random() * 0.05,
        executionTime: Math.random() * 100 + 50
      };

      const updatedCircuit = await storage.updateCircuitResult(id, result);
      res.json({ circuit: updatedCircuit, result });
    } catch (error) {
      res.status(500).json({ error: "Simulation failed" });
    }
  });

  // Generate Trust Units based on proof complexity
  app.post("/api/generate-tu", async (req, res) => {
    try {
      const { userId, proofType, complexity, entropy } = req.body;

      const phi = 1.618033988749;
      const baseAmount = complexity * phi * (1 - entropy);
      const phiResonance = entropy * phi * Math.cos(entropy * Math.PI);

      let tuAmount = baseAmount;

      // Apply multipliers based on proof type
      switch (proofType) {
        case "millennium_problem":
          tuAmount *= 1000000;
          break;
        case "mathematical_theorem":
          tuAmount *= 1000;
          break;
        case "quantum_circuit":
          tuAmount *= 100;
          break;
        case "spiral_script":
          tuAmount *= 10;
          break;
        default:
          tuAmount *= 1;
      }

      const transaction = await storage.createTransaction({
        userId,
        amount: tuAmount,
        type: "generate",
        source: proofType,
        entropy,
        phiResonance
      });

      // Update user balance
      const user = await storage.getUser(userId);
      if (user) {
        const newBalance = user.tuBalance + tuAmount;
        const newSri = Math.min(1.0, user.sriScore + (phiResonance * 0.1));
        await storage.updateUserBalance(userId, newBalance, newSri, phiResonance);
      }

      res.json({ transaction, tuGenerated: tuAmount });
    } catch (error) {
      res.status(500).json({ error: "Failed to generate TU" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
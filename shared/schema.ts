import { pgTable, text, serial, integer, boolean, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  tuBalance: real("tu_balance").notNull().default(1618.382),
  sriScore: real("sri_score").notNull().default(0.618),
  phiResonance: real("phi_resonance").notNull().default(1.618),
});

export const spiralFiles = pgTable("spiral_files", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  name: text("name").notNull(),
  content: text("content").notNull(),
  fileType: text("file_type").notNull(), // 'spiral', 'htsx', 'pdf', 'json'
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const trustTransactions = pgTable("trust_transactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  amount: real("amount").notNull(),
  type: text("type").notNull(), // 'generate', 'transfer', 'proof_validation'
  source: text("source"), // proof source, mathematical theorem, etc.
  entropy: real("entropy"),
  phiResonance: real("phi_resonance"),
  qchainHash: text("qchain_hash"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const quantumCircuits = pgTable("quantum_circuits", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  name: text("name").notNull(),
  gates: jsonb("gates").notNull(), // Array of quantum gates
  qubits: integer("qubits").notNull(),
  entropy: real("entropy"),
  simulationResult: jsonb("simulation_result"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const parseResults = pgTable("parse_results", {
  id: serial("id").primaryKey(),
  fileId: integer("file_id").notNull(),
  ast: jsonb("ast").notNull(),
  entropy: real("entropy").notNull(),
  phiResonance: real("phi_resonance").notNull(),
  tuGenerated: real("tu_generated").notNull(),
  parseSuccess: boolean("parse_success").notNull(),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSpiralFileSchema = createInsertSchema(spiralFiles).pick({
  userId: true,
  name: true,
  content: true,
  fileType: true,
});

export const insertTrustTransactionSchema = createInsertSchema(trustTransactions).pick({
  userId: true,
  amount: true,
  type: true,
  source: true,
  entropy: true,
  phiResonance: true,
});

export const insertQuantumCircuitSchema = createInsertSchema(quantumCircuits).pick({
  userId: true,
  name: true,
  gates: true,
  qubits: true,
});

export const insertParseResultSchema = createInsertSchema(parseResults).pick({
  fileId: true,
  ast: true,
  entropy: true,
  phiResonance: true,
  tuGenerated: true,
  parseSuccess: true,
  errorMessage: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type SpiralFile = typeof spiralFiles.$inferSelect;
export type InsertSpiralFile = z.infer<typeof insertSpiralFileSchema>;

export type TrustTransaction = typeof trustTransactions.$inferSelect;
export type InsertTrustTransaction = z.infer<typeof insertTrustTransactionSchema>;

export type QuantumCircuit = typeof quantumCircuits.$inferSelect;
export type InsertQuantumCircuit = z.infer<typeof insertQuantumCircuitSchema>;

export type ParseResult = typeof parseResults.$inferSelect;
export type InsertParseResult = z.infer<typeof insertParseResultSchema>;

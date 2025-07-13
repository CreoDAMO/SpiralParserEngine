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

export const businessConfig = pgTable("business_config", {
  id: serial("id").primaryKey(),
  salesTaxId: text("sales_tax_id").notNull().default("23-8019835728-2"),
  communicationServicesTaxId: text("communication_services_tax_id").notNull().default("9580198357274"),
  jurisdiction: text("jurisdiction").notNull().default("Miami-Dade County, Florida"),
  salesTaxRate: real("sales_tax_rate").notNull().default(0.07),
  communicationTaxRate: real("communication_tax_rate").notNull().default(0.0525),
  businessType: text("business_type").notNull().default("Autonomous Nanotechnology Platform"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
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

export const revenueStreams = pgTable("revenue_streams", {
  id: serial("id").primaryKey(),
  streamType: text("stream_type").notNull(), // molecular_assembly, satellite_services, etc.
  hourlyRate: real("hourly_rate").notNull(),
  monthlyRevenue: real("monthly_revenue").notNull(),
  profitMargin: real("profit_margin").notNull(),
  growthRate: real("growth_rate").notNull(),
  customerCount: integer("customer_count").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const aiProviders = pgTable("ai_providers", {
  id: serial("id").primaryKey(),
  providerName: text("provider_name").notNull(),
  requestsPerMinute: integer("requests_per_minute").notNull(),
  tokensPerMinute: integer("tokens_per_minute").notNull(),
  costPer1kTokens: real("cost_per_1k_tokens").notNull(),
  currentUsage: integer("current_usage").notNull().default(0),
  resetTime: timestamp("reset_time").notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

export const serviceContracts = pgTable("service_contracts", {
  id: serial("id").primaryKey(),
  customerId: text("customer_id").notNull(),
  serviceType: text("service_type").notNull(),
  tier: text("tier").notNull(),
  hourlyRate: real("hourly_rate").notNull(),
  durationHours: integer("duration_hours").notNull(),
  totalCost: real("total_cost").notNull(),
  revenueGenerated: real("revenue_generated").notNull().default(0),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
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

export const insertRevenueStreamSchema = createInsertSchema(revenueStreams).pick({
  streamType: true,
  hourlyRate: true,
  monthlyRevenue: true,
  profitMargin: true,
  growthRate: true,
  customerCount: true,
});

export const insertServiceContractSchema = createInsertSchema(serviceContracts).pick({
  customerId: true,
  serviceType: true,
  tier: true,
  hourlyRate: true,
  durationHours: true,
  totalCost: true,
});

// Types
export type User = typeof users.$inferSelect;
export type BusinessConfig = typeof businessConfig.$inferSelect;
export type RevenueStream = typeof revenueStreams.$inferSelect;
export type AIProvider = typeof aiProviders.$inferSelect;
export type ServiceContract = typeof serviceContracts.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type SpiralFile = typeof spiralFiles.$inferSelect;
export type InsertSpiralFile = z.infer<typeof insertSpiralFileSchema>;

export type TrustTransaction = typeof trustTransactions.$inferSelect;
export type InsertTrustTransaction = z.infer<typeof insertTrustTransactionSchema>;

export type QuantumCircuit = typeof quantumCircuits.$inferSelect;
export type InsertQuantumCircuit = z.infer<typeof insertQuantumCircuitSchema>;

export type ParseResult = typeof parseResults.$inferSelect;
export type InsertParseResult = z.infer<typeof insertParseResultSchema>;

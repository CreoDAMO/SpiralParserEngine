
import { pgTable, text, serial, integer, boolean, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const molecularStructures = pgTable("molecular_structures", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  structureId: text("structure_id").notNull().unique(),
  name: text("name").notNull(),
  bonds: jsonb("bonds").notNull(), // Array of CovalentBond objects
  atoms: jsonb("atoms").notNull(), // Array of SpiralAtom objects
  phiResonance: real("phi_resonance").notNull(),
  entropy: real("entropy").notNull(),
  assemblyState: text("assembly_state").notNull(), // 'blueprint' | 'assembling' | 'complete' | 'self-repair'
  tuCost: real("tu_cost").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const assemblerNodes = pgTable("assembler_nodes", {
  id: serial("id").primaryKey(),
  nodeId: text("node_id").notNull().unique(),
  userId: integer("user_id").notNull(),
  phiResonance: real("phi_resonance").notNull().default(1.618033988749),
  quantumCoherence: real("quantum_coherence").notNull().default(0.618),
  tuCapacity: real("tu_capacity").notNull().default(1618.382),
  isActive: boolean("is_active").notNull().default(true),
  lastRepair: timestamp("last_repair").defaultNow(),
  assemblyCount: integer("assembly_count").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const repairLogs = pgTable("repair_logs", {
  id: serial("id").primaryKey(),
  structureId: text("structure_id").notNull(),
  assemblerNodeId: text("assembler_node_id").notNull(),
  repairType: text("repair_type").notNull(), // 'self-repair' | 'quantum-fix' | 'phi-enhancement'
  damageMap: jsonb("damage_map").notNull(),
  repairPlan: jsonb("repair_plan").notNull(),
  tuCost: real("tu_cost").notNull(),
  success: boolean("success").notNull(),
  completionTime: real("completion_time").notNull(), // milliseconds
  phiAlignment: real("phi_alignment").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const globalCoordination = pgTable("global_coordination", {
  id: serial("id").primaryKey(),
  coordinationId: text("coordination_id").notNull().unique(),
  assemblyPlanId: text("assembly_plan_id").notNull(),
  participatingNodes: jsonb("participating_nodes").notNull(), // Array of node IDs
  coherenceLevel: real("coherence_level").notNull(),
  syncSignal: text("sync_signal").notNull(),
  networkLatency: real("network_latency").notNull(),
  phiAlignment: real("phi_alignment").notNull().default(1.618033988749),
  status: text("status").notNull().default('active'), // 'active' | 'complete' | 'failed'
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedAt: timestamp("completed_at"),
});

// Insert schemas
export const insertMolecularStructureSchema = createInsertSchema(molecularStructures).pick({
  userId: true,
  structureId: true,
  name: true,
  bonds: true,
  atoms: true,
  phiResonance: true,
  entropy: true,
  assemblyState: true,
  tuCost: true,
});

export const insertAssemblerNodeSchema = createInsertSchema(assemblerNodes).pick({
  nodeId: true,
  userId: true,
  phiResonance: true,
  quantumCoherence: true,
  tuCapacity: true,
  isActive: true,
});

export const insertRepairLogSchema = createInsertSchema(repairLogs).pick({
  structureId: true,
  assemblerNodeId: true,
  repairType: true,
  damageMap: true,
  repairPlan: true,
  tuCost: true,
  success: true,
  completionTime: true,
  phiAlignment: true,
});

export const insertGlobalCoordinationSchema = createInsertSchema(globalCoordination).pick({
  coordinationId: true,
  assemblyPlanId: true,
  participatingNodes: true,
  coherenceLevel: true,
  syncSignal: true,
  networkLatency: true,
  phiAlignment: true,
  status: true,
});

// Types
export type MolecularStructure = typeof molecularStructures.$inferSelect;
export type InsertMolecularStructure = z.infer<typeof insertMolecularStructureSchema>;

export type AssemblerNode = typeof assemblerNodes.$inferSelect;
export type InsertAssemblerNode = z.infer<typeof insertAssemblerNodeSchema>;

export type RepairLog = typeof repairLogs.$inferSelect;
export type InsertRepairLog = z.infer<typeof insertRepairLogSchema>;

export type GlobalCoordination = typeof globalCoordination.$inferSelect;
export type InsertGlobalCoordination = z.infer<typeof insertGlobalCoordinationSchema>;

import rateLimit from "express-rate-limit";
import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";
import { nanoid } from "nanoid";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Vite setup disabled for Next.js compatibility
  console.log('Vite setup skipped - using Next.js instead');
  return null;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // rate limiter: maximum of 100 requests per minute
  const rateLimiter = require("express-rate-limit")({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
  });

  // fall through to index.html if the file doesn't exist
  app.use("*", rateLimiter, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

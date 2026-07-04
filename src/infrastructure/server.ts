import express, { Request, Response } from 'express';
import { portRoutes } from '../presentation/routes/portRoutes.js';

const app = express();
const VERSION = '1.0.0';

app.use(express.json());

// Main base endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Welcome to My Port API (Express + TypeScript + Clean Architecture)',
    version: VERSION,
    environment: process.env.APP_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Port resource routes
app.use('/api/ports', portRoutes);

// Liveness probe endpoint (for Kubernetes)
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

// Readiness probe endpoint (for Kubernetes)
app.get('/ready', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'READY',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

export default app;

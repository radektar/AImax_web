import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

// For development: use a default database URL if not provided
const databaseUrl = process.env.POSTGRES_URL || 'postgresql://localhost:5432/aimax_dev';

// Create client with connection error handling
export const client = postgres(databaseUrl, {
  // For development, don't fail immediately if database is not available
  connect_timeout: 5,
  idle_timeout: 20,
  max_lifetime: 60 * 30,
  onnotice: () => {}, // Suppress notices in development
});

export const db = drizzle(client, { schema });

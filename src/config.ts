import { config } from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');
const result = config({ path: envPath });

if (result.error) {
  throw new Error(`Falha ao carregar .env: ${result.error}`);
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida no .env');
}

export const DB_URL = process.env.DATABASE_URL;
/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DB_PATH = process.env.DATABASE_URL;

export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_PATH,
  },
};
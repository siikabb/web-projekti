// Import and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

// Rest of your application code
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;

console.log(`DB Host: ${dbHost}`);
console.log(`DB User: ${dbUser}`);
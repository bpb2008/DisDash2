import { Pool } from "pg"; 

export const databaseConnection = () => {
  const db = new Pool({
    connectionString: process.env.DATABASE_URL,
  }); 

  return db; 
}
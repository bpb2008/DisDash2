import express from "express";
import dotenv from "dotenv"; 
import cors from "cors"; 
import pg from "pg"; 

dotenv.config(); 

const app = express(); 
app.use(express.json()); 
const port = process.env.PORT; 
const { Pool } = pg; 


app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173", 
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
}); 

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL");
  }
}); 


//API Routes

app.get('/', (req, res) => {
  res.send('Travel Planner API');
});

app.post("/trips", async (req, res) => {
  const {user_id, name, start_date, end_date} = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO trips (user_id, name, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, name, start_date, end_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trip" });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});
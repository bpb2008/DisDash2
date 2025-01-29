import express from "express";
import { db } from "../db-connection";

const router = express.Router();

//Create Trip
router.post("/trips", async (req, res) => {
  const { user_id, name, start_date, end_date } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO trips (user_id, name, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, name, start_date, end_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trip" });
  }
});

//Get Trips
router.get("/trips", async (req, res) => {
  const { user_id } = req.query;
  try {
    const result = await db.query("SELECT * FROM trips WHERE user_id = $1", [
      user_id,
    ]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

//Edit or Update Trip
router.put("/trips/:id", async (req, res) => {
  const { id } = req.params;
  const { name, start_date, end_date } = req.body;
  try {
    const result = await db.query(
      "UPDATE trips SET name = $1, start_date = $2, end_date = $3 WHERE id = $4 RETURNING *",
      [name, start_date, end_date, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Trip not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update trip" });
  }
});

//Delete Trip
router.delete("/trips/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM trips WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Trip not found" });
    }
    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete trip" });
  }
});

export default router;

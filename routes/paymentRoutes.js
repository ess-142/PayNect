import express from "express";
import db from "../config/db.js";

const router = express.Router();

// POST: Make a payment
router.post("/", (req, res) => {
  const { payer, amount } = req.body;

  if (!payer || !amount) {
    return res.status(400).json({ message: "Missing payer or amount" });
  }

  const query = "INSERT INTO payments (payer, amount) VALUES (?, ?)";
  db.query(query, [payer, amount], (err) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "✅ Payment recorded successfully!" });
  });
});

// GET: Retrieve all payments
router.get("/", (req, res) => {
  const query = "SELECT * FROM payments ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

export default router;

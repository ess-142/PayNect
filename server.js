// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import paymentRoutes from "./routes/paymentRoutes.js"; // import routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from public/
app.use(express.static(path.join(process.cwd(), "public")));

// -----------------
// Serve HTML Pages
// -----------------
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "pages", "dashboard.html"));
});

app.get("/transactions", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "pages", "transactions.html"));
});

app.get("/settings", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "pages", "settings.html"));
});

app.get("/payments", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "pages", "payments.html"));
});

// -----------------
// API Routes
// -----------------
app.use("/api/payments", paymentRoutes); // use modular routes

// -----------------
// Start server
// -----------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todos");

const app = express();


app.use(
  cors({
    origin: [
      "https://align-together-frontend-2gwb.vercel.app",  
      "https://align-together-frontend-3dku.vercel.app",  
      "http://localhost:5173" 
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err));


app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);


app.get("/", (req, res) => {
  res.status(200).json({ message: "API running" });
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/* ✅ Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

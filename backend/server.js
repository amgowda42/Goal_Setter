// imports of Core requires
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;
const connectDB = require("./config/db.js");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");

connectDB();
const app = express();

// CORS options and config
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// Handling preflight
app.options(/.*/, cors(corsOptions));

// Body parsers and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/goals", require("./routes/goal.routes"));
app.use("/api/users", require("./routes/user.routes"));

// Error handler 
app.use(errorHandler);

// server listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

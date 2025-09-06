// 1. Core requires
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

// 2. CORS first (handles preflight before anything else)
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// 3. Handle preflight (important for Express 5)
app.options(/.*/, cors(corsOptions));

// 4. Body parsers and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 5. Health check (before routes, so it's always fast)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// 6. Routes
app.use("/api/goals", require("./routes/goal.routes"));
app.use("/api/users", require("./routes/user.routes"));

// 7. Error handler should be last
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

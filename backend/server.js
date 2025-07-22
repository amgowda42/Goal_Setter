const express = require("express");
const port = process.env.PORT || 8000;
const connectDB = require("./config/db.js");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware.js");

require("dotenv").config();
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goal.routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

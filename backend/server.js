const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;
const connectDB = require("./config/db.js");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const corsOptions = require("./config/corsOptions.js");
const cors = require("cors");

connectDB();
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goal.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

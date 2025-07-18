const express = require("express");
const port = process.env.PORT || 8000;

require("dotenv").config();
const app = express();

app.use("/", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

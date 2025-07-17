const express = require("express");
const port = process.env.PORT || 8000;

require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.status(200).json({
    message: "its Get Request",
  });
});

router.post("/post", (req, res) => {
  res.status(200).json({
    message: "its Post Request",
  });
});

router.post("/post", (req, res) => {
  res.status(201).json({
    message: "its Post Request",
  });
});

router.put("/post/:id", (req, res) => {
  res.status(200).json({
    message: `its Put Request ${req.params.id}`,
  });
});

router.delete("/post/:id", (req, res) => {
  res.status(200).json({
    message: `its Delete Request ${req.params.id}`,
  });
});

module.exports = router;

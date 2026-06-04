const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Version 1"
  });
});

app.listen(3002, () => {
  console.log("Server running");
});

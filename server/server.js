const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("api");
});

app.listen(5000, () => {
  console.log("server is up");
});

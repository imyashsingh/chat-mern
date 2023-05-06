const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");

const chats = require("./data/data");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.json(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((ele) => ele._id === req.params.id);
  res.json(chat);
});

app.listen(PORT, () => {
  console.log("server is up");
});

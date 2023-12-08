const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 1234;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Node Service");
});

app.post("/", (req, res) => {
  res.send(`Welcome ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});

app.delete(PORT, () => {
  console.log("Delete: ", PORT);
});

app.put(PORT, () => {
  console.log("Listening on Port: ", PORT);
});

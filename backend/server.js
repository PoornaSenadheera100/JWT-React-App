const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 8070;

const sampleData = [
  { name: "Poorna", age: 22 },
  { name: "Sanuthi", age: 21 },
];

app.get("/users", (req, res) => {
  res.json(sampleData);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});

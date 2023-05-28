const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 8070;

const sampleData = [
  { name: "Poorna", age: 22 },
  { name: "Sanuthi", age: 21 },
];

app.get("/users", (req, res) => {
  if (req.headers.authorization === `Bearer ${process.env.authToken}`) {
    res.status(200).json(sampleData);
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});

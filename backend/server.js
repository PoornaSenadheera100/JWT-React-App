const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

// app.use();

const PORT = 8070;

const sampleData = [
  { name: "Poorna", age: 22 },
  { name: "Sanuthi", age: 21 },
  { name: "Sathira", age: 21 },
  { name: "Hilarina", age: 20 },
];

app.get("/users", (req, res) => {
  if (req.headers.authorization === `Bearer ${process.env.authToken}`) {
    res.status(200).json(sampleData);
  } else {
    res.status(401).send("Unauthorized");
    // console.log(req.headers);
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});

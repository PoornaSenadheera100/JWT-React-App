const express = require("express");
const app = express();

const PORT = 8070;

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});

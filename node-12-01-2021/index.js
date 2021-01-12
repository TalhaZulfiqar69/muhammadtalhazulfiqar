const express = require("express");
const app = express();
require("dotenv").config();
app.listen(process.env.SERVER_PORT || 3000, (req, res) =>
  console.log("Server is listened on", process.env.SERVER_PORT || 3000)
);

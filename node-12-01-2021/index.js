const express = require("express");
const app = express();
require("./OsInformation");

app.listen(process.env.SERVER_PORT || 3000, (req, res) => {
  console.log("Server is listened on port", process.env.SERVER_PORT || 3000);
});

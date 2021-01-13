const fs = require("fs");
const os = require("os");
require("dotenv").config();

let cup = os.cpus();
let platform = os.platform();
let architecture = os.arch();

let OsInfo = {
  cup,
  platform,
  architecture,
};
const OsInformation = `OS information:
${JSON.stringify(OsInfo)}.`;

fs.writeFile(process.env.PATH_WITH_FILE_NAME, OsInformation, (err) => {
  if (err) throw err;
  console.log("Task completed");
});

module.exports = fs;

const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./routers');
app.listen(process.env.SERVER_PORT || 6000 , (req, res) =>{
    console.log("server is listened at the port", process.env.SERVER_PORT || 6000);
});

// app.get('/', function (req, res) {
    // res.send('hello world')
    // console.log("message from index route");
//   })

  app.use('/', router);

const { request, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./db/Users");
require('./db/config')
const app = express();

app.post("/register", ( request, response)=>{
    response.send("Api in Progress...")
})

app.listen(5000);
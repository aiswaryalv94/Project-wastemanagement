const express = require("express")
const app=express()
const bodyParser = require('body-parser')
const db= require('./Database')
const Router =require('../Router')
app.use(bodyParser.json())
app.use('/',Router)
const PORT = 3022
app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT} `);
    
}) 
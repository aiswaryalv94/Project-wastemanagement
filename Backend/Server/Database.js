const mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/wastemanagementproject")

var db = mongoose.connection
db.on('error',()=>{
    console.log(error);
    
})
db.once('open',()=>{
    console.log("Database connected");
    
})
module.exports = db
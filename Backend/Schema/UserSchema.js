const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
     name: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true},
        password:{ type: String, required: true},
        address: { type: String, required: true},
        userType: { type: String, required: true},
        wasteType:{ type: String, required: true},
        frequency: { type: String, required: true},
        checkbox:{ type: Boolean, required: true},
})

module.exports=mongoose.model('User',userSchema)
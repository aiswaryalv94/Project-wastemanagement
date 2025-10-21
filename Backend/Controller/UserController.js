const userSchema = require('../Schema/UserSchema')

const UserRegistration= (req,res) =>{
    let user= new userSchema({
         name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        address: req.body.address,
        userType: req.body.userType,
        wasteType: req.body.wasteType,
        frequency: req.body.frequency,
        checkbox: req.body.checkbox,
    }) 
    user.save()
    .then((result)=>{
        res.json({
             message: "User Registration Succesfully",
             data: result
        })
        .catch((error)=>{
            console.log(error);
            
        })
    })
 
}
module.exports={UserRegistration}
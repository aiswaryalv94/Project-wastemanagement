const userSchema = require('../Schema/UserSchema')

// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     } 
// })

// const uploads = multer({storage:storage}).single("image")
const UserRegistration = (req, res) => {
    let user = new userSchema({
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
        .then((result) => {
            res.json({
                message: "User Registration Succesfully",
                data: result
            })
                .catch((error) => {
                    res.json({
                        message: "Error in registering User",
                        error: error
                    })

                })
        })

}
const viewUsers = ((req, res) => {
    userSchema.find()
        .then((result) => {
            res.json({
                message: "View all users",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "error in view users",
                error: error
            })
        })
})
const ViewOneUser = ((req, res) => {
    userSchema.findById({ _id: req.params.id })
        .then((result) => {
            res.json({
                message: "Viewed one user successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in view user",
                error: error
            })
        })
})

const deleteuserById = ((req, res) => {
    Blogschema.findByIdAndDelete({ _id: req.params.id })
        .then((result) => {
            res.json({
                message: "Deleted user successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in delete",
                data: error
            })
        })
})
const updateuserById = ((req, res) => {
    Blogschema.findByIdAndUpdate({ _id: req.params.id }, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        address: req.body.address,
        userType: req.body.userType,
        wasteType: req.body.wasteType,
        frequency: req.body.frequency,
        checkbox: req.body.checkbox
    }, { new: true })
        .then((result) => {
            res.json({
                message: "Userdetails updated successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in updating user details",
                data: error
            })
        })
})
module.exports = { UserRegistration, viewUsers, ViewOneUser, deleteuserById, updateuserById }
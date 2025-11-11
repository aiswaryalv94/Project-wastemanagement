const userSchema = require('../Schema/UserSchema')

const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})
const uploaduser = multer({ storage: storage }).single("image")

const UserRegistration = (req, res) => {
     userSchema.findOne({ email: req.body.email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email already exists. Please use a different email.",
        });
      }else {
    let user = new userSchema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image:req.file,
        password: req.body.password,
        address: req.body.address,
        userType: req.body.userType,
    })
   user.save()
        .then((result) => {
            res.status(201).json({
                success:true,
                message: "User Registration Succesfully",
                data: result
            })
        })
                .catch((error) => {
                    res.status(500).json({
                        message: "Error in registering User",
                        error: error.message
                    })

              
        })
    
    }
})
 .catch((error) => {
    res.status(500).json({
      success: false,
      message: "Error checking existing email.",
      error: error.message,
    });
  });
}

const UserLogin = (req, res) => {
    const { email, password } = req.body;
    userSchema.findOne({ email, password })
        .then((result) => {
            if (!result) {
                res.json({
                    Message: "Invalid Email or Password"
                });
            } else {
                if (result.isActive == true) {
                    res.json({
                        Message: "User Login Successfully",
                        data: result
                    });
                }
            }

        })
        .catch((error) => {
            console.log(error);

        })
}

const ForgotPassword = (req, res) => {
    userSchema.findOneAndUpdate({ email: req.body.email }, { password: req.body.password }, { new: true })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Spotted User",
                    data: result,
                });
            } else {
                res.status(401).json({ message: "Invalid Userid" });
            }
        })
        .catch((error) => {
            console.log(error);
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
    userSchema.findByIdAndDelete({ _id: req.params.id })
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
    userSchema.findByIdAndUpdate({ _id: req.params.id }, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image:req.file,
        password: req.body.password,
        address: req.body.address,
        userType: req.body.userType,
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
module.exports = { UserRegistration, UserLogin, ForgotPassword, viewUsers, ViewOneUser, deleteuserById, updateuserById, uploaduser }
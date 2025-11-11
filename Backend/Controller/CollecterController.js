const collecterSchema = require('../Schema/CollecterSchema')

const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const uploadcollecter = multer({ storage: storage }).single("image")

const CollecterRegistration = (req, res) => {
collecterSchema.findOne({ email: req.body.email })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered. Please use a different email.",
      });
    }

    const collecter = new collecterSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image:req.file,
      location: req.body.location,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    });

    collecter.save()
      .then((result) => {
        res.status(201).json({
          success: true,
          message: "Waste collecter Registration Successfully Completed",
          data: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Error in registering Waste collecter",
          error: error.message,
        });
      });
  })
  .catch((error) => {
    res.status(500).json({
      success: false,
      message: "Error checking existing email.",
      error: error.message,
    });
  });
}

const CollecterLogin = (req, res) => {
    const { email, password } = req.body
    collecterSchema.findOne({ email, password })
        .then((result) => {
            if (!result) {
                res.json({
                    Message: "Invalid Email or Password"
                });
            } else {
                if (result.isActive == true) {
                    res.json({
                        Message: "Collecter Login Successfully",
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
    collecterSchema.findOneAndUpdate({ email: req.body.email }, { password: req.body.password }, { new: true })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Spotted Wastecollecter",
                    data: result,
                });
            } else {
                res.status(401).json({ message: "Invalid id" });
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

const viewCollecters = ((req, res) => {
    collecterSchema.find()
        .then((result) => {
            res.json({
                message: "View all Collecters",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in view Collecters",
                error: error
            })
        })
})
const ViewOneCollecter = ((req, res) => {
    collecterSchema.findById({ _id: req.params.id })
        .then((result) => {
            res.json({
                message: "Viewed One Collecters Successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in View Collecters",
                error: error
            })
        })
})

const DeactivateCollecter = (req, res) => {
    collecterSchema.findByIdAndUpdate(req.params.id, { isActive: false })
        .then((result) => {
            res.json({
                message: "Collecter deactivated",
                data: result
            })
        })
        .catch((error) => {
            console.log(error);
        })
}
const updatecollecterById = ((req, res) => {
    collecterSchema.findByIdAndUpdate({ _id: req.params.id }, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image:req.file,
        location:req.body.location,
        password: req.body.password,
        confirmpassword:req.body.confirmpassword
    }, { new: true })
        .then((result) => {
            res.json({
                message: "Collecter Details Updated Successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in updating Collecter details",
                data: error
            })
        })
})
module.exports = { CollecterRegistration, CollecterLogin, ForgotPassword, viewCollecters, ViewOneCollecter, DeactivateCollecter, updatecollecterById,
  uploadcollecter
}
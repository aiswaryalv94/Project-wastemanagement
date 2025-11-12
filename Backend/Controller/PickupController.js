const pickupSchema = require('../Schema/PickupSchema');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadPickup = multer({ storage: storage }).single("image");


const addPickup = (req, res) => {
    const newPickup = new pickupSchema({
        userId: req.body.userId,
        wasteType: req.body.wasteType,
        frequency: req.body.frequency,
        description: req.body.description,
        image: req.file,
        paymentStatus: req.body.paymentStatus
    });

    newPickup.save()
        .then((result) => {
            res.status(201).json({
                message: "Pickup request submitted successfully!",
                data: result
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error saving pickup request.",
                error: error.message
            });
        });
};

const viewByUser = (req, res) => {
    const { userId } = req.body;

    pickupSchema.find({ userId })
        .then((result) => {
            res.status(200).json({
                message: "User pickup requests fetched successfully.",
                data: result
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error fetching user pickup requests.",
                error: error.message
            });
        });
};

const viewAll = (req, res) => {
    pickupSchema.find()
        .then((result) => {
            res.status(200).json({
                message: "All pickup requests fetched successfully.",
                data: result
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error fetching all pickups.",
                error: error.message
            });
        });
};

const updatePayment = (req, res) => {
      pickupSchema.findByIdAndUpdate({ _id: req.params.id }, { paymentStatus: req.body.paymentStatus }, { new: true })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Payment status updated successfully.",
                    data: result
                });
            } else {
                res.status(404).json({
                    message: "Pickup request not found."
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error updating payment status.",
                error: error
            });
        });
};

module.exports = { addPickup, viewByUser, viewAll, updatePayment, uploadPickup };

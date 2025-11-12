const contactSchema = require('../Schema/ContactSchema')

const addEnquiry = ((req, res) => {
    let enquiry = contactSchema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        textarea: req.body.textarea,
    })
    enquiry.save()
        .then((result) => {
            res.json({
                message: "Your enquiry added successfully",
                data: result
            })
        })
        .catch((error) => {
            res.json({
                message: "Error in adding enquiry",
                error: error
            })
        })
})

const viewAllEnquiry = ((req,res)=>{
    contactSchema.find()
    
    .then((result)=>{
        res.json({
            message:"View all Enquiries",
            data:result
        })
    })
    .catch((error)=>{
        res.json({
            message:"Error in view Enquiries",
            error:error
        })
    })
})

module.exports = {addEnquiry, viewAllEnquiry}
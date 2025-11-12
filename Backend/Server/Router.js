const express = require('express')
router = express.Router()

const UserController = require('../Controller/UserController')
const CollecterController = require('../Controller/CollecterController')
const AdminController = require('../Controller/AdminController')
const ContactController = require('../Controller/ContactController')
const PickupController = require('../Controller/PickupController')
//  user
router.post('/userregistration',UserController.uploaduser,UserController.UserRegistration)
router.post('/userlogin',UserController.UserLogin)
router.post('/forgotpassword',UserController.ForgotPassword)
router.post('/userviewall',UserController.viewUsers)
router.get('/userviewone/:id',UserController.ViewOneUser)
router.post('/userdelete/:id',UserController.deleteuserById)
router.post('/userupdate/:id',UserController.uploaduser, UserController.updateuserById)


// collecter
router.post('/collecterreg',CollecterController.uploadcollecter, CollecterController.CollecterRegistration)
router.post('/collecterlogin',CollecterController.CollecterLogin)
router.post('/forgotcollecterpass', CollecterController.ForgotPassword)
router.post('/collecterviewall',CollecterController.viewCollecters)
router.get('/collecterviewone/:id',CollecterController.ViewOneCollecter)
router.post('/collecterdeactivate/:id',CollecterController.DeactivateCollecter)
router.post('/ActivateCollecter/:id',CollecterController.ActivateCollecter)
router.post('/collecterupdate/:id',CollecterController.uploadcollecter, CollecterController.updatecollecterById)

// admin
router.post('/adminlogin', AdminController.AdminLogin);

// contactpage
router.post('/createenquiry',ContactController.addEnquiry)
router.post('/viewallenquiries',ContactController.viewAllEnquiry)

// pickup page
router.post('/addpickup', PickupController.uploadPickup, PickupController.addPickup);
router.post('viewbyuserpickup/:id', PickupController.viewByUser);
router.post('viewallpickup', PickupController.viewAll);
router.post('updatepaymentpickup/:id', PickupController.updatePayment);

module.exports = router
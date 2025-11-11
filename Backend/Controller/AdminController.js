const AdminLogin = (req, res) => {
    const { email, password } = req.body;

    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        res.status(200).json({
            Message: "Admin Login Successfully",
        })
    }
     else {
        res.status(200).json({
            Message: "Invalid Email or Password",
        });
    }
};


module.exports = { AdminLogin }
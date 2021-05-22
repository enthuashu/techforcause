const express = require('express');
const router = express.Router();
const User = require("../model/userSchema")
const Contact = require("../model/contact")
const Volunteer = require("../model/volunteer")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require("../middleware/authenticate")



router.get('/', (req, res) => {
    res.send("Hello World from the Server");
})




router.post('/register', async (req, res) => {
    const { name, phone, email, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please Fill the Details Properly" });
    }
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(350).json({ error: "Email Already Exist" })
        } else if (password != cpassword) {
            return res.status(300).json({ message: "Password are not matching" })
        } else {

            const user = new User({ name, email, phone, password, cpassword });

            await user.save();
            res.status(201).json({ message: "User Registerd Successfully" });

        }

    } catch (error) {
        console.log(error)
    }
})

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json("Empty fields")
        }
        const userlogin = await User.findOne({ email })
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password)
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials" })
            } else {
                token = await userlogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                res.status(201).json({ message: "User Signedin Successfully" })
            }
        } else {
            res.json({ error: "Invalid details" })
        }

    } catch (error) {
        console.log(error)
    }
})


router.post('/contact', async (req, res) => {
    const { name, email, phone, subject } = req.body;

    if (!name || !email || !phone || !subject) {
        return res.status(421).json({ error: "Please Fill the Details Properly" });
    }
    try {


        const contact = new Contact({ name, email, phone, subject });

        await contact.save();
        return res.status(201).json({ message: "Contact Submitted Successfully" });



    } catch (error) {
        return res.status(422).json({ error: "Please Fill the Details Properly" });
        console.log(error)
    }
})


router.post('/addresource', async (req, res) => {
    const { name, email, phone, resource, message } = req.body;

    if (!resource || !message) {
        return res.status(421).json({ error: "Please Enter Resources before Submitting!" });
    }
    try {


        const contact = new Volunteer({ name, email, phone, resource, message });

        await contact.save();
        return res.status(201).json({ message: "Thankyou! Your Resource has been Submitted Successfully!" });



    } catch (error) {
        return res.status(422).json({ error: "Please Fill the Details Properly" });
        console.log(error)
    }
})



router.get('/checkbed', authenticate, (req, res) => {
    try {

        res.send(req.rootUser)
    } catch (error) {
        console.log(error)
    }
})


router.get('/loggout', (req, res) => {
    try {


        res.clearCookie('jwtoken', { path: "/" })
        res.status(200).send("loggedout")
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;
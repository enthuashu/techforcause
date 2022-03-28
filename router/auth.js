const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const Contact = require("../model/contact");
const Volunteer = require("../model/volunteer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

router.post("/api/register", async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }
    const user = new User({ name, email, phone, password, cpassword });

    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User Registerd Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

router.post("/api/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    const userlogin = await User.findOne({ email });
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid password" });
      } else {
        token = await userlogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res
          .status(201)
          .json({ success: true, message: "User Signedin Successfully" });
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, subject } = req.body;
  console.log("Hello");
  if (!name || !email || !phone || !subject) {
    return res.status(427).json({ error: "Please Fill the Details Properly" });
  }
  try {
    const contact = new Contact({ name, email, phone, subject });

    await contact.save();
    return res.status(201).json({ message: "Contact Submitted Successfully" });
  } catch (error) {
    return res.status(422).json({ error: "Please Fill the Details Properly" });
    console.log(error);
  }
});

router.post("/addresource", async (req, res) => {
  const { name, email, phone, resource, message } = req.body;

  if (!resource || !message) {
    return res
      .status(421)
      .json({ error: "Please Enter Resources before Submitting!" });
  }
  try {
    const contact = new Volunteer({ name, email, phone, resource, message });

    await contact.save();
    return res.status(201).json({
      message: "Thankyou! Your Resource has been Submitted Successfully!",
    });
  } catch (error) {
    return res.status(422).json({ error: "Please Fill the Details Properly" });
    console.log(error);
  }
});

router.get("/checkbed", authenticate, (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (error) {
    console.log(error);
  }
});

router.get("/loggout", (req, res) => {
  try {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("loggedout");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

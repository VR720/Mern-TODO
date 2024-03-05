// import express from "express";
const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// sign up

// router.post("/register", async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
//     const hashpassword = bcrypt.hashSync(password, 10);
//     const user = new User({ email, username, password: hashpassword });
//     await user.save().then(() => {
//       res.status(200).json({ user: user });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: " User Already Exists " });
//   }
// });

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 1);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => {
      res.status(200).json({ message: " Sign Up succesful " });
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: " User Already exist " });
  }
});

// Sign In

// router.post("/signin", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       res.status(400).json({ message: "Please Sign Up First" });
//     }

//     const isPassswordCorrect = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );
//     if (!isPassswordCorrect) {
//       res.status(400).json({ message: "Password is wrong" });
//     }

//     const { password, ...others } = user._doc;
//     res.status(200).json({ others });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: " User Already Exists " });
//   }
// });

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ message: "Please Sign Up First" });
    }

    const isPassswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPassswordCorrect) {
      res.status(200).json({ message: "Password is wrong" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: " User Already Exists " });
  }
});

module.exports = router;

const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

userRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    bcrypt.hash(password, 7, async (err, hash) => {
      const user = new UserModel({ email, password: hash });
      await user.save();
      res.status(200).json({ msg: "The new user has been Registered" });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          var token = jwt.sign({ name: "masai" }, process.env.JWT_KEY);
          res.status(200).json({ msg: "Login Successfull!", token });
        }
      });
    } else {
      res.status(400).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({ error });
  }
});

module.exports = { userRouter };

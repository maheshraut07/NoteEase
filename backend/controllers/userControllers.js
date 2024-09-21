const asyncHandler = require("express-async-handler");
const User = require("../models/User.models");
const generateToken = require("../utils/generateToken");

// Get this data from user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  try {
    // if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists (Regsiter)" });
    }

    const user = await User.create({
      name,
      email,
      password,
      pic,
    });

    // Generate Token
    const token = generateToken(user._id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        isAdmin: user.isAdmin,
        token: token,
      });
    } else {
      res.status(400).json({ message: message });
    }
  } catch (error) {
    console.log("Register error: " + error);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // if user exists
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      // Handle the case where the user is not found
      return res.status(400).json("User not found");
    }

    // Generate Token
    const token = generateToken(user._id);

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        isAdmin: user.isAdmin,
        token: token,
      });
    } else {
      res.status(400).json({ message: "Invalid Email or password" });
    }
  } catch (error) {
    console.log("Login error: " + error);
  }
});

module.exports = { registerUser, loginUser };

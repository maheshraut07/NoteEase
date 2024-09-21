const jwt = require("jsonwebtoken");
const User = require("../models/User.models");
const asyncHandler = require("express-async-handler");


const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Decoded Token:", decoded);

      // Check if the user exists
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("Not authorized, user not found");
      }

      req.user = await user;
      // req.user = await User.findById(decoded.id)

      next();
    } catch (error) {
      console.log("Token error: " + error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };

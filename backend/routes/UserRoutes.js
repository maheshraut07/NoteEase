const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');

const router = express.Router();

// Register user route
router.route('/').post(registerUser)
// Login user route
router.route('/login').post(loginUser);

module.exports = router;
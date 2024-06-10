const express = require('express');
const { signup, signin, forgotPassword, resetPassword } = require('../controllers/authController');
const User = require('../models/User'); // Import the User model

const router = express.Router();

// User signup, signin, forgot password, and reset password routes
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

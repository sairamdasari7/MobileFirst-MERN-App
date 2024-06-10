const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Ensure the correct path to the User model
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    seedUsers();
  })
  .catch(err => console.log('MongoDB connection error:', err));

const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users before seeding
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const users = [
      { username: 'ankit123', email: 'ankit@example.com', password: hashedPassword },
      { username: 'ramesh_kumar', email: 'ramesh.kumar@example.com', password: hashedPassword },
      { username: 'priya_singh', email: 'priya.singh@example.com', password: hashedPassword },
      { username: 'saurabh_mehta', email: 'saurabh.mehta@example.com', password: hashedPassword },
      { username: 'kavita_rai', email: 'kavita.rai@example.com', password: hashedPassword },
      { username: 'rohit_verma', email: 'rohit.verma@example.com', password: hashedPassword },
      { username: 'sneha_patil', email: 'sneha.patil@example.com', password: hashedPassword },
      { username: 'manish_sharma', email: 'manish.sharma@example.com', password: hashedPassword },
      { username: 'deepa_nair', email: 'deepa.nair@example.com', password: hashedPassword },
      { username: 'vijay_yadav', email: 'vijay.yadav@example.com', password: hashedPassword },
    ];

    await User.insertMany(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    mongoose.connection.close();
  }
};

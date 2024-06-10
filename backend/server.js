const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User'); // Import the User model

const app = express();

app.use(express.json());

// Logging the MongoDB URI for debugging
console.log('MongoDB URI:', config.mongoURI);

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to fetch all users
app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.use('/api/auth', authRoutes);

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

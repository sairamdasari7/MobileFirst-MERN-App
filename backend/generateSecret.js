const fs = require('fs');
const crypto = require('crypto');

// Generate a random string of bytes
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Write the secret key to a .env file
fs.writeFileSync('.env', `JWT_SECRET=${jwtSecret}`);

console.log('JWT secret key generated and saved to .env file.');

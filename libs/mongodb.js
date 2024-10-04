// const mongoose = require("mongoose");
// require("dotenv").config();

// // Connect to MongoDB using the environment variable
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
}

// Connect to MongoDB without deprecated options
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
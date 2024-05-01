// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables from .env

const memoriesRouter = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas using the URI from .env
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

// Use JSON middleware
app.use(express.json());

// Set up routes
app.use('/', memoriesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


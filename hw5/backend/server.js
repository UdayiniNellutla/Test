require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Enhanced Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Adjust based on your frontend URL
  credentials: true
}));
app.use(express.json({ limit: '10mb' })); // Increased payload limit for file uploads
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build (if deploying together)
app.use(express.static(path.join(__dirname, '../client/build')));

// MongoDB Connection with enhanced options
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB Atlas");
    return client.db("contactDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

// Initialize DB connection
let db;
connectDB().then(database => {
  db = database;
  
  // Enhanced Contact Form Route with validation
  app.post('/api/contact', async (req, res) => {
    try {
      // Basic validation
      if (!req.body.name || !req.body.email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      // Sanitize data (basic example)
      const contactData = {
        name: req.body.name.trim(),
        email: req.body.email.trim().toLowerCase(),
        message: req.body.message?.trim() || '',
        fileName: req.body.fileName || null,
        createdAt: new Date()
      };

      const collection = db.collection('contacts');
      const result = await collection.insertOne(contactData);
      
      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        id: result.insertedId
      });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      res.status(500).json({ 
        success: false,
        error: 'Failed to submit contact form',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
  });

  // Serve React app (for production)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`MongoDB connected to database: ${db.databaseName}`);
  });
}).catch(err => {
  console.error('Failed to initialize application:', err);
  process.exit(1);
});

// Enhanced shutdown handling
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error during shutdown:', err);
    process.exit(1);
  }
});
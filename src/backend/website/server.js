const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
//const bcrypt = require('bcrypt'); leave here for some better days
const jwt = require('jsonwebtoken');

//DB OBJECTS
const Tender = require('./db_schemas/Tender');
const Worker = require('./db_schemas/Worker');
const Person = require('./db_schemas/Person');

// Initialize the app
const app = express();
const PORT = 5000;
const SECRET_KEY = 'secretik'
const PROD = true;

app.use(cors({
  origin: 'https://127.0.0.1', // Only allow this domain to access the API
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// API routes to get infos

app.get('/apischka/tenders', async (req, res) => {
  try {
    const tenderData = await Tender.find(); // Get all the docs
    res.json(tenderData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tender data' });
  }
});

app.get('/apischka/shame', async (req, res) => {
  try {
    const personData = await Worker.find(); // Get all the docs
    res.json(personData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch people data' });
  }
});

app.post('/apischka/login', async (req, res) => {
  try {
    const {email, password } = req.body;
    const workerData = await Worker.findOne({ email });

    if (!workerData) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (password != workerData.password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: workerData._id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
});
///NOT FINISHED YET
app.put('/apischka/tenderschange/:tender_id', async (req, res) => {
  try {
    const { tender_id } = req.params;
    const updatedTender = await Tender.findOneAndUpdate({tender_id: tender_id}, 
                                                        {$set: { ["status"]: "Ok" }}, 
                                                        { new: true });

    if (!updatedTender) {
      console.log('Item not found');
      return res.status(404).json({ message: 'Tender not found' });
    }
    res.json(updatedTender);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Tender' });
  }
});


if (PROD === true) {
  app.use(express.static(path.join(__dirname, '../../../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const port = 3000;

// Import routes and data
const characters = require('./data/characters');

// Serve static files (images)
app.use('/images', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Breaking Bad API!');
});

// Routes for character data
app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.status(404).send('Character not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Breaking Bad API listening at http://localhost:${port}`);
});
const express = require('express');
const app = express();

// Import character data
const characters = require('../data/characters');

// Middleware to parse JSON (if needed)
app.use(express.json());

// Get all characters
app.get('/characters', (req, res) => {
  res.json(characters);
});

// Get character by ID
app.get('/characters/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.status(404).send('Character not found');
  }
});

// Export Express app to handle the API route in Vercel
module.exports = (req, res) => {
  app(req, res); // Vercel expects a function that takes req, res
};
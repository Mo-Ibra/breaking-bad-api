const express = require('express');
const app = express();

// Import routes and data
const characters = require('../data/characters');

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

module.exports = app;
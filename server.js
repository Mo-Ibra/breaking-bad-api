const express = require('express');
const app = express();
const port = 3000;

const characters = require('./data/characters');

app.use(express.json());
app.use('/images', express.static('public')); // Static file serving

// Get all characters
app.get('/api/characters', (req, res) => {
  res.json(characters);
});

// Get character by ID
app.get('/api/characters/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.status(404).send('Character not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');

const menu = require('./data/menu.json');
const sections = require('./data/sections.json');
const items = require('./data/items.json');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/api/menu', (req, res) => {
  setTimeout(() => {
    res.json(menu);
  }, 300);
});

app.get('/api/sections', (req, res) => {
  setTimeout(() => {
    res.json(sections);
  }, 300);
});

app.get('/api/items', (req, res) => {
  setTimeout(() => {
    res.json(items);
  }, 800);
});

app.listen(3001, () => {
  console.log('API server running on localhost:3001');
});

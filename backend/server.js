// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Backend running on port ${port}`);
  });
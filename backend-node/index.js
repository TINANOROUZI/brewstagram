const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve pictures folder
app.use('/pictures', express.static(path.join(__dirname, '..', 'pictures')));

// Simple auth mock
app.post('/api/auth/login', (req, res) => {
  const { username } = req.body || {};
  if (!username) return res.status(400).json({ error: 'username required' });
  res.json({ token: 'fake-jwt-token', user: { username } });
});

// Posts API (node-side sample). If Java backend is running, you can proxy instead.
const samplePosts = [
  { id: 1, author: 'alice', imageUrl: '/pictures/sample1.jpg', caption: 'Great brew!' },
  { id: 2, author: 'bob', imageUrl: '/pictures/sample2.jpg', caption: 'Tasty.' }
];

app.get('/api/posts', (req, res) => {
  res.json(samplePosts);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Node backend listening on http://localhost:${PORT}`));

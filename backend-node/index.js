const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve pictures folder
app.use('/pictures', express.static(path.join(__dirname, '..', 'pictures')));

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Brewstagram Node backend is running' });
});

// Simple auth mock
app.post('/api/auth/login', (req, res) => {
  const { username } = req.body || {};
  if (!username) return res.status(400).json({ error: 'username required' });
  res.json({ token: 'fake-jwt-token', user: { username } });
});

// Posts API (node-side sample). If Java backend is running, you can proxy instead.
const samplePosts = [
  { id: 1, author: 'alice', imageUrl: '/pictures/cappuccino1.png', caption: 'Great brew!' },
  { id: 2, author: 'bob', imageUrl: '/pictures/cappuccino2.png', caption: 'Tasty.' }
];

app.get('/api/posts', (req, res) => {
  res.json(samplePosts);
});

// Serve frontend build if present
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');
const indexHtmlPath = path.join(frontendDistPath, 'index.html');

if (require('fs').existsSync(indexHtmlPath)) {
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.sendFile(indexHtmlPath);
  });
}

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Node backend listening on http://${HOST}:${PORT}`);
});

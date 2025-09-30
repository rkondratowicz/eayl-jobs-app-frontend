import express from 'express';

const app = express();
const port = process.env['PORT'] || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;
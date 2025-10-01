const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'LMS Backend API is running!',
    version: '1.0.0',
    status: 'Working without database'
  });
});

// Mock auth routes for testing
app.post('/api/auth/register', (req, res) => {
  console.log('Register:', req.body);
  res.json({
    success: true,
    data: {
      _id: 'temp_id',
      name: req.body.name,
      email: req.body.email,
      role: 'student',
      token: 'temp_token_123'
    }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login:', req.body);
  res.json({
    success: true,
    data: {
      _id: 'temp_id',
      name: 'Test User',
      email: req.body.email,
      role: 'student',
      token: 'temp_token_123'
    }
  });
});

app.get('/api/auth/me', (req, res) => {
  res.json({
    success: true,
    data: {
      _id: 'temp_id',
      name: 'Test User',
      email: 'test@example.com',
      role: 'student'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('🚀 Server running on port ' + PORT);
  console.log('📚 API: http://localhost:' + PORT);
  console.log('⚠ Running in test mode');
});

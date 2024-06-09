const express = require('express');
const cors = require('cors');
const db = require('./config/database'); 
const app = express();
const PORT = process.env.PORT || 5000;

// Test the database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/departments', require('./routes/departments'));
// Add more routes as needed

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

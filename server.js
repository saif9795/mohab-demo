const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).json({
    status : 'success',
    message: 'Welcome to the demo-mohab project!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
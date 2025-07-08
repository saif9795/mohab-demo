const express = require('express');
const dbConnect = require('./db/dbConfig');
const dotenv = require('dotenv').config();

const adminRouter = require('./router/admin.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/admin', adminRouter);
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).json({
    status : 'success',
    message: 'Welcome to the demo-mohab project! This is the server side.',
  });
});

app.listen(PORT, async() => {
    await dbConnect();
    console.log(`Server is running on http://localhost:${PORT}`);
});
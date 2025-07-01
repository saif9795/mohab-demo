const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_URI);
    console.log(`database is connected`);
  } catch (error) {
    console.error(`error connecting database`);
    process.exit(1);
  }
}

module.exports = dbConnect;
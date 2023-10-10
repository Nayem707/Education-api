const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected!');
  } catch (error) {
    console.log('db is not connected');
    console.log(error);
  }
};

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const resultRouter = require('./router/result.route');
app.use('/students', resultRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
  connectDB();
});

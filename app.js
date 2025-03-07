const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./database/connect')
require('dotenv').config();
const port2 = 3000;
const port1 = 4000;

//middleware


app.use(express.static('./public'));
app.use(express.json());



app.use('/api/v1/tasks', tasks);


const start = async () => {
  
  try {
    await connectDB(process.env.MONGO_URL);
  app.listen(port2, () =>
    console.log(`Server is listening on port ${port2}...`)
  );
  } catch (error) {
    console.log(error);
  }

};

start();


app.listen(port1, () => {
  console.log(`Server is running on port ${port1}`);
});




const express = require('express');
const mongoose = require('mongoose');
const database = require('./server/config/db').DB_URI;
const items = require('./server/routes/api/item');

const app = express();

app.use(express.json());
app.use('/api/items', items);

mongoose.connect(database, { useNewUrlParser: true })
  .then(() => console.log('MongoDb connected'))
  .catch(() => console.log('Failed to connect Mongo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App connected to port ${PORT}`));
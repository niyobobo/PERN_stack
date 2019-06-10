const express = require('express');
const morgan = require('morgan');
const items = require('./server/routes/api/item');

const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App connected to port ${PORT}`));
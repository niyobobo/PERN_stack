const express = require('express');
const morgan = require('morgan');
const path = require('path');
const items = require('./server/routes/api/item');

const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use('/api/items', items);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    // For any other url reload index page
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App connected to port ${PORT}`));
// app.js
const express = require('express');
const app = express();
const carsRoutes = require('./routes/cars');

app.use('/cars', carsRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

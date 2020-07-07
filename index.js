const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

const playstore = require('./app-store');



app.listen(8000, () => console.log('server is running on port 8000'));

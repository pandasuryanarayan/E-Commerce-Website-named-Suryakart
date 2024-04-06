const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const routes = require('./routes/routes');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the routes from routes.js
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

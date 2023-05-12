const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));
app.use(routes);
app.use(fileUpload());

module.exports = app;

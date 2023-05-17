const express = require('express');
const fileUpload = require('express-fileupload');
const path = require("path");
const cors = require('cors');
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const uuid = require('uuid');
dotenv.config();

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(fileUpload());
app.use(express.static('./public'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

module.exports = app;

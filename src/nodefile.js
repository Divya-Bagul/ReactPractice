const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
const app = express();


app.get('/senddata', async (req, res) => {
    console.log(req);
    console.log('asasas');
});


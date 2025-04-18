"use strict"

/*
 * npm init -y
 * npm i express dotenv express-async-handler mongoose 
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json())

// Connect to MongoDB with Mongoose:
require('./src/dbConnection')
// HomePage:
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))
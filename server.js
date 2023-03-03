const express = require('express');
require('dotenv').config();
const path = require('path');

//DUMMY
const ejs = require('ejs');

// Routes modules:
const articlesRouter = require('./routes/articlesRoutes');

const app = express();
const PORT = 3000;

//MOTOR DUMMY
app.set('view engine', 'ejs');

app.use(express.json());

// Routes:
app.use('/', articlesRouter);

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
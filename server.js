const express = require('express');
require('dotenv').config();
const path = require('path');

// Routes modules:
const articlesRouter = require('./routes/articlesRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes:
app.use('/', articlesRouter);

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
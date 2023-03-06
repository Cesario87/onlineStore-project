const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Routes modules:
const articlesRouter = require('./routes/articlesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes:
app.use('/', articlesRouter);

app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));

app.listen(PORT, () => console.log(`Server started port ${PORT}`));

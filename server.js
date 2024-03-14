require('./config/connection');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const routes = require('./router/router');

app.use(express.json(), routes, cors());
app.listen(port, () => { console.log(`Run server...${port}`) });
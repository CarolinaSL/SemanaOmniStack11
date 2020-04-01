const express = require('express');
const routes = require('./routes'); // importação de routes

const app = express();

app.use(express.json()); // serve para aplicação entender que queremos trabalhar com json nos requests
app.use(routes);

app.listen(3333);
const express = require('express'); // importando módulo express
consta cors = require('cors');
const routes = require('./routes'); // importação de routes

const app = express();

app.use(cors());
app.use(express.json()); // serve para aplicação entender que queremos trabalhar com json nos requests
app.use(routes);

app.listen(3333);
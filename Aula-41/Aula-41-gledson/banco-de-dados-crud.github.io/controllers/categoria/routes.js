// importando o EXPRESS
const express = require('express');

const categoriaRouter = require('./controllres/categoria/router');
const clienteRouter = require('./controllers/cliente/router');
const produtoRouter = require('./controllers/produto/router');

const app = express();

const port = 8000;

app.use(categoriaRouter);
app.use(clienteRouter);
app.use(produtoRouter);

app.listen(port, () => {
    console.log('------------');
    console.log('--- TA ON---');
    console.log('------------');
})
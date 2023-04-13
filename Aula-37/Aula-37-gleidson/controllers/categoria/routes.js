// importando o EXPRESS
// const express = require('express');

// const categoriaRouter = require('./controllres/categoria/router');
// const clienteRouter = require('./controllers/cliente/router');
// const produtoRouter = require('./controllers/produto/router');

// const app = express();

// const port = 8000;

// app.use(categoriaRouter);
// app.use(clienteRouter);
// app.use(produtoRouter);

const app = express.Router();

app.get('/categorias', (req, res) => {
    res.send(categoria.buscar());
})

app.get('/categorias/:id', (req, res) => {
    res.send(categoria.buscarUm(req.params.id));
});

app.post('/categorias', (req, res) => {
    res.send(categoria.cadastrar(req.body));
});

// exportando todas as rotas criadas aqui
module.exports = app;
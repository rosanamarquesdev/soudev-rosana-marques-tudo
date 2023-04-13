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

const express = require('express');
const categoria = require('./categoria');
const app = express.Router();


app.get('/categorias', (req, res) => {
    res.send(categoria.buscar());
});
app.get('/categorias/:id', (req, res) => {
    res.send(categoria.buscarUm(req.params.id));
});
app.post('/categorias', (req, res) => {
    res.send(categoria.cadastrar(req.body));
});

app.post('/categorias/:id', (req, res) => {
    res.send(categoria.editar(req.params.id, req.body))
})

app.delete('/categorias:id', (req, res) => {
    res.send(categoria.deletar(req.params.id));
})

module.exports = app;
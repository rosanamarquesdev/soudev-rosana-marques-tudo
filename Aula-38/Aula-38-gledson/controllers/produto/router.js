const express = require('express');
const produto = require('./produto');
const app = express.Router();

app.get('/produtos', (req, res) => {
    res.send(produto.buscar());
});
app.get('/produtos/:id', (req, res) => {
    res.send(produto.buscarUm(req.params.id));
});
app.post('/produtos', (req, res) => {
    res.send(produto.cadastrar());
});

module.exports = app;
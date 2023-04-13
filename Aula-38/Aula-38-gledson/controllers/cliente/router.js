const express = require('express');
const cliente = require('./cliente');
const app = express.Router();

app.get('/clientes', (req, res) => {
    res.send(cliente.buscar());
});
app.get('/clientes/:id', (req, res) => {
    res.send(cliente.buscarUm(req.params.id));
});
app.post('/clientes', (req, res) => {
    res.send(cliente.cadastrar());
});

module.exports = app;
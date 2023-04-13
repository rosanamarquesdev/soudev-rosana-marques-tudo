const express = require('express');
const database = require('../../connection/database');

const app = express.Router();

app.get('/categorias', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_categoria;')

    res.send(dados);
});

app.get('/categorias:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_categoria WHERE id='${req.params.id}';
    `);

    res.send(dados[0]);
});

module.exports = app;
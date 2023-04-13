// const express = require('express');
// const app = express.Router();
//  mesma forma de fazer as duas em uma só
const app = require('express').Router();
// se conectar com o banco de dados
const database = require('../../connection/database')

app.get('/banners', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_banner`)

    res.send(dados);
});

app.get('/banners/:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `)

    res.send(dados[0]);
});

// app.get('/banners/:id', async (req, res) => {
//     res.send('ok');
// });

app.post('/banners', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_banner (titulo, descricao, imagem)
        VALUES ('${corpo.titulo}','${corpo.descricao}', '${corpo.imagem}');
    `)

    // para colocar o id no corpo la do json
    corpo.id = sql.insertId;

    res.end(corpo);
});

app.put('/banners/:id', async(req, res) => {
    res.end('ok')
});

app.delete('/banners/:id', async(req, res) => {
    res.end('ok')
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app;



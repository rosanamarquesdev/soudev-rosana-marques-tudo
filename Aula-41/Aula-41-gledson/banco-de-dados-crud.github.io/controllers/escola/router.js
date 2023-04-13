// importando o express
const express = require('express');

//importou o banco de dados
const database = require('../../connection/database');

// criando o app para adicionar as novas rotas/endpoints
const app = express.Router();

// criando uma rota do tipo GET para buscar todas as escolas que estao no banco de dados db_sou_dev_mulheres_rosana 
app.get('/escolas', async (req, res) => { // async

    let dados = await database.execute('SELECT * FROM tb_escola');

    res.send(dados);
});

app.get('/escolas/:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_escola WHERE id='${req.params.id}'
    `)

    res.send(dados[0]);
});

app.post('/escolas/', async (req, res) => {
    let sql = await database.execute(`
        INSERT INTO tb_escola (nome, endereco) VALUE ('${req.body.nome}', 
            '${req.body.endereco}');
    `);

    let escola = await database.execute(`
        SELECT * FROM tb_escola WHERE id = ${sql.insertId};
    `);

    res.status(201).send(JSON.stringify(escola[0]));
});


app.delete('/escolas/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_escola WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
})



//exportando todas as rotas criadas nesse arquivo
module.exports = app;

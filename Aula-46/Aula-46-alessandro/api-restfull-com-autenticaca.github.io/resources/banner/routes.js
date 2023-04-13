// const express = require('express');
// const app = express.Router();
const app = require("express").Router();
const database = require("../../connection/database");

const table = "tb_banner";
const url = "/banners";
// manipulacao de senhas
const pessoasAutorizadas = [
  {
    nome: 'Sara',
    token: '4246',
  },
  {
    nome: 'Marilia',
    token: '4727'
  },
  {
    nome: 'Taiane',
    token: '1958'
  },
]

app.get(url, async (req, res) => {

  // filtrar as pessoas quem tem um token
  let verificadas = pessoasAutorizadas.filter(
    cada => cada.token === req.headers.token
  );

  // se nao existir ninguem com aquele token, entao é "acesso nao autorizado"
  if(verificadas.length === 0){
    res.sendStatus(401);
    return
  }

  let dados = await database.execute(`SELECT * FROM ${table}`);

  res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
  let dados = await database.execute(`
        SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

  res.send(dados[0]);
});

app.post(url, async (req, res) => {
  let corpo = req.body;

  let sql = await database.execute(`
        INSERT INTO ${table} (titulo, descricao, imagem)
        VALUES ('${corpo.titulo}', '${corpo.descricao}', '${corpo.imagem}')
    `);

  corpo.id = sql.insertId;

  res.send(corpo);
});

app.patch(`${url}/:id`, async (req, res) => {
  let dados = req.body;

  // primeiro se certifica que existe
  let jaExiste = await database.execute(`
        SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

  // testando se existe um banner no id apontado
  if (undefined === jaExiste[0]) {
    res.sendStatus(404);
    return;
  }

  await database.execute(`
        UPDATE ${table} SET
            titulo='${req.body.titulo || jaExiste[0].titulo}',
            descricao='${req.body.descricao || jaExiste[0].descricao}',
            imagem='${req.body.imagem || jaExiste[0].imagem}'
        WHERE id= '${req.params.id}';
    `);

  dados.id = req.params.id;

  res.send(dados);
});

app.delete(`${url}/:id`, async (req, res) => {
  await database.execute(`
        DELETE FROM ${table} WHERE id='${req.params.id}'
    `);

  res.sendStatus(204);
});

module.exports = app;

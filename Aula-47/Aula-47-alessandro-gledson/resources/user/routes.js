const app = require("express").Router();
const database = require("../../connection/database");
const argon2 = require('argon2');

app.get("/users", async (req, res) => {
    let lista = await database.execute(`
        SELECT * FROM tb_users;
    `);
    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
    // criptografia argon2
    let senhaCriptografada = await argon2.hash(req.body.senha)

    let response = await database.execute(`
        INSERT INTO tb_users 
        (nome, email, senha)
        VALUES
        ('${req.body.nome}','${req.body.email}','${senhaCriptografada}');
    `);

    await database.execute(`
        UPDATE tb_users 
        SET token = '${req.body.senha}_${response.insertId}'
        WHERE id = ${response.insertId};
    `);
    let dados = req.body;
    dados.id = response.insertId;
    res.send(JSON.stringify(dados));
});

app.get("/users/auth", async(req, res) => {
    let users = await database.execute(`
        SELECT * FROM tb_users 
        WHERE email = '${req.headers.email}'; 
    `);

    if(!users[0]){
        res.send(JSON.stringify(400)); // bad request
        return;
    }
    
    // se nao for encontrado ninguem com email entao o usuario nao existe
    if(undefined == users[0]){
        res.status(400).send({erro: 'Email invalido'});
        return
    }


    let senhaVerificada = await argon2.verify(users[0].senha, req.headers.senha);
    if(false == senhaVerificada){
        res.status(400).send({erro: 'Senha Incorreta'});
    }

    if(users.length === 0){
        res.send(JSON.stringify({"message": "Usuario ou senha invalido"}))
        return;
    }

    res.send(JSON.stringify({"token": users[0].token}));
});

module.exports = app;

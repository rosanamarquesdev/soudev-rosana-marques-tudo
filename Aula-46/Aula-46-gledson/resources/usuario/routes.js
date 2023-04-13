const app = require('express.Router');
const database = require('../../connection/database');

const table = "tb_usuario";
const url = "/usuario";

app.get(url, async (req, res) => {
    let lista 
});

app.post(url, async (req, res) =>{
    let response = await database.execute(`
        INSERT INTO ${table}
            (nome, email, senha)
        VALUES
        ('${req.body.nome}','${req.body.email}','${}')
    `)
})
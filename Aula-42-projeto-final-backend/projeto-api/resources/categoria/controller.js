const db = require('../../connection/database');
const table = "tb_categoria";

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table}
    `);

    return JSON.stringify(lista);
};

module.exports = {
    listAll
};
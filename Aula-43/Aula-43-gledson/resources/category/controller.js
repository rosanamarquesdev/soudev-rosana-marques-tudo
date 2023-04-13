const db = require("../../connection/database");
const table = "tb_category"; 

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table};
    `);
    return JSON.stringify(lista);
}

async function listOne(id){
    let lista = await db.execute(`
        SELECT * FROM ${table} WHERE ${id};
    `);
    return JSON.stringify(lista[0]);
}

// async function edit(id, data){
//     let query = "";
//     if(data.nome){
//         // '${data.nome}' é entre '' pq é uma string e precisa
//         query = `nome = '${data.nome}'`
//     }
//     if(data.status){
//         query += `, status = ${data.status},`
//     }
//     await db.execute(`
//         UPDATE ${table} SET ${query} WHERE ${id};

//     `);
//     let lista = await db.execute(`
//         SELECT * FROM ${table} WHERE ${id};
//     `);
//     return JSON.stringify(lista[0]);
// }

    async function create(data){
        let sql = await db.execute(`
            INSERT INTO ${table} (nome) VALUES ('${data.nome}');
        `);
        let category = await db.execute(`
            SELECT * FROM ${table} WHERE id=${sql.insertId};
        `);
        return JSON.stringify(category[0]);
    }

    // -- funcao apenas para o administrador porque deleta definitivamente do banco
    // async function destroy(id){
    //     await db.execute(`
    //         DELETE FROM ${table} WHERE id = ${id};
    //     `);
    // }

    async function disable(id){
        await db.execute(`
            UPDATE ${table} SET status = 2 WHERE id = ${id};
        `);
        // return 
    }


module.exports ={
    listAll,
    listOne,
    edit,

}

// importar o servidor
// espera o codigo await 
const mysql2 = require('mysql2/promise');


async function execute(sql) { // o async sinaliza que precisa esperar outro codigo para que ele funcione

        // criando a conexao
        let conexao = await mysql2.createConnection({ // await espera e so executa depois que finalizar
            // usuario padrao
            user: 'root',
            // senha
            password: '1234',
            // pegar no nome do banco
            database: 'db_sou_dev_mulheres_rosana',
            // local em que esta o banco - no exemplo é um banco que esta na maquina local (localhost)
            host: 'localhost'
        });
    
        // executa la no mysql
        let [rows, columns] = await conexao.execute(sql); // espera quando terminar de ser executado

        return rows;
}

module.exports = {
    execute
};
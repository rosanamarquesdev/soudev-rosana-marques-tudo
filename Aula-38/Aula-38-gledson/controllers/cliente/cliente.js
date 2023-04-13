const clientes = require('./model');

function cadastrar(dados){
    categorias.push(dados);
    return JSON.stringify(dados);
}

function buscar() {
    return JSON.stringify(clientes);
}
function buscarUm(id) {
    let busca = clientes.filter((cada) => {
        return cada.id == id;
    });
    return JSON.stringify(busca);
}

module.exports = {
    buscar, cadastrar, buscarUm, 
}
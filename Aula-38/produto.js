const produtos = require('./model');

function cadastrar(){
    return "Cadastrar de categoria";
}

function buscar() {
    return JSON.stringify(produtos);
}
function buscarUm(id) {
    let busca = produtos.filter((cada) => {
        return cada.id == id;
    });
    return JSON.stringify(busca);
}

module.exports = {
    buscar, cadastrar, buscarUm, 
}
const categorias = require('./model');

function cadastrar(dados){

    categorias.push(dados);
    return JSON.stringify(dados);
    // return "Cadastrar categorias";
}

function buscar(){
    // return "Lista de categorias";

    return JSON.stringify(categorias);
}

function buscarUm(id){
    let busca = categorias.filter((cada) => {
        return cada.id == id;
    })
    return JSON.stringify(busca);
}

module.exports = {
    cadastrar,
    buscar,

    buscarUm,
}
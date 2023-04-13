function cadastrar(){
    return "Cadastrar categorias";
}

function buscar(){
    // return "Lista de categorias";

    return JSON.stringify([
        {
            id: 1,
            nome: 'Blusa'
        },
        {
            id: 1,
            nome: 'Calca'
        },
    ]);
}

module.exports = {
    cadastrar,
    buscar,
    // comentario mudado
}
function cadastrar(){
    return "Cadastrar categorias";
}

function buscar(){
    // return "Lista de categorias";

    return JSON.stringify([
        {
            id: 1,
            nome: 'Any'
        },
        {
            id: 1,
            nome: 'Thaiane'
        },
        {
            id: 3,
            nome: 'Rebeca'
        },
        {
            id: 4,
            nome: 'Samantha'
        },
    ]);
}

module.exports = {
    cadastrar,
    buscar,
    // comentario mudado
}
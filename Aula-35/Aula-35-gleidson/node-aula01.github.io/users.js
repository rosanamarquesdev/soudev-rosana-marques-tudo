const users = [
    "usuario1",
    "usuario2",
    "usuario3",
];


function createUser(){
    console.log("usuario criado");
}

function updateUser(){
    console.log("usuario atualizado");
}

function listUser(){
    // console.log("Lista de usuários");
    return "lista de usuarios"
}

function deleteUser(){
    console.log("usuario deletado");
}

module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser,
}
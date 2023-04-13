function welcome(nome = ''){
    if(nome !== '') {
        return "Welcome" + nome;
    }

    return "Welcome";
}

// module.exports = {
//     welcome,
// };

// outra forma de exportar 
module.exports = welcome;
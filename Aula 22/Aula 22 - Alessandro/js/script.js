//
function buscarCEP() {
    // fetch ().then().then();
    // fetch(`https://viacep.com.br/ws/${cep.value}/json/`) // buscar resposta -  
    //     .then(function (res){
    //         return res.json();
    //     }) // confere se votou com a resposta - primeira conferencia
    //     .then(function (conteudo){
    //         // document.getElementById('logradouro');
    //         logradouro.value = conteudo.logradouro; 
    //         bairro.value = conteudo.bairro;
    //         cidade.value = conteudo.localidade;
    //         estado.value = conteudo.uf;
    //     }); // usa com quer - so recebe essa linha no ultimo porque é uma linha só

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(res => res.json())
    .then(conteudo => {
        logradouro.value = conteudo.logradouro; 
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
    });
}


// function adicionarOpcoes(){
//     select_regiao.innerHTML += `<option selected > teste </option>`;
// }

// regioes.forEach(adicionarOpcoes);

// mesma opcao feita em arrow function
// regioes.forEach(() =>{
//     select-regiao.innerHTML += `<option selected > teste </option>`;
// })

document.querySelector(".bloqueio").classList.add("aparece");

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
    .then(res => res.json()) // sempre vai ser esse padrao
    .then(regioes => {
        // regioes.forEach((cada) => {
        //     select_regiao.innerHTML += `<option selected >${cada.nome}</option>`;
        // });
        document.querySelector(".bloqueio").classList.remove("aparece");

        function adicionarOpcoes(cada){
        select_regiao.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`;
        }

        regioes.forEach(adicionarOpcoes);
});

function buscarEstados(){
    document.querySelector(".bloqueio").classList.add("aparece");

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${select_regiao.value}/estados`)
    .then(res => res.json())
    .then( qualquerUm => {
        document.querySelector(".bloqueio").classList.remove("aparece");

        select_estado.innerHTML = `<option> -- Selecione -- </option>`; // zera estados
        select_cidade.innerHTML = `<option> -- Selecione -- </option>`; // zera cidades

        function adicionarOpcoes(cada){
            select_estado.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`;
        }
    
        qualquerUm.forEach(adicionarOpcoes); 
    });
};

// cidades
function buscarCidades(){
    document.querySelector(".bloqueio").classList.add("aparece");

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select_estado.value}/municipios`)
    .then(res => res.json())
    .then( qualquerUm => {
        document.querySelector(".bloqueio").classList.remove("aparece");
        select_cidade.innerHTML = `<option> -- Selecione -- </option>`; // é para zerar estados

        function adicionarOpcoes(cada){
            select_cidade.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`;
        }
    
        qualquerUm.forEach(adicionarOpcoes); 
    });
};







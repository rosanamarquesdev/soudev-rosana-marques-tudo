// let nota1 = 10;
// let nota2 = 9;
// let nota3 = 8.5;
// let nota4 = 9.8;

// let notas = [
//     10,
//     9,
//     8.5,
//     9.8
// ]

// let m = 4;

// let soma = notas[0] + notas[1] + notas[2] + notas[3]/m;

// document.write(soma);

function calcularMedia(notas){
    let soma = notas[0] + notas[1] + notas[2] + notas[3];
    let media = soma/4;
    return media.toFixed(2);
}

let mediaCalc = calcularMedia([10, 9.5, 9, 9.8]);
alert("Media do Alessandro: " + mediaCalc);

// funcoes
function add(){
    conteudo.innerHTML = "Pagina de Cadastro";
}

function list(){
    conteudo.innerHTML = "Pagina de Listar";
}

function report(){
    conteudo.innerHTML = "Pagina de Relatorios";
}


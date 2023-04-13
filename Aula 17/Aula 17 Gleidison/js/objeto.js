// objeto
// let pessoa = {
//     altura: 1.77,
//     pele: "clara",
//     olhos: "castanho",
//     cabelo: "preto",
//     idade: 32,
//     comida: ["baiao", "queijo"],
//     pele: {
//         tom: "clara",
//         tipo: "oleosa"
//     }
// }

// document.write(pessoa.altura, pessoa.olhos, pessoa.cabelo, pessoa.comida[1], pessoa.pele.tom);

// let produto = {
//     nome: "arroz",
//     preco: 4.69,
//     qnt: 3
// }

let lista = [
    {
        nome: "arroz",
        preco: 4.69,
        qtd: 3
    },
    {
        nome: "caixa de ovos",
        preco: 17.00,
        qtd: 1
    }
];

for (let i = 0; i < lista.length; i++){
    document.write(lista[i].nome+"<br>");
}
// console.log("Olá Mundo!");

// importando o arquivo teste.js
// const servidorX = require('./teste');
// const a = require('./teste');

// // const {x, y} = require('./teste');

// a.x();
// a.y();

// ./  -- significa que é nosso
const produto = require("./produto");
const categoria = require("./categoria");
const cliente = require("./cliente");

// importando diretamente do node
const http = require("http");

const porta = 8000;
const endereco = "localhost";

// só por padrao req (parametros) , res (paramentros)
// essa funcao vai ser sempre executada
//quando alguma requisicao foi feita ao servidor
function recepcao(req, res) {
//   console.log('A veia fofoqueira ta ON'); // fica so 
    res.end("Tu num sabe da nova!?"); // .end finaliza com uma 
    let resposta = "Pagina nao encontrada";

    if (req.url === "/clientes"){
        resposta = cliente.buscar();
    } else if ( req.url === '/produtos'){
        resposta = produto.buscar();
    }

    res.end(resposta);
}

//criando o servidor e colocando
//ele pra escutar as requisicoes
http.createServer(recepcao).listen(porta, endereco);

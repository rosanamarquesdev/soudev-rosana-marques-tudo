let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let resposta = document.querySelector("#respostas");

conversas.innerHTML = "<div>Olá seja bem-vindo, em que posso lhe ajudar?</div>"

// conversas.innerHTML += "<div>1. Financeiro<br>2. Academico<br>3. Comercial</div>"

setTimeout( () => {
    conversas.innerHTML += "<div>1. Financeiro<br>2. Academico<br>3. Comercial</div>"
    }
    , 1000
);

botao.addEventListener("click", () => {
    switch(resposta.value) {
        case "1":
            conversas.innerHTML += "<div>Entendi, voce escolheu - Financeiro<br></div>"   
        break;
        case "2":
            conversas.innerHTML += "<div>Entendi, voce escolheu - Academico<br></div>"    
        break;
        case "3":
            conversas.innerHTML += "<div>Entendi, voce escolheu - Comercial<br></div>"    
        break;
    }
});
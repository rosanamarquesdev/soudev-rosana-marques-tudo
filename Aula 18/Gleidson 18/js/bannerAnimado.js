// banner animado

// function irAntes(){

// }

function irAntes(){
  let itemAtivo = document.querySelector(".active");
  let posicaoAtiva = itemAtivo.getAttribute("posicao");
  let todosItems = document.querySelectorAll("li"); //  recebe a quant total dos 'li'

  if (posicaoAtiva == 1) { // mudanca
    posicaoAtiva = todosItems.length;
  } else {
    posicaoAtiva--;
  }

  for (let i = 0; i < todosItems.length; i++) {
    if (todosItems[i].getAttribute("posicao") == posicaoAtiva) {
      todosItems[i].classList.add("active");
    } else {
      todosItems[i].classList.remove("active");
    }
  }
}

function irDepois(){
  let itemAtivo = document.querySelector(".active");
  let posicaoAtiva = itemAtivo.getAttribute("posicao");
  let todosItems = document.querySelectorAll("li"); //  recebe a quant total dos 'li'

  if (posicaoAtiva == todosItems.length) {
    posicaoAtiva = 1;
  } else {
    posicaoAtiva++;
  }

  for (let i = 0; i < todosItems.length; i++) {
    if (todosItems[i].getAttribute("posicao") == posicaoAtiva) {
      todosItems[i].classList.add("active");
    } else {
      todosItems[i].classList.remove("active");
    }
  }
}

setInterval((){
    irDepois()
}, 3000)
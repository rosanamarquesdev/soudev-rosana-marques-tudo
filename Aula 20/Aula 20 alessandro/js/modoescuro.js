// para verificar se a variavel la no localStorage esta true
// fazemos isso pq por padrao ao da refresh na pagina o checked se desabilita automaticamente
if (localStorage.getItem("darkMode") === "true") {
  dark.checked = true; //
  // precisa continuar escuro mesmo depois do refresh da pagina
  alterarCores();
}

function alterarCores() {
  if (dark.checked) {
    document.body.classList.add("bg-dark"); // vou jogar essa class na tag body ....so funciona com o BODY
    document.body.classList.add("text-white"); // vai mudar todos os textos do body pra branco
    tabela.classList.add("table-dark"); // vai adicionar uma class la do bootstrap na tabela
  } else {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("text-white");
    tabela.classList.remove("table-dark");
  }
}

function ativarDesativarDark() {
  if (dark.checked) {
    localStorage.setItem("darkMode", true); //atribui um valor localStorage
  } else {
    localStorage.setItem("darkMode", false); //atribui um valor la na localStorage
  }

  alterarCores();
}

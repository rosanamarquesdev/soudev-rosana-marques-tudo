function alterarConteudo(x){
  // if (x === 'listar'){
  //     alert(listar());
  // } else if (x === 'cadastro'){
  //     alert(cadastro());
  // } else if (x === 'relatorio'){
  //     alert(relatorio());
  // }

  // vai atualizar a DIV#conteudo com o retorno da funcao
  // document.getElementById('conteudo').innerHTML = window[x]();

  conteudo.innerHTML = window[x]();
//   alert(window[x]());
}

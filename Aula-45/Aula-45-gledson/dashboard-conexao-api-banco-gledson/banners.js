function remover(id) {
  fetch("http://localhost:8000/banners/" + id, {
    method: "DELETE",
  });

  alert("Banner excluido");
  location.href = "banners.html";
}

fetch("http://localhost:8000/banners")
  .then((res) => res.json())
  .then((dados) => {
    dados.map((cada) => {
      tabela_banners.innerHTML += `
                <tr>
                    <td>${cada.id}</td>
                    <td>${cada.titulo}</td>
                    <td>${cada.descricao}</td>
                    <td><img width="100vh" src="${cada.imagem}"/></td>
                    <td>
                        <button class="btn btn-primary" >Editar</button>
                        <button class="btn btn-danger" onclick="remover('${cada.id}')">Excluir</button>
                    </td>
                </tr>
            `;
    });
  });

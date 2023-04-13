let produtos = [];

function adicionarItem(){
    let produto = {
        nome: nome.value,
        preco: preco.value,
        qtd: qtd.value
    }

    // alert("adicionou");
    produtos.push(produto); // adiciona elementos ao array produtos
    localStorage.setItem ("produtos", JSON.stringify(produtos));
    listarItems();    
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if (items && items.length > 0){
        produtos = items;
        for(let i = 0; i < items.length; i++){
            lista.innerHTML += `<li class="list-group-item d-flex justify-content-between">
                <div class"w-50">${items[i].nome}</div>
                <div>${items[i].qtd}</div>
                <div>${items[i].preco}</div>
            </li>`;
        }
    }
}
listarItems();
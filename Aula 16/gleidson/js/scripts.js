

// let meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


// let m = 0;
// while (m < 12){
//     mes.innerHTML += '<option>' + meses[m] + '</option>'
//     m++;
// }

// for (let m = 0; m < 12 ; m++) {
//     mes.innerHTML += '<option>' + meses[m] + '</option>'
// }

let produtos = [];

function adicionarItem(){
    // alert("adicionou");
    produtos.push(item.value); // adiciona elementos ao array produtos
    localStorage.setItem ("produtos", JSON.stringify(produtos));
    listarItems();    
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if (items && items.length > 0){
        produtos = items;
        for(let i = 0; i < items.length; i++){
            lista.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
        }
    }
}

listarItems();



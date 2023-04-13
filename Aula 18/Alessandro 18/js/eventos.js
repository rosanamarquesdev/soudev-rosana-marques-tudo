function validar(){
    event.preventDefault(); // impede que o formulario nao seja enviado

    // alert('Foi...');
    // if (document.getElementById('nome').value === '' || document.getElementById('email').value === '' || document.getElementById('telefone') || document.getElementById('').value === '' || document.getElementById('cidade').value === ''){
    //     alert(`Ei ficou faltando preencher alguma coisa ai viu`);
    // }

    if (document.getElementById('nome').value === ''){
        // nome.style.borderColor = 'red'; // mudar a bordar quando o ele
        nome.classList.add('is-invalid'); // coloca um icone em vermelho
    }

    if (document.getElementById('email').value === ''){
        // email.style.borderColor = 'red'; // mudar a bordar quando o ele
        email.classList.add('is-invalid'); // coloca um icone em vermelho
    }

    if (document.getElementById('telefone').value === ''){
        // telefone.style.borderColor = 'red'; // mudar a bordar quando o ele
        telefone.classList.add('is-invalid'); // coloca um icone em vermelho
    }

    if (document.getElementById('cidade').value === ''){
        // cidade.style.borderColor = 'red'; // mudar a bordar quando o ele
        cidade.classList.add('is-invalid'); // coloca um icone em vermelho
    }

    // if (nome.value === ''){ // forma reduzida.... nome é o ID
    //     alert("Ei preenche isso ai, ficou vazio!");
    // }

    // if (document.getElementById('').value === ''){
    //     alert("Ei preenche isso ai, ficou vazio!");
    // }
}

function alterarNome(){
    nome.classList.remove('is-invalid');

    // if nome.classList.add('is-valid'); 
    if (nome.value.length > 2){
        nome.classList.add('is-valid');
    } else {
        nome.classList.add('is-invalid');
    }
}

function alterarEmail (){
    email.classList.remove('is-invalid');
}

function alterartelefone(){
    telefone.classList.remove('is-invalid');
}

function alterarCidade(){
    cidade.classList.remove('is-invalid');
}
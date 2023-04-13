//READ -todos ok
function listarAluno(){

    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let alunos = [];
    fetch('http://localhost:3000/alunos')
        .then(res => res.json())
        .then(response => {
            alunos = response;

            let tabela = document.getElementById("tabela-body");
            tabela.innerHTML = "";
            alunos.forEach((aluno, key) => {
                tabela.innerHTML += `<tr>
                                        <td>${aluno.id}</td>
                                        <td>${aluno.nome}</td>
                                        <td>${aluno.email}</td>
                                        <td>${aluno.telefone}</td>
                                        <td>${aluno.cidade}</td>
                                        <td>
                                            <button class="btn btn-warning">Editar</button>
                                            <button class="btn btn-danger" onClick="deletarAluno(${aluno.id})">Excluir</button>
                                        </td>
                                    </tr>`;
            })
        });
}

//CREATE
function salvarAluno(){
    event.preventDefault();
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || []; // ja sabemos que o servidor esta de pe
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 

    // definir se é diferente de GET
    fetch('http://localhost:3000/alunos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(aluno) // stringify() - transforma em texto
    })
    // alunos.push(aluno);
    // localStorage.setItem('alunos', JSON.stringify(alunos));
    .then(res => res.json())
    .then(resposta => {
        alert("Salvo com Sucesso!");
        console.log(resposta)
    });
}

//UPDATE - editar
function atualizarAluno(){}

//DELETE
function deletarAluno(id){
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    // let alunosAtualizado = [];

    // alunos.forEach((aluno, key) => {
    //     if(id != key){
    //         alunosAtualizado.push(aluno);
    //     }
    // });

    // localStorage.setItem('alunos', JSON.stringify(alunosAtualizado));

    // alert("Excluido com sucesso!");

    // listarAlunos();

    fetch(`http://localhost:3000/alunos/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(response => {
        alert("Excluido com sucesso!");
        console.log(response);
    });
    listarAluno();
}
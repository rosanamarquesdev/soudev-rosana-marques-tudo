const repository = require('../../resources/banner/repository');

test('Testar se inserir banner na tabela funciona', async () => {
    let dados = {
        titulo: 'Titulo Banner teste',
        descricao: 'Descricao teste para o banner',
        imagem: 'http://imagens.com.br/4.jpg'
    };

    let resultado = repository.inserir(dados);

    expect(resultado).toBeGreatherThan(0); //espero que seja maior que 0
    expect(resultado).toBe('number');
});

test('Testar se da pra inserir uma imagem sem titulo', async )
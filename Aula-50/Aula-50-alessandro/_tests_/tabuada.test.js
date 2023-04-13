const tabuada = require('../src/tabuada');
const welcome = require('../src/welcome');

// console.log(
//     tabuada.somar(10, 20);
// )

test('Garantindo que a funcao somar retorna o valor correto', () => {
    // 
    expect(tabuada.somar(10, 20)).toBe(30); 
    // let resultado = tabuada.somar(10, 20);
    // expect(resultado).toBe(30);
});

test('Garantindo que a funcao somar retorna o valor negativo', () => {
    // expect(tabuada.somarNegativo(-10, 10)).toBe(0); 

    let resultado = tabuada.somar(-10, 10);
    expect(resultado).toBe(0);
});

test('Garantindo que a funcao lida com numeros reais', () => {
    // 
    // expect(tabuada.somarNegativo(-10, 10)).toBe(0); 

    let resultado = tabuada.somar(8.355, 10.6789);
    expect(resultado).toBe(19.0339);
});




let lado1 = prompt("Medida do lado 1");
let lado2 = prompt("Medida do lado 2");
let lado3 = prompt("Medida do lado 3");

if (lado1 == lado2 && lado1 == lado3) {
    alert("É um triangulo Equilatero");
} else if (lado1 == lado2 && lado1 != lado3 || lado1 != lado2 && lado1 == lado3 || lado1 != lado2 && lado2 ==lado3) {
    alert("É um triangulo Isoceles");
} else {
    alert("É um triangulo Escaleno");
}


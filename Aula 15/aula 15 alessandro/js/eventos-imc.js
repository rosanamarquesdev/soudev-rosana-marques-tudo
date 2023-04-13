function calcularIMC() {
  event.preventDefault(); /* para momentaneamente o DEFAULT -- que ele faria por padrao*/
  let mPeso = Number(peso.value);
  let mAltura = Number(altura.value);
  let imc = (mPeso / (mAltura * mAltura)).toFixed(1);

  if (mPeso == 0) {
    alert("Peso invalido");
    return;
  } else if (mAltura == 0) {
    alert("Altura invalida");
    return;
  } else if (imc <= 18.5) {
    alert("Abaixo do peso: " + imc);
  } else if (imc > 18.5 && imc <= 24.9) {
    alert("Peso médio: " + imc);
  } else if (imc > 24.9 && imc <= 29.9) {
    alert("Acima do peso: " + imc);
  } else if (imc > 29.9 && imc <= 34.9) {
    alert("Obsidade 1: " + imc);
  } else if (imc > 34.9 && imc <= 39.9) {
    alert("Obsidade 2: " + imc);
  } else {
    alert("Obsidade 3: " + imc);
  }

  // if (imc <= 18.5) {
  // alert("Abaixo do peso: " + imc);
  // } else if (imc > 18.5 && imc <= 24.9) {
  // alert("Peso médio: " + imc);
  // } else if (imc > 24.9 && imc <= 29.9) {
  // alert("Acima do peso: " + imc);
  // } else if (imc > 29.9 && imc <= 34.9) {
  // alert("Obsidade 1: " + imc);
  // } else if (imc > 34.9 && imc <= 39.9) {
  // alert("Obsidade 2: " + imc);
  // } else {
  // alert("Obsidade 3: " + imc);
  // }
}

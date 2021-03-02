// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorNumInt(numeros) {

  let indexNumero = 0;

  for (let index in numeros) {
    if (numeros[index] > numeros[indexNumero]){
      indexNumero = index;
    }
  }
  return indexNumero
}
let num = [2, 3, 6, 7, 10, 1];

console.log(maiorNumInt(num));
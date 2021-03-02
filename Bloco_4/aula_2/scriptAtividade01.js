let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1) {
  console.log(numbers[index]);
};
//////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////
let somaNumbrs = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  somaNumbrs += numbers[index]
};
console.log(somaNumbrs)
///////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////

media = somaNumbrs / numbers.length;

console.log(media);
//////////////////////////////////////////////////////////
console.log()
////////////////////////////////////////////////////////
if (media > 20) {
  console.log(' valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}
///////////////////////////////////////////////////////
console.log()
/////////////////////////////////////////////////////////
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;

for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] > maiorNumero) {
    maiorNumero = numeros[index];
  }
}

console.log(maiorNumero);
//////////////////////////////////////////////////////////////
console.log()
////////////////////////////////////////////////////////////
let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (let index = 0; index < n.length; index += 1) {
  if (n[index] % 2 !== 0) {
    impares += 1;
  }
}
if (impares === 0) {
  console.log('nenhum valor encontrado')
}

console.log(impares);

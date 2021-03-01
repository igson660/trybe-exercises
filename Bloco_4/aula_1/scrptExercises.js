let valor01 = 5;
let valor02 = 3;

// somar;
let soma = valor01 + valor02;
console.log(soma);

// subtração
let subtrai = valor01 - valor02;
console.log(subtrai);

//multiplicação
let multiplica = valor01 * valor02;
console.log(multiplica);

//divisão
let divide = valor01 / valor02;
console.log(divide);

//módulo
let modulo = valor01 % valor02;
console.log(modulo);

//retonar maior de dois numeros
let num01 = 50;
let num02 = 60;

if (num01 > num02){
  console.log(num01);
 }
 else{
   console.log(num02);
 }

 // retornar maior de três numeros
 let num03 = 80;

 if (num01 > num02 && num01 > num03){
   console.log(num01);
 }
 else if (num02 > num01 && num02 > num03){
   console.log(num02);
 }
 else{
   console.log(num03);
 }
 //Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 let inteiro = -3;

 if (inteiro > 0){
   console.log('positive');
 }
 else if (inteiro < 0){
   console.log('negative');
 }
 else {
   console.log('zero');
 }
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let angulo01 = 60;
let angulo02 = 30;
let angulo03 = 80;

let somarAngulos = angulo01 + angulo02 + angulo03;
let angluosPositivos = angulo01 > 0 && angulo02 > 0 && angulo03 > 0;


if (angluosPositivos){
  if(somarAngulos === 180) {
    console.log(true)
  } else{
    console.log(false)
  };
} else {
  console.log('Erro: angulo inválido')
};


//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = 'rainha';

switch (peca.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let nota = -2;

if (nota > 90 && nota <= 100){
  console.log('Nota A');
} else if (nota > 80 && nota < 90){
  console.log('Nota B');
} else if (nota > 70 && nota < 80){
  console.log('Nota C');
} else if (nota > 60 && nota < 70){
  console.log('Nota D');
} else if (nota > 50 && nota < 60){
  console.log('Nota E');
} else if (nota < 40 && nota > 0){
  console.log('Nota F');
}else {
  console.log('Erro: valor inválido')
}

// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let nu01 = 1;
let nu02 = 7;
let nu03 = 13;

let init = false;

if ((nu01 % 2 === 0 || nu02 % 2 === 0 || nu03 % 2 === 0)) {
  init = true;
};
console.log(init);

//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let a = 2;
let b = 2;
let c = 13;

let all = true;

if ((a % 2 === 0 && b % 2 === 0 && c % 2 === 0)) {
  all = false;
};
console.log(all);
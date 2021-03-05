///////////////////////////// Passo 01
let corpo = document.getElementsByTagName('body')[0];
let criah1 = document.createElement('h1');

criah1.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo.appendChild(criah1);

/////////////////////////// Passo 02
let divMain = document.createElement('div');

corpo.appendChild(divMain);

divMain.className = "main-content";

////////////////////////// Passo 03
let divCenter = document.createElement('div');

divMain.appendChild(divCenter);

divCenter.className = "center-content";

/////////////////////////// Passo 04
let text1 = document.createElement('p');

divCenter.appendChild(text1);

text1.innerText = 'Com muito esforço se chega ao objetivo!!';

/////////////// passo 05
let divLeft = document.createElement('div');

divMain.appendChild(divLeft);

divLeft.className = 'left-content';

//////////////////////// Passo 06
let divRight = document.createElement('div');

divMain.appendChild(divRight);

divRight.className = 'right-content';

///////////////// Passo 07
let imagem = document.createElement('img');

divLeft.appendChild(imagem);

imagem.className = 'small-image';

imagem.src = 'https://picsum.photos/200';

//////////////// passo 08
let list = document.createElement('ul');

divRight.appendChild(list);
list.className = 'lista';

let list10 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < list10.length; index += 1) {
  let valor  = list10[index];

  let position = document.createElement('li');
  position.innerText = valor;

  list.appendChild(position);
}

////////////////////// passo 09
let firth3 = document.createElement('h3');

divMain.appendChild(firth3);

let secondh3 = document.createElement('h3');

divMain.appendChild(secondh3);

let tresh3 = document.createElement('h3');

divMain.appendChild(tresh3);





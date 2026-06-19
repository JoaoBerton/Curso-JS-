// Indexando Strings

//Contra-barra ' \ ', serve para vazar caracteres em um código
console.log('\nBarra invertida.')
let ex = "A \"thing\"\n";
console.log(ex);

//Testando indexamento
console.log('\nBuscando o índice por " [] " ');
let oneTx = "This is posible, how your peace.";
console.log(oneTx[5]);
console.log(oneTx.length);

//Continuando
console.log('\nFunção charAt para acessar o índice de uma String');
let perCom = 'Podemos acessar um índice de várias formas'; //Para mandar exibir, saiba que alguns espaços podem interferir.
console.log(perCom.charAt(19));
console.log(perCom.length);

//Go...
console.log('\nConcatenando strings com "concat".');
let conEmp = 'Esta string está...';
//Testando o valor antes de concatenar, apenas exibindo a var.
console.log(conEmp);
console.log(conEmp.concat(`quase completa!!`));
console.log(conEmp.length);

//Other tests...
console.log('\nAgora testes com o method: "IndexOf".');
let otrTs = 'Texto escrito apenas para este teste específico.';
console.log(otrTs.indexOf('escrito', 0));
console.log(otrTs.length);

//De trás para frente com lastIndexOf;
console.log('\nTestando agora o "lastIndexOf".');
let webMat = 'Uma coisa pode ser dita, mas não pode ser retirada!';
console.log(webMat.lastIndexOf('ser', 20));
console.log(webMat.length);

//Fatiando strings com slice
console.log('\nTestando "sliced" em strings.');
let matRef = 'Fatiar strings é mais útil do que parece!';
console.log(matRef.slice(12, -7));
console.log(matRef.length);

//Fatiando agora com substring
console.log('\nFatiando com "substring".');
let gasEau = 'Assim também é possível fatiar, mas da outra forma é mais fácil';
console.log(gasEau.substring(gasEau.length -10, gasEau.length -3));
console.log(gasEau.length);

//Dividindo strings com split
console.log('\nDividindo strings com "split".');
let webNan = 'Podemos dividir strings, depois elas são exibidas como arrays';
console.log(webNan.split(' ', 5));
console.log(webNan.length);

//Deixando as letras maiúsculas com upperCase
console.log('\nDeixando as letras maiúsculas com "upperCase".');
let masNow = 'Deixando as letras maiores, elas ficam com este aspecto!';
console.log(masNow.toUpperCase());
console.log(masNow.length);

//Deixando as letras minúsculsa com lowerCase
console.log('\nDeixando as letras minúsculas com "lowerCase".');
let minNot = 'Já sabemos que as letras minúsculas ficam assim.';
console.log(minNot.toLowerCase());
console.log(minNot.length);
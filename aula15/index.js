//Testando o Método "Math", e suas funcionalidades.
console.log('Primero teste! "Math" arredondando para baixo com "floor".');
const redN = 2;
const rotH = 50;
let tsT = redN / rotH;
console.log(Math.floor(tsT));//0.04 -> 0.

console.log('\n Arredondando para cima com "ceil()".');
const graN = 5;
const otR = 60;
let grRes = graN / otR;
console.log(Math.ceil(grRes));//0.08 -> 1.

console.log('\n Arredondondo para o número mais próximo com "round"');
const emP = 250;
const wfT = 150;
let unIo = emP / wfT;
console.log(Math.round(unIo));//1.67 -> 2.

console.log('\n Selecionar de uma lista o número maior com "max".');
console.log(Math.max(32, 54, 900, -30, -2, 300, 3290, 14, 0));//3290.

console.log('\n Selecionando o número menor com "min".');
console.log(Math.min(32, 54, 900, -30, -2, 300, 3290, 14, 0));//-30

console.log('\nGerando números aleatórios com "random".');
let armZ = Math.random() * (15-7) + 7;
console.log(Math.random(armZ));
console.log(armZ.toFixed(4));//???

console.log('\n Usando o valor de PI com "PI".');
let unVr = (((21 / 32) ** 2 * (76 *32)) / 87);
console.log(unVr.toFixed(2));
console.log(Math.PI * unVr);
console.log('\t This is Pi valor! ->', Math.PI.toFixed(4));

console.log('\n Temos também como fazer cálculo de potência sem usar o operador com "pow".');
const poTe = (((30 / 23**2) / (27 - (-76))) - 45); 
console.log(Math.round(poTe));
console.log(Math.pow(poTe, 2).toFixed(3));

console.log('\nRetornando a raiz quadrada');
let varia = 32;
console.log(varia ** (1/2));
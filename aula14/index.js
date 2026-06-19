console.log('\n Passando valores para Strings e Binários com "toString() & ...(2)"');
let valor = 34;
let otr = 20;
valor = valor.toString() + otr;
console.log('\n', valor);

let hag = 3289;
console.log('\n', hag.toString(2));
//Problemas com números muito pequenos.
console.log('\n Arredondando valores com "toFixed()"');
const num1 = 0.4;
const num2 = 0.2;

let res = num1 + num2 //0.6
console.log('\n', res.toFixed(2)); //0.60

//Para resolver isso...
const tst = -0.5;
const tst2 = -0.8;

let resp = tst + tst2;
console.log('\n', Number(res.toFixed(2)));

//Testando valores Inteiros e Não numéricos.

//Numérico:
console.log('\n Testando os valores Inteiros e Numéricos.');
const flu = 0.22;
const tyu = 1.45;

let ret = flu + tyu;
console.log('\n', Number.isInteger(ret));//false

const onTest = 'blabla';
const twoTest = 29;
let calc = onTest * twoTest / 2;
console.log('\n', Number.isNaN(calc));//true


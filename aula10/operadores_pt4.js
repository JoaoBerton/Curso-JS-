// Convertendo valores para Float ou para Inteiro.
console.log('Usando o parseInt()!!')
let persAge = parseInt("35");   //Passando para número inteiro.
if(persAge === 35) {
    console.log(typeof persAge);
}

const num = parseInt('43');
let num2 = parseInt('54');
num2 += num;
console.log(num2);
console.log(typeof num2);

console.log(




);

console.log('Usando parseFloat()!!');
const cpf = parseFloat('098.321.543');//Pontos flutuantes(Float), são considerados ' Number ' no JS.
let nomePessoa = parseFloat('João B');//É possível transformar strings também, mas o resultado se torna ' NaN '.
nomePessoa += cpf;
console.log(nomePessoa);
console.log(typeof cpf, nomePessoa);

console.log(




);

console.log('Usando o Number()!!');
const cash = Number('98');
const pessoaKg = Number('67.8');
let valor = cash + pessoaKg
console.log(valor);
console.log(typeof cash);
console.log(typeof pessoaKg);
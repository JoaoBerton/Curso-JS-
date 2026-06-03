//Objetivo, criar um código simples que calcule o imc;

const nomePessoa = 'João Vitor';
const sobreNome = 'Berton';
const idade = 21;
const altura = 1.74;
const peso = 68;
let imc = peso / (altura**2)
let anoNasc = 2005;

console.log(`Seu nome é ${nomePessoa + " " + sobreNome}, você tem ${idade} anos de idade.`)
console.log(`${nomePessoa + " " + sobreNome} possui também ${altura} de altura, e pesa ${peso}KG.`)
console.log(`Seu IMC é "${imc}".
    Parabéns você esta na média. 
    Continue os hábitos saudáveis!`)

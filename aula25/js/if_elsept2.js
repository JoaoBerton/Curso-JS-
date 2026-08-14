//Tanto o if quanto o else depende um do outro.
//Caso queira testar mais de uma condição crie mais de um bloco if.

let valor = 45;

if(valor >= 45) {
    console.log('A var é maior ou igual a 45.');
}

if(valor < 10) {
    console.log('O número é menor que 10.');
}else if(valor === 15) {
    console.log('O valor da var é igual a 15.');
} else if(valor++ <= 80) {
    console.log('A var incrementada é maior ou igual a 80.');
}else if(valor <= 90){
    console.log('Seu número é menor ou igual a 90. ');
}else {
    console.log('Seu número não está dentre as condições.');
}

console.log('\tTeste de código...', valor);
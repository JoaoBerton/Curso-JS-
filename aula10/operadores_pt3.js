/*
Operadores de atribuição
* : -=, +=;
* : *=, /=;
*/

//Concatenando com +=...
let val = 30;
while(val <= 40) {
    val += 5;
    console.log(val);
    console.log(typeof val);
}

//Concatenando com -=...
let menr = 30;
console.log('Concatenando agora com sinal de -=')
while(menr >= 20) {
    menr -= 2;
    console.log(menr);
    console.log(typeof menr);
}

//Concatenando com /=
let divson = 96;
console.log('Concatenando agora com sinal de /=')
while(divson % 2 === 0) {
    divson /= 2;
    console.log(divson);
    console.log(typeof divson);
}

//Concatenando com *=...
let mult = 6;
console.log('Concatenando agora com sinal de *=');
for(let i = 6; i <= 90; i *= mult) {
    console.log(i);
    console.log(typeof i);
}
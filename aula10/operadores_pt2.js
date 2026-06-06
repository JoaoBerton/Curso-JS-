// Incremento / Decremento

// Pós-Incremento
const eau = 55
for(let i = 1; i >= eau; i++) {
    console.log(`Incremento de EAU : ${i}`);
    console.log(typeof(eau));
}
// Pré-Incremento
const Eau = 65
for(let I = 1; I >= Eau; ++I) {
    console.log(`Incremento de EAU : ${I}`);
    console.log(typeof(Eau));
}

// Pós-Decremento
const dec = -190.895;
for(let e = 3; e >= dec; e--) {
    console.log(`O resultado deste valor com o deecremento é :${e}`);
    console.log(typeof(e));
}

// Pré-Decremento
const Dec = -190.895;
for(let E = 3; E >= dec; --E) {
    console.log(`O resultado deste valor com o deecremento é :${E}`);
    console.log(typeof(E));
}

//Ordem de Procedência dos Operadores Aritméticos
/*
1°- Parênteses: " () ";
2°- Potência:  " ** ";
3°- Multiplicador:  " * ", Divisor:  " / ", Resto da Divisão:  " % ";
4°- Adição:  " + ", Subtração:  " - ".
*/

//Exemplo(s):

const numTicket = 30.90;
const pesCliente_s = 3;
let resTotal = (numTicket ** 3) / pesCliente_s + 19 * ((60 - 24) % 3);
console.log(resTotal, 'Ex Ordem');
console.log(typeof(resTotal));

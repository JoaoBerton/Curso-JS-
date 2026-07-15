/*
Dados primitivos (Imutáveis).. String, number, boolean, undefined, null (begint, symbol); -- Valor Copiado.

Dados por referência (Mutáveis).. array, object, function; --Passado por Referência.
*/
/*
let a = [1, 45, 12];
let b = [...a];

a.push(18, 21);
b.pop();
console.log(b.unshift(3, 75), 'Valores adicionados à b', b[0], b[1]);

console.log(a,'<--a\t b-->', b);
*/

let a = {
    nome: 'João',
    sobrenome: 'Berton'
};
let b = {...a};
b.idade = 23;

console.log(a,'\t', b);
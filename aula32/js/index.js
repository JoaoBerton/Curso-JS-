// Atribuição via Desestruturação  (Array)
/*
let numeros = [210, 981, 187, 212, 496, 560, 731, 1000, 972];
const [firstValue, secondValue, , , , ...rest] = numeros;

console.log(firstValue,'  ', secondValue,'  ',rest);
*/

let num = [ [21, 34, 56], [41, 30, 98], [59, 37, 16]];
const [array_0, , [, , array_3]] = num;

console.log(array_0,'\t', array_3);
console.log('\n', num[0][2]);//56*
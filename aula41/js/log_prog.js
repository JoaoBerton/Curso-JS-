//Função que cria dois numeros e retorna o maior entre eles.

const biggerNumber = (small, bigger) => small < bigger ? `The Bigger number is ${bigger}` : `The Bigger number is ${small}`;


const small = Math.floor(Math.random() * (10 - 1) + 1);
const bigger = Math.floor(Math.random() * (20 - 0) + 1);
//Chamando a Arrow Func e add valores à os parâmetros.
const valueResult = biggerNumber(small, bigger);
console.log(valueResult);


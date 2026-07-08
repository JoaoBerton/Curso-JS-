//Aprendendo sobre funções

/*
function saudacao(nome){
    console.log(`Bom dia! ${nome}`);
}
saudacao('João');
saudacao('Maria');//Esta função é reutilizável.
*/
/*
//Mais testes sobre funções

function saudacao(nome) {
    return `Olá como vai ${nome}?`;
}
const pessoa = saudacao('João');
console.log(pessoa)
//podemos salvar funções em variáveis de usarmos a função "return", para retornar um valor.
*/
/*
//Testando agora com valores numéricos

function contar(x, y) {
    const res = (x * 2) / y;
    return res;
}
const res = contar(3, 5);//Fora da função uma constante funciona, pois eu não posso acessar uma var de fora da função.
console.log(res)
console.log(contar(3, 5));
*/
/*
//Podemos deixar valores padrão em um parâmetro de uma função com '='.

function calc(x=1, y=1) {
    const rest = (x + 2) - y;
    return rest;
}
console.log(calc());
*/
/*
//Criando uma função anônima.

const valor = function (n) {
   return n ** 0.5;
};
console.log(valor(29));
console.log(valor(79));
console.log(valor(39));
*/
/*
//Arrow Function

const raiz = n => n ** (1/2);
console.log(raiz(5));
console.log(raiz(45));
console.log(raiz(65));
*/
/*
    Operadores Lógicos
    && -> And -> E; (Só retorna true se todos os valores for true).
    || -> Or -> Ou; (Só retorna true quando ao menos um dos valores for true).
    ! -> Not -> Não; (Nega ou iverte valores).
*/

const user = 'João';
const password = '808761';
const check = user === 'João' && password === '808761';
console.log(check);
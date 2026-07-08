//Usando arrays em JavaScript

//Diferente das variáveis o Array tem o índice separado por elemnto.
const pessoas = ['João', 'Marino', 'Sam'];

//Adicionando valores para o Array...
//Modo mais simples
pessoas[3] = 'Fábio';
pessoas[4] = 'Herling';
//Modo recomedado
pessoas.push('Haaland');//Adiciona no final
pessoas.push('Édson');
//Modo possível
pessoas.unshift('Charlles');//Adiciona no início
pessoas.unshift('Tiringa');

//Se quisermos também podemos apargar valores de um Array
//Modo recomendado
const deleted = pessoas.pop();//Apaga o último índice
const DelTb = pessoas.pop();
console.log('\n Itens deletados são:\t', deleted,'e', DelTb )
//Modo possível
const regist = pessoas.shift();//Apaga o primeiro índice
const regDn = pessoas.shift();
console.log('\n Itens deletados são:\t', regDn,'e', regist )
//Também pode ser assim...
delete pessoas[3];//Apaga o índice. Retornará um Array vazio.
delete pessoas[4];

//Testando se a variável é um Array
console.log('\nIsto  é um Array?\t' , pessoas instanceof Array);//true
//Também podemos acessar valores que não existem
console.log('\n Testando valores inexistentes...', pessoas[50]);//undefined

console.log('\n Comprimento do Array!', pessoas.length)
console.log('\t', pessoas);
console.log('\t Ítens cortados do Array...' ,pessoas.slice(0, -4));
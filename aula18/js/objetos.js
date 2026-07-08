    //Declarando objetos em JS

    /*
const pessoa1 = {
    nome: 'João',
    sobrenome: 'Berton',
    idade: 21
};
console.log(pessoa1.nome);
*/
/*
function pessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}//Podemos economizar código fazendo do jeito a seguir...
    const pessoa1 = pessoa('João', 'Berton', 21);
    console.log(pessoa1.nome);
    */
    /*
    function pessoa(nome, sobrenome, idade) {
        return {nome, sobrenome, idade};
    }
    const pessoa1 = pessoa('João', 'Berton', 21);
    console.log(pessoa1.nome);
    */

    //Criando funções sem escrever 'function' em objetos.
    const pessoa1 = {
        nome: 'Pedro',
        sobrenome: 'Pedigrew',
        idade: 45,
        reside: 'Sede dos comensais',
    
        fala() {
            console.log(`O nome do usuário é: \t${this.nome}  ${this.sobrenome}.`);
        },
        incrementaIdade() {
            ++this.idade;
        },
        moreInfo() {
            console.log(`Local onde ${this.nome} reside é: \t${this.reside}`);
        }
    };
        pessoa1.fala();
        pessoa1.incrementaIdade();
        pessoa1.moreInfo();
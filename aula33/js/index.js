//Atribuição via desestruturação (Objetos)

const pessoaReal = {
    nome: "Lúcio",
    sobrenome: "Malfoy",
    idade: 34,
    endereco: {
        rua: "Av.Hall",
        numero: 173
    }
};

const {nome: Cleder = "Trev", endereco: {rua, numero}} = pessoaReal;
console.log(Cleder, rua, numero);
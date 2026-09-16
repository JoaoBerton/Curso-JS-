//For of - Estrutura de Repetição


/*
Vistos Anteriormente...
For Clássico
const pessoa = "João Vitor";

for(let i = 0; i < pessoa.length; i++) {
    console.log(pessoa[i]);
}

    For In
    const pessoa = "João Vitor";
    
    for(let i in pessoa) {
        console.log(pessoa[i]);
    }

*/

//For Of

const pessoa = "João Vitor";

for(let i of pessoa) {
    console.log(i);
}
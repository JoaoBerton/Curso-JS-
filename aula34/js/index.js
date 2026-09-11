// Estrutura For(Clássica)

/*
for(let i = 0; i <= 15; i++) {
    let parImp = i % 2 === 0 ? 'É par' : 'É ímpar';
    console.log(i, parImp);
}
*/
//Index            0          1         2         3         4
const fruits = ['Apple', 'Blueberry', 'Melon', 'Lemon', 'Coconut'];

for(i = 0; i < fruits.length; i += 1) {
    console.log(`Index ${i} : ${fruits[i]}`);
}

/*
Na hora da exibição é usado o valor "fruits[i], esse endereçamento, 
é feito ao contador do for, 
que vai exibir o valor condizente com a contagem do for, 
serve para exibir automáticamente os valores de um array por ex 'Grande'."
*/
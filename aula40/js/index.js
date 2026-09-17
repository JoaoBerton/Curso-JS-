const num = [10, 15, 30, 29, 50, 60];

for(const [i, numero] of num.entries()) { //.entries Serve para iterar /valor e índice.
    if(numero === 15) {
        console.log('\n número 15 foi pulado', `index ${i} ${num[i]}`);
        continue
    }
    console.log( 'index', i, numero);
    
}
function somar(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y, devem ser números');
    }
    return x + y;
}
try {
    console.log(somar(1, null));
} catch(error) {
    console.log('Ocorreu algo inesperado');
    console.log(error)
}
function testaDate(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('O obj deveria ser uma instancia de Date!');
    }
    if (!data) {
     data = new Date();
    }
    return data.toLocaleTimeString('PT-BR', {
        hour:'2-digit',
        minute:"2-digit",
        second:"2-digit",
        hour12:false
    })
}
try{
    const data = new Date('12-10-2026 12:30:20');
    const hora = testaDate(12);
    console.log(hora);
}catch(error) {

}finally {
    console.log('Have nice day!')
}
//Data object
function zeroFirst(num) {
    return num <= 10 ? `0${num}` : `${num}`;
}
function pegarData(date) {
    const dia = zeroFirst(date.getDate());
    const mes = zeroFirst(date.getMonth());
    const ano = zeroFirst(date.getFullYear());
    const hora = zeroFirst(date.getHours());
    const min = zeroFirst(date.getMinutes());
    const seg = zeroFirst(date.getSeconds());
    const ms = zeroFirst(date.getMilliseconds());
    const ds = zeroFirst(date.getDay());

    return `${ds}\t${dia}/${mes}/${ano}\t${hora}:${min}:${seg}:${ms}`;
}
const data = new Date('2025-10-15 14:5:33:999');
const pegaData = pegarData(data);
console.log(pegaData);
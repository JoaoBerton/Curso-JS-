const num = Number(prompt('Digite um número.'));
const flot = document.getElementById('numeroFloat');
const res = document.getElementById('res')

flot.innerHTML = num;

res.innerHTML = `<p> A raiz quadrada do seu número é  <strong>${num ** (1/2)}</strong></p>.`;

res.innerHTML += `<br> Seu número é inteiro? <strong>${Number.isInteger(num)}</strong>.`;

res.innerHTML += `<br>O seu número é NaN? <strong>${Number.isNaN(num)}</strong>.`;

res.innerHTML += `<br>Seu número arredondado para baixo <strong>${Math.floor(num)}</strong>.`;

res.innerHTML += `<br>Seu número arredondado para cima <strong>${Math.ceil(num)}</strong>.`;

res.innerHTML += `<br>Seu número arredondado para duas casas decimais <strong>${Number(num).toFixed(2)}</strong>.`;

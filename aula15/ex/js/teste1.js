let num = prompt('Digite um número.');//Declarando a variável.

document.body.innerHTML = `A raiz quadrada do seu número é <strong>${num ** (1/2)}</strong>`;

document.body.innerHTML += `<br>Seu número é inteiro? <strong>${Number.isInteger(num)}</strong>`;

document.body.innerHTML += `<br>Seu número é NaN? <strong>${Number.isNaN(num)}</strong>`;

document.body.innerHTML += `<br> Seu número arredondado para baixo. <strong> ${Math.floor(num)}</strong>`;

document.body.innerHTML += `<br>Seu número arredondado para cima.<strong>${Math.ceil(num)}</strong>`;

document.body.innerHTML += `<br>Seu número arredondado para duas casas decimais.<strong>${Number(num).toFixed(2)}</strong>`;


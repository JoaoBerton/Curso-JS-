function calcularImc(){

const peso = Number( document.querySelector('input#peso').value);
const altura =parseFloat( document.querySelector('input#altura').value);

const res = document.querySelector('div#res');

const dados = peso / (altura * altura);

    res.innerHTML = "";
    
    if(dados < 18.5) {

        console.log('Formulário enviado... Situação: Abaixo do peso!');
        res.innerHTML += `O seu IMC é: <strong>${dados.toFixed(2)}</strong>, Você está abaixo do peso`;
        res.style.backgroundColor += 'gray';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    }else if(dados >= 18.5 && dados <= 24.9) {

        console.log(`Formulário enviado... Situação: Peso normal.`);
        res.innerHTML += `O seu IMC é <strong>${dados.toFixed(2)}</strong>, Você está saudável, continue assim:)`;
        res.style.backgroundColor += 'green';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    }else if(dados >= 25 && dados <= 29.9) {

        console.log('Formulário Enviado... Situação: Você está com sobrepeso.');
        res.innerHTML += `O seu IMC é <strong>${dados.toFixed(2)}</strong>, Você está saudável`;
        res.style.backgroundColor += 'green';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    } else if (dados >= 30 && dados <= 34.9) {

        console.log('Formulário enviado... Situação: Você está com Obesidade grau 1.');
        res.innerHTML += `O seu IMC é: <strong>${dados.toFixed(2)}</strong>, Você está com obesidade grau 1!`;
        res.style.backgroundColor += 'blue';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    }else if(dados >= 35 && dados <= 39.9) {

        console.log('Formulário enviado... Situação: Você está com obesidade grau 2.');
        res.innerHTML += `O seu IMC é: <strong>${dados.toFixed(2)}</strong>, Você está com obesidade grau 2.`;
        res.style.backgroundColor += 'blue';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    }else if(dados > 40) {

        console.log('Formulário enviado... Situação: Você tem obesidade grau 3.');
        res.innerHTML += `O seu IMC é: <strong>${dados.toFixed(2)}</strong>, Você está com obesidade grau 3.`;
        res.style.backgroundColor += 'blue';
        res.style.color += 'white';
        res.style.borderRadius += '10px'
        res.style.margin += '5px'
    }

}
const form = document.querySelector('form#buttom')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    calcularImc();
});

 








/*
res.style.backgroundColor += 'blue'
res.innerHTML += 'Olá'
res.style.color += 'white'
res.style.borderRadius += '10px'
res.style.margin += '5px'
*/
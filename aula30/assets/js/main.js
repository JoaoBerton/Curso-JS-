const conteudo = document.querySelector('section.container');
//Array para usar os valores de texto na função para exibir os dias da semana...
const DiaSem = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//Função para retornar os dias da semana.
const getDay = dia => {
    switch (dia) {
        case 0:
            return DiaSem[0];

        case 1:
            return DiaSem[1];

        case 2:
            return DiaSem[2];

        case 3:
            return DiaSem[3];
        
        case 4:
            return DiaSem[4];

        case 5:
            return DiaSem[5];

        case 6:
            return DiaSem[6]

        default :
        return DiaSem.push('Erro dado inválido');
    }
}

//Função para retornar os meses do ano.
const getMonth = mounth => {
    switch (mounth) {
        case 0:
            return 'Janeiro';

        case 1:
            return 'Fevereiro';

        case 2:
            return 'Março';

        case 3:
            return 'Abril';

        case 4:
            return 'Maio';

        case 5:
            return 'Junho';

        case 6:
            return 'Julho';

        case 7:
            return 'Agosto';

        case 8:
            return 'Setembro';

        case 9:
            return 'Outubro';

        case 10:
            return 'Novembro';

        case 11:
            return 'Dezembro';

        default:
            return 'Mês inválido'
    }
}


//Cria uma data nova.
const dia = new Date();
//Passando o valor do dia para o Parâmetro da função...
const GetDay = getDay(dia.getDay());
//Pegando agora o valor do dia...
const getRealDay = dia.getDate();
//Pegando agora o mês do ano...
const getMounth = getMonth(dia.getMonth());
//Pegando o ano...
const getYear = dia.getFullYear();
//Pegando as horas...
const getHours = dia.getHours();
//Pegando os minutos...
const getMinutes = dia.getMinutes();

//Exibindo os dados na web.
conteudo.innerHTML = `<strong>${GetDay}</strong> dia <strong>${getRealDay}</strong>, de <strong>${getMounth}</strong> de <strong>${getYear}</strong>. Agora são: <strong>${getHours}</strong> horas e <strong>${getMinutes}</strong> minutos.`;



//Vamos trabalhar um pouco com Switch / Case
let diaTxt;
function digaDiaSem(dia) {
    switch(dia) {
        case 0:
            diaTxt = `Dia ${dia} é Domingo, bom feriado! :)`;
            return diaTxt;

        case 1:
            diaTxt = `Dia ${dia} é Segunda-feira!`;
            return diaTxt;

        case 2:
            diaTxt = `Dia ${dia} é Terça-feira!`;
            return diaTxt;
    
        case 3:
            diaTxt = `Dia ${dia} é Quarta-feira!`;
            return diaTxt;

        case 4:
            diaTxt = `Dia ${dia} é Quinta-feira!`;
            return diaTxt;
    
        case 5:
            diaTxt = `Dia ${dia} é Sexta-feira!`;
            return diaTxt;

        case 6:
            diaTxt = `Dia ${dia} é Sábado!, bom feriado! :)`;
            return diaTxt;
        
        default:
            diaTxt = `Erro!! dado inválido...`
            return diaTxt
    }
  }

const data = new Date();
const dia = digaDiaSem(data.getDay());
console.log(dia);
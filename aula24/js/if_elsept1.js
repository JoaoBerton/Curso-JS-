//Estruturas consicionais if else

    /*
    Condiçãoes:
    0 até 11 - Bom dia;
    12 até 17 - Boa tarde;
    18 até 23 - Boa noite.
    */

    const hora = 75;

    if (hora >= 0 && hora <= 11) {
        console.log('Bom dia');
    } else if (hora >= 12 && hora <= 17) {
        console.log('Boa tarde');
    }else if (hora >= 18 && hora <= 23) {
        console.log('Boa noite');
    } else {
        console.log('Tenha um bom dia!;)');
    }
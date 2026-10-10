function criaTimer() {
    const hora = segundos => {
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };

    const timer = document.querySelector('.timer');
    let segundos = 0;
    let exibir;

    document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(exibir);

            exibir = setInterval(() => {
                segundos++;
                timer.innerHTML = hora(segundos);
            }, 1000);
        }

        if (el.classList.contains('pausar')) {
            timer.classList.add('pause');
            clearInterval(exibir);
        }

        if (el.classList.contains('reiniciar')) {
            timer.classList.remove('pause');
            clearInterval(exibir);
            segundos = 0;
            timer.innerHTML = '00:00:00';
        }
    });
}

criaTimer();
function meuEscopo() {

    const form = document.querySelector('.form');
    const result = document.querySelector('#res')

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault()
        alert(1)
    };
    */
   //Array onde os dados serão armazenados
        const pessoas = [];
    function formEvent(evento) {
        
        
        //Remover o padrão de reiniciar do navegador...
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');
    //Objeto pessoa
const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        altura: altura.value,
        peso: peso.value
}
//Armazenar os dados do objeto no array pessoas
        pessoas.push(pessoa.nome, pessoa.sobrenome, pessoa.altura, pessoa.peso);
        //Exibir no console os dados salvos, avisando que foram salvos.
console.log(nome.value, sobrenome.value, altura.value, peso.value, 'Formulário enviado...' );
        //Dados sendo exibidos na tag <div> do navegador.
        result.innerHTML += `Os dados inseridos foram <p>${pessoas}</p>`; 
}
//Escutador de eventos para o botão de enviar.
 form.addEventListener('submit', formEvent);
    }
    meuEscopo();
   
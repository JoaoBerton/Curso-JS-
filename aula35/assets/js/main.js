
const section = document.querySelector('section.container');

const elements = {
     p: "Penso logo Existo.",
     ins: "O conhecimento é como uma tábula rasa.",
     div: "O mundo é constituido por números.",
     article: "O mundo quer amor e não armas." 
    }
    
 const {p: paragrafo, ins: sublinhado, div: container, article: artigo} = elements;

 function criaP (paragraph) {
     
     const criaP = document.createElement('p');
     criaP.classList.add('paragraph');
     criaP.textContent = `${paragraph}`;

     section.appendChild(criaP);

 }

 function criaIns(sublinhar) {
     const criaSubli = document.createElement('ins');
     criaSubli.classList.add('subli-ins');
     criaSubli.textContent = `${sublinhar}`;

    section.appendChild(criaSubli);
 }

function criaDiv(content) {
     const criaCont = document.createElement('div');
     criaCont.classList.add('container');
     criaCont.textContent = `${content}`;

    section.appendChild(criaCont);
}

function criaArt(article) {
     const criaArtigo = document.createElement('article');
     criaArtigo.classList.add('artigo');
     criaArtigo.textContent = `${article}`;

    section.appendChild(criaArtigo);
}

//Chamada de função!!
criaP(paragrafo);
criaIns(sublinhado);
criaDiv(container);
criaArt(artigo);


















//Abaixo Método para criar elementos HTML diretamente...

/*
const elementsHTML = 
`
<p>
<q>Penso logo Existo</q>.
</p>

<ins><q>O conhecimento é como uma tábula rasa.</q></ins>

<div><q>O mundo é constituido por números.</q></div>

<article><q>O mundo quer amor e não armas.</q></article>
`;

section.insertAdjacentHTML('beforeend', elementsHTML);
*/
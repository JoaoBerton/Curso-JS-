const section = document.querySelector('.container');
const ps = document.querySelectorAll('.item');


const backBody = getComputedStyle(document.body);
const backgroun = backBody.backgroundColor;


ps.forEach (element => {
    element.style.backgroundColor += `${backgroun}`;
    element.style.borderRadius = '10px 5px';
});

ps.forEach(element => {
    element.style.color += 'white';
})

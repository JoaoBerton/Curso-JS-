const section = document.querySelector('.container');
const ps = document.querySelectorAll('.item');


const backBody = getComputedStyle(document.body);
const backgroun = backBody.backgroundColor;

for(let back of backgroun) {
ps.style.backgroundColor = back;
ps.style.color = 'white';
}

/*ps.forEach (element => {
    element.style.backgroundColor += `${backgroun}`;
    element.style.borderRadius = '10px 5px';
});

ps.forEach(element => {
    element.style.color += 'white';
})
*/
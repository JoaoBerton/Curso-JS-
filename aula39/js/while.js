const test = (min, max) => {
    let rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
}

const min = 1;
const max = 50;
let rand = 15

while(rand !== 15) {
    rand = test(min, max);
    console.log(rand)
}
do {
 rand = test(min, max);
    console.log(rand)
}while(rand !== 15)
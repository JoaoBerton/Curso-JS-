// setInterval e setTimeout

function theHour () {
    const data = new Date();
    return data.toLocaleTimeString( 'pt-br', {
        hour12:false
    })
}

const time = setInterval(function() {
    console.log(theHour());
}, 1000);

setTimeout(function () {
    clearInterval(time);
    console.log('hello world!');
}, 5000);

const reclaimNumber = number => {
  const result = [];
  for(let i = 0; i <= number; i++) {
    ;if(typeof(number) === 'number' && !Number.isNaN(number)) {
        result.push(i);
    }
    ;if(i % 3 === 0 && i % 5 === 0) {
        result.push(`FizzBuzz`);
    }else {
        result.push(i);
    }
    ;if(i %  3 === 0) {
        result.push('Fizz');
    }else if (i % 5 === 0) {
        result.push('Buzz');
    }
    return result;
  }
};
const showFunc = reclaimNumber(100);
console.log(showFunc);


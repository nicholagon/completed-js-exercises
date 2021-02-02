const sumAll = function(firstInput, secondInput) {
    let max = 0;
    let min = 0;
    let sum = 0;

    if(!(Number.isInteger(firstInput)) || !(Number.isInteger(secondInput))) {
        return "ERROR";
    }

    if(firstInput < 0 || secondInput < 0) {
        return "ERROR";
    }
    
    if(firstInput > secondInput) {
        max = firstInput;
        min = secondInput;
    }
    else if(firstInput < secondInput) {
        max = secondInput;
        min = firstInput;
    }

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;

}

module.exports = sumAll

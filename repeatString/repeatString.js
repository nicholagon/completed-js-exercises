const repeatString = function(inputString, count) {
    let repeatedString = '';

    if(count < 0) return 'ERROR';

    for(let i = 0; i < count; i++) {
        repeatedString += inputString;
    }
    
    return repeatedString;
}

module.exports = repeatString

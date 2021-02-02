const reverseString = function(inputString) {
    let splitStringArr = inputString.split('');
    let reverseStringArr = [];

    for(let i = 1; i <= splitStringArr.length; i++) {
        reverseStringArr.push(splitStringArr[splitStringArr.length - i]);
    }

    let reversedString = reverseStringArr.join('');
    return reversedString;
}

module.exports = reverseString

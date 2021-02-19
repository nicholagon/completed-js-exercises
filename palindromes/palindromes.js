const palindromes = function(word) {
    let arr = word.toLowerCase().split("");
    let origString = []
    let newString = [];

    for(let i = 0; i < arr.length; i++) {
        if(isSmallLetter(arr[i]))
            origString.push(arr[i]);
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        if(isSmallLetter(arr[i])){
            newString.push(arr[i]);
        }
            
    }
    return origString.join() === newString.join();
}

function isSmallLetter(character) {
    return (character >= 'a' && character <= 'z');
}

module.exports = palindromes

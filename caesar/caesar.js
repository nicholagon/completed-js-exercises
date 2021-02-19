const caesar = function(plaintext, key) {
    const MAX_LETTERS = 26;
    const SMALL_A = 97, SMALL_Z = 122;
    const BIG_A = 65, BIG_Z = 90;

    let arr = plaintext.split("");
    let newArr = [];
    let newKey = reduceKey(key);
    
    for(let i = 0; i < arr.length; i++) {
        if(!isBigLetter(arr[i]) && !isSmallLetter(arr[i])) {
            newArr.push(arr[i]);
        }
        else if(isSmallLetter(arr[i])) {
            let letter = arr[i].charCodeAt() + newKey;
            if(letter < SMALL_A) {
                let excess = SMALL_A - letter;
                let finalShift = SMALL_Z - --excess;
                newArr.push(String.fromCharCode(finalShift)); 
            }
            else if(letter > SMALL_Z) {
                let excess = letter - SMALL_Z;
                let finalShift = SMALL_A + --excess;
                newArr.push(String.fromCharCode(finalShift)); 
            }
            else {
                newArr.push(String.fromCharCode(letter));
            }
        }
        else if(isBigLetter(arr[i])) {
            let letter = arr[i].charCodeAt() + newKey;
            if(letter < BIG_A) {
                let excess = BIG_A - letter;
                let finalShift = BIG_Z - --excess;
                newArr.push(String.fromCharCode(finalShift)); 
            }
            else if(letter > BIG_Z) {
                let excess = letter - BIG_Z;
                let finalShift = BIG_A + --excess;
                newArr.push(String.fromCharCode(finalShift)); 
            }
            else {
                newArr.push(String.fromCharCode(letter));
            }
        }
    }
    return newArr.join("");
}

function reduceKey(key) {
    const MAX_LETTERS = 26;
    let newKey = 0;
    if(key < 1) 
        newKey = -(Math.abs(key) % MAX_LETTERS);
    else
        newKey = key % MAX_LETTERS;
    return newKey;
}

function isSmallLetter(character) {
    return (character >= 'a' && character <= 'z');
}

function isBigLetter(character) {
    return (character >= 'A' && character <= 'Z');
}

module.exports = caesar

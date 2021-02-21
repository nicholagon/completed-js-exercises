const fibonacci = function(number) {
    let fib = []
    let i = 0, j = 1, temp = 0;
    
    if(number <= 0) return "OOPS";
    
    while(fib.length !== +number) {
        fib.push(j);
        temp = i + j;
        i = j;
        j = temp;        
    }
    
    return fib[fib.length - 1];
}

module.exports = fibonacci

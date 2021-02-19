function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum () {
	const numbers = [...arguments[0]];
	const sum = numbers.reduce((total, number) => {
		return total += number;
	}, 0);
	return sum;
}

function multiply () {
	const numbers = [...arguments[0]];
	const product = numbers.reduce((total, number) => {
		return total *= number;
	});
	return product;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(number) {
	let factorial = 1;
	for(let i = 1; i <= number; i++) {
		factorial *= i;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
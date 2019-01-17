function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let total = 0;
	for (let i = 0; i < a.length; i++) {
		total += a[i];
	}
	return total;
}

function multiply (nums) {
	let total = nums[0];
	for (let i = 1; i < nums.length; i++) {
		total *= nums[i];
	}
	return total;
}

function power(n, p) {
	return n ** p;
}

function factorial(n) {
	if (n < 2) {
		return 1;
	} else {
		let f = 1;
		while (n >= 2) {
			f *= n;
			n--;
		}
		return f;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
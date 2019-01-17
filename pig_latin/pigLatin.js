function translate(str) {
	let words = str.split(' ');
	const vowels = ['a','e','i','o','u'];

	let arr;
	for (let i = 0; i < words.length; i++) {
		let arr = Array.from(words[i]);

		if (vowels.includes(arr[0])) {
			words[i] += 'ay';
		} else {

			do {
				arr.push(arr.shift());
			} while (!vowels.includes(arr[0])
					|| arr[arr.length - 1] === 'q');

			words[i] = arr.join('') + 'ay';
		}
	}

	return words.join(' ');
}


module.exports = {
	translate
}


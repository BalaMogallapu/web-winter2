function isFib(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1 || n == 2) {
		return 1;
	} else {
		return isFib(n - 1) + isFib(n - 2);
	}
}

function filterFib(array) {
	let result = [];
	for (let i = 0; i < array.length + 1; i++) {
		if (isFib(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}
console.log(filterFib([1, 13, 4, 5, 34, 23, 99, 55]));

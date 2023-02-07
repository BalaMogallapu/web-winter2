function getFibonocci(n) {
	if (n <= 1) {
		return n;
	} else {
		return getFibonocci(n - 1) + getFibonocci(n - 2);
	}
}
console.log(getFibonocci(3));

function add(a, b) {
	return a + b;
}

console.log("Addition of two numbers: " + add(3, 5));

function divide(a, b) {
	return a / b;
}

console.log("Dividing two numbers: " + divide(30, 5));

function convert(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

console.log("Temperature in Celsius: " + Math.round(convert(56)) + " C");

function divisibleBy55(num) {
	if (num % 55 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log("Check if number is divisible by 55: " + divisibleBy55(55));

function checkLength(myString) {
	return myString.length;
}

console.log("Length of the string: " + checkLength("Bhavitha"));

function concat(str1, str2) {
	return str1 + str2;
}

console.log("Concation of two strings: " + concat("cat ", "dog"));

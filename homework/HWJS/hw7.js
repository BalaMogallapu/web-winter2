function discount(date) {
	switch (date) {
		case 1:
			console.log("Too early");
			break;
		case 15:
			console.log("Here is your discount");
			break;
		case 30:
			console.log("Too late");
			break;
		default:
			console.log("Not a valid date");
	}
}

discount(15);

function buildArray(num1, num2) {
	if (num1 < num2) {
		let array = [];
		let i = 1;
		while (i < num2 - num1) {
			array[i] = num1 + i;
			console.log(array[i]);
			i++;
		}
	}
}
buildArray(7, 19);

function object(myObject) {
	var array = [];
	for (let key in myObject) {
		array.push(key);
		// array += myObject[key] + " ";
	}
	console.log(array);
}

const myObject = { name: "Jack", email: "jack@gmail.com", age: 30 };
object(myObject);

function profit(prices) {
	let max = 0;
	let purchase = prices[0];
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < purchase) {
			purchase = prices[i];
		} else {
			max = Math.max(max, prices[i] - purchase);
		}
	}
	return max;
}

const price = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
console.log("Profit: " + profit(price));

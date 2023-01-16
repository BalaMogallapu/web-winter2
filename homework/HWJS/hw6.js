console.log("Print the calender");
function printCalender(month, date) {
	for (let i = 0; i < month.length; i++) {
		for (let j = 0; j < date.length; j++) {
			console.log(month[i] + " " + date[j]);
		}
	}
	return 0;
}
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printCalender(month, date);

// Clone array
// function cloneArray(arr1, arr2) {
// arr2 = [...arr1]; //Using spread['...'] operator
// 	console.log(arr2);
// }
console.log("Print clone/duplicate array");
function cloneArray(arr1, arr2) {
	arr2 = arr1;
	console.log(arr2);
}
let arr1 = [4, 6, false, 6, 7, true, 8, 9, "bhavitha"];
let arr2 = [];
cloneArray(arr1, arr2);

// function should check if the array has an element in the nth position or not
console.log("Check the element in array and return the element");
function getNthElement(arr, n) {
	if (arr[n]) {
		console.log(arr[n]);
	} else {
		console.log("element does not exist");
	}
}
let arr = [4, 6, "JavaScript", 6, "", true, 8, 9, "bhavitha"];
let n = 2;
getNthElement(arr, n);

// customize push method for array
console.log("Print the length of the array after push");
function customPush(arr, item) {
	let n = arr.length - 1;
	arr[n + 1] = item;
	console.log(arr);
	console.log("Length of the array after inserting 9 is: " + arr.length);
}
let array1 = [1, 3, 5, 7];
customPush(array1, 9);

// customize pop method for array
console.log("Print the popped out element");
function customPop(arr) {
	let n = arr.length - 1;
	console.log("Deleted element: " + arr[n]);
}
let array2 = [3, 7, 4, 9, 5, 6];
console.log(array2);
customPop(array2);

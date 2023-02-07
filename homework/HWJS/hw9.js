class Animal {
	constructor(color, eyes, legs) {
		this.color = color;
		this.eyes = eyes;
		this.legs = legs;
	}

	eat() {
		console.log("The animal is eating");
	}

	sleep() {
		console.log("The animal is sleeping");
	}
}

const cat = new Animal("black", 2, 4);
const dog = new Animal("brown", 2, 4);
const snake = new Animal("green", 2, 0);

console.log(cat);
console.log(dog);
console.log(snake);

class Bird {
	constructor(name, color, eyes, legs) {
		this.name = name;
		this.color = color;
		this.eyes = eyes;
		this.legs = legs;
	}
	getName() {
		return this.name;
	}
	setName(newName) {
		this.name = newName;
	}
	eat() {
		console.log(`${this.name} is eating`);
	}
	sleep() {
		console.log(`${this.name} with ${this.legs} is sleeping`);
	}
}
const parrot = new Bird("Sita", "Green", 2, 2);
parrot.setName("Ram");
console.log(parrot.getName());
console.log(parrot);
parrot.eat();
parrot.sleep();

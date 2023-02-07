class Building {
	#hasWalls;
	#numOfWalls;
	#roofShape;
	constructor(hasWalls, numOfWalls, roofShape) {
		this.#hasWalls = hasWalls;
		this.#numOfWalls = numOfWalls;
		this.#roofShape = roofShape;
	}

	gethasWalls() {
		return this.#hasWalls;
	}

	sethasWalls(walls) {
		this.#hasWalls = walls;
	}

	getnumOfWalls() {
		return this.#numOfWalls;
	}

	setnumOfWalls(wallCount) {
		this.#numOfWalls = wallCount;
	}

	getroofShape() {
		return this.#roofShape;
	}

	setroofShape(shape) {
		this._roofShape = shape;
	}

	openDoor() {
		console.log("Opening building door...");
	}

	closeDoor() {
		console.log("Closing building door...");
	}
}

class Gym extends Building {
	#gymName;
	#hasPool;
	constructor(hasWalls, numOfWalls, roofShape, gymName, hasPool) {
		super(hasWalls, numOfWalls, roofShape);
		this.#gymName = gymName;
		this.#hasPool = hasPool;
	}

	getgymName() {
		return this.#gymName;
	}

	setgymName(newGymName) {
		this.#gymName = newgymName;
	}

	gethasPool() {
		return this.#hasPool;
	}

	sethasPool(pool) {
		this.#hasPool = pool;
	}

	openGym() {
		console.log(`Opening gym ${this.#gymName}...`);
	}

	closeGym() {
		console.log(`Closing gym ${this.#gymName}...`);
	}
}

class Bank extends Building {
	#numOfVault;
	#numOfStaff;
	#name;
	constructor(hasWalls, numOfWalls, roofShape, numOfVault, numOfStaff, name) {
		super(hasWalls, numOfWalls, roofShape);
		this.#numOfVault = numOfVault;
		this.#numOfStaff = numOfStaff;
		this.#name = name;
	}

	getnumOfVault() {
		return this.#numOfVault;
	}

	setnumOfVault(vaultCount) {
		this.#numOfVault = vaultCount;
	}

	getnumOfStaff() {
		return this.#numOfStaff;
	}

	setnumOfStaff(staffCount) {
		this.#numOfStaff = staffCount;
	}

	getname() {
		return this.#name;
	}

	setname(newName) {
		this.#name = newName;
	}

	openBank() {
		console.log(`Opening bank ${this.#name}...`);
	}

	closeBank() {
		console.log(`Closing bank ${this.#name}...`);
	}
}

const gym = new Gym(true, 4, "Triangular", "Gold's Gym", true);
const bank = new Bank(true, 4, "Sphere", 2, 250, "CitiBank");
gym.setnumOfWalls(7);
console.log(gym.getnumOfWalls());
bank.openBank();

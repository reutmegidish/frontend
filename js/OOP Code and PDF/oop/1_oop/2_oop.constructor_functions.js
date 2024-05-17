/*
  Here's an example of abstraction, encapsulation, inheritance, and polymorphism using constructor functions

  This code demonstrates the use of object-oriented programming concepts such as abstraction, encapsulation, 
  inheritance, and polymorphism in JavaScript. It first shows how to implement these concepts using a constructor 
  function and then using ES6 classes. The example creates two objects: a Car and a Dog. The Car and Dog classes 
  inherit from a parent class Vehicle and Animal, respectively, and have their own unique properties and methods. 
  The Car class encapsulates its manufacturer property and exposes it through getters and setters. 
*/


// Abstracting the common properties and methods in a base class
// and extending it to child classes
// Vehicle constructor function
const Vehicle = function(name) {
    this.name = name;
};

Vehicle.prototype.drive = function() {
    console.log(this.name + ' is driving.');
};

// Car constructor function
const Car = function(name, manufacturer) {
    // Call the parent constructor (Vehicle) with this and name
    Vehicle.call(this, name);

    // Encapsulation example
    // Making properties private by only exposing them through getters and setters
    let _manufacturer = manufacturer;

    this.getManufacturer = function() {
        return _manufacturer;
    };

    this.setManufacturer = function(manufacturer) {
        _manufacturer = manufacturer;
    };
};

// Inherit the Vehicle prototype methods
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Polymorphism example
// Overriding the drive method of the parent class
Car.prototype.drive = function() {
    console.log(`${this.name} made by ${this.getManufacturer()} is driving.`);
};

// Example usage:
const car = new Car("Honda Civic", "Honda");
car.drive(); // Output: Honda Civic made by Honda is driving.


// VehicleClass class
class VehicleClass {
	constructor(name) {
		this.name = name;
	}

	drive() {
		console.log(this.name + ' is driving.');
	}
}

// CarClass class extending Vehicle
class CarClass extends VehicleClass {
	constructor(name, manufacturer) {
		super(name); // Call the parent constructor with name

		// Encapsulation example
		// Private field (using Symbol to simulate private property)
		let _manufacturer = manufacturer;

		this.getManufacturer = function () {
			return _manufacturer;
		};

		this.setManufacturer = function (manufacturer) {
			_manufacturer = manufacturer;
		};
	}

	// Polymorphism example
	// Overriding the drive method of the parent class
	drive() {
		console.log(`${this.name} made by ${this.getManufacturer()} is driving.`);
	}
}

// Example usage
const carClass = new CarClass('Honda Civic', 'Honda');
carClass.drive(); // Output: Honda Civic made by Honda is driving.

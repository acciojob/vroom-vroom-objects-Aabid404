// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

// SportsCar constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // Call Car constructor to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Example usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200

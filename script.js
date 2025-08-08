// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel=function (){
	return'${this.make} ${this.model}';
};

//SportCar Constructor

function SportsCar(make, model, topSpeed) {
	Car.call (this, make, model);
	this.topSpeed=topSpeed;
}

	SportsCar.prototype=object.create(car.prototype);
	SportsCar.protoptype.constructor=SportsCar;

	SportsCar.prototype.getTopSpeed=function () {
		return this.topSpeed;
	};

// Do not change the code below
const car = new SportsCar("Ferrari", "Testarossa", 200);
window.Car = Car;
window.SportsCar = SportsCar;

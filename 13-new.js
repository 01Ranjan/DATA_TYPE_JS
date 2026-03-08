function TataCar(chassisNumber, modelName) {
  // step create { } object
  // link prototype of empty object with this class
  // bound of this  or this binding
  // explicte return
  this.chassisNumber = chassisNumber;
  this.modelName = modelName;
  this.fullLever = 100;
}

TataCar.prototype.status = function () {
  return `Tata ${this.modelName}  #  ${this.chassisNumber}  | fuel: ${this.fullLever}`;
};

const car1 = new TataCar("MH-01", "NEXON");

console.log(car1.status());

function AutoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto  ${this.id}  ${this.route}`;
    },
  };
}// factory function hota ha 

const auto1= AutoRickshaw("UP-01","Lucknow-kanpu");
const auto2= AutoRickshaw("UP-02","Agara-Mathura");






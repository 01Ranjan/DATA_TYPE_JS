function cookDish(indgredient, style) {
  return `${this.name} preaper ${indgredient} in ${style} style`;
}

const sharmakitchen = { name: "sharme jis kitchen" };
const guptaketchen = { name: "gupta jis kitchen" };

const guptaOrder = ["chole kulche", "indian"];

// console.log(cookDish.call(sharmakitchen, "paneer", "mugali"));
// console.log(cookDish.call(sharmakitchen, ...guptaOrder));

// console.log(cookDish.apply(guptaketchen, guptaOrder));

const num = [100, 34, 23, 54];
// console.log(Math.max.call(null,...num));

// console.log(Math.max(...num));

const deliveryBoy = "Ranveer";
const newdeliveryBoy={name:"ram"};

// console.log("call :", cookDish.call(deliveryBoy,"roti","home"));

// console.log("bind :", cookDish.bind(newdeliveryBoy,"sabji","bengoli"));
// this return the function 

const bindreturn1=cookDish.bind(newdeliveryBoy,"curry",'bihari');
const bindreturn2=cookDish.bind(newdeliveryBoy);
//  console.log(bindreturn2("rice","newzeland"));

 




 

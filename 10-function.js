function brePoint(indgredient, dose) {
  return ` Brewing option with ${indgredient} (X${dose})`;
}

const mixElixire = function (indgredient) {
  return `mixture with ${indgredient}`;
};

const distileEssence = (ing) => {
  return `mixing elexir with ${indgredient}`;
};

function myfun() {
  console.log("type ", typeof arguments);
  console.log(Array.isArray(arguments));
  console.log(Object.entries(arguments)); // give array of array
  // console.log(Array.from(arguments)) // give array
  const arrayArg = Array.from(arguments).map((o) => o.toUpperCase());
}
// myfun("ranjan", "rahul");

const arrowBrew = () => {};
arrowBrew();
// console.log("progran continue");



// IIFE imidate invock function expression
// const postionShop = (function () {
//   console.log("hellow from ranjan");
// })();

// postionShop

// Second way 
(()=>(console.log("IIFE Second way")
))()

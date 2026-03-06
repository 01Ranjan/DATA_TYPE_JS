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
// (()=>(console.log("IIFE Second way")
// ))()
function another(arrowBrew){
return function newBrew(){
    console.log("call from new brew ");
    
}
}//  return function, take  is high order function

const portionShop= (function(){
    let inventory=0;
    return{
        brew(){
            inventory++;
            return`brew Portion ${inventory}`
        },
        getStock(){
            return inventory;
        }
    }
})();

// console.log(portionShop);//holdes function defination

// console.log(portionShop.brew());// run the function

// console.log(portionShop.brew.inventory);// undefine 
//***************journy start for clouser ***************/

// in IIFE no clouser is allowed to take any tifin


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
// myFunc();



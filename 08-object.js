
const hero ={
    name:'Luna the Brave',
    class:'Mage',
    level:12,
    health:85,
    mana:120,
    isActive:true
};

// hero.weapon='gun';

// delete hero.level;

// console.log(hero);

// console.log("name" in hero);
// console.log('toString' in hero); // true  due to protype chaining

const key=Object.keys(hero);
const value=Object.values(hero);

const enteries= Object.entries(hero);

// for(const [key,value] of enteries){
//     console.log(` ${key} : ${value}`);
// };


const newobj= Object.fromEntries(enteries);


Object.defineProperty(hero,"catelogId",{
    value:'Sec-999',
    writable:false,
    enumerable:true,
    configurable:false
})

const myDetail={
  name:'ranjan',
  enrollement:'0117EC231044',
  branch:'electronic',
  passOutYear:2027,
  currentCGPA:'7.34',

}

// for(const key in myDetail){
//     console.log(key);
    
// }

// for(const  key in myDetail){
//   console.log(myDetail[key]);
// }

function myValues(myobj){
    for(const key in myobj){
        return key;// return first value before compleating the loop 
    }
}
console.log(myValues(myDetail));








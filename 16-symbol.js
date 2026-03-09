const addhar_of_ranjan=Symbol("aadhar");
const addhar_of_Ravi=Symbol("aadhar");

// console.log(typeof addhar_of_ranjan);
// console.log(addhar_of_Ravi===addhar_of_ranjan);

// console.log(addhar_of_ranjan.toString);
// console.log(addhar_of_ranjan.description);

const nonIndian= Symbol();
// console.log(nonIndian.description);// undefine

const biomaetricHash= Symbol("biomatricHash");
const bloodGroup= Symbol("bloodGroup");
const citizen={
    name:"ramesh",
    age:'23',
    [biomaetricHash]:'hadb9hwr9320-1nd',
    [bloodGroup]:'o+'
}

// console.log(Object.keys(citizen));
// console.log(Object.getOwnPropertySymbols(citizen));

const rtiQueryBook={
    queries:['infra budget','ration cade','Education Budge','startup law'],
     
}

// for(const query of rtiQueryBook){
//     console.log(`${query}`);
    
// }// not iterable because symbole.iterator is not implemented 

const myRtiFile={
    queries:['edecation','health','infra Stracture','defence'],
    [Symbol.iterator](){
        let index=0;
        const queries=this.queries
        return{
            next(){
              if(index<queries.length){
                return {value : queries[index++],done:false}
              }
              return{value:undefined,done:true}
            }
        }
    }
}

// for (const query of myRtiFile){
//     console.log(query);
    
// }


// one another way 
const cityInMp={
    cities:['Mp Nagar','Neelbad','New Market','Old Bhopal','Inderpuri','Piplani'],
    *[Symbol.iterator](){
        for (const citie of this.cities){
            yield citie;
        }
    }
}

// for(const city of cityInMp){
//     console.log(city);
    
// }

// easy approach

// for(const citie of Object.values(cityInMp)){
//     console.log(citie);
    
// }

// next apporatch 
// for(const [key,value] of Object.entries(cityInMp)){
//     console.log(key,value);
    
// }

const queries=[...cityInMp.cities]
// queries.forEach(o=>console.log(o)
// )
 

const governmentScheme={
    name:'PM kissan Yojana',
    people:56,
    [Symbol.toPrimitive](hint){
        if(hint==='string')// if convert into string 
            return this.name
        if(hint==='number'){// if convert int number
            return this.people
        }
    }
}

console.log(+governmentScheme);
console.log(`${governmentScheme}`);
console.log(Number(governmentScheme));




 








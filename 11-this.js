console.log(this);
 function ranbirOnGlobleScope(){
    return typeof this;
 }

 console.log(ranbirOnGlobleScope());

 function ranvirWithNoscript(){
    'use strict'
    return this;// undifine in strick mode
 }
 console.log(ranvirWithNoscript());
 
const bollywoodfilm={
    name:'Bajiro Mastani',
    lead:'Ranveer',
//     intrroduce: function(){
//    return `${this.lead} performs in ${this.name}`}

    intrroduce(){
      return `${this.lead} performs in ${this.name}`
    }
};

console.log(bollywoodfilm.intrroduce());

const flimDirector={
    name:'sanjay leela Bhansali',
    cast:['Ranveer','deepika','priyanka'],
    anoucmentCast(){
        this.cast.forEach((actor)=>{
         console.log(`${this.name} introducess ${actor}`)// detached function this is present in arrow function
        })
    }
}

// flimDirector.anoucmentCast()

const flimset={
  crew:"Sport boy",
  preaperProps(){
    console.log(`Outer this crew ${this.crew}`);
    function arrangechair(){
        console.log(`inner this crew ${this.crew}`); 
        // regular nested function this is undefine    
    }
    arrangechair()
    const arrangeLight=()=>{// this arrowfunction have this due to detach function
        console.log(`Arrow this crew ${this.crew}`);
        
    }
    arrangeLight()
  },
   
}
// flimset.preaperProps();

const actor={
    name:'Ranveer',
    bow(){
        return`${this.name} takes a bow`
    }
}
// console.log(actor.bow());// detach function run 

const detchedBow=actor.bow// it is detach function it do not take clouser

// console.log(detchedBow());












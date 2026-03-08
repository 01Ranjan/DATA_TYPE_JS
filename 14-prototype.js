const prithviraj={
    name:'prithviraj',
    generation:'grandfather',
    cookTraditionaldish(){
        return ` ${this.name} cooks an ancient family recipe `
    },
};

const raj= Object.create(prithviraj);
raj.name='raj';
raj.generation='father';
raj.bussiness= function (){
    return `${this.name} can run business`
}

// console.log(raj);

const ranbir= Object.create(raj);
ranbir.name='ranbir';
ranbir.generation='son'
ranbir.makefilm= function (){
    return `${this.name} Can make flim`
}





Array.prototype.last=function(){
    return this[this.length-1];
}

// console.log([1,2,5].last());

Array.prototype.towTime= function(){
    let newArray=this.map(element=>(element*2))
   return newArray
}// when we overide any methord is called polifill
// even we can write our on methord ;

console.log([2].towTime());











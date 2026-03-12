

const turant= Promise.resolve("Turant");
// console.log(turant);


// .any ,all ,allSettled,apply,bind , call , resolve reject etc

const allPromise= Promise.any(
    [
    Promise.resolve("chai"),
    Promise.resolve('code'),
    Promise.reject("error")
    ]
);

// allPromise.then(console.log)

const hPromiss= new Promise((res,rej)=>{
   setTimeout(()=>{
    res("Masterji")
   },1000);
})

 async function nice(){
    const result = await hPromiss
    console.log(result);
    
}
// nice();

const rPromis= new Promise((res,rej)=>{
   setTimeout(()=>{
    res(("mai koi promiss nahi ka raha hu"))
   },2000) 
})

async function  no(){
    try {
     const result =  await rPromis
    console.log(result);
    } catch (error) {
        console.log(error.message);
        
    }
    
}

// no();

console.log("ranjan");
Promise.resolve("resolved value").then((val)=>console.log("microtask",val))

console.log("ketan");


function boliWater(amount){
   return new Promise((res,rej)=>{
    console.log(`kerte hai ji boil water`);
    if(amount<0 || typeof amount!=='number')
        rej(new Error(`amount should be in ml and greater than 0`))
    setTimeout(()=>{
        res(`water boile ho gaya`)
    },2000)
   })
   
}

// boliWater(300)
//     .then((mes)=>console.log(`resolved`,mes))
//     .catch((err)=>console.log(`error hai : ` ,err))

 async function boli(water){
    try {
        const result=await boliWater(water);
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

// boli(2000);




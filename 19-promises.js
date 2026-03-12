// Async java script

 // pending , done(fullfil,resolve), nop(not , reject,nako);
 const promis= new Promise((resolve,rejecte)=>{
    resolve("chaicode")
 });

//  console.log(promis);


const Ipromiss= new Promise((res,rej)=>{
    setTimeout(()=>{
        res('chaicode');
    },1000)
})
// console.log(Ipromiss);


// setTimeout(()=>{
//  console.log(Ipromiss);
// },1001)



//***********/ .then required function  

// Ipromiss
//     .then((value)=>{
//         console.log(value);
        
//     })


//or it insert the value in the given function

// Ipromiss.then(console.log)




const myFunction= function(data){
   console.log(data);
   
}


// Ipromiss.then(myFunction);



// hendeling error by second parameter in .then

const yourPromiss= new Promise((res,rej)=>{
    setTimeout(()=>{
        res('chaicode');
    },1000)
})

// yourPromiss
//     .then(data=>console.log(data),err=>console.log(err))



yourPromiss
.then((data)=>{
    newdata=data.toUpperCase();
    return newdata
})
.then((returnValue)=>{
    return returnValue+'.com'
})
.then(console.log
)

 
 


 
 
 
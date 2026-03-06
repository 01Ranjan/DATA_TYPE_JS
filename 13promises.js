// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve ho gaya");
//   }, 2000);
//   setTimeout(()=>{
//     rej(new Error("Jaldi nahi ho paye ga"))
//   },1500)
// });

// console.log(promise);// state bata dega 



// promis resolve hone pe hamko time ka pata hona preege estarike se
// setTimeout(() => {
//   console.log(promise);
// }, 2500);





// promise.then((resolveValue)=>{console.log(resolveValue)})// jo v promish return kar raha hi usko 

//promise.then(console.log)// .then insert kardeta hai value ko jo promis deta hai


// promise
//     .then(
//         (resval)=>{console.log(resval)},
//         (rejval)=>{console.log("bhai nahi ho paye ga")} // err v handel ho jata hai
//     )


// promise
//     .then(console.log)
//     .catch(rejected=>(console.log(`Error   :-------------------${rejected.message}`)))


const abhi= Promise.resolve("ye lo bhai order cupan ")


//console.log(abhi);


// abhi
//     .then(console.log)


const Kavinah= Promise.reject("mu dekha hai kavi ayene me");


// console.log(Kavinah);


Kavinah.catch(console.log
)

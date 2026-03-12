function preaperOrder(dish){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(!dish){
                rej (new Error('no dish is prepred'))
                return 
            }
            console.log(`${dish} is ready`);
            res({dish,status:'preper'})
            
        },1000)
    })
}

function peackUpOrder(order){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(!order){
            reject(new Error("Order is not placed"));
            return
        }
        console.log(`${order} is shiped`);
        resolve({...order, status:"precered"})
       },1000)
   })
}

function DeliverOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!order){
                reject(new Error ("Order is not passed"))
                return
            }
            console.log(`${order} deliver sucessful`);
            resolve({...order,status:'deliver'})
        },1000)
    })
}


preaperOrder("chai")
 .then((order)=>peackUpOrder(order))
 .then(order=>DeliverOrder(order))
 .catch(err=>console.log(err))



 

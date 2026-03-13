
function add(a,b){
    return a+b;
}
add(3,4) // if it is requested 10Million time than cpu requred high
function square(n){
    return n*n
}
// clouser And High order can do this

const cache={};
const sqcache={};

function add1(a,b){
 const key=`${a}:${b}`
    if(cache[key]){
        return cache[key]
       }
 const result =a+b;
 cache[key]=result       
}

function square1(a){
    if(sqcache[a]){
       return sqcache[a]
    }
    const result =a*a;
    sqcache[a]=result;
}


// by using clouser to share the one cache

function createOptimizeVerson(fn){
    const teffin={};
    return function(...args){
        const key = JSON.stringify(args);
        if(teffin[key]){
           return teffin[key] 
        }
        const result = fn(...arg);
        teffin[key]=result;
        return teffin[key];
    }
}

const optimiseAdd= createOptimizeVerson(add);
const optimisesquare= createOptimizeVerson(square);

optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);
optimiseAdd(2,3);

optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);
optimisesquare(500000);












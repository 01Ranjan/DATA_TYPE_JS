
function bootNavigation(mapLoaded){
    try {
        console.log(`Is Navigation Loaded : ${mapLoaded}`);
        if(!mapLoaded){
            throw new Error('map was not passed in this function')
        }
        return 'nav_ok'
    } catch (error) {
        console.log(error);
        console.log('navigation fail' ,error.message);
        
        
    }
    finally{
        console.log('compleated');
        
    }
}

const status1= bootNavigation(true);
console.log(status1);


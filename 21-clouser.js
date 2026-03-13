
function init(){
  let name=`ranjan` 
  function introduce(){
     console.log(name);
       
  }
  introduce();
}
//  init();


 function makeFunc(){
    const name='ramesh'
    function introduce(){
        console.log(name);
        // return name
        
    }
    return introduce;
 }

 const makeIntro=makeFunc();
//  makeIntro();

function startCompany(){
    function ca( name){
        return `name of your compny is ${name}`
    }
    return ca;
}

const getMeCompany=startCompany();

// console.log(getMeCompany("urban saathi"));

function eternal(guest){
  const guestName=guest;
  function zomato(){
    console.log(`hi ${guestName} from zomato`);  
  }
  function blinkit(){
    console.log(`hi ${guestName} from blinket`);
  }
//   zomato();
//   blinkit();
return{zomato,blinkit}
}

const hitesh=eternal('hitesh');
hitesh.blinkit()

function eternal2(guest){
    const name=guest
      let count=0;
    function zamato(){
       
        if(count>=1) return

        console.log(`hi ${name} from zamato`);
        count++;
    }
    function blinkit() {
        console.log(`hi ${name} from blinkit`);
        
    }
    return{zamato,blinkit}
}
const newGuest=eternal2('rambabu');
newGuest.zamato()
newGuest.zamato()

// teffin-box   [[SCOPE]]

// clouser
 









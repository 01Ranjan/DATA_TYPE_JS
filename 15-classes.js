
class Cricketer{
  constructor (name,role){
    this.name=name,
    this.role=role,
    this.matchPlayed=0,
    this.stemina=100
  }
  //introduce= function(){}
  introduce(){
    return`${this.name} the  ${this.role}  | matchPlayed ${this.matchPlayed}`
  }
}

const player1= new Cricketer("virat ","batsman");

console.log(player1.hasOwnProperty("name"));
// console.log(player1.introduce());

console.log(typeof Cricketer);

class Debutant{
    constructor(name){
        this.name=name,
        this.walkout=()=> (`${this.name} is playing for first time`)
    }
}









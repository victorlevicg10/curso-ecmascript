///declarando

class User {};

class user {
    greeting(){
        return 'Hello';
    }
};

const gndx =new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());


// constructor

class user{
    constructor(){
        console.log('nuevo usuario');
    }

    greeting(){
        return 'Hello';
    }
}
const david=new user();

///this --hace refrencia al elemento padre que lo contiene.

class user {
    constructor(name){
        this.name=name
    }
    
    //metodos

    speak(){
        return 'Hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

}

    const ana=new user('Ana');
    console.log(ana.greeting());

///setters and getters

class user{

    //constructor
    constructor (name,age){
        this.name=name;
        this.age=age;

    }
    speak(){
        return 'Hello';
    }

    greeting(){

        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}
const bebeloper1=new user('David',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);

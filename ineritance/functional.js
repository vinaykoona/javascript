class Animal {
    constructor(name){
    this.name=name;
    }
    eat(){
    console.log(`${this.name} , is eating ...`);
    }
    }
    
    // child class
    class Dog extends Animal{
    bark(){
    console.log(this.name ,"says woof!");
    
    }
    
    }
    const obj=new Dog("Max");
    obj.eat();
    obj.bark();
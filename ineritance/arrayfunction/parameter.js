const add=(a,b) => a+b;
console.log(add(2,3));
const sub=(c,d) => c-d;
console.log(sub(4,6));
const mul=(a,b)=>a*b;
console.log(mul(2,5))

 //with single parameter
 const square=s=>s*s;
 console.log(square(3))

 //zero parameter
 const greet=()=>console.log("hello")
 greet();

 const person={
    name:"nani",
    age:23,
    pincode:20928383,

 }
 console.log(person)
 const person1= (name,age) => ({name,age});
 console.log(person1('john',30));



  
 const numbers =[1,2,3,4,5,6,7];
 const doubleNumbers= numbers.map(num=>num*2);
 console.log(doubleNumbers);


 const number =[1,2,3,4,5];
const evenNumbers=number.filter(num=>num%2==0);
console.log(evenNumbers);

//object desturbing:Destructing in Javascript basically means
// breaking down of a complex structure ( Object and Array ) into simpler parts .
// ( we can unpack it with bunch of variables )

const person2={
    name:'John',
    age:30,
    address:'Hyd'
    };
    
    const {name,age,address}=person2;
    console.log(name,age,address);


    // Array Destructing

const arr=[20,30,40,50];
console.log(arr[0]);
const[val1,val2,val3,val4]=arr;
console.log(val1,val2,val3,val4);
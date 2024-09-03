"use strict";
// const bookings=[];
// const createBooking=function(flightNum,numpassengers=1,price=199*numpassengers){
//  const booking={
//     flightNum,numpassengers,price

//  };
//  console.log(booking)
//  bookings.push(booking);

// };
// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);
// createBooking('LH123',undefined,1000);
// console.log(bookings);

// passing arguments value and refernce

const flight = "LH34"; // primitive  type
const jonas = {
    // refernce type
    name: "sham",
    passport: 23456778,
};

// const checkIn=function(flightNum,passenger){
//     flightNum='Lh34';
//     passenger.name='mr.'+passenger.name;

//     if(passenger.passport===23456778){
//         alert('check insucessful')
//     }
//     else{
//         alert('wrong passport')
//     }
// };
// checkIn(flight,jonas);
// console.log(flight);  // here flightn num doesnt change  due to primitive type
// console.log(jonas);  // here paaasenger name chaneged due to rfernce type

// // is same as doing
// const flightNum=flight;
// const paaasenger=jonas;

// const newpassport=function(person){
//     person.passport=Math.trunc(Math.random()*10000);
// }

// newpassport(jonas);
// checkIn(flight,jonas);

////===== CALL BACK FUNCTIONS ====/////
/// JavaScript functions are executed in the sequence they are called.
// function myDisplayer(some) {
//     // document.getElementById("demo").innerHTML = some;
//   }

//   function myFirst() {
//     myDisplayer("Hello");
//   }

//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   myFirst();
//   mySecond()

// const myname = function (first, lastname) {
//     // return first, lastname; // it will not return firstname in console due to The issue is with the return statement in your myname function. In JavaScript, the comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. So, in your function, return first, lastname; evaluates first and then returns lastname.
//     return [first, lastname];
// };
// const result = myname("samara", "mittapalli");
// console.log(result);

// // calling a function by passing parameter as a function
// const myfather=function(myname){
//     return myname;

// }
// console.log(myfather(['samara',"reddy"]));
// // console.log('hello');


const oneword=function(str){
    return str.toLowerCase()

};
//  console.log(oneword('SHA'))
const upperword=function(str){
 const upper=str.toUpperCase();
 return upper;
// console.log("hello")
}
console.log(upperword('dsjdofjd')); //This should log 'DSJDOFJD'


const tranformation=function(str,fn){
console.log(fn(str));
}
tranformation('sahma',upperword); //This should log 'SAHMA'









// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };
  
  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };
  
  // Higher-order function
  const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
  
    console.log(`Transformed by: ${fn.name}`);
  };
  
  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);
  
  // JS uses callbacks all the time
  const high5 = function () {
    console.log('👋');
  };
  document.body.addEventListener('click', high5);
  ['Jonas', 'Martha', 'Adam'].forEach(high5);




  //===== function that returns another function=====//


  function func1(){
     return function func2(){
        console.log('from func2');
    };
  
  };
//   func1();  //it will not work 
  func1() ();  // an additional pair of parentheses (), you immediately call the returned func2 function, which logs 'from func2' to the console.If you run this code, you should see the output
// or store result in a varible 
const result=func1();
result();


const greet=function(greeting){
    return function(name){
        console.log(greeting,name)
    };

};
const greethey=greet('hey');
greethey('jonas');
greethey('steven');
// or
greet('hello')('jonas');



// by using ararow
const greetarr=(greeting)=>(name)=>console.log(`${greeting}${name}`);

greetarr('hi')('sham');









// example
function fun1() {
    function fun2() {
        return "From function fun2";
    }
    return fun2();
}
 
function GFG_Fun() {
    console.log(fun1());
}
GFG_Fun()


//Example 2: In this example, “Alert from fun2” is returned from the fun2 along with an alert, Returned value is finally returned by fun1. 


function fun1() {
    function fun2() {
        console.log("From function fun2");
        return "Alert from fun2 ";
    }
    return fun2();
}
 
function GFG_Fun() {
    console.log(fun1());
}
GFG_Fun()







///----- call() method-------///

//normal method
const person ={
 
  fullname:function(){
    return this.firstname +" "+ this.lastname;
  }
}
const person1 = {
    firstname:"Mary",
    lastname: "Doe"
  }

// document.getElementById('demo').style.color="blue";
const person2={
  firstname:'sahama',
  lastname:'reddy'

}


// // doesnot work
// // person1.fullname()



 document.getElementById('demo').innerHTML=person.fullname.call(person1);
console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));


// The call() Method with Arguments
// The call() method can accept arguments:




const persons = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const persons1 = {
  firstName:"John",
  lastName: "Doe"
}
const persons2 = {
  firstName:"Jo",
  lastName: "Do"
}
//The call() method takes arguments separately.


const results=persons.fullName.call(persons1, "Oslo", "Norway");
console.log(results);
document.getElementById('demo').innerHTML=persons.fullName.call(persons1,'oslo','norway');



//// --- apply method-----///

//The apply() method takes arguments as an array.
const results1=persons.fullName.apply(persons1, ["Oslo", "Norway"]);

console.log(results1)


// instead of using  apply we can use call by using spread operator 
const data=['usa','america'];
const results12=persons.fullName.call(persons1, ...data);
console.log(results12)


//----- bind  method-------

/// With the bind() method, an object can borrow a method from another object.

const p = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const p1 = {
  firstName:"John",
  lastName: "Doe"
}
const p2 = {
  firstName:"Jo",
  lastName: "Do"
}
let binda=p.fullName.bind(p1);
console.log(binda("New York", "USA"));



/// create a own  bind method 

let name={
  firstname:'akas',
  lastname:'reddy'
}
let fullname=function(hometown,state,country){
  console.log(this.firstname+' '+this.lastname+" "+hometown+" "+ state+' '+country);

}
 let printname=fullname.bind(name,'chennai');
 printname('tamilnadu','india','')



///== building own bind method 

//1. every function in javascript should have accesses to bin method so similarly every funct sholud have acesses to my bind 

// for that we use  Function.prototype.mybind

//2 . In above example printname gets a function by writing  fullname.bind(name) which can be later invoked 
// so same case we need to do for my bind method for that we are returning a function. to get later invoked
//  if we printname() the function sholud be excuted  iin above 
// In same case we can get these by "this"
// this ---> printname() so storing "this" in a varible
// directly call by using obj.call() an also we need to call by refernce varible  (name) a way to that extracted arguments like  (...args) 


//(...args) is rfering to (name) we need to pass another params

// args[0] will be the name
// to pass argument to the function  params =args.slice(1); will remove the first element
//  obj.call(args[0],params); if do these the params also become a array for that we need to use apply

// still not solved it work only for one argument 
//and the state will be passed from printmyname2() these will be received in the function what we are returning
// for that we used (...args2)
// to pass these arguments inside the obj .apply   obj.apply(args[0],params) we have params already to rcetify these we use [...params ,...args2] these will create an array and pass into the apply method 


Function.prototype.mybind=function(...args){
  //this ---> printname()
  let obj=this
  let params=args.slice(1);
  return function(...args2){
    // obj.call(args[0],params);
    obj.apply(args[0],[...params,...args2]);

  }

}

let printname2=fullname.mybind(name,'karanataka','india');
printname2('tamilnadu');




// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);



// bind with add event listenere
 lufthansa.planes=300;
 lufthansa.buyplanes=function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
 }
 document.querySelector(".buy").addEventListener('click',lufthansa.buyplanes.bind(lufthansa));


 // partial application
 const addTax=(rate,value)=>value+value*rate;
 console.log(addTax(0.1,200));
 const addVAT=addTax.bind(null,0.23);
// addVAT=value=>value+value*0.23


console.log(addVAT(100));





////===== Immediately invoked function expressions (IIFE)

const runOnce=function(){
  console.log('this will run again')
}
runOnce();


/// iife ======
(function(){
  console.log('this will never run again');
  //const ispribate=23; // we cannot access to due functon scope
})();
// console.log(ispribate);

// arrow function 

(()=>console.log('this will also never run again'))();




//closures
// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   a=100;  // if we change the a value i
//   return y;
// }
// var z=x()
// console.log(z);
// z();



function z(){
var b=900;
function x(){
  var a=7;
  function y(){
    console.log(a,b);
  }
  y();
}
x();
}
// var z=x()
// console.log(z);
z();




// uses 
function a(){
  var i=1;
  setTimeout(function(){
    console.log(i)
  }, 3000);     ///  set timeout takes the call back function  and stores into some place and attach the timer(3000) to it  an djavscript processed it doent wait for anything  once the timer expires takes the function and return thr output 
  console.log ('hello');  // first the hrllo will print after that i wll print 

}
// a()



// incrament numbers 1 will be 1 s and 2 will b e2s 3 will be 3 sec 
// if we use var the out will  be different 
function c(){
  for (let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i);
    },i*1000)
  }
  console.log('javascript');
}
// c();



function d(){
  for (var i=1;i<=5;i++){

  function close(i){
    {
      setTimeout(function(){
        console.log(i);
      },i*1000)
    }
  }
    close(i)

  }
  
  console.log('javascript');
}
d();




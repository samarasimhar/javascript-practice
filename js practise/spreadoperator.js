//without using spread opetror
// const number1=[1,2,3]
// const number2=[23,56,number1[0],number1[1],number1[2]];
// console.log(number2);

// we can easily use spread opertor to over come these

const number1=[1,2,3]
const number2=[23,56,78];
//jon 2 arrays 
const combined=[...number1,...number2];
console.log(combined);
// console.log(...number1,...number2);

// need elemnets individually
console.log(...combined);





const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
   
    openinghours:{
      thu:{
          open:12,
          close:22,
      },
      fri:{
          open:11,
          close:23,
      },
      sat:{
          open:0,
          close:24,
      },
    },

    orderPasat: function (ing1,ing2,ing3) {
        console.log(`here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
    },
    orderpiza:function(mainingredient,...others){
        console.log(mainingredient,others);
    }
};
restaurant.orderpiza('mushroom','onion','olive');

// to add new elemnts in an array
const newmenu=[...restaurant.mainMenu,'gnoci','kabali']
console.log(newmenu);
 
//copy array
//shallow copy
const mainMenuCopy=[...restaurant.mainMenu];

// prompt an array using spread oprator
// create an array ingredentis
// const ingredients=[prompt("let's make a pasta ingredient 1?'"),
//     prompt('ingredient 2'),
//     prompt('ingredient 3'),
// ];
// console.log(ingredients);
// restaurant.orderPasat(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasat(...ingredients);





// for objects
const newresturant={...restaurant,foundedIn:1998,founder:'sham'};
console.log(newresturant);


// shallow copy
const restaurantcopy ={...restaurant};
restaurantcopy.name='resatdads';
console.log(restaurantcopy.name);  // resatdads  it will change only in copy object not change in main object when we use spread operator.

console.log(restaurant.name);//Classico Italiano 






// const str='jonas';
// const letters=[...str, '','s'];
// console.log(letters);
// console.log(...str) // jonas

// console.log(`${...str}`);  // spread operator will not work in template literal



const person={
    name:'sham',
    age:24

};
console.log(person);
const newperson={...person

};
console.log(newperson)
newperson.age=23;
console.log(newperson.age);
console.log(person.age)



// spread beacuse of right side '='.
const arr=[1,2,...[2,2,3]]
console.log(arr)

// rest pattern because of left side '='
const[a,b,...others]=[2,2,3,4,5]
console.log(a,b,others)


// using spread on both sides  for arrays

const [pizza, ,risto,...other]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risto,other);


//objects
const{sat,...weekdays}=restaurant.openinghours;
console.log(weekdays);
// passing multiple parameters to a function 

const add=function(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    sum=sum+numbers[i];
    console.log(sum);
};
add(2,3);
add(2,3,4);
const x=[2,3,5];
add(...x);




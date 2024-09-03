
//or operator
console.log(3||'jonas');
console.log(''||'jons');
console.log(undefined||null);

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderpizza:function(mainingredient,...others){
        console.log(mainingredient,others);
    }
  };
  restaurant.orderpizza('mushroom','onion','olive');

//pratical example
  restaurant.guest=20;
const guest1=restaurant.guest?restaurant.guest:10;
console.log(guest1)
  
const guets2=restaurant.guest||50;
console.log(guets2);

// and oprtaor
console.log("____AND___");

console.log(3 &&'jonas');
console.log('hello'&&22&&null&&'jonas');


//pratical example
if(restaurant.orderpizza){
    restaurant.orderpizza('mushroom','spinach')
}

// or use and 
restaurant.orderpizza&&restaurant.orderpizza('mushroom','spinach');


// nullish colescing opertaor 

//ex work 


restaurant.guest=0;
const guets=restaurant.guest||50;
console.log(guets);

//using a nullish opetaor 

const guet=restaurant.guest??50;
console.log(guet); // print  0 bcause we define 0 for rstunat.guest if first operand is undefined or null it will return second operand 




//or assignemnet operator


const rest1={
    name:'sjam',
    numGuests:0
};

const rest2={
    name:'capi',
    owner:'sham'
}

//or assignment operator
// rest1.numGuests=rest1.numGuests||10;
// rest2.numGuests=rest2.numGuests||10;

// rest1.numGuests||=10;
// rest2.numGuests||=10;


//nullsish assignement operator (null or undefined)
rest1.numGuests??=10;
rest2.numGuests??=10;

rest2.owner=rest2.owner&&'<annamous>';

console.log(rest1);
console.log(rest2);
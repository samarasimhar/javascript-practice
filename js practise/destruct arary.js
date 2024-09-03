// destructring array

const resturant={
  name:'balali',
  location:'chennai',
  starterMenu:['veg','nonveg','piza','burger'],
  catga:['coke','pespsi','maza'],
  variety:['garlic','bread','chick'],
  order:function(startindex,mainindex){
    return(this.variety[startindex],this.catag[mainindex]);
  }
};

 //const[first,sceond]=resturant.catag; // to acess first and second element

 let[first,, second]=resturant.catag; // to acess the first and third element  we can simply leave out the "nonveg" but keep the comma
 console.log(first,second);


 [first,second]=[second,first]; // swap using destructing an array without using third varible
  console.log(first,second);

const temp=first;   // swap using third varible
 first=second;
second=temp;
 console.log(first,second);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//receive 2 return values from a function
let result=restaurant.order(2,0);
const [starter, main] = restaurant.order(2, 0);
 console.log(starter, main);

// nested destructuring 
const nested = [1, 2, [23, 56]];
// const[i, , j]=nested;
// destructing inside a destructing
const [i, , [j, k]] = nested; // to acess elemens  invidually in an nested array.
console.log(i, j, k);

//default values
const [p=1,q=1,r=1]=[8,9]; // if we remove the value of 8 and 9 the default vlaue will be 1 .
console.log(p,q,r)



const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
 const[[,rating],[,ratingsCount]]=ratings
 console.log(rating,ratingsCount);



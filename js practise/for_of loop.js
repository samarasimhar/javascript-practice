
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
const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu)

// use for of  loop to iterate over elements in an array.
for(let item of menu)
console.log(item);




// destructring using  for of loop

for(const [i,e] of menu.entries()){
    console.log(`${i+1}:${e}`);
}


// const array1=['a','b','c','d'];
// for(const elements of array1){
//     console.log(elements);

// }






 //------ looping objects [keys,values,entries]----//
 const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
   
   
  
    orderPasat: function (ing1,ing2,ing3) {
        console.log(`here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
    },
    orderpiza:function(mainingredient,...others){
        console.log(mainingredient,others);
    },
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }};


  //property names
  const properties=Object.keys(openinghours);
  console.log(properties);

  let openstr=`we are open ${properties.length} days:`
  for(const day of properties){
    openstr=openstr+`${day}, `;
  }
  console.log(openstr);




  // property values
  const values=Object.values(openinghours);
  console.log(values);

// entire object 
const entries=Object.entries(openinghours);
console.log(entries);


//[key ,value]

for(const [day,{open,close}] of entries){
  console.log(`on ${day} we open at ${open }and close at ${close}`);
}







// 
// for(const day in openinghours){
 
// console.log(day);
// }

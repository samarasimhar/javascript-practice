// destructuring object

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

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // passing object as a parameter in fuction
  //   orderdelivery:function(obj){
  //     console.log(obj); // calling a object
   // }
   // passing 4 parameters for one object

  //  orderdelivery:function({
  //     starterIndex,mainIndex,address,time,
  //  })
  //  {
  //      console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`); // calling a object
  //      }

  // psaaing a default values 
  orderdelivery:function({
          starterIndex=1,mainIndex=0,address,time='22:30',
       })
    {
           console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`); // calling a object
            }
      
  };

// passing a objet to a a 4  parameter object
  restaurant.orderdelivery({
      time:'22:30',
      address:"via putur",
      mainIndex:2,
      starterIndex:2,

  });
  restaurant.orderdelivery({
      
      address:"via chennai",
   
      starterIndex:1,

  });


// destructing object



  const{name,openinghours,categories}=restaurant;
  console.log(name,openinghours,categories);


  // change names
  const{name:resturantname,
      openinghours:hours,
      categories:tags,
  }=restaurant;
  console.log(resturantname,hours,tags);

  //default values 

  const{menu={},starterMenu:starters={}}=restaurant;
console.log(menu,starters);

//mutating varbiles
let a=111;
let b=999;
const obj={a:22,b:23,c:14};
({a,b}=obj); // we get error when we dont use parthesis 
console.log(a,b);


// nested objects
const{fri:{open,close}}=openinghours;
console.log(open,close);
const{fri:{open:o,close:c}}=openinghours;
console.log(o,c);
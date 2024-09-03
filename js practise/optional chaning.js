


// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
 
//   openinghours:{
//     thu:{
//         open:12,
//         close:22,
//     },
//     fri:{
//         open:11,
//         close:23,
//     },
//     sat:{
//         open:0,
//         close:24,
//     },
//   },

//   orderPasat: function (ing1,ing2,ing3) {
//       console.log(`here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
//   },
//   orderpiza:function(mainingredient,...others){
//       console.log(mainingredient,others);
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
// }};


// console.log(restaurant.openinghours.mon.open);  // get a error because mon  is not defined 

// to avoid error we use if 
// if(restaurant.openinghours.mon)
// console.log(restaurant.openinghours.mon.open);

// if(restaurant.openinghours.fri)
// console.log(restaurant.openinghours.fri.open); // 11

// if(restaurant.openinghours &&restaurant.openinghours.mon)
//   console.log(restaurant.openinghours.mon.open );


//with out optipnal chnaging
//  console.log(restaurant.openinghours.mon.open); // Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//with optional chaining 
//  console.log(restaurant.openinghours.mon?.open);    // only if mon esixt then open propety wiil read if not immediately undefined.

// console.log(restaurant.openinghours?.mon?.open);


//example




// const days=['mon','tues','wed','thu','fri','sat','sun'];
//  for(const day of days){
//   //  console.log(days);
//    const open=restaurant.openinghours[day]?.open?? 'closed';
//  console.log(`on ${day}, we open at ${open}`);


//  }

//  // methods
//  console.log(restaurant.order?.(0,1)??'method not exist')
//  console.log(restaurant.orderRisto?.(0,1)??'method not exist')

// //arrays

// const user=[{name:'shma',age:12,email:'sham@gmail.com'}];
// console.log(user[0]?.name??'user array empty ')









/*//using nullish with optional
function studentPhysicsGrade(student) {
    const physicsGrade = student?.Grades?.Physics ?? "Grade Unknown";
    console.log(physicsGrade);
  }
  
  
studentPhysicsGrade({
    name: "Sam",
    Grades: {
        Physics: 100,
        Chemistry: 99,
        Maths: 82
       
    }
   
  }); // 100
  
  studentPhysicsGrade({
    name: "Rosa",
    details: { age: 19 },
  }); // Grade unknown
  
  studentPhysicsGrade({
    name: "Katie",
    Grades: {
        English: 67,
        Chemistry: 20,
        Maths: 100,
    }
  }); // Grade unknown */
  



 const openinghours={
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
  };



 
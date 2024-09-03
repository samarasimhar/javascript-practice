

const weekdays=['mon','tues','wed','thu','fri','sat','sun'];
// we can acees the array inside the object
const openinghours={

    [weekdays[3]]:{
        open:12,
        close:22,
    },
[weekdays[5]]:{
        open:11,
        close:23,
    },
    [weekdays[7]]:{
        open:0,
        close:24,
    },

    // thu:{
    //     open:12,
    //     close:22,
    // },
    // fri:{
    //     open:11,
    //     close:23,
    // },
    // sat:{
    //     open:0,
    //     close:24,
    // },

  };

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
   
    // we can access outside object(global).
    openinghours,


    // we can change the functions syntax also 


    orderPasat(ing1,ing2,ing3) {
        console.log(`here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
    },
    orderpiza(mainingredient,...others){
        console.log(mainingredient,others);
    }
    // orderPasat: function (ing1,ing2,ing3) {
    //     console.log(`here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`);
    // },
    // orderpiza:function(mainingredient,...others){
    //     console.log(mainingredient,others);
    // }
};

console.log(restaurant.openinghours);
console.log(restaurant.orderPasat);









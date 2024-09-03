
// set remove duplictes in an array

const orders=new Set(['pasta','piza','pasta','Risto','piza']);
console.log(orders);

console.log(orders.size) // to find the length 
console.log(orders.has('piza'));  // to check whether element is present or not   // to check whether element is present or not 
console.log(orders.has('bread'));  // to check whether element is present or not 
// console.log(orders.clear()); // clear all elements 
console.log(orders.entries());  // return entries 

orders.add("garlic"); // to add elements in a set 
console.log(orders);

orders.delete('Risto') // to delete elements in a set 
console.log(orders);

for(const oreder of orders){
    console.log(oreder);
};

// example 
const staff=['waiter','chef','waiter','manager','chef','waiter'];
const staffunique=new Set(staff);
console.log(staffunique);

console.log(new Set('johnas'))  // to find iterables 
console.log(new Set('johnas').size)  // to find iterables length 

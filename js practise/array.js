
/// slice()
const array=['a','b','c','d'];
console.log(array.slice(2));
console.log(array);
// in slice method the orginal array cannot be over ride



/// splice

array.splice(-1);
console.log(array);
array.splice(1,2);
console.log(array);
//  In splice method the orginal array can be over ride


// Reverse
const arra=['a','b','c','d'];

const arra2=['j','i','h','g','f']
console.log(arra2.reverse());
console.log(arra2) /// the orginal arary also revresed

//concat
const letter=arra.concat(arra2);
console.log(letter);
// we can also do using spread
console.log([...arra ,...arra2])



/// join()
console.log(letter.join("+"))
// at()
const arr=[24,36,67]
console.log(arr[0]);
console.log(arr.at(0));


// getting last elemnt in arr
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// get the char of string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));



//for of()
const movements =[200,450,-400,3000,-650,-130,70,1300];

for(const movement of movements){
    if(movement>0){
        console.log(`you deposited  ${movement}`);
    }
    else{
        console.log(`you with drew${Math.abs(movement)} `)
    }
}


// for getting index using for of 

for(const[i,movement] of movements.entries()){
    if(movement>0){
        console.log(` Movement ${i+1}:you deposited  ${movement}`);
    }
    else{
        console.log(` Movement ${i+1}:you with drew${Math.abs(movement)} `)
    }
}



console.log('--- for Each--')

//using for each
 movements.forEach(function(movement){
    if(movement>0){
        console.log(`you deposited  ${movement}`);
    }
    else{
        console.log(`you with drew${Math.abs(movement)} `)
    }
 })



 // to find the index 
 movements.forEach(function(mov,i,arr){
    if(mov>0){
        console.log(`Movement ${i+1}:you deposited  ${mov}`);
    }
    else{
        console.log(`Movement ${i+1}:you with drew${Math.abs(mov)} `)
    }
 })


///using for each for map
const currencies=new Map([
    ['USD','United States dollar'],
    ['EUR','Euro'],
    ['GBP','Pound sterling'],
]);
currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
});

const currency=new Set(['usd','usd','GDP','EUR','EUR']);
console.log(currency);
currency.forEach(function(value,key,map){
    
    console.log(`${key}:${value}`);
})






const airline="Tap Air portugal";
const plane='A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// To find the length of string
console.log(plane.length);

console.log(airline.indexOf('r'));  // to find the index of particular element
console.log(airline.lastIndexOf('r'));  // to find the index of particular element  from the next
console.log(airline.indexOf('portugal'));  // to find the index of particular word

console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1)); // to remove the  space we added +1


console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

// example usage 

const checkMiddleSeat=function(seat){
    // B and E are middle seats
    const s=seat.slice(-1);
    // console.log(s);
    if(s==='B'||s==='E'){
        console.log(`you got middle seat🤦‍♂️`);
    }
    else{
        console.log(`you are lucky😊😊`)
    }

};

checkMiddleSeat('11B');
checkMiddleSeat('3C');
checkMiddleSeat('12E');



console.log(airline.toLowerCase()); // convert into lower case
console.log(airline.toUpperCase()); // convert into upper case


// convert the first letter to uppercase
const person ='jOnAs'; //Jonas
const lower=person.toLowerCase();
// console.log(lower);
const correct=lower[0].toUpperCase()+lower.slice(1);
console.log(correct);


// comparing email 
const email='hello@jonas.io';
 const loginEmail=' Hello@Jonas.Io \n ';
// const lowerEamil= loginEmail.toLowerCase();
// // console.log(lowerEamil);
// const trimedEmil=lowerEamil.trim();  // .trim() remove white spaces in a string on  a both sides 
// console.log(trimedEmil);


// short cut
const normalized =loginEmail.toLowerCase().trim();
console.log(normalized);

console.log(email===normalized);


// replace 
const priceGb="22,95E";

// const priceUS=priceGb.replace("E","$");
// chaining 
const priceUS=priceGb.replace("E","$").replace(',','.');

console.log(priceUS);


const name="samatas";
const realname=name.replace("samatas", "samarasimha");
console.log(realname);


// booolens 
const plane1='Airbus A320neo';
console.log(plane1.includes("A320")); // it returns true if a string contains a specific string 
console.log(plane1.includes("boeing"));
console.log(plane1.startsWith('Ai'));
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')){
    console.log('part of the new Airbus family');

}

//exercise
const checkBaggage=function(item){
    const baggage=item.toLowerCase();
    if(baggage.includes('knife')|| baggage.includes('gun')){
        console.log(' you are not allowed');

    }
    else{
        console.log('welcome abroad!');
    }
}
checkBaggage('I have a laptop ,some food and a pocket knife');
checkBaggage('socks and camera');
checkBaggage(('Got soem snacks and gun for protection'));



/// split : split a string into an array
console.log('a+very+nic+string'.split("+"));
console.log('samara reddy'.split(" "));



//join 

let a = [1, 2, 3, 4, 5, 6];
console.log(a.join()); 


let b=['a','b','c'];
console.log(b.join(" "))

// split and join 

const [firstname,lastname]='jonas schmedtmann'.split(' ');
// console.log(firstname);
const newName=['mr',firstname,lastname.toUpperCase()].join(' ')
console.log(newName);


//capatialize letters

const captialize=function(name){
    const names=name.split(" ");
    const arra=[]
    console.log(names)
    for(const n of names){
        //  const newname=n[0].toUpperCase()+n.slice(1);
        const newname=n.replace(n[0],n[0].toUpperCase())
         const newarr=arra.push(newname)
     


    }
    console.log(arra.join(" "));
}
captialize('jessica and smith davis');
captialize



// padding 
const message ='go to 23!';
 console.log(message.padStart(20,"+"));
 console.log(message.padEnd(20,"+"));
 console.log(message.padStart(20,"+").padEnd(30,"+"));


 
 const maskcredit=function(number){
    const str=number+"";
    const last=str.slice(-4);
    console.log(last)
    return last.padStart(str.length,"*");
 }
 console.log(maskcredit(64637836));


 //repeat
 const meassage='Bad weather ... all flights dealyed';
 console.log(meassage.repeat(4));

 const plane12=function(n){
    console.log(`there are ${n} planes` .repeat(n))
 }
 plane12(3);




let text = "       Hello World!        ";
let result = text.trim();  // trim() remove white spaces 
console.log(result);

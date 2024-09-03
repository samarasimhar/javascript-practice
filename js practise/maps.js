const resto = new Map([
    ["apple", 500],
    ["orange", 200],
]);
console.log(resto); // map syntax

const rest = new Map();
// add a elements to a map using set
rest.set("name", "italin");
rest.set(1, "firenee"), rest.set(2, "itly");
console.log(rest);

// change elemnts using set
rest.set("name", "hyperhotel");

rest
    .set("categoires", ["italin", "piza"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open ")
    .set(false, "we are close");

console.log(rest);

console.log(rest.get("name")); //get a values from a map
// console.log(rest.get(true));

// example
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categoires")); // to check whether element present or not
rest.delete(2); // delete keys
// rest.clear();
console.log(rest);
console.log(rest.size); // to find the size

rest.set([1, 2], "test");
console.log(rest.get([1, 2])); // get undefined

rest.set(document.querySelector(".h1"), "heading");
console.log(rest);
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));

const question = new Map([
    ["question", "what is best programming lang in the world "],
    [1, "c"],
    [2, "java"],
    [3, "javascript"],
    ["correct", 3],
    [true, "correct"],
    [false, "tryagain"],
]);
console.log(question);

// using loop
// quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`answer ${key}:${value}`);
    }
}

// const answer=Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//convert map to array

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// convert object to map

// const openinghours={
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
//   };

//   console.log(Object.entries(openinghours));
//   const hoursMap=new Map(Object.entries(openinghours));
//   console.log(hoursMap);


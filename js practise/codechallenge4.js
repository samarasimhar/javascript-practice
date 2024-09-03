// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!


// 
// // Create and append textarea
// const textarea = document.createElement('textarea');
// document.body.append(textarea);

// // Create and append button
// const button = document.createElement('button');
// button.textContent = 'Get Text';
// document.body.append(button);

// // Add event listener to button to get textarea value
// button.addEventListener('click', () => {
//     const text = textarea.value;
//     console.log(text); // or do something with the text
// });


document.addEventListener('DOMContentLoaded', () => {
    // Create and append textarea
    const textarea = document.createElement('textarea');
    document.body.append(textarea);

    // Create and append button
    const button = document.createElement('button');
    button.textContent = 'Get Text';
    document.body.append(button);

    // Add event listener to button to get textarea value
    button.addEventListener('click',function()  {
        const text = textarea.value;
        const rows=text.split("\n")
        for(const[i, row] of rows.entries()){
            const[first,second ]=row.toLowerCase().trim().split('_');
            // console.log(row,first,second);
            const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
                console.log(`${output.padEnd(20,' ')}${'✅'.repeat(i+1)}`); // or do something with the text

            // console.log(first,second.replace(second[0],second[0].toUpperCase()))
        }

    });
});




// underscore_case
// first_name
//  Some_Variable 
//   calculate_AGE
// delayed_departure
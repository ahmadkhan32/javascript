/*console.log ( "add the Number")
function addThreeNumbers(a, b, c) {
    return a + b + c;
}
 let result = addThreeNumbers(5, 10, 15);
console.log("The sum of the numbers is: " + result);



console.log("The function has been executed successfully.");



console.log("End of the script.");
            
*/


//////For Loop.js//////
/*let sum = 0;
let n= prompt("Enter the number of n");
n = Number. parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i+1)
}
console.log("The sum of first " + n + " natural numbers is: " + sum);

*/
//////For In Loop//////

/* let object = {
    harry: 25,  
    rohan: 20,
    shubham: 30,
    Ahmad: 35,
    Ali: 40,
    Aamir: 45,
    Ahmed: 50,
    Aliya: 55,


};  

for (let a in object) {
    console.log("Marks of " + a + " are: " + object[a])
} */

    //While Loop//////
/*
let n = prompt("Enter the value of n");
n = Number.parseInt(n);         
let i = 0;

while (i < n) {
    console.log(i);
    i++;
}  

console.log("Done");

*/
//////Functions//////
/*
const   hello = () => {
    console.log("Hello Dunia");   
    return "Hi there";  
}


function avg (a, b) {
    return 1+ (a + b)/2
}
const sum = (p, q) => {
    return p + q   
}
let a = 1;
let b = 2;
let c = 3;
let v =hello();
console.log(v);

console.log("One  Plus Average of a and b is ",avg(a, b)) 

console.log("One  Plus Average of b and c is ", 1 + (b + c)/2) 

console.log("One  Plus Average of b and c is ", 1 + (c + a)/2) 
console.log(sum    (5, 10));


*/
 //Practice of Loops and Functions//////

/*  let marks =    {
    harry: 25,
    rohan: 20,
    shubham: 30,
    Ahmad: 35,
    Ali: 40
}
for (let i=0; i<marks.length; i++) {
    console.log(`Names are : ${i} and values are : ${marks[i]}`);
} */
// for (let i =0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " are: " + marks[Object.keys(marks)[i]]);
// }

/*

let name = "Aliii"
//console.log(name.length);

console.log(name[0]);
console.log(name[1]);
let friends = "AlAamir" 
console.log(friends)
//let friend = "Aamir"
//console.log(myfriend);

//templete literals
let boy1= "Aamir"
let boy2 = "Ali"
// Amier is a friend of Ali
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence);

//Escape sequence characters 
let fruit = 'Bana\'na'
console.log(fruit);

*/

//String Methods
// let name = "Ahmmd"
    // console.log(name.length)
    // console.log(name.toUpperCase())
    // console.log(name.toLowerCase())
    // console.log(name.slice(2, 4))
    // console.log(name.replace(2))
    // console.log(name.replace("Ah", "Sh"))


    // let friend = "Aamir"
    // console.log(name.concat(" is a friend of ", friend, "OK"))
    // let friend2 = "  Aamir  "
    // console.log(friend2)
    // console.log(friend2.trim())

// let fr = "Ahmad"
// console.log(fr[0])
// console.log(fr[1])          
// console.log(fr[2])
// console.log(fr[3])  

// fr = "m" + fr.slice(1); //This will not work as string is immutable
// console.log(fr)


// for (let i = 0; i < fr.length; i++) {
//     console.log(fr[i])
// }

//  for (let index in fr) {
//   console.log("Index:", index, "Character:", fr[index]);
// }

// <----Function to replace character at a specific index in a string---->

// function replaceChar(str, index, newChar) {
//   return str.substring(0, index) + newChar + str.substring(index + 1);
// }

// let fr = "Ahmad";
// let newFr = replaceChar(fr, 0, "f");

// console.log(newFr); // mhmad


// <----Practice on Chapter 4 string Questions---->

//Problem 1

// let Str = "Ahm\"";
// console.log(Str.length);

//Problem 2
// const sentence = "Quick brown fox jumps over the lazy dog";
//     const word = "fox2";
//     console.log(sentence.includes(word)); // true
//     console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`); // 12

// Problem 3
// const lowcaseString = "hello world";
// const upcaseString = lowcaseString.toUpperCase();

// console.log(upcaseString); // "HELLO WORLD"


// const lowcaseString = "hello world";

// // Split into words
// const words = lowcaseString.split(" ");

// // Convert only the first word to uppercase
// words[0] = words[0].toUpperCase();

// // Join the words back into a string
// const result = words.join(" ");

// console.log(result); // "HELLO world"


//<--Problem 4, Exact the amount of string-->

// let str2 = "Give me some money RS1000"    
// let amount = Number.parseInt(str2.slice(21))
// console.log(amount);
//  console.log(typeof amount);

//<--Problem 5, change the number of words in a string-->
// let friends = "Aamir Ali Ahmad"
// friends[3]  = "e"  //This will not work as string is immutable



// <--Chapter 5- Prachce Set-->


// let marks_class12 = [20, 30, 40, 50, 60 ,   70, 80, 90, false, "Absent"]
// console.log(marks_class12)
// console.log(marks_class12[0])
// console.log(marks_class12[1])
// console.log(marks_class12[2])
// console.log(marks_class12[3])
// console.log(marks_class12[4])
// console.log(marks_class12[5])
// console.log(marks_class12[6])

// console.log("The length of the array is: " + marks_class12.length)
// marks_class12[6] = 100
// console.log(marks_class12)

// marks_class12[6]   = 1000
// marks_class12[0]   = 1000
// console.log(marks_class12)
// console.log(typeof marks_class12)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let b = numbers.toString()
// console.log(b, typeof b)
// let c = numbers.join("and")
// console.log(c, typeof c)
// let r =  numbers.pop()
// console.log(num, r)


// let r = numbers.pop() //return the value
// console.log(numbers, r)
// let r = numbers.push(20) //Add the new element at the end of the array
// console.log(numbers, r)
// let r = numbers.shift(20) // remove the first element of the array and return it
// console.log(r)

// let s = numbers.unshift(78) // remove the first element of the array and return it
// console.log(s)


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numb.splice(0, 5);   // remove 1 element at index 0

// console.log(numb);        // [2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numb.length); // 8

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let numb_more = [2, 3, 10, 11, 12, 18, 20] // remove 3 elements at index 2 and add 10, 11, 12
// let numb_even_more2 = [2, 3, 10, 11, 12, 18, 20] // remove 3 elements at index 2 and add 10, 11, 12

// let newArray = numb.concat(numb_more, numb_even_more2) // concatenate two arrays
// console.log(newArray) // [1, 2, 3, 10, 11, 12, 6, 7, 8, 9]
// console.log(numb, numb_more)    // original array remains unchanged


// sort method
// let compare = (a, b) => {
//     return  a - b
// }    
// let num = [13, 223, 332, 434, 25, 46, 567, 58, 59]
// num.sort(compare) // sort the array
// num.reverse() // reverse the array
// console.log(num) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// splice and slice
// let num = [13, 322, 33, 54, 25, 16, 537, 238, 9]
// num.splice(2, 4, 100, 200, 300, 400) // remove 3 elements at index 2 and add 100, 200, 300
// console.log(num) // [13, 322, 100, 200, 300, 400, 16, 537, 238, 9]

// let num = [13, 322, 33, 54, 25, 16, 537, 238, 9]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// num.forEach((element) => {
//     console.log(element * element)
// })


// Array from
// let name = "Ahmad"
// let arr = Array.from(name)
// console.log(arr) 

// // for .. of
// for (let item of num){
//     console.log(item) 
// } 

// // for .. in
// for (let i in num){
//     console.log(i) 
// }


// map filter reduce
  // map creates a new array by performing a function on each array element
  // filter creates a new array by filtering out elements that do not pass a test
    // reduce reduces the array to a single value by performing a function on each array element

    // let arr = [14, 22, 43]
    // console.log(arr)
    // let a = arr.map((value, index, array) => {
    //     console.log(value, index, array)
    //     return value + index
    // })
    // console.log(a)


    // let arr2 = [23, 32, 35, 0, 3, 5] // filter and array with values that passing  a test create a new array
    // let a2 = arr2.filter((a) => {
    //     return a > 10
    // })
    // console.log(a2) 


    // array reduce method
// let arr3 = [1, 2, 3, 4, 5] // reduce the array to a single value
// const reduce_Function = (h1, h2) => {
//     return h1 + h2
// } 


// let newarr3 = arr3.reduce(reduce_Function)
// console.log(newarr3)  

// practice problem 1 in array
// Add a number in an array at the end and return the new length of the array


// const prompt = require("prompt-sync")();

// let arr = [1, 2, 3, 42, 53];
// let a = prompt("Enter the number to search: ");
// a = parseInt(a);
// arr.push(a);
// console.log(arr);

  //console.log(" I am try to be smart")



//   const prompt = require("prompt-sync")();

// Random number between 1 and 100
// let secret = Math.floor(Math.random() * 100) + 1;

// let guess;
// do {
//   guess = parseInt(prompt("Guess a number between 1 and 100: "));

//   if (guess > secret) {
//     console.log("Too high! Try again.");
//   } else if (guess < secret) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("🎉 Correct! The number was " + secret);
//   }

// } while (guess !== secret);

// let secret = Math.floor(Math.random() * 100) + 1;
// let guess;

// do {
//   const input = prompt("Guess a number between 1 and 100: ");
//   if (input === null) {
//     console.log("Game cancelled.");
//     break; // user pressed Cancel
//   }

//   guess = parseInt(input, 10);
//   if (Number.isNaN(guess)) {
//     console.log("Please enter a valid number.");
//     continue; // ask again
//   }

//   if (guess > secret) {
//     console.log("Too high! Try again.");
//   } else if (guess < secret) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("🎉 Correct! The number was " + secret);
//   }

// } while (guess !== secret);



// alert(" Enter the Value of n")
// let n = prompt("Enter the n here")
// document.write(n)
// a = Number.parseInt(n);
// alert("Your enter type of a " + (typeof a))
// let write = confirm("Do you want to write it on the document")
// if (write) {
//     document.write( n)
// }
// else{
//     document.write(n )
// }

// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// let runAgain = true;

// while (runAgain) {
//     const canDrive = (age) => {
//         return age >= 18? true  : false

//     }   
//     if (canDrive(age)) {
//         alert("You can drive")
      
//     } 
//         runAgain = confirm("You cannot drive. Do you want to try again?")

//     }


  
// let runAgain = true;

//  const canDrive = (age) => {
//         return age >= 18? true  : false

//     }   

// while (runAgain) {
//       let age = prompt("Enter your age")
// age = Number.parseInt(age)
   
//     if (canDrive(age)) {
//         alert("You can drive")
      
//     } 
//         runAgain = confirm("You cannot drive. Do you want to try again?")

//     }

// let number = prompt("Enter the number ")
// number = Number.parseInt(number)

// if (number > 4) {
//     location.href = "https://www.google.com"
// }

// let color  = prompt("Enter the color")
// document.body.style.background = color


//DOM Manipulation
// let elem = document.getElementById('click')
// console.log(elem)


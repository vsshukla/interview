// typescript subset
// JWT methods
// Oauth

// remove duplicate
// const a = [2, 3, 2, 4, 4];
// const b = [];
// a.map((item) => {
//   if (!b.includes(item)) {
//     b.push(item);
//   }
// });

// console.log(b);

// Value of OK, OK2
// window.name = "Vikas";

// const obj = {
//   name: "ok",
//   ok: function () {
//     console.log(this.name);
//   },

//   ok2: () => {
//     console.log(this.name);
//   },
// };

// obj.ok();
// obj.ok2();

// ======== Count char occerance =========
// const str =
//   "hello vikas how are you. let c how you can find out how many time a char occer in this string";

// const obj = {};
// for (let item of str) {
//   item = item.trim();
//   if (item == "") {
//     continue;
//   }
//   obj[item] ? (obj[item] += 1) : (obj[item] = 1);
// }
// console.log(obj);
// // which char occer max time
// const maxOccer = Math.max(...Object.values(obj));
// console.log(Object.keys(obj).find((key) => obj[key] === maxOccer));

//+++++++++++++++++++ Reverce A string ++++++++
// const str = "vikas";
// let rStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rStr = rStr.concat(str[i]);
// }

// console.log(rStr);

// ++++ Longest String +++++
// const str =
// "Question: Given an array containing numbers from 1 to N, with one number missing, find the missing number.";

// const words = str.split(" ");
// let longestStr = words[0];

// for (const word of words) {
//   if (word.length > longestStr.length) {
//     longestStr = word;
//   }
// }

// console.log(longestStr);

// +++++++++ find missing number ++++++++++

/* const input = [1, 2, 3, 5, 6, 8, 9, 11];
const lastele = input[input.length - 1];
const fistEle = input [0];
const missingEle = [];
console.log(lastele, input);

for (let i = fistEle; i <= lastele; i++) {
  if (!input.includes(i)) {
    missingEle.push(i);
}
}

++++++++++++++ even number +++++++++++++++
function getEvenNumber(inputArray) {
  return inputArray.filter((item) => item % 2 === 0);
}

console.log(getEvenNumber([2, 3, 4, 5, 6, 7, 8, 9, 10])); */

// =================== Factorial ========
/*
 function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
let fact = 1;
for (let i = 2; i <= n; i++) {
  fact *= i;
}
return fact;
}
console.log(factorial(3)); 
*/

// ============== program to generate fibonacci series up to n terms

// let n1 = 0,
//   n2 = 1,
//   nextItem = 1;

// while (nextItem <= 10) {
//   console.log(n1);
//   n1 = n2;
//   n2 = nextItem;
//   nextItem = n1 + n2;
//   console.log("nextItem", nextItem);
// }

// let sequence = [0, 1];

// function fibonacci(sequence) {
//   let nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//   if (nextTerm <= 10) {
//     sequence.push(nextTerm);
//     fibonacci(sequence);
//   }
//   console.log(nextTerm);
//   return sequence;
// }

// console.log(fibonacci(sequence));
// ============== Uppercse ============
// let uname = "vikas";
// const nameArray = uname.split("");
// const remaining = nameArray.shift();
// let Upper = remaining[0].toUpperCase().concat(...nameArray);
// let newName = "";

// for (let i = 0; i < uname.length; i++) {
//   newName += i === 0 ? uname[i].toUpperCase() : uname[i];
// }

// console.log(newName);

// ============ Array Sort========
// const arr = [9, 4, 2, 8, 6, 5, 10, 100];
// const newArray = arr.toSorted((a, b) => b - a);
// console.log(Math.max(...newArray));

// ======================= Bubblesort=======
// function bubbleSort(numArray) {
//   const inputLen = numArray.length;
//   for (let i = 0; i < inputLen - 1; i++) {
//     for (let j = 0; j < inputLen - 1 - i; j++) {
//       if (numArray[j] > numArray[j + 1]) {
//         const temp = numArray[j];
//         numArray[j] = numArray[j + 1];
//         numArray[j + 1] = temp;
//       }
//     }
//   }
//   return numArray;
// }
// console.table(bubbleSort([9, 4, 2, 8, 6, 5, 10, 100, -1]));

// ++++++++++

// const arrOfObj = [
//   { name: "vikas", age: 30 },
//   { name: "john", age: 22 },
//   { name: "andrew", age: 28 },
//   { name: "noal", age: 26 },
//   { name: "krish", age: 24 },
// ];

// function sortArrayOfObject(arr, key) {
//   return arr.sort((a, b) => a.name - b.name);
// }

// console.log(sortArrayOfObject(arrOfObj, `name`));

//  extract number from string

const sumOfNumbersInParagraph = (str) => {
  const input = str.match(/\d+(\.\d+)?/g);
  return input;
};

const sumOfNumbersInParagraph1 = (str) => {
  const input = str.split(/[^0-9.]+/);
  console.log(input);
  return input.reduce((acc, val) => {
    if (!isNaN(val) && val != "") {
      acc += parseFloat(val);
    }
    return acc;
  }, 0);
};

let paragraph =
  "I have 3 apples and -2 oranges, and the price is $5.99 , -10 each.";
let sum = sumOfNumbersInParagraph1(paragraph);
console.log(sum);

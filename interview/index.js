// const array = [10, 20, 30, 40, 50];
// for (var i = 0; i < array.length-1; i++) {
//   setTimeout(function () {
//     console.log(i + " c ===> " + array[i]);
//   }, 0);
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length - 1; i++) {
//   setImmidiate(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// const a = 0;
// const myPromiss = new Promise((resolve, reject) => {
//   if (a > 1) {
//     resolve("a is greater than 1");
//   } else {
//     reject("a is less than 1");
//   }
// });

// myPromiss
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// function checkValue() {
//   if (a > 1) {
//     return "a is greater than 1";
//   } else {
//     return "a is less than 1";
//   }
// }

// const myPromiss1 = async () => {
//   return await checkValue();
// };

// myPromiss1()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(data));

// -------------------------
// console.log(1);

// setTimeout(function () {
//   console.log("2");
// }, 2000);

// Promise.resolve("Success").then(
//   (value) => {
//     console.log(value); // "Success"
//   },
//   (reason) => {
//     // not called
//   }
// );

// console.log(4);

//  reverce and do upper case of ecah 2nd char
// const str = "abcdefgh";
// let newstr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   if (i % 2 === 0) {
//     newstr += str[i].toUpperCase();
//   } else {
//     newstr += str[i];
//   }
// }
// console.log(newstr);

// function repeatedChar(input) {
//   const obj = {};
//   const inputChars = input.split("");
//   inputChars.forEach((item) => {
//     obj[item] = (obj[item] || 0) + 1;
//   });

//   return obj;
// }

// console.log(repeatedChar("AAAAAABBBBc"));

// let x= 30

// const promises = [
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 2000);
//   }),
//   new Promise((resolve, reject) => {
//     reject(122);
//     // setTimeout(() => reject(new Error("Error")), 3000);
//   }),
// ];

// Promise.allS(promises)
//   .then((values) => {
//     console.log(values); // [1, 2]
//   })
//   .catch((error) => {
//     console.log(error); // Error
//   });

// const promise1 = new Promise((resolve, reject) => {
//   let arr = [1, 2, 3];
//   setTimeout(() => {
//     resolve(arr);
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   let arr = [1, 2, 3];
//   setTimeout(() => {
//     resolve(arr);
//   }, 4000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   let arr = [1, 2, 3];
//   setTimeout(() => {
//     resolve(arr);
//   }, 1000);
// });

// function resolvePromise(promise1, promise2, promise3) {
//   //output -> [1,2,3,1,2,3,1,2,3]
//   Promise.all([promise1, promise2, promise3]).then((data) => {
//     let newData = data.reduce((aarray, item) => {
//       return aarray.concat(item);
//     }, []);

//     console.log(newData);
//   });
// }

// resolvePromise(promise1, promise2, promise3);

// function Car(type, fuelType) {
//   this.type = type;
//   this.fuelType = fuelType;
//   this.carDetail = function () {
//     console.log(this.type + ":" + this.fuelType);
//   };
// }

// function setBrand(brand, type, fuel) {
//   this.brand = brand;
//   this.type = type;
//   this.fuelType = fuel;
//   console.log(`Car details = `, this);
// }

// const nCar = new Car("a", "b");
// const newBrand = new setBrand("Brand1", "convertible", "petrol");
// // setBrand.prototype.carDetail = nCar.carDetail;
// // newBrand.carDetail();
// nCar.carDetail.call(newBrand);

// var a = [
//   {
//     name: "Darshan",
//     id: 1,
//     dept: "react",
//     age: 26,
//   },
//   {
//     name: "Kshama",
//     id: 2,
//     dept: "java",
//     age: 47,
//   },
//   {
//     name: "Shweta",
//     id: 3,
//     dept: "Finance",
//     age: 23,
//   },
//   {
//     name: "Amol",
//     id: 4,
//     dept: "java",
//     age: 57,
//   },
// ];

// function groutDept() {
//   const output = {};
//   a.forEach((item) => {
//     if (output[item.dept]) {
//       output[item.dept].push(item);
//     } else {
//       output[item.dept] = [item];
//     }
//   });

//   return output;
// }

// console.log(groutDept(a));

// var x = 0;
// (function () {
//   var x = 9;
//   console.log(x);
//   (function () {
//     x++;
//     console.log(x);
//   })();
// })();

// var x = 23;
// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// pop, push

// const newArr = arr.filter((item, index, array) => {
//   return index === array.indexOf(item)
// });

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // console.log(fruits.reverse());
// // console.log(fruits);

// console.log(
//   fruits.find((item, index, arr) => {
//     console.log(arr);
//     return item === "cherry";
//   })
// );

/* 
const obj = { name: "vikas", role: "SDE", address: { city: "pune" } };
const obj2 = { ...obj };
obj2.name= "mum";
console.log(obj);
const newObj = structuredClone(obj);
newObj.address.city = "mum";
console.table(newObj);
structuredClone();
*/

/*
const obj = [
  { srn: 1, source: 20 },
  { srn: 2, source: 20 },
  { srn: 2, source: 20 },
  { srn: 1, source: 21 },
];

// Output: [{ srn: 1, source: 40 }, { srn: 2, source: 20 }]

console.log(
  obj.reduce((acc, item) => {
    let index = acc?.findIndex((i) => i.srn === item.srn);
    if (index !== -1) {
      acc[index].source = acc[index].source + item.source;
    } else {
      acc.push(item);
    }
    return acc;
  }, [])
);

console.log(
  obj.reduce((acc, item) => {
    if (acc[item.srn]) {
      acc[item.srn].source = acc[item.srn].source + item.source;
    } else {
      acc[item.srn] = item;
    }
    return acc;
  }, {})
);
*/
// -------------------------
/*
const fruits = [
  { apple: 2, orange: 3, banana: 1 },
  { apple: 2, mango: 3, banana: 3 },
  { apple: 2, orange: 3, grapes: 1 },
  { mango: 2, grapes: 3, banana: 1, avacado: 1 },
];
// output {apple:'', orange:'', grapes:'', banana:''}

console.log(
  fruits.reduce((acc, item) => {
    Object.keys(item)?.forEach((key) => {
      if (acc[key]) {
        acc[key] = acc[key] + item[key];
      } else {
        acc[key] = item[key];
      }
    });

    return acc;
  }, {})
);
*/

/* 
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.splice(-3).reverse();
arr.splice(0, 0, ...a);
console.log(arr);

let result = [...arr.slice(-3).reverse(), ...arr.slice(0, 3)];
console.log(result);
 */

// react profiler, forword ref vs useref, portfolio, lazy loading
// react performance

// function num(a) {
//   return function (b) {
//     if (b) {
//        num(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(num(3)(6)(6)());

// const tree = {
//   value: "A",
//   children: [
//     {
//       value: "B",
//       children: [
//         {
//           value: "D",
//           children: [],
//         },
//         {
//           value: "E",
//           children: [],
//         },
//       ],
//     },
//     {
//       value: "C",
//       children: [
//         {
//           value: "F",
//           children: [],
//         },
//         {
//           value: "G",
//           children: [],
//         },
//       ],
//     },
//   ],
// };

// let output = [];
// const result = depthFirstTraversal(tree);
// console.log(result);

// // Output: ["A", "B", "D", "E", "C", "F", "G"]

// function depthFirstTraversal(input) {
//   for (item in input) {
//     if (typeof input[item] === "object") {
//       depthFirstTraversal(input[item]);
//     } else {
//       output.push(input[item]);
//     }
//   }
//   return output;
// }

// const newTree = [tree];
// const res = [];

// while (newTree.length) {
//   const current = newTree.pop();
//   if (typeof current === "object") {
//     for (const key in current) {
//       newTree.push(current[key]);
//     }
//   } else {
//     res.push(current);
//   }
// }
// console.log(res);
// function sum(a) {
//   return function (b) {
//     if (b) {
//       sum(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// function num(a) {
//   return function (b) {
//     if (b) {
//       num(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(num(3)(6)());

//Flatten array using javascript

const input = [1,2,[3,4,5],[[6,7]],[[[8,9]]]]

//output =[1,2,3,4,5,6,7,8,9]


console.log(flattenArray(input))

async function flattenArray(input){
  await let output = [];
  input.forEach((item, index) => {
  	if(Array.isArray(item)) { 
      output = output.concat(flattenArray(item))
 	 }else{
  		output.push(item)
  	}
})

return output;
}


function a(a,s,d,){
let val =[1,2,3,4]

return function b() {
		console.log(a+s+d, val)
	}
}
const A = a(...)
A();

==========================


// const object = {
// message: 'Hello, World!',
 
// getMessage() {
//   const message = 'Hello, Earth!';
//   return this.message;
// }
// };
 
 
// console.log(object.getMessage());


// function Car(type, fuelType){
//   this.type = type;
//   this.fuelType = fuelType;
//   this.carDetail = function() {
//         console.log(this.type + ":" + this.fuelType)
// }
// }
 
// function setBrand(brand, type, fuel){
//   this.brand = brand;
//   console.log(`Car details = `, this);
// }
 
// // const car = new Car()
// // console.log(car.carDetail())
// // setBrand.prototype.carDetail = Car().carDetail();
 
// const newBrand = new setBrand('Brand1', "convertible", "petrol");
// console.log(call(newBrand,'name'));


-----------------------------
var a = [
    {
        name: "Darshan",
        id: 1,
        dept: "react",
        age:26
    },
    {
        name: "Kshama",
        id: 2,
        dept: "java",
        age:47
    },
    {
        name: "Shweta",
        id: 3,
        dept: "Finance",
        age:23
    } ,{
        name: "Amol",
        id: 4,
        dept: "java",
        age:57
    },
]

/*Output : {
java: [{}, {}],
react: [{}],
Finance: [{}]
}*/



var x = 23;
(function() {
  var x = 43;
  (function random(){
    x++;
    console.log(x); 
    var x = 21;
  })();
})();





// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
// Output: {
//     'Movie': [ { type: 'Movie', name: 'M1'}, { type: 'Movie', name: 'M2'}]
//     'TV Show': [ { type: 'TV Show', name: 'TS1'},, { type: 'TV Show', name: 'TS2'}]
//  }


const categories =  [
   { type: 'Movie', name: 'M1'},
   { type: 'TV Show', name: 'TS1'},
   { type: 'Movie', name: 'M2'},
   { type: 'TV Show', name: 'TS2'},
 ];
 
// console.log(getCategory(categories))

function getCategory(input){
    
return input.reduce((result, item) => {
    const {type, name }= item;
    
        if(result[type]){
            result[type] = [{ ...item}] ; 
        }else{
         result[type] = item
        }
    
    return result;    
},{})
}

// console.log(1)

// const p1 = Promise.resolve('p1')

// setTimeout(() => console.log('hi'), 0)

// const p2 = new Promise( (resolve, reject) => {
//   setTimeout( () => console.log('hello'), 300)
// resolve('p2')
// })

// p1.then(v=> console.log(v))
// p2.then(v => console.log(v))

// console.log(2)

// 1
// 2

// p1
// p2
// hi
// hello

// const user = {
//     name:'vikas',
//     getName: () => {
//         return this.name
//     }
// }


// function sum(a){
//     return function(b) {
//         return a + b;
//     } 
// }

// console.log(sum(2)(6))


// const person = {
//  name: 'hitendra',
// }

// const person2 = person
// useEffect(()=>{}, return ()=>{dssdsf}[userid])
// useMemo(()=>{}, [])
// memo()

// const obj = JSON.parse(JSON.stringify(person));
// console.log("Hello, World!");
// Find all substrings of a given string
// let input = "abc";
// [a,b,c, ab, bc, abc]
// Output: ["a", "ab", "abc", "b", "bc", "c"]

// console.log(getSubstr(input))
// function getSubstr(input){
// let output =[]
// let str =''
  
//   for (let i = 0; i < input.length; i++) {
//       output.push(input[i]);
//       for (let j = i+1; j < input.length - 2; j++) {
//         console.log('--',j)  
//   }
// }
//  return output; 
// }








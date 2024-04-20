//01-variables
/*const accountId = 123456
let accountEmail = "krishna@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;


//ccountId = 3// not allowed


    


accountEmail ="hc@.com"
accountPassword ="12345"
accountCity = " indore"
console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scope*/

//console.table([accountId,accountEmail,accountPassword,accountCity, accountState])


//02 datatypes//

"use strict"; //treat all js code as new version

//alert(3+3) //we are using node js not browser

/*console.log(3+3); 

console.log("krishna")

let name ="krishna"
let age = 18
let isLoggedIn = false
// number => 
console.log(typeof "krishna");
console.log(typeof age);




03- conversionoperation.js*/

/*let score = "krishna"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score)
console.log(valueInNumber);*/

/*let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);*/

/*let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);*/


/*let value = 3
let negValue = -value

let str1 = "hello"
let str2 = "krishna"

let str3 = str1+str2
console.log (str3);

console.log("1" + 2);
console.log("1"+ "2");
console.log("1" + 2 + 2);

console.log (1 + 2 + "2");*/

/*let num1, num2, num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);*/


//comparision of datatypes in js//

/*console.log(null > 0);
console.log(null ==0);
console.log(null >=0);

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

//===

console.log("2" === 2);*/

//datatypes-summary

//Primitive
// 7 types  : string : nunber, boolean, null, undefined, symbol, bigint 

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let urerEmail;

const id = Symbol( '123')
const anotherId = Symbol ('123')
console.log(id ===anotherId);

const bigNumber = 1235787665543333456766544445676n*/


// Reference (non primitive)

//Array, objects, Functions

/*const heros = ["ironman", "nagraj"];
let myObj = {
    name: "krishna",
    age: 24,


}
const myFunction = function (){
    console.log("hello world");
}
console.log(typeof bigNumber);*/



//*************** */
//stack and heap memory

//stack (primitive) heap (non - primitive)

//let myYoutubename = "krishnapratap.com"

//05-string 

/*const name ="krishna"
const repoCount = 50
//console.log (name + repoCount + "value");

console.log('hello my name is ${name} and my repo count is $ {repoCount}');
const gameName = new String("krishnaa-kps")
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.substring(-6, 2)
console.log(anotherString);


const newStringOne = "   krishna  "
console.log(newStringOne);
console.log(newStringOne.trim());*/


//console.log("krishna")

//console.log("krishna")

/*const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));

const otherNumber =23.8905

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-in"));*/


//********************maths******************


/*console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(4, 3, 6, 8, 1));*/

/*console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1 )) + min);*/

//last section of part 1


// dates and time in js

/*let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);*/

//let myCreateDate = new Date(2024, 3, 14)
//console.log(myCreateDate.toDateString());
//let myCreateDate = new Date("03-14-2024")
//console.log(myCreateDate.toLocaleString());

// array in java script

/*const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);

//array method

/*myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);*/

//myArr.unshift(8)
//myArr.shift()
//console.log(myArr);


// console.log(myArr.include(9));

// console.log(myArr.indexof(19));
// console.log(myArr);


//slice, splice

/*console.log("A", myArr);
const myn1 = myArr.slice(1, 3)


console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);*/


//******************02  Array 

/*const marvel_heros = ["ironman", "thor"]
const dc_heros = ["krishna", "shaktiman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros[1][1]);*/

/*const another_array = [1, 2, 3, 4, [5, 6, 7, ], 4, [4, 5, 6,]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);*/

/*console.log(Array.isArray("Krishna"))
console.log(Array.from("Krishna"))
console.log(Array.from({name: "krishna"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,  score2, score3));*/

//***********object***************
//Error ? Lecture16


/*const mySym = Symbol("key1")

const JsUser = {
    name: "Krishna",
    "full name": "krishna Pratap singh",
    mySym: "mykey1",
    age:  24,
    location: "Indore"
    email: "krishna@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])*/

/*console.log("krishna")
 
const JsUser = {
    name: "Krishna",
    age: 24,
    location: "Indore"
    email: "krishna@google.com",
    isLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])*/

// JsUser.greeting = function(){
//     console.log("hello js user");

// }
// console.log(JsUser.greeting());

// objects in part2 javascript

/*const tinderUser = new Object()

 tinderUser.id = "123abc"
 tinderUser.name = "Sammu"
 tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "krishna",
            lastname: "singh"
        }
    }
}


//console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
console.log(obj3);*/

/***************** scope*/

//var c = 300
/*let a = 300

if(true) {
    let a = 10
    const b = 20
   console.log("INNER", a);

}

console.log(a);
//console.log(b);
//console.log(c);*/

/*function one (){
    const username = "krishna"
    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);
    //two()

}
one()

if(true) {
    const username = "krishna"
    if (username === "krishna") {
        const website = "youtube"
        //console.log(username + website);

    }
    //console.log(website);


}
//console.log(username);

/****************************/
/*console.log(addone(5))
function addone(num){
    return num +1

}
addTwo(5)

const addTwo = function(num){
    return num +2
}*/

/************This and arrow function */


/*const user = {
    username: "krishna",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
console.log(this);
    }
}

// user.welcomeMessage()
//  user.username = "krish"
//  user.welcomeMessage()

//console.log(this);


// function chai(){
//     let username = "krishna"
//     console.log(this);
// }

// chai()


const chai =  () => {
    let username = "krishna"
    console.log(this.username);
}

//chai()

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))*/

/*************IIFE */

// (function chai(){
//     console.log(`DB CONNECTED`);

// }) ();

// (function aurcode() {
//     console.log(`DB CONNECTED TWO`);

// }) ()


/*******************control flow */
//if
// const isUserloggedIn = true
// const temperature = 41
// if ( temperature < 50 ){
// console.log("less than 50");

// } else {
//     console.log("temperature is greater than 50");   

//console.log("temperature is greater than 50");



//<, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User powr: ${power}`);
// }
// //console .log(`User power: ${power}`);

//const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2");

/*********************Nesting */

// if (balance < 500) {
//     console.log("less than 500");

// }else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2 ) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
// console.log("User logged in");
// }

/*************Switch */

// switch (key) {
//     case value:



//     break;



//     default
//     break;
// }
 
// const month = "march"
//  switch (month) {
//          case "jan":
//     console.log("January");
//     break;
//          case "feb":
//     console.log("feb");
//     break;
//          case "march":
//     console.log("march");
//     //break;
//          case "april":
//     console.log("april");
//     break;

    
//          default:
//             console.log("default case match")
//          break; 
//  }

/***************TRUTHY AND FALSY */

// const userEmail = []

// if (userEmail) {
//     console.log("got user email");

// } else {
//     console.log("don't have user email");
// }

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

// "0", 'false', " ", [], {}, function() {}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object iss empty");
// }

// NUllish Coalescing Operator (??): null, undefined

//let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20

//console.log(val1);

// Terniary Operator

//condition ? true : false 

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log
// ("more than 80")

/******************CONTROL FLOW COMPLETE */

/***************LOOPS/ ITERATIONS */

//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// if(element == 5) {
    //console.log("5 is the best ans");
// }
// }

//console.log(element)

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value:${i}`);
//     for (let j = 0; j <= 10; j++) {
//        // console.log('inner loop value ${j} and inner loop ${i}');
//        console.log(i + '*' + j + '=' + i*j);
        
//     }
    
    
// }

// let myArray = ["flash", "superman", "ironman"]
// console.log(myArray.length);
// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//BREAK AND CONTINUE

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


/***************OBjECTS REPEAT LECTURE? */


/************HIGH ORDER ARRAY LOOP*/


// const arr = [1, 2, 3, 4, 5 ]

// for (const num of arr) {
//   //console.log(num); 
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     //console.log(`each char is ${greet}`)
    
// }

// //maps

// const map = new Map
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// //console.log(map);

// for (const [key, value] of map) {
    
//     //console.log(key, ':-', value);
// }

// // const myObject = {
// //     game1 : 'NFS'
// //     game2 : 'Spiderman'


// // for (const [key, value] of myObject {
// //     console.log(ket, ':-', value);
// // }


// //console.log("krishna")

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple" 

// }
//  for (const key in myObject) {
//    //console.log(myObject[key]);
//  }

//  const programming = ["js", "rb", "py", "java", "cpp"]
//  for (const key in programming) {
//    console.log(key);
//  }
 
// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach(function (item) {
// //     console.log(item);
// // } )

// // coding.forEach((item) => {
// //     console.log(item);
// // })

// // function printMe (item){
// //     console.log(item);
// // }
// // coding.forEach(printMe)

// // coding.forEach((item, index, arr)=> {
// //     console.log(item, index, arr);
// // })


// const myCoding = [
//     {
//         languageName: "javascript",
//         languafeFileName: "js"
//     },
//     {
//         languageName: "java",
//         languafeFileName: "java"
//     }, 
//     {
//         languageName: "python",
//         languafeFileName: "py"
//     }, 
// ]
// myCoding.forEach((item)=> {
//     console.log(item.languageName);
// })


/***************FILTER MAP REDUCE */

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
// })
// console.log(values);



//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//    return num > 5
// }) 

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

















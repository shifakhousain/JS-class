// console.log("Hello world")
// console.log("Hello A CUBE")
// console.log(2+3);

// Values and variables
// Value - most basic unit of any programming
// variable - name given to a memory location where we can store values

// 123

// "Hello"

// true

// null

// myName = "Savitha"
// manoj = "Hey"

// age = 40
// isMarried = false
// emptyVar = null
// let testVar
// let,const,var(ES5)

// const name = "Manoj"
// const job = "dev"
// let age = 29

// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)
// console.log(myName)

// Data types (Primitive - Object(not now))
// Number - 0,1,2,50,34.5,-45.67

// strings - ordered sequence of characters 'This is a string', "This is another string", `This is a string as template literal`, 'a'

// boolean - true, false
// Null - Empty value
// undefined

// Symbols
// Bigint

// console.log(myName);
// console.log(age);
// console.log(isMarried);
// console.log(emptyVar);
// console.log(testVar);

// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof emptyVar);
// console.log(typeof testVar);

// Variable naming rules
// 1. it can only start with alphabet or _
// 2. it can contain numbers, alphabets, _
// 3. No special charcters
// 4. cannot use keywords
// 5. whitespace not allowed
// 6. case sensitive a != A

// Operators
// Arithmetic - (+,-,*,/,%(mod),**)
// console.log(2+3); //5
// console.log(2-3); //-1
// console.log(2*3); //6
// console.log(2/3); //0.666
// console.log(2%3); //2
// console.log(7%3); //1
// console.log(2**3); //8

// comparision
// >, <,>=, <=, ==(loose), ===(strict), !=(loose), !==(strict)
// loose - doesn't care about the data type only the value
// strict - consders the value and the type

// a = 10
// b = 20
// c = "10"

// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a <= b); //true
// console.log(a >= b); //false
// console.log(a == b); //false
// console.log(a == c); //true
// console.log(a === c); //false
// console.log(a != c); //false
// console.log(a !== c); //true

// Boolean - chaining(multiple comparisions) operators
// &&(and) - return true if all the chained logics returns true else returns false

// console.log(10 > 5 && 10 > 20);

// ||(or) - - return false if all the chained logics returns false else returns true

// console.log(10 > 5 || 10 > 20);

// // !(not) - negates the logic
// console.log(!(10 > 5 || 10 > 20));

// Operator precedence
// Higher the precedence it gets executed first
// (), **, (*,/,%)-when operations come together with same precedence the operation goes from left to right, (+,-), (<,<=,>,>=,==,===,!=,!==), &&, ||, !

// console.log(12*2/4**3+4-8%10>250&&false);

// JS Dynamically typed language
// let age = 30
// // age = "Manoj"
// // int age = 30
// age = "String"

// Conversion(Number(),Boolean(),String()) and coercion
// myName = "Manoj"
// testString = "123"
// age = 30
// isMarried = false

// String conversion
// console.log(String(450)); //"450"
// console.log(450); //"450"
// console.log(String(true)); //"true"
// console.log(String(NaN)); //"NaN"
// console.log(String(undefined)); //"undefined"
// console.log(String(null)); //"null"

// Boolean conversion
// console.log(Boolean(450)); //true
// console.log(Boolean(-450)); //true
// console.log(Boolean(-4.50)); //true
// console.log(Boolean(-45)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(NaN));

// console.log(Boolean("Hello")); //true
// console.log(Boolean("123")); //true
// console.log(Boolean("-123")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(" ")); //true
// console.log(Boolean("")); //false

// NUmber conversion
// console.log(Number("100")); //100
// console.log(Number("100a")); //NaN
// console.log(Number("-100")); //-100
// console.log(Number("")); //0
// console.log(Number(" ")); //0
// console.log(Number(true)); //1
// console.log(Number(false));//0

// NaN - Not a Number

// Coercion - Implicit conversion
// String coercion
// console.log("Hello "+100); //Hello 100
// console.log("Hello "+true); //Hello true
// console.log("Hello "+undefined); //Hello undefined
// console.log("Hello "+null); //Hello null
// console.log("Hello "+NaN); //Hello NaN

// Number coercion
// console.log(100 + "Hello");
// console.log(100 - "Hello");
// console.log(100 - "10"); //90
// console.log(100 * "10"); //1000
// console.log(100 / "10"); //10
// console.log(100 % "10"); //0
// console.log(100 > "10"); //0
// console.log(100 < "10"); //0
// console.log(100 == "10"); //0
// console.log(100 - true);
// console.log(100 - " ");

// Boolean coercion
// console.log(1 && 2); //short circuiting

// console.log(!"Hello"); //false
// console.log(!"123"); //false
// console.log(!"0"); //flase
// console.log(!" "); //false
// console.log(!""); //true
// console.log(!100);//false
// console.log(!0); //true
// console.log(!23.5); //false
// console.log(!-23.5); //false

// console.log(100===100);
// console.log(NaN===NaN);

// Truthy values and Falsy values
// Falsy values - 0,NaN,"",undefined,null
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// // Statements -action
// // Expressions - statements that gets evaluated into single value are called as expressions

// console.log("100"*2%500+true<"200"/2-10);
// // console.log(200%500+true<"200"/2-10);
// console.log(200+true<"200"/2-10);
// console.log(200+true<100-10);
// console.log(201<100-10);
// console.log(201<90);
// console.log(false);

// Ternary operator (condition?statement:statement)

// Statements
// if statement
// Syntax
// if (condition){
// if block
// if clause
// }

// const myName = "Manoj";
// const birthYear = 2015;

// if (2024 - birthYear >= 18) {
//   console.log("You are eligble to get liscence");
// }

// if (condition){
// if clause
// }else{
// else clause
// }

// const myName = "Manoj";
// const birthYear = 2015;
// const age = 15;

// if (age >= 18) {
//   console.log("You are eligble to get liscence");
// } else {
//   console.log("You are not eligible, comeback after " + (18 - age) + " years");
// }

// Template literals
// `string here ${expression} continue string`

// console.log(`${myName}, You are not eligible, comeback after ${18-age} years`);

// if (age >= 18) console.log("Eligible");
// else console.log('Not eligble');

// Ternary operator
// Syntax
// condition?if true statement:if false statement
// const age = 13
// age >= 18 ? console.log("Eligble") : console.log("Not eligible");

// abbrevating operators
// let a = 20
// // post increment & decrement
// a++ //a+=1
// a--

// // pre increment & decrement
// ++a
// --a

// a = a+10
// a+=10 // a=a+10
// a-=10 // a=a+10
// a*=10 // a=a+10
// a/=10 // a=a+10
// a%=10 // a=a+10
// console.log(a);

// Nested if statements

// const age = 25;
// const hasGoodVision = false;

// if (age >= 18) {
//   if (hasGoodVision) {
//     console.log("Eligible");
//   } else {
//     console.log("Need to have good vision");
//   }
// } else {
//   console.log("Need tobe above 18");
// }

// if, else if, else if .... else

// syntax
// if condition{
// if clause
// }else if(condition){
// else if clause
// }else if(condition){
// else if clause
// }
//
// else{}

// const marks = 77;

// if (marks >= 85) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 55) {
//   console.log("Grade C");
// } else {
//   console.log("Failed");
// }

// A owner of the house has a dog
// He needs to wake up if the dog is barking at the night between 22 to 5
// Else he should ignore the dog barking

// const time = 23
// const isDogBaeking = true

// time = 8
// isDogBaeking = true

// time = 8
// isDogBaeking = false

// time = 4
// isDogBaeking = false

// 2*3**2
// 2 > 20 && 5**2 < 30

// switch statement
// Syntax
// switch (case value){
// case "case value1":statement;break;
// case "case value2":statement;break;
// case "case value3":statement;break;
// case "case value4":statement;break;
//  default: statement
// }

// let day = "thu";
// // day = "sun"

// switch (day) {
//   case "mon":
//     console.log("Go to gym");
//     break;
//   case "tue":
//     console.log("Go to play");
//     break;
//   case "wed":
//     console.log("Go to swimming");
//     break;
//   case "thu":
//   case "fri":
//     console.log("Go to jog");
//     break;
//   case "sat":
//   case "sun":
//     console.log("Take a break");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// Try having statemenets without break
// looping statements - for loop, while loop
// Syntax
// for(let var=initialize; condition; increment/decrement){
// for loop body
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`value of "i" is ${i}`);
// }

// for (let i = 10; i >=1; i--) {
//   console.log(`value of "i" is ${i}`);
// }

// Even numbers
// for (let i = 10; i >=1; i--) {
//   if(i%2==0){
//     console.log(`value of "i" is ${i}`);
//   }
// }

// break, continue - statements

// break - breaks out of the looping statement
// cotinue - skips

// print 1 to 70
// break if encountered 65
// don't print number btw 20 to 50

// for (let i = 1; i <= 70; i++) {
//   if (i >= 20 && i <= 50) continue;

//   if (i == 65) break;

//   console.log(i);
// }

// while loop
// Syntax
// while(condition){
// while loop body
// have a statement that makes the condition fail(optional)
// }

// let i = 1

// while(i<=10){
//     console.log("Manoj");
//     i++
// }

// let i = 21;

// while (i >= 10) {
//   i--;
//   if (i <= 17 && i >= 15) continue;
//   console.log(i);
// }

// do while loop
// Syntax
// do {statements} while(condition)
// this executes the loop atleast once

// let i = 30;
// do {
//   console.log(i);
//   i++;
// } while (i <= 20);

// functions

// range10,20

// FUnctions - set of statements which collectively does a task
// console.log(value)
// Number(value)
// Boolean()
// String()

// re-use
// make code maintainalble

// 3 ways
// 1.function declaration/definition(ES5)
// 2. Function as expression(ES5)
// 3. Arrow functions(ES6)

// 1 Function declartion
// Syntax
// function fn_name(parameters){
// function body (contains statements)
// can have return statement
// }

// 1. create function to add two values

// function add(value1, value2) {
//   // console.log(value1 + value2);

//   // return value1 + value2;
//   const res = value1 + value2;
//   return res;
//   // console.log("This is a test log");
// }

// // Calling fn, Executing fn, Invoking fn
// add(10,20)
// add(50,70)

// Create a function that books a train ticket

// function bookTicket(name, age, distance) {
//   // below 50km -40rs
//   // Above 50 but below 100 - 70rs
//   // Above 100 below 200 - 130rs
//   // above 200 - 250rs

//   //   1. Calculate ticket price
//   let price = 0;
//   if (distance <= 50) {
//     price = 40;
//   } else if (distance <= 100) {
//     price = 70;
//   } else if (distance <= 200) {
//     price = 130;
//   } else {
//     price = 250;
//   }

//   //   check the age is elow 10 to issue half ticket
//   if (age <= 10) {
//     price = price / 2;
//   }

//   //   issue ticket
//   console.log(`${name}, your ticket of price ${price} is ready`);
// }

// bookTicket("Manoj", 28, 210);
// bookTicket("Ravi", 8, 110);
// bookTicket("Savitha", 18, 70);

// Note: Function name should follow variabl naming rule

// 2. Function as expressions
// Syntax
// const varName = function(params){fn body}

// const calcAge = function (birthYear) {
//   console.log(`Your age is ${2024 - birthYear}`);
// };

// const shouldWakeup = function (time, isBarking) {
//   if (time < 0 || time > 23) {
//     console.log("Invalid time");
//   } else if ((time >= 21 || time <= 6) && isBarking) {
//     console.log("Owner should wakeup");
//   } else {
//     console.log("Ignore");
//   }
// };

// shouldWakeup(3, false);
// shouldWakeup(3, true);
// shouldWakeup(8, true);

// calcAge(2000);
// calcAge(2013);
// calcAge(1990);

// return statement
// terminates the function and returns the mentioned values as a product of fn execution
// if not returned any value, then undefined will be returned
// after return we can not have any statements
// You can only return one value

// Arrow functions(ES6)

// const res1 = add(10, 20);

// console.log(`The rest of 10 and 20 being added is ${res1}`);

// Syntax
// const vanName = (parameter)=>{fn body}
// const juiceMaker = (fruit1, fruit2) => {
//   console.log(`JUice of fruits ${fruit1} and ${fruit2} is ready to serve`);
// };

// juiceMaker("Apple", "Orange");

// Two feature of arrow fns

// if we have only one parameter we can omit the paranthesis
// if the function has only one statement then we can omit {} and the value of the statement will be automatically returned
// this keyward is not there

// const juiceMaker = (fruit) =>
//   // console.log(`Juice of fruit ${fruit}  is ready to serve`);
//   console.log(`Juice of fruit ${fruit}  is ready to serve`);

// // console.log(`Juice of fruit ${fruit}  is ready to serve`);

// const a = juiceMaker("Apple");
// const b = juiceMaker("Orange");

// console.log(a, b);

// Objects

// Data structureto store multiple values but each value will be assigned with a key to retrieve it.

// Object()

// Literal object
// const infoAcube = {
//   // key should follow var nming rule
//   // and any type of value can be stored
//   // You can make any type of key with computed key

//   director: "Anant",
//   established: 2021,
//   courses: ["Java", "Python", "Web dev", "Data Science"],
//   staff: [
//     {
//       name: "Manoj",
//       subject: "Web dev",
//     },
//     { name: "Srinivas", subject: "Data Science" },
//   ],

//   100: "This is just a number",
//   [[100, 200]]: "Test",
//   ["Test" + "Key"]: "Test value",

//   bookCourse: function () {
//     // this - object itself
//     // this is the object where it's present in
//     for (let i = 0; i <= this.courses.length; i++) {
//       console.log(`Course ${this.courses[i]} is booked`);
//     }
//   },
// };

// properties/attributes
// methods

// Access

// . notation
// [] (computed) notation

// console.log(infoAcube.director);
// console.log(infoAcube.established);
// console.log(infoAcube.staff);
// console.log(infoAcube.staff[0].name);

// Computed
// console.log(infoAcube[20 + 80 + 1]);
// console.log(infoAcube[[100, 200]]);
// console.log(infoAcube.TestKey);
// console.log(infoAcube["T" + "es" + "tKey"]);

// Add values
// infoAcube.manager = "Spoorthy";

// console.log(infoAcube);

// // modify

// infoAcube.manager = "anusha";
// console.log(infoAcube);

// // delete

// delete infoAcube.manager;
// console.log(infoAcube);

// // Methods
// // Functions available in objects

// infoAcube.bookCourse();

const employee = {
  name: "Manoj",
  job: "Dev",
  birthYear: 1996,
  address: "Mysuru",
};

// 1. Get the job of the employee

// 2. there are two variables
// a = 'ad' and b='dress'
// by cobining these two we get a key and You need to get the value parallel to it in the employee object

// 3.Create a method in the object that calculates age of the employee from the brthYear available

// delete the address 
// add motherName field



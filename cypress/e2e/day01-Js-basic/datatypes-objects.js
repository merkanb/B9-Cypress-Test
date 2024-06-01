/** JS is like browser machine language
 *  node.js is kinda server that allows us to run code in computer  (WEB sites run with its js )
 */
console.log('Hello Eurotech SDET Batch 9')


/** variable naming rules in JS : 
 * Primitive Date Types 
 * numbers : 123,120,50.8
 * String : "" 'apple'
 * Boolean : true, false
 * Undefined : variable does not have value yet
 * null :
 * /
 * 
 * /** There are 3 different types of variable
 * var : variable abbreviation
 *       it is GLOBAL SCOOPE variable, you can change value later or CAN define AGAIN same variable
 * let : let is equal to
 *       it is BLOCK SCOPE variable, u can change value later but CAN NOT define AGAIN same variable 
 * const : constant variable
 *        ( like number PI  ) 
 *  */

// this is single comment line
/**
 * this is multiple comment line
 */

let a;     
console.log(typeof a)    // undefined
console.log(a)           // undefined
a = 6
console.log(typeof a)     // number
console.log(a)          //  6
a = 'javascript'      // string
console.log(a)
a = true 
console.log(typeof a)            // boolean
console.log(a)                   // true

// let a=6     can not define agein same let variable
let b = 6, c = 'Cypress'
console.log(b + c)
console.log(b * c)      // not five error but output will be: NaN -NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value.
console.log(b, c)   // put space with , 

let d = null
console.log(d)

const number = 2023
// number=2024    // gives error  
console.log(number)

// string
let str1 = 'i am learning '
a = 'javascript'
let result;
result = str1 + '' + a + ' and ' + c
console.log(result)

// differences from java : Backticks for variable insertion   BACKTICK ` (left side of the #1): NOT single quote: ''   
result = `This result variable is: ${str1} ${a} and ${c}`
console.log(result)

var name = 'Mike'
var age = 35;
var name_object = { firstname: 'Jake', lastname: "Masters" }   // like MAP object in JAVA
var truth = true
var skills = ["HTML", "CSS", "JS"]              // list OBJECT, OR may say Array object  
var name = 'Kate'
var x = null;

var date = new Date() 

// object
var student = {
    firstname: "Dave",
    lastname: "Masters",
   age:27,
    height: 180,
    fullname: function () {
        return this.firstname + " " + this.lastname
    }

}

console.log(age)
console.log(student.age)
const ageValue = student.age
console.log(ageValue)
console.log(student.fullname())      // function is similar to method ..  DO NOT FORGET  ()


// prefix
console.log(++age)     // 36
// postfix
console.log(age++)    // 36
console.log(age)     // 37


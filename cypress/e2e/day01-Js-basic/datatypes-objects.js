/** JS is like browser machine language
 *  node.js is kinda server that allows us to run code in computer
 */
console.log('Hello Eurotech SDET Batch 9')


/** variable naming rules in JS : 
 * Primitive Date Types 
 * numbers : 123,120,50
 * String : "" 'apple'
 * Boolean : true, false
 * Undefined : variable does not have value yet
 * Null :
 * /
 * 
 * /** There are 3 different types of variable
 * var : variable abbreviation
 *       it is global scope variable, you can change value later or define again same variable
 * let : let is aqual to
 *       it is block scope variable, u can change value later but can not define agein same variable 
 * const : constant variable
 *        ( like number PI  ) 
 *  */

// this is single comment line
/**
 * this is multiple comment line
 */

let a;     // undefined
console.log(typeof a)
a = 6
console.log(typeof a)
a = 'javascript'      // string
console.log(typeof a)
a = true
console.log(typeof a)

// let a=6     can not define agein same let variable
let b = 6, c = 'Cypress'
console.log(b + c)
console.log(b * c)          // NaN  
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

// differences from java : Backticks for variable insertion   BACKTICK: ``  NOT single quote: ''
result =`This result variable is: ${str1} ${a} and ${c}`
console.log(result)

var name = 'Mike'
var age = 35;
var name_object = { firstname: 'Jake', lastname: "Masters" }
var truth = true
var skills = ["HTML", "CSS", "JS"]
var name = 'Kate'
var x = null;


// object
var student={
    firstname:"Dave",
    lastname:"Masters",
    age:27,
    height:180,
    fullname:function(){
        return this.firstname+" "+this.lastname
    }
}
const ageValue=student.age
console.log(ageValue)
console.log(student.fullname())      // function is similar to method ..

// prefix
console.log(++age)     // 36
// postfix
console.log(age++)    // 36
console.log(age)     // 37


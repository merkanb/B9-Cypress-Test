/**
 * There is no collection in JS
 * In JS we have only Array and Map
 * There are 2 type of bracets in JS
 * []   --> creates an Array
 * {}   --> creates an object
 */

// creates an Array

var scores=new Array();    // empty
var numbers =new Array(10)    // array with initial size of 10
var numbers=new Array(10,9,2,11)   // array with initial elements

var athlets =Array(3)   // array with initial size 3
var sings = Array('Red')  // array with one element

var emptyArray=[]   // empty
var color=['red', 'green', 'blue'];

// array examples
let tools=['Jest', 'Selenium', 'cypress','testCafe','phantomJS', 'Protractor']

// accessing array elements
console.log(tools)
console.log(tools.toString())
console.log(tools[0])

const string=tools.toString()
console.log(string)

const join=tools.join(" * ")   // add * between elements
console.log(join)

const pop=tools.pop()   // removes an element from the end of the array
console.log(pop)            // ask for removed element
console.log(tools)

const push=tools.push('SlimerJS')   //  add an element to end of the array
console.log(tools)

const shift=tools.shift()  // removes an element from the beginning of an array
console.log(tools)

const unshift=tools.unshift("Selenoid")   //  add element to beginning of an array
console.log(tools)

const sort=tools.sort()   // sorts elements   ASCII 
console.log(tools)

const reverse=tools.reverse()    // reverses element
console.log(tools)


tools.forEach((value)=>{
    if(value=="cypress"){
        console.log("cypress is very good testing tool")
    }else{
        console.log("element not found")
    }
})







/**
 * There is no collection in JS
 * In JS we have only Array and Map
 * There are 2 type of bracets in JS
 * []   --> creates an Array
 * {}   --> creates an object
 */

// creates an Array

var scores=new Array();    // empty
var numbers =new Array(10)    // array with initial SIZE of 10
console.log(numbers)      // [ <10 empty items> ]
var numbers=new Array(10,9,2,11)   // array with initial elements
console.log(numbers)

var athlets =Array(3)   // array with initial size 3     // creating without 'new' keyword
var sings = Array('Red')  // array with one element

var emptyArray=[]      // empty       
var color=['red', 'green', 'blue'];

// array examples
let tools=['Jest', 'Selenium', 'cypress','testCafe','phantomJS', 'Protractor']

// accessing array elements
console.log(tools)    // able to get output directly 
console.log(tools.toString())       // Jest,Selenium,cypress,testCafe,phantomJS,Protractor
console.log(tools[0])         // Jest

const string=tools.toString()
console.log(string)

const join=tools.join("**")   // add ** between elements
console.log(join)    //  Jest**Selenium**cypress**testCafe**phantomJS**Protractor

const pop=tools.pop()   // .pop  --> removes an element from the END of the array
console.log(pop)            // ask for removed element       // Protractor
console.log(tools)       // [ 'Jest', 'Selenium', 'cypress', 'testCafe', 'phantomJS' ]

const push=tools.push('SlimerJS')   //  .push -->  ADD an element to end of the array
console.log(tools)        // [ 'Jest', 'Selenium', 'cypress', 'testCafe', 'phantomJS', 'SlimerJS' ]

const shift=tools.shift()  // .shift -->  removes an element from the BEGINNING of an array
console.log(tools)         // [ 'Selenium', 'cypress', 'testCafe', 'phantomJS', 'SlimerJS' ]

const unshift=tools.unshift("Selenoid")   //  .ushift --> ADD an element to beginning of an array
console.log(tools)

const sort=tools.sort()   // sorts elements according to ASCII values,   not an alphabetic order
console.log(tools)     [    'Selenium',    'Selenoid',    'SlimerJS',    'cypress',    'phantomJS',    'testCafe'  ]


const reverse=tools.reverse()    // reverses element, already sorted, reverse the sorted object/element
console.log(tools)   // ['testCafe','phantomJS','cypress','SlimerJS','Selenoid','Selenium']



tools.forEach((value)=>{                             // for each syntax
    if(value=="cypress"){
        console.log("cypress is very good testing tool")
    }else{
        console.log("element not found")
    }
})







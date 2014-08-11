// Here is our javascript file! We link this to our html document.
// our file name can be called anything but it must end in .js

/* another 
multi
line
comment
*/

/////////////// Printing (logging) to the console //////////////////

// print to the console: "hello world!"
console.log("hello world!");

// we could also print numbers and math
console.log(1 + 1 - 7 * 4);

// we can combine printing strings and numbers and whatever else.
// we separate these multiple data types with commas:
console.log("Hey, here is some math! 9 * 9 = ", 9 * 9);

// we can also print out the value of variables:
var test = "hey, guys what's up? Isn't Javascript so cool???!!!!";
console.log(test);

// to remind ourselves of what it is we are console.logging we can do this:
console.log("the value of the variable test is: ", test);


/////////////// Writing to the DOM //////////////////

// Let's write to our html document.
// we can write html elements that have attributes and content:
document.write("<br><br><h1 style='color:blue'>Hello World!</h1>");


/////////////// Fun With Functions! //////////////////

// we write functions one of two ways:
// 1. Anonymously:
// var someVariableName = function() { //do some stuff };
// 2. By naming them:
// function someNamedFunction() { //do some stuff };

// this function writes some stuff to the <div> html element with an id of "div1"
// it uses the document.getElementById() which is a built-in function in JS.
function getElement(){
  // assign a variable called firstDiv to the DOM element with an id of "div1"
  var firstDiv = document.getElementById("div1");
  // write some HTML to firstDiv
  firstDiv.innerHTML = "Hey, I'm inside #div1!!!";
  // style our element with a white font color
  firstDiv.style.color = "#FFFFFF";
};

// call or invoke our getElement() function:
getElement();


// this next function returns a value from 0 to 255
// if I don't use the return keyword, by default JS will return a value of "undefined"
var randomNumber = function() {
  // return a number between 0 and 256 and round it down.
  return Math.floor(Math.random() * 256);
}


// let's use the randomNumber function to give our body a random 
// background color when the page loads.
// we do this with...take a wild guess...another function!
var styleBody = function() {
  // select the <body> element
  var body = document.querySelector("body");
  // assign variables for random color values using our randomNumber() function
  var r = randomNumber();
  var g = randomNumber();
  var b = randomNumber();
  // assign a variable that concatenates the rgb() part with our number variables:
  var ranNum = "rgb(" + r + "," + g + "," + b + ")";
  
  // call the style and backgroundColor methods on our body variable:
  // we'll assign the backgroundColor the value of our ranNum variable from above
  body.style.backgroundColor = ranNum;

   // we can console.log these things for debugging.
   // try un-commenting them to see:
  //console.log("ranNum: ", ranNum);
  //console.log("body: ", body, " r: ", r, " g: ", g, " b: ", b, " test: ", test);
  // short hand way for the above ^
  //console.log(body, r, g, b, test);
}

// FINALLY, let's call the styleBody() function
styleBody();

// now try invoking these functions from the console.
// right click, inspect element, console
// type styleBody(); and see what happens
// type styleBody; and see what happens
// we will review tomorrow.




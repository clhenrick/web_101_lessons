# Javascript Day One

## credit

Most of this comes from Max Ogden's [Javascript For Cats](http://jsforcats.com/#basics). Awesome read and resource.

## T.O.C.

1. The Console
2. Embedding JS inside of an HTML File
2. Linking to an external JS file
2. Strings
3. Values and Variables
4. Using functions
5. Built in JS functions
6. Downloading and using JS libraries
7. Writing New Functions
8. Loops
9. Arrays
10. Objects
11. Recommended Reading

## The Console
- Have students open the console in Chrome by right clicking on a page and selecting "inspect element"
- Demonstrate typing things in like math such as `9 * 4 - 7`
- Stress that the console is important for debugging using the `console.log()` function which we'll go over later.

## Embedding JS inside of an HTML File:

```
  <!-- index.html -->    
  <doctype html>
  <html>
    <head>      
    </head>
    <body>
      <script>          

          // our JS goes here.
          
          window.onload(){
            // make stuff happen
          }

      </script>  
    </body>
  </html>
```

## Linking from an HTML file to external JS file

```
  <!-- index.html -->    
  <doctype html>
  <html>
    <head>
    <!-- We can link to an external file in our head -->
    <script src="./js/vendor/leaflet.js"></script>      
    </head>
    <body>
      <!-- all our HTML goes on top -->
      <!-- We can link to an external file in our body -->      
      <script src="./js/cool-js-script.js"></script>  
    </body>
  </html>
```

## Strings
- show how JS returns an error when using mis-matched quotes like `"` and `'`
- show concatenating strings using `+`

## Values and Variables
- show storing a string in a variable, ie: `var theCoolest = "Chris Henrick";`

## Using Functions
- the `replace()` function for replacing something in a string.
- doing a stringVar.replace("x", "y"); doesn't alter the original variable.
- we must store the new variable to keep the result using the `=` operator.

## Built in JS functions
- there are other built in functions like `replace()` such as `console.log` and `length`

## Downloading and using JS libraries
- underscore.js, jquery
- copy and paste into console. 
- In reality we would link to an external file or `http://` address from our HTML

## Writing New Functions
- _Stress_: 
  - Functions modify or create values and return them, or 
  - functions take in values and perform some action that cannot be returned.
- example of the former:
  
  `var randomPercent() { return Math.floor(Math.random()*100) + '%'; }`
  
- Functions can take parameters:
  
  ```
  function makeMoreExciting(string) {
	  return string + '!!!!'
	}
  ```
- Functions can call other functions:
  
  ```
  function yellIt(string) {
	  string = string.toUpperCase()
	  string = makeMoreExciting(string)
	  console.log(string)
	}
  ```
- ^ also an example of a function that doesn't return something
- but we could instead have it `return makeMoreExciting(string)` and then `console.log` the `yellIt()` function

## Loops
- demo with using the "times" function in underscore.js
  
  ```
  function logANumber(someNumber) {
	  console.log(someNumber)
	}
	_.times(10, logANumber);
  ```
- what it's doing:

  ```
logANumber(0)
logANumber(1)
logANumber(2)
logANumber(3)
logANumber(4)
logANumber(5)
logANumber(6)
logANumber(7)
logANumber(8)
logANumber(9)
  ```
  
- an array for 10 numbers 0 - 9: `var zeroThroughTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

## Arrays
- example: `var myCatFriends = ["tommy", "tabby", "ceiling"]`
- thus `myCatFriends[0]` returns "tommy"
- `length` method for arrays: `myCatFriends.length` returns 3.
- `push` method for arrays: `myCatFriends.push("super hip cat");

## Objects
- use `key : value` pairs. 
- `key` can be a variable name with or without quotes.
- `value` can be a data type.
- can be useful for storing multiple properties in one place

```
var myCatFriends = ["tommy", "tabby", "ceiling"]
var lastNames = ["the cat", "cat", "cat"]
var addresses = ["The Alley", "Grandmas House", "Attic"]
```

- can be stored like:

```
var firstCat = { name: "tommy", lastName: "the cat", address: "The Alley" }
var secondCat = { name: "tabby", lastName: "cat", address: "Grandmas House" }
var thirdCat = { name: "ceiling", lastName: "cat", address: "Attic" }
```

- __note:__ objects don't store order of things which is why arrays are good (they are indexed).
- but you could have an array of objects

## Recommended Reading & Resources
- [Node School](http://nodeschool.io/)
- [Eloquent Javascript](http://eloquentjavascript.net/)
- [MDN's JS Guide](https://developer.mozilla.org/en-US/docs/JavaScript/Guide)
- [Felix Node.js Style Guide](http://nodeguide.com/style.html)
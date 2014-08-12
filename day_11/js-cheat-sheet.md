Javascript Cheatsheet
========
This cheatsheet was written by [Melanie Bossert](https://github.com/melboo) and modified by [Chris Henrick](https://github.com/clhenrick)

##**Variable Assignment**

Declare a variable named x:

- `var x;`

Values can be assigned to variables with an `=` sign:

- `x = 0;` 

Now the variable x has the value 0

##**JavaScript supports several types of values**

- `x = 1;` // Numbers.
- `x = 0.01;` // Just one Number type for integers and reals.
- `x = "hello world";` // Strings of text in quotation marks.
- `x = 'JavaScript';` // Single quote marks also delimit strings.
- `x = true;` // Boolean values.
- `x = false;` // The other Boolean value.
- `x = null;` // Null is a special value that means "no value".
- `x = undefined;` // Undefined is like null. But different.


## Objects
JavaScript's most important data type is the object. An object is a collection of `key : value` pairs.

```
var book = {			// Objects are ALWAYS enclosed in curly braces.
  topic: "JavaScript", 	// The property "topic" has a value of "JavaScript". 
  fat: true 			// The property "fat" has a value of true.
};						// The closing curly brace followed by a semi-colon marks the end of the object.
```

### Access the properties of an object 

We can access object properties using two methods: With a `.`  or `[""]`:

- `book.topic`   // => "JavaScript"
- `book["fat"]` // => true 
- `book.author = "Flanagan";` // Create new properties by assignment.
- `book.contents = {};` // `{}` is an empty object with no properties. We stored this object inside the book object.

This last part is __important__: we can have objects inside of objects, objects inside of arrays, and arrays inside of objects.


##JavaScript Arrays 

Are really numerically indexed lists. This means they are kept in order unless we explicitly change their order. Object `key : value` pairs _are not_ stored in order.

- `var primes = [2, 3, 5, 7];` // An array of 4 values, delimited with commas `,`.
- `primes[0]` => 2: the first element (index 0) of the array. Remember computers start counting at 0.
- `primes.length` // => 4: how many elements are in the array.
- `primes[primes.length-1]` // => 7: the last element of the array.
- `primes[4] = 9;` // Add a new element by assignment.
- `primes[4] = 11;` // Or alter an existing element by assignment.
- `var storeThingsLater = [];` // [] is an empty array with no elements.
- `storeThingsLater.length` // => 0

##Operators 

Act on values (the operands) to produce a new value. Arithmetic operators are the most common:

- `3 + 2` // => 5: addition
- `3 - 2` // => 1: subtraction
- `3 * 2` // => 6: multiplication
- `3 / 2` // => 1.5: division
- `points[1].x - points[0].x` // => 1: more complicated operands work, too
- `"3" + "2"` // => "32": + adds numbers, concatenates strings

## Shorthand Arithmetic Operators
- `var count = 0` // Define a variable
- `count++;` // Increment the variable
- `count--;` // Decrement the variable
- `count += 2` // Add 2: same as count = count + 2;
- `count *= 3` // Multiply by 3: same as count = count * 3;
- `count` // => 6: variable names are expressions, too. Greater than 0 is a truthy value.

## Equality and relational operators 

Test whether two values are equal, unequal, less than, greater than, and so on. They evaluate to true or false.

- `var x = 2, y = 3;` // These = signs are assignment, not equality tests
- `x === y` // => false: equality
- `x !== y` // => true: inequality
- `x < y` // => true: less-than
- `x <= y` // => true: less-than or equal
- `x > y` // => false: greater-than
- `x >= y` // => false: greater-than or equal
- `"two" == "three"` // => false: the two strings are different
- `"two" > "three"` // => true: "tw" is alphabetically greater than "th"
- `false == (x > y)` // => true: false is equal to false

Javascript also has "truthy" and "falsey" values. For example:

```
var test = 1;
if (test) { console.log("hello"); } // prints "hello" to the console.

var test = 0;
if (test) { console.log("hello"); } // now does not print to the console.
```

So we see that `1` is a "truthy" value while `0` is a "falsey" value.


## Combining Logical operators 

We can combine or invert boolean values

- `(2 === 2) && (3 === 3)` // => true: `true && true` evaluates to `true`. && means AND
- `(2 === 2) && (4 === 3)` // => false: `true && false` evaluates to `false`.
- `(x > 3) || (y < 3)` // => false: `false || false` evaluates to `false`. || means OR
- `(3 === 3) || (4===3)` // => true: `true or false` evaluates to true.
- `!(x === y)` // => true: `!` inverts a boolean value


## Functions 

Are blocks of JavaScript code that we can invoke.

```
 function plus1(x) { // Define a function named "plus1" that takes a parameter called "x"
   return x+1; // Return a value one larger than the value passed in
 } ; // Functions are enclosed in curly braces
```

if `y = 3;`
- `plus1(y);` // => 4. Since y is 3, so this invocation returns 3+1

```
// Functions are values and can thus be assigned using: var variableName = 
var square = function(x) { 
  return x * x; // square the value of parameter "x"
}; // a semicolon marks the end of the assignment.
```

We can invoke two functions in one expression like so:
- `square(plus1(y));` // => 16. 


## Resources

- w3School [w3School](http://www.w3schools.com/js/)
- MDN [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
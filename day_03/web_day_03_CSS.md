Day 3: Intro to CSS Notes
=========================
## Order of subjects:
1. CSS, what is it? 
2. CSS syntax, an overview.
	1. Selectors
	2. Common Properties
	3. Combining Selectors
3. General Best Practices
4. Resources for CSS on the web

## Why CSS?

- From MDN [Why Use CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Why_use_CSS): "Use CSS to define styles for your documents, including the design, layout and variations in display for different devices and screen sizes."

- Separating our styles from our structure keeps our code organized, efficient and readable.

## How it works
From MDN, [How CSS works](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/How_CSS_works)

When a browser displays a document, it must combine the document's content with its style information. It processes the document in two stages:

1. "The browser converts the markup language and the CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style."

2. The browser displays the contents of the DOM.
 

## Using CSS
__3 Ways to use CSS in our HTML:__

1. We can write CSS in our `<style>` element (which goes in the `<head>`)
2. We can link to external CSS documents from our HTML page inside our `<head>`: 
3. Inline CSS within HTML tags, not easily maintainable but good for testing: 
    - example: `<p style="color:aqua">`  

__However:__

- External style-sheets are the preffered way to write our CSS when writing webpages.
- We Link external CSS to our HTML page(s).
- we do this by using the following code inside our `<head>` element: 
  - `<link href="path/to/style-sheet.css" rel="stylesheet" type="text/css" media="all">`

### Style priority:
#### In order of increasing priority:
- (4) external link
- (3) inside head 
- (2) inline style attribute
- (1) using !important * (not a good idea)

**_Each following method(s) ^ will overide the previous one(s)._**

#### conflicting properties:
- The last one will override previous one (_demonstrate this_).

#### non-conflicting:
- Will be combined (_demonstrate this_).


### anatomy of CSS Syntax
CSS works with `selectors` and `properties`.

- there are 4 main types of `selectors`
- `properties` are in the form of value pairs.
 
 ```
 selector {
   property: value;
   property: value;
   property: value;
 }
 ```
* a `selector` is what targets an HTML element on our page.
* an opening curly bracket `{` to start our declaration
* a `property` followed by a colon `:` then a `value` 
  * some properties take multiple values.
  * values can be in the form of `keywords`, numbers or even `strings`.
* a semicolon `;` which states this is the end of one CSS property.
* a closing curly bracket `}`

We can write `comments` in CSS like so:

```
/* this is a CSS comment */

/*
  this is a multi-line CSS comment
  that goes on
  and on
  and on
*/
```

### types of CSS selectors
There are 4 types of selectors in CSS

- element
- class
- id
- position in document

### common CSS properties
There are many types of properties in CSS, we will start with a few common ones.

- `color` sets the font color
- `background-color` sets the background color
- `font-family` indicates the font we would like to use
- `font-size` can be set in pixels, em's, or %'s
- `font-style`: typically normal or italic.
- `font-weight`: can use `key words` or numerical values such as 100, 200, ... 900.
- `psuedo classes` : allow us to add some interactivity for things like hover.

#### Shorthand properties
Some CSS properties can be written in shorthand. For example the `font` property:

```
table.geeky {
  font-weight: bold;
  font-style: italic;
  font-size: 10px;
  font-family: sans-serif;
}
```
these four properties can be combined into a single property:

```
table {
  font: italic bold 10px sans-serif;
}
```


### combining selectors

Selectors can be __combined__ to create __*compound selectors*__:

* we use a space to create nested selectors (position in document)
  * `.product p #sale-item { ... }`
* we use no space to combine selectors
  * `.product p#sale-item { ... }`
* we use commas `,` to group selectors
  * `.product, p, #sale-item { ... }`
  
_(demonstrate each of these)_

### Inheritance & Specificity

#### inheritance
- any nested / children elements will inherit properties of parent element.
- nested selectors can override inherited parent styles

```
.featured { color: #0000ff; }
.featured p { color: #fff; }
```
#### specificity

To determine the priority of a selector use a four digit list: 
  
- `0,0,0,0` maps to —> number of `inline styles`, number of `id selectors`, number of `class selectors`, number of `element selectors`.
- __note:__ the `!important` value will override all of these.
- if digits in two or more places are the same number then CSS will default to the last one in the list.
- but if there is a digit > 0 before a following digit it will override the following methods.
  - (for example if you have 1 id but 2 classes and 2 element selectors the id will override the class and element selectors).

__examples:__

- an element selector: `h3 { color: #000; }` --> 0,0,0,1
- a class selector: `.foreground { color: rgb(100,100,0);}` --> 0,0,1,0
- an id selector: `#speacil { color: #FFF000; }` --> 0,1,0,0
- an inline-style: `<h3 style="color:hsl(0,50%,50%);"` --> 1,0,0,0
- an important override: `h3 { color: #00e9ff !important;}` --> overrides all the above

_more complex:_

1. 2 classes and 1 element: `.foreground p.test { color: #000FFF; }` --> 0,0,2,1
2. 2 classes and 2 elements: `.foreground p a.hover { color: #00e9ff; }` --> 0,0,2,2

in the above example 2. would override 1. because the # of element selectors is the same as the # of class selectors, _but..._

- if we add an id, it will override both 1. and 2.
- ex: `#some-id { color: #000; }` --> 0,1,0,0

For this reason it's generally a good practice to not use a lot of id's.

__caution:__ space or no space between selectors matters!

- ex: `.primary p .copyright` vs. `.primary p.copyright`

#### Solving Specificity problems
- using default values for html elements
- Normalize CSS
- Reset CSS

#### despecifying
- refactor code that is specific to be more broad
  - ie: write an element selector for all `<p>`s instead of something like `<p class=“main second”>`.

## Best Practices
- write CSS in an external file and link it to your HTML
- use the indentation method of writing CSS
- practice DRY CSS by:
  - use inheritance 
  - limiting the number of id's
  - use classes instead
  - grouping selectors when possible
  - not getting over-specific with CSS / use selector abstraction
- try not to use the `!important` flag


## references:
- [CSS Cheatsheet](http://d2o9nyf4hwsci4.cloudfront.net/2011/fall/lectures/8/cheatsheets/css-cheat-sheet-v2.pdf)
- [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) 
- [CSS Tricks](http://css-tricks.com/pseudo-class-selectors/) 
- [more CSS Tricks](http://css-tricks.com/pseudo-element-roundup/)
- [MDN psuedo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Homework:

### Assignment: 

Write three (3) separate CSS style sheets for the same HTML markup. Post these on the the blog as 3 separate links. 

This means: copying your same HTML file 3 times and writing 3 different CSS files. All files should be in a parent folder and all CSS files should be in a "css" sub-folder.

So if your parent folder is called "web" and the naming convention for your HTML file is like hw_day01_1.html and your CSS file is like styles1.css then your directory tree in Cyberduck would look like:

- /public_html/web/hw_day02_1.html 
- /public_html/web/hw_day02_2.html 
- /public_html/web/hw_day02_3.html
- /public_html/web/css/styles1.css
- /public_html/web/css/styles2.css
- /public_html/web/css/styles3.css

thus you would link each corresponding html file and css style sheet appropriately so that:
- hw_day02_1.html links to styles1.css
- hw_day02_2.html links to styles2.css
- hw_day02_3.html links to styles3.css


### Required Reading

Read more of _HTML & CSS_, chapters 10, 11 and 12. This will help a lot!!!

### The Bootcamp Blog:

Is now live! You should have received a log-in username and password, let me know if not. Start using it tonight and post your homework on it. Don't forget to mark the appropriate categories when posting like "Web" and "Lower East Side." Also use the tag "hw2." 

Please do this so I can find your work! If you don't do this I won't be able to find it and you won't receive credit. 

### Resources:

Mozilla Developer Network (MDN) CSS Resources. Keep in mind we are only concerned with styles right now. Tomorrow we will get into a few more styles and talk about the "Box Model" in CSS.

_pro tip:_ When looking online for help try Googling "MDN" + your "coding/programming term" to find it on MDN's documentation. For example "MDN CSS psuedo class" or "MDN CSS font property."


Try to have fun with this and see you tomorrow!
Day 3: Intro to CSS Notes
=========================
## Order of subjects:
1. CSS, what is it? Cascading Style Sheets. 
2. CSS syntax, an overview.
	1. Selectors
	2. Common Properties
	3. Combining Selectors
3. General Best Practices

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
CSS works with `selectors` and `properties`:
 
 ```
 selector {
   property: value;
   property: value;
   property: value;
 }
 ```
* a `selector` is what targets an HTML element on our page
* an opening curly bracket `{` to start our declaration
* a `property` followed by a colon `:` then a `value` (some properties take multiple values)
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

Selectors can be __combined__ to create __*compound selectors*__:

* we use a space to create nested selectors
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
- if digits in two or more places are the same number then CSS will default to the last one.
- but if there is a digit > 0 before the following digit it will override following methods.
  - (example if you have 1 id but 2 classes and 2 element selectors the id will override).

__caution:__ space or no space between selectors matters!

- ex: .primary p .copyright vs. .primary p.copyright

#### Solving Specificity problems
- using default values for html elements
- Normalize CSS
- Reset CSS

#### despecifying
- refactor code that is specific to be more broad
ie: for all <p> instead of <p class=“main second”>


## references:
- MDN reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- css tricks: http://css-tricks.com/pseudo-class-selectors/
- more css tricks: http://css-tricks.com/pseudo-element-roundup/

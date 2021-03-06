Bootcamp Web Class Day 05: More Positioning and Floats
=======
## To Cover

- refresher on Box-Model
- refresher on Positioning
- go over display property and Barbara's notes from Day4
- demo a navigation bar

## Positioning Recap
__The 4 types of positioning:__

- static
- relative
- absolute
- fixed

__Display__

```
display: none

display: inline
display: block
display: list-item
display: inline-block
display: inline-table
display: table
display: table-cell
display: table-column
display: table-column-group
display: table-footer-group
display: table-header-group
display: table-row
display: table-row-group
display: flex
display: inline-flex
display: grid
display: inline-grid
display: run-in

display: inherit
```

- with `display: inline-block;` "The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)." This is a good replacement for using floats.

- important to know that `display: none;` will make an element not be rendered on the page. From MDN: 
  "Turns off the display of an element (it has no effect on layout); all descendant elements also have their display turned off. The document is rendered as though the element did not exist."
  
- to have an element still exist on a page but have it's content rendered invisible use the `visibility: hidden;` property: value.


## Floats

### general:
- __warning:__ floats are slowing becoming less frequently used today as we have the option of using `display: inline-block` which makes positioning easier. We also have a technique called [flex box](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) but this has more limited browser support.

- state types of float: `float: left / right / none`
- can float non-images but must specify a width.
- other important properties of floats to mention:
  - floated elements stack up to parent edge, then move down to next available edge
  - if floated elements are a different height then the next shorter element will float against a taller element when moving down.
  - if not enough horizontal room the element that appears first in the DOM will be placed at the top
  - if both are floated right the first element in the html will be to the farthest right

### clearing floats:
  - if the other items inside container are in danger of not extending beyond the floated item the parent container isn’t going to stretch to match the height of any floated items!
  - necessary to clear the float of any floated items if it extends beyond the content of non-floated items.
  - if all elements inside container are floating it will be necessary to clear the container as well.

#### 3 methods for clearing floats
1. Clear with a subsequent element
   - next element has `clear: both;`

2. Manual clearing
   - next sibling element is empty and has `clear: both;`
   - works for extending background or border of parent container to stretch to height of child elements

3. Clearfix
   - recommended method
   - add group class to parent container to self clear any elements inside of it.
   - allows for not needing a subsequent or empty element to extend height of container.
   - __css code:__

      ```
      /* clearfix */
        
      .group:before,
      .group:after {
        content: "";
        display: table;
      }
      .group:after {
        clear: both;
      }
      .group {
        zoom: 1;
      }
      ```
      More simple Clearfix:
 
		```
		.clearfix {
		 overflow: auto;
		 zoom: 1; /* IE 6 */
		}
		```

__Additional Reading:__

- [display properties](https://developer.mozilla.org/en-US/docs/Web/CSS/display) in MDN docs
- really simple clearfix explanation in _learn CSS layout_ [the clearfix hack](http://learnlayout.com/clearfix.html)
- stack overflow: [What is clearfix?](http://stackoverflow.com/questions/8554043/what-is-clearfix) 
- css tricks: [Force Element To Self-Clear its Children](http://css-tricks.com/snippets/css/clear-fix/)
- for all things web browser compatibility: [can i use](http://caniuse.com/)
Bootcamp Web Class Day 09: Responsive Media
==========

Generally speaking the idea is that you want to use **percentages** and **em**'s as units of measure. 

*You will need to use math*. Particularly the formula: `target / context = result`. 

[This website](http://responsv.com/flexible-math/) is super helpful for converting pixels to percents

## Responsive Typography

For typography you start by setting up properties for your elements to inherit, like: 
	
	```
	html { font-size: 10px } 
	body { font-size: 62.5% /* so that 1em = 10px */ }
	```

From this point on you use the formula to determine an elements font size. So for a child element of the body that you want to be 30px the formula would be:
	
	```	
	30px / 10px = 3em
	```
For example, if setting the `font-size` for a `<header>` element inside the `<body>` to 25px:

	```
	header {
	  font-size: 2.5em; /* math: 25px / 10px = 2.5em */
	}
	```
Now the `context` of the header is 25px or 2.5em.
Thus if we have another element in the header that we want to make a smaller font size, say 18px...

  ```
  header div {
    font-size: .72em; /* math: 18px / 25px = .72em */
  }
  ```


## Responsive Layout

Keep three things in mind:

- Flexible width
- Flexible margins
- Flexible padding

### Flexible width

More math. For width you would set the total width of your site in pixels, like: 

```
body { width: 960px }
```

then set each child element using `%`'s with the `target/context=result * 100%` formula.

so if you have a three column layout & each column would be 320px wide or 

	```
	320px / 960px = 0.333333333 * 100% = 33.3333333%
	```
in this case *decimals actually matter* so be sure to include 6 decimal places.

### Flexible Margins

When setting **flexible margins** on an element, your `context` is the width of the *element’s container*. <br>
(credit: Ethan Marcotte, Responsive Web Design)

  - 100px / 960px = .0.10416666666667
  - `margin-left: 10.4166667%; /* 100px/960px */`

### Flexible Padding

When setting **flexible padding** on an element, your `context` is the width of the *element itself*. <br> (credit: Ethan Marcotte, Responsive Web Design)

  - eg: 20px / 300px = 0.06666666666667
  - `padding: 6.666667%; /* 20px/300px */`  
  
### Responsive Columns
CSS3 has a feature that allows for the creation of responsive columns. [CSS Tricks](https://css-tricks.com/guide-responsive-friendly-css-columns/) has a good guide. Basically the properties are:

- `column-count` : the max number of columns you'd like to have inside a block element. 
 
- `column-width` : the minimum width (eg in pixels) of each column.

Note that the above two properties can be specified short hand via `columns`. For example, to specifiy a 3 column layout with a minimum width of 150px per column do `columns: 3 150px`

- `column-gap` : the "gutter" or "gap" between each column. This is split in half for each column so if you specify `40px` the left side of the gutter will be `20px` and the right side will be `20px`

- `column-rule` : similar to the border property, specify a ruled-line between each column.

Here is an example, note that you should use vendor prefixes for this property:

```
.column-container {
	 -webkit-columns: 2 200px;
	     -moz-columns: 2 200px;
	          columns: 2 200px;
	  -webkit-column-gap: 4em;
	     -moz-column-gap: 4em;
	          column-gap: 4em;
	  -webkit-column-rule: 1px dotted #ddd;
	     -moz-column-rule: 1px dotted #ddd;
	          column-rule: 1px dotted #ddd;
 }

```


## Responsive Images

### 3 Basic Rules:

1. Save image larger than needed.
2. add `max-width: 100%` property to the `img` tag in the top of your CSS.
3. then in the specific image element you are targetting set the `max-width` property to what you want it to be:

   ```
   figure img {
     max-width: 26.785%
   }
   ```
   
You can also do this with other media types, eg: embed, video, object, etc.

__note__: 

  - there is no IE6 support for this technique.
  - for pre-windows 7, specifically firefox 2 & IE7 use AlphaImageLoader.

## Media Queries

Use the concept of "breakpoints" to change the design of site at different viewport dimensions.

Then set breakpoints using values such as `min-width` and `max-width`. There are others to use such as `device-width` and `device-height` or `orientation:portrait` and `orientation:landscape`.

**Example:**

```
@media screen and (max-width: 480px) {	.main-logo {		float: none;		margin: 0 auto;		text-align: center;	}	.main-content {		background-color: #26343e;		float: none;		margin: 0 auto;		text-align: center;	}	.nav-bar {		float: none;	}	#map {		float: none;		width: 100%;	}}
```

**Another example:**
```
/* regular styles */
/* Main Logo */
 
.main-logo {
  float: left;
  width: 36.1702128%; /* 340px/940px */
}
 
/* Navigation */
 
.nav-bar {
  float: right;
}
/* target an iphone screen size */
@media screen and (max-width: 320px) {
  .main-logo {
    float: none;
    margin: 0 auto;
    width: inherit;
    
  }
  .nav-bar {
    float: none;
    text-align: center;
    width: inherit;
  }
}```

### Breakpoints
The concept of having "breakpoints" in a site is when the content and design scales with `@media` queries.
Breakpoints are determined by content, ie: when resizing the browser window and the content stacks weird, starts to look cramped or isn't functional that is a breakpoint.
Keep in mind a user isn't going to be resizing the window on their laptop to see how the site changes. Breakpoints are for when the window is opened at different sites that it will still function.- this fits with concept of having a fluid site who's content and design changes from desktop > tablet > mobile.- for example 768px is the general spec for tablet width.


## References:
### Background Reading:
- Sitepoint: [There is No Best Size for a Website](http://www.sitepoint.com/best-size-website/)
- A List Apart: [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) (this is Ethan Marcotte's website)

### Technical Help
- CSS tricks (of course)
- MDN
- there also javascript libraries that can help with images and typography but I need to Google them.
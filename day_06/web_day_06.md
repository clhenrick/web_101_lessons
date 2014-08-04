Bootcamp Web Class Day 06: Positioning and Floats Continued
=======

## To Cover:

### Review:
- go over positioning examples from day 05 that were posted to the blog over the weekend.
- show how to manipulate each of the examples with the web inspector.

### Mention:

- internal links using id's (forgot to cover)

### Next Up: Floats & Typography

- go through floats: left / right, inheriting, clearing them. How they can be useful: columns & nav bars.
- embedding alternate fonts (Google, your own with @font-face)

### Possibly introduce GitHub?
- Setting up GitHub and using the GitHub App for Mac? (might be a better alternative to the Parsons' a-server...)

## Floats

- see day 05 notes and inclass-examples

## Typography on the Web

__cool CSS font properties;__

- text-shadow (demo)

__loading custom fonts__

- the positive: we can add custom fonts!
- the negative: these can take a while to load

__options:__

- using your own a la the CSS `@font-face` property
- [Google Fonts]()
- font services

### CSS @Font-Face

- still somewhat experimental
- can be buggy
- must have copyright permission to use fonts
- must include your fonts in different file formats for cross-browser support

### Google Fonts

- they're free!
- _but_ they're not all well designed :(
- see this article on [getting started](https://developers.google.com/fonts/docs/getting_started).

### Font Services

- there are services on the web that provide access to __well designed__ fonts for a _fee._
  - Cloud Typography
  - Typekit
  - Fontdeck
  - Webtype
  - Fontspring
  - Typotheque
  - WebINK
  - Fonts.com
  - Google Fonts
  - Font Squirrel
- there are some services that provide fonts available for free!
  - example
  - example
  
Smashing Magazine [review of font services](http://www.smashingmagazine.com/2010/10/20/review-of-popular-web-font-embedding-services/)

### Good Practices 

- Combining fonts: [Smashing Magazine Article on combining typefaces](http://www.smashingmagazine.com/2010/11/04/best-practices-of-combining-typefaces/)
- keep it simple: 2-3 fonts is usually plenty.
- only [loading what you need](http://googlewebfonts.blogspot.com/2011/04/streamline-your-web-font-requests.html) via [CSS tricks](http://css-tricks.com/snippets/css/using-font-face/)
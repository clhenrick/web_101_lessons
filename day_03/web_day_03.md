Bootcamp Web Class Day Three: HTML Cont & CSS
========
## HTML5
talk about HTML5 elements for supposed improved semantics. Go over each briefly and demonstrate where & why we would use them.

  - `<Section>`
  - `<Header>`
  - `<Footer>`
  - `<Aside>`
  - `<Nav>`
  - `<Article>`
  - `<Main>`
  - `<Figure & Figcaption>`
  - `<Time>`
  
### section
- generic document or application section
- difference between div: “A div has no semantic meaning, but the section element does. It’s used for grouping together thematically related content.”
- “You might want to replace some of your div elements with section elements, but remember to always ask yourself, “Is all of the content related?”
- generally section elements contain a heading of somekind

### header
- “A group of introductory or navigational aids.” (w3)
- can be many different headers on a page
- usually appears at the top of a document or section but is defined by its content rather than its position
- headers can exist inside particular sections

__example:__

```
<section>	<header>		<h1>The heading of the section</h1>		<p>This is content in the header.</p>	</header>	<p>This is some information within the section.</p></section>
```

### footer

- “The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element.” (W3)
- Like the header, the footer element is not position-dependent. It should describe the content it is contained within.
- footer can also live inside other html elements

__example:__

```
<section>	<header>		<h1>The heading of the section</h1>		<p>This is content in the header.</p>	</header>	<p>This is some information within the section.</p>	<footer>		<p>By "Author Name"</p>	</footer></section>
```

### Aside
- covers various contexts:
  - When used within an article element, the aside contents should be related to that particular article it is contained within.  - When used outside an article element, the aside contents should be specifically related to the site.

- An aside element is appropriate when it is used to represent content that is not the primary focus of an article or page, but it is still related to the article or page (ie: secondary content related to the site as a whole such as a sidebar)

- eg:

	```
	<!— html4 —>
	<div class="sidebar">	  <!-- ... -->	</div>
	
	<!— html5 —>
	<aside>	  <!-- ... -->	</aside>
	```

__used within a section:__

	```
	<section>	  <header>	    <h1>The heading of the section</h1>	    <p>This is content in the header.</p>	  </header>	  <p>This is some information within the section.</p>	  <aside>	    <p>Some secondary information.</p>	  </aside>	  <footer>	    <p>By "Author Name"</p>	  </footer>	</section>
	```

### Nav

- “The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.” (W3)
- intended for “major navigation.”
- html5 use is to nest an un-ordered list within the nav element:

```
<nav>  <ul>    <!-- ... -->  </ul></nav>
```

### Article
- “The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication.” (W3)
- The article element is another type of section. It is used for self-contained related content.
- Intended for syndicated content in RSS or Atom feeds
- examples would be blog post, news story, comment on a post, review, gallery items

### Main
- “The main element represents the main content of the body of a document or application.”
- “The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.”
- basically the main content area
- don’t include more than one `main` element in a document.
- don’t place it inside an article, aside, nav, footer, header

### Figure & Figcaption
- “The figure element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without affecting the document’s meaning.”

__example:__

```
<figure>  <img src="image.jpg" alt="My Picture" /></figure>
```

- “The figcaption element represents a caption or legend for a figure.”
- basically for captions

__example:__

```
<figure>  <img src="image.jpg" alt="My Picture" />  <figcaption>This is a caption for the picture.</figcaption></figure>
```

### Time
- “The time element represents either a time on a 24 hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset.”
- We use the datetime attribute to get our desired format: `<time datetime="2013-09-16">09/16/2013</time>`
- with the datetime attribute the content can be anything relevant.
- datetime attribute for machine readability: “This attribute indicates the time and date of the element and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.” (MDN)

- simple example: `<p>The concert starts at <time>20:00</time>.</p>`
- datetime example: `<p>The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.</p>`


========


## CSS!!!

demo CSS: start with inline, then in the `<style>` tag, then external CSS links.

- In order of increasing priority (the one below will overide ones above):
  - external link
  - inside head 
  - inline style attribute
  - using !important * (generally not a good idea)

- when mentioning linking to CSS files, talk about paths (eg: relative & absolute)








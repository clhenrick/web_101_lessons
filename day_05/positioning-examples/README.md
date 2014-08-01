CSS Positioning Examples
============
__Credit:__ These positioning examples are credited to Noah Stokes' blog post on A List [Apart, CSS positioning 101](http://alistapart.com/article/css-positioning-101)

For the last example that shows how to use each position property in action: 

"All this talk and no action. Let’s take a look at a real-world example website that uses all the position values. Example J shows a typical website layout with a header, navigation, content, and footer. Let’s walk through each element, discuss its position property, and why we chose that property.

Let’s start with our #container element. This is simply the containing element that I’m using to center our content within the viewport. The #nav element is the first element within our #container element. No position property is assigned to the #nav element, so by default, it’s set to static. This is fine: We don’t need to do anything to offset this element, or create any new coordinate systems with it. We will need to do that with #content on our next element, so for that element, we’ve applied a position property of relative.

Since we’re not using any offsets here, the position value has no real influence on the #content element, but we placed it there to create a new coordinate system for the #callout element. Our #callout element is set to position: absolute, and since its parent element, #content is set to relative, the offset properties we’re using on #callout are based off the coordinates created by #content. The #callout element uses a negative 80px pixel offset on the right to pull the element outside of its containing parent element. Additionally, I’ve used one of the cooler features of the absolute value on our #callout element: by setting the top and bottom offsets to 100px, I’ve stretched the #callout element to the full height of the document minus the 100px offset on top and bottom.

Since the #callout element has an absolute value, it does not affect other elements. Therefore, we need to add some padding to the #content element to keep our paragraphs from disappearing beneath it. Setting the padding on the right of #content to 250px keeps our content in full view for our users. To bring up the rear, we’ve added a footer with a fixed position to keep it fixed to the bottom of the page. As we scroll, our footer stays in place. Just as we added padding to the #content to keep our paragraphs from disappearing under it, we need to do the same for the #footer element as it is a sibling of the absolute value. Adding 60px to the #content element’s bottom padding ensures that we can scroll the entire document and not miss any text that would normally be hidden under the #footer element.

Now we have a nice, simple layout with navigation, some content, a callout area, and a footer using static, relative, absolute, and fixed elements. Since we’re using the fixed value in this layout, we should apply some techniques to make sure that older browsers still respect our design."


## Examples:

1. [3 boxes positioned static](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/01_boxes-static.html), the default position given to elements by browsers.
- [3 boxes positioned relative](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/02_boxes-relative.html), positioning relative allows for us to use the offset properties: top, right, bottom, left.
- [3 boxes relative with a child](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/03_boxes-relative-parent-child.html), the second box is now inside the first box but the css has not changed.
- [4 boxes absolute](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/04_boxes-absolute.html), using absolute allows us to stick things to an element's parent edges.
- [4 boxes absolute with children](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/05_boxes-absolute-with-children.html)
- [2 boxes absolute streched](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/06_boxes-absolute-streched.html)
- [2 boxes absolute column layout](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/07_boxes-absolute-2-columns.html)
- [3 boxes, one fixed](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/08_boxes_fixed.html). Watch what happens when you scroll.
- [Putting it all together](http://clhenrick.github.io/web_101_lessons/day_05/positioning-examples/09_mock-web-site.html) in a mock website layout.
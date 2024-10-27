## HTML SYLLABUS

# HTML Elements
- <tagname>Content goes here...</tagname>
- Nested HTML Elements
- Never Skip the End Tag
- Empty HTML Elements
- HTML is Not Case Sensitive


# HTML - The Head Element
- The <head> element is a container for metadata (data about data)
- The <head> element is placed between the <html> tag and the <body> tag
- The <title> element is required and it defines the title of the document
- The <style> element is used to define style information for a single document
- The <link> tag is most often used to link to external style sheets
- The <meta> element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings
- The <script> element is used to define client-side JavaScripts
- The <base> element specifies the base URL and/or target for all relative URLs in a page

# HTML Headings
- HTML headings are defined with the <h1> to <h6> tags.

# HTML Paragraphs
- HTML Paragraphs <p>
- HTML Horizontal Rules <hr>
- HTML Line Breaks <br>
- The HTML <pre> Element

# html element vs html tag

# HTML Attributes
- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

# HTML Styles
- The HTML Style Attribute

### HTML Comments
- HTML Comment Tag <!-- Write your comments here -->

# HTML Text Formatting
- <b>	Defines bold text
- <em>	Defines emphasized text 
- <i>	Defines a part of text in an alternate voice or mood
- <small>	Defines smaller text
- <strong>	Defines important text
- <sub>	Defines subscripted text
- <sup>	Defines superscripted text
- <ins>	Defines inserted text
- <del>	Defines deleted text
- <mark> Defines marked/highlighted text

# HTML Quotation and Citation Elements
- <abbr>	Defines an abbreviation or acronym
- <address>	Defines contact information for the author/owner of a document.
- <bdo>	Defines the text direction
- <blockquote>	Defines a section that is quoted from another source
- <cite>	Defines the title of a work
- <q>	Defines a short inline quotation 

### HTML Colors
- RGB
- HEX
- HSL

# HTML Styles - CSS
- Inline - by using the style attribute inside HTML elements
- Internal - by using a <style> element in the <head> section
- External - by using a <link> element to link to an external CSS file

# HTML Links
- Use the <a> element to define a link
- Use the href attribute to define the link address
- Use the target attribute to define where to open the linked document
- Use the <img> element (inside <a>) to use an image as a link
- Use the mailto: scheme inside the href attribute to create a link that opens the user's email program

### HTML File Paths
- Absolute File Paths
- Relative File Paths

# HTML Images
- Use the HTML <img> element to define an image
- Use the HTML src attribute to define the URL of the image
- Use the HTML alt attribute to define an alternate text for an image, if it cannot be displayed
- Use the HTML width and height attributes or the CSS width and height properties to define the size of the image
- Use the CSS float property to let the image float to the left or to the right

# HTML Favicon
- <link> Defines the relationship between a document and an external resource

# HTML Tables
- <table>	Defines a table
- <th>	Defines a header cell in a table
- <tr>	Defines a row in a table
- <td>	Defines a cell in a table
- <caption>	Defines a table caption
- <colgroup>	Specifies a group of one or more columns in a table for formatting
- <col>	Specifies column properties for each column within a -<colgroup> element
- <thead>	Groups the header content in a table
- <tbody>	Groups the body content in a table
- <tfoot>	Groups the footer content in a table
- <rowspan>  a cell span over multiple rows,
- <colspan> a cell span over multiple columns

# HTML Lists
- <ul>	Defines an unordered list
- <ol>	Defines an ordered list
- <li>	Defines a list item
- <dl>	Defines a description list
- <dt>	Defines a term in a description list
- <dd>	Describes the term in a description list

# HTML Block and Inline Elements
- There are two display values: block and inline
- A block-level element always starts on a new line and takes up the full width available
- An inline element does not start on a new line and it only takes up as much width as necessary
- The <div> element is a block-level and is often used as a container for other HTML elements
- The <span> element is an inline container used to mark up a part of a text, or a part of a document

# HTML class Attribute
- The HTML class attribute specifies one or more class names for an element
- Classes are used by CSS and JavaScript to select and access specific elements
- The class attribute can be used on any HTML element
- The class name is case sensitive
- Different HTML elements can point to the same class name
- JavaScript can access elements with a specific class name with the getElementsByClassName() method

# HTML id Attribute
- The id attribute is used to specify a unique id for an HTML element
- The value of the id attribute must be unique within the HTML document
- The id attribute is used by CSS and JavaScript to style/select a specific element
- The value of the id attribute is case sensitive
- The id attribute is also used to create HTML bookmarks
- JavaScript can access an element with a specific id with the getElementById() method

# HTML Iframes
- The HTML <iframe> tag specifies an inline frame
- The src attribute defines the URL of the page to embed
- Always include a title attribute (for screen readers)
- The height and width attributes specify the size of the iframe
- Use border:none; to remove the border around the iframe

# HTML Layout Elements and Techniques
- <header> - Defines a header for a document or a section
- <nav> - Defines a set of navigation links
- <section> - Defines a section in a document
- <article> - Defines an independent, self-contained content
- <aside> - Defines content aside from the content (like a sidebar)
- <footer> - Defines a footer for a document or a section
- <details> - Defines additional details that the user can open and close on demand
- <summary> - Defines a heading for the <details> element

# HTML Responsive Web Design
- <meta name="viewport" content="width=device-width, initial-scale=1.0">

# HTML Forms
- <form> element is used to create an HTML form

# HTML Form Attributes
- accept-charset	Specifies the character encodings used for form submission
- action	Specifies where to send the form-data when a form is submitted
- autocomplete	Specifies whether a form should have autocomplete on or off
- enctype	Specifies how the form-data should be encoded when submitting it to the server (only for method="post")
- method	Specifies the HTTP method to use when sending form-data
- name	Specifies the name of the form
- novalidate	Specifies that the form should not be validated when submitted
- rel	Specifies the relationship between a linked resource and the current document
- target	Specifies where to display the response that is received after submitting the form

# HTML Form Elements
- <form>	Defines an HTML form for user input
- <input>	Defines an input control
- <textarea>	Defines a multiline input control (text area)
- <label>	Defines a label for an <input> element
- <fieldset>	Groups related elements in a form
- <legend>	Defines a caption for a <fieldset> element
- <select>	Defines a drop-down list
- <optgroup>	Defines a group of related options in a drop-down list
- <option>	Defines an option in a drop-down list
- <button>	Defines a clickable button
- <datalist>	Specifies a list of pre-defined options for input controls

# HTML Input Types
- <input type="button">
- <input type="checkbox">
- <input type="color">
- <input type="date">
- <input type="datetime-local">
- <input type="email">
- <input type="file">
- <input type="hidden">
- <input type="month">
- <input type="number">
- <input type="password">
- <input type="radio">
- <input type="range">
- <input type="reset">
- <input type="search">
- <input type="submit">
- <input type="tel">
- <input type="text">
- <input type="time">
- <input type="url">
- <input type="week">

# HTML Input Attributes
- checked	Specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio")
- disabled	Specifies that an input field should be disabled
- max	Specifies the maximum value for an input field
- maxlength	Specifies the maximum number of character for an input field
- min	Specifies the minimum value for an input field
- pattern	Specifies a regular expression to check the input value against
- readonly	Specifies that an input field is read only (cannot be changed)
- required	Specifies that an input field is required (must be filled out)
- size	Specifies the width (in characters) of an input field
- step	Specifies the legal number intervals for an input field
- value	Specifies the default value for an input field

# HTML Media
- The HTML <video> Element
- HTML <video> Autoplay
- The HTML <audio> Element
- HTML <audio> Autoplay

# html vs html5
- HTML
- It didn’t support audio and video without the use of flash player support.
- It uses cookies to store temporary data.
- Does not allow JavaScript to run in browser.
- Vector graphics is possible in HTML with the help of various technologies such as VML, Silver-light, Flash, etc.
- It does not allow drag and drop effects.	
- Not possible to draw shapes like circle, rectangle, triangle etc.
- It works with all old browsers.
- <HTML>,<Body> , and <Head> tags are mandatory while writing a HTML code.
- Older version of HTML are less mobile-friendly.	
- Doctype declaration is too long and complicated.	
- Elements like nav, header were not present.
- Character encoding is long and complicated.	
- It is almost impossible to get true GeoLocation of user with the help of browser.
- It can not handle inaccurate syntax.
- Being an older version , it is not fast , flexible , and efficient as compared to HTML5.
- Attributes like charset, async and ping are absent in HTML.

- HTML5
- It supports audio and video controls with the use of <audio> and <video> tags.
- It uses SQL databases and application cache to store offline data.
- Allows JavaScript to run in background. This is possible due to JS Web worker API in HTML5.
- Vector graphics is additionally an integral a part of HTML5 like SVG and canvas.
- It allows drag and drop effects.
- HTML5 allows to draw shapes like circle, rectangle, triangle etc.
- It supported by all new browser like Firefox, Mozilla, Chrome, Safari, etc.
- These tags can be omitted while writing HTML code.
- HTML5 language is more mobile-friendly.
- Doctype declaration is quite simple and easy.
- New element for web structure like nav, header, footer etc.
- Character encoding is simple and easy.
- One can track the GeoLocation of a user easily by using JS GeoLocation API.
- It is capable of handling inaccurate syntax.
- It is efficient, flexible and more fast in comparison to HTML.
- Attributes of charset, async and ping are a part of HTML 5.

## CSS SYLLABUS

# CSS Elements
- The CSS element Selector
- The CSS id Selector
- The CSS class Selector
- The CSS Attribute Selector
- The CSS Universal Selector
- The CSS Grouping Selector

# How To Add CSS
- External CSS
- Internal CSS
- Inline CSS

# CSS Comments
- A CSS comment is placed inside the <style> element, and starts with /* and ends with */:

# CSS Color
- by name
- by rgb
- by hsl
- by hex

# CSS Backgrounds
- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background (shorthand for background)

# CSS Borders
- border-style ( dotted / dashed / solid / double / groove / ridge / inset / outset / none / hidden )
- border-width
- border-color
- border
- border-radius 

# CSS Margins
- margin-top
- margin-right
- margin-bottom
- margin-left
- values ( auto /length / % / inherit )
- margin (shorthand)

# CSS Padding
- padding-top
- padding-right
- padding-bottom
- padding-left
- values ( length / % / inherit )
- padding (shorthand)

# CSS Height, Width and Max-width, Max-height
- height
- width
- max-height
- max-width
- min-width
- min-height
- values ( auto /length / % / inherit / initial)

# The CSS Box Model

# CSS Text
- color 
- background-color 
- text-align
- text-align-last
- direction
- unicode-bidi
- vertical-align
- text-decoration-line
- text-decoration-color
- text-decoration-style
- text-decoration-thickness
- text-decoration
- text-transform
- text-indent
- letter-spacing
- line-height
- word-spacing
- white-space
- text-shadow

# CSS Fonts
- font-style
- font-variant
- font-weight
- font-size
- font-family

# CSS Links
- a:link - a normal, unvisited link
- a:visited - a link the user has visited
- a:hover - a link when the user mouses over it
- a:active - a link the moment it is clicked

# CSS Pseudo-elements
- ::first-line
- ::first-letter
- ::before
- ::after
- ::marker
- ::selection

# CSS Lists
- list-style-type
- list-style-image
- list-style-position
- list-style (shorthand)

# CSS Layout - The display Property
- display (none, inline, block, inline-block)

# CSS visibility Property
- visibility(hidden/ visible)

# CSS Layout - The position Property
- position ( relative, fixed, absolute, sticky)

# CSS Layout - The z-index Property
- z-index

# CSS Media Queries
- @media not|only mediatype and (expressions) {
-   CSS-Code;
- }

- @media screen and (min-width: 480px) {
-   body {
-     background-color: lightgreen;
-   }
- }

# CSS Flexbox
- flex

# CSS Flex Container
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

# CSS Flexbox item
- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

# CSS Flex Responsive
-  flex

# CSS Grid Container
- grid 
- inline-grid.
- grid-template-columns
- grid-template-rows
- align-content















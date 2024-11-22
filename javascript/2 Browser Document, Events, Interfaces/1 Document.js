/**
 * Browser environment, specs
 * 
 * DOM (Document Object Model)
 * 
 * BOM (Browser Object Model)
 */

/**
 * DOM tree
 * 
 * Other node types
 */

/**
 * Walking the DOM
 * 
 * On top: documentElement and body
 * 
 * Children: childNodes, firstChild, lastChild
 * 
 * DOM collections
 * 
 * Siblings and the parent
 * 
 * Element-only navigation
 * 
 * More links: tables
 */

/**
 * Searching: getElement*, querySelector*
 * 
 * document.getElementById or just id
 * querySelectorAll
 * querySelector
 * matches
 * closest
 * 
 * getElementsBy*
 */

/**
 * 
 * Node properties: type, tag and contents
 * 
 * DOM node classes
 * 
 * The “nodeType” property
 * 
 * Tag: nodeName and tagName
 * 
 * innerHTML: the contents
 * 
 * Beware: “innerHTML+=” does a full overwrite
 * 
 * outerHTML: full HTML of the element
 * 
 * nodeValue/data: text node content
 * 
 * textContent: pure text
 * 
 * The “hidden” property
 * 
 * More properties
 */

/**
 * 
 * Attributes and properties
 * 
 * DOM properties
 * 
 * HTML attributes
 * 
 * Property-attribute synchronization
 * 
 * DOM properties are typed
 * 
 * Non-standard attributes, dataset
 * 
 */

/**
 * Modifying the document
 * 
 * Creating an element
 * document.createElement(tag) – creates an element with the given tag,
 * document.createTextNode(value) – creates a text node (rarely used),
 * elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.
 * 
 * Creating the message
 * 
 * Insertion methods
 * node.append(...nodes or strings) – append nodes or strings at the end of node,
 * node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
 * node.before(...nodes or strings) –- insert nodes or strings before node,
 * node.after(...nodes or strings) –- insert nodes or strings after node,
 * node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
 * 
 * insertAdjacentHTML/Text/Element
 * "beforebegin" – insert html immediately before elem,
 * "afterbegin" – insert html into elem, at the beginning,
 * "beforeend" – insert html into elem, at the end,
 * "afterend" – insert html immediately after elem.
 * 
 * Node removal
 * 
 * Cloning nodes: cloneNode
 * 
 * DocumentFragment
 * 
 * Old-school insert/remove methods
 * 
 * A word about “document.write”
 * 
 */

/**
 * 
 * Styles and classes
 * 
 * className and classList
 * elem.classList.add/remove("class") – adds/removes the class.
 * elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
 * elem.classList.contains("class") – checks for the given class, returns true/false.
 * 
 * Element style
 * 
 * Resetting the style property
 * 
 * Mind the units
 * 
 * Computed styles: getComputedStyle
 */

/**
 * Element size and scrolling
 * 
 * Sample element
 * 
 * Geometry
 * 
 * offsetParent, offsetLeft/Top
 * 
 * offsetWidth/Height
 * 
 * clientTop/Left
 * 
 * clientWidth/Height
 * 
 * scrollWidth/Height
 * 
 * scrollLeft/scrollTop
 * 
 * Don’t take width/height from CSS
 */

/**
 * 
 * Window sizes and scrolling
 * 
 * Width/height of the window
 * 
 * Width/height of the document
 * 
 * Get the current scroll
 * 
 * Scrolling: scrollTo, scrollBy, scrollIntoView
 * 
 * scrollIntoView
 * 
 * Forbid the scrolling
 */

/**
 * Coordinates
 * 
 * Element coordinates: getBoundingClientRect
 * 
 * elementFromPoint(x, y)
 * 
 * Using for “fixed” positioning
 * 
 * Document coordinates
 */
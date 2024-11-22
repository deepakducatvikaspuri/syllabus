/**
 * 
 * Mutation observer
 * 
 * Syntax
 */

/**
 * Selection and Range
 * 
 * 
 * Range
 * Selecting the text partially
 * Selecting element nodes
 * Selecting a bigger fragment
 * Range properties
 * 
 * Range selection methods
 * setStart(node, offset) set start at: position offset in node
 * setStartBefore(node) set start at: right before node
 * setStartAfter(node) set start at: right after node 
 * setEnd(node, offset) set end at: position offset in node
 * setEndBefore(node) set end at: right before node
 * setEndAfter(node) set end at: right after node
 * selectNode(node) set range to select the whole node
 * selectNodeContents(node) set range to select the whole node contents
 * collapse(toStart) if toStart=true set end=start, otherwise set start=end, thus collapsing the range 
 * cloneRange() creates a new range with the same start/end
 * 
 * Range editing methods
 * deleteContents() – remove range content from the document
 * extractContents() – remove range content from the document and return as DocumentFragment
 * cloneContents() – clone range content and return as DocumentFragment
 * insertNode(node) – insert node into the document at the beginning of the range
 * surroundContents(node) – wrap node around range content. For this to work, the range must contain
 * 
 * Selection
 * Selection properties
 * getRangeAt(i)
 * anchorNode – the node where the selection starts,
 * anchorOffset – the offset in anchorNode where the selection starts,
 * focusNode – the node where the selection ends,
 * focusOffset – the offset in focusNode where the selection ends,
 * isCollapsed – true if selection selects nothing (empty range), or doesn’t exist.
 * rangeCount – count of ranges in the selection, maximum 1 in all browsers except Firefox.
 * 
 * Selection events
 * elem.onselectstart
 * document.onselectionchange
 * 
 * Selection methods
 * getRangeAt(i) – get i-th range, starting from 0. In all browsers except Firefox, only 0 is used.
 * addRange(range) – add range to selection. All browsers except Firefox ignore the call, if the selection already has an associated range.
 * removeRange(range) – remove range from the selection.
 * removeAllRanges() – remove all ranges.
 * empty() – alias to removeAllRanges.
 * collapse(node, offset) – replace selected range with a new one that starts and ends at the given node, at position offset.
 * setPosition(node, offset) – alias to collapse.
 * collapseToStart() – collapse (replace with an empty range) to selection start,
 * collapseToEnd() – collapse to selection end,
 * extend(node, offset) – move focus of the selection to the given node, position offset,
 * setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) – replace selection range with the given start anchorNode/anchorOffset and end focusNode/focusOffset. All content in-between them is selected.
 * selectAllChildren(node) – select all children of the node.
 * deleteFromDocument() – remove selected content from the document.
 * containsNode(node, allowPartialContainment = false) – checks whether the selection contains node (partially if the second argument is true)
 * 
 * Selection in form controls
 * 
 * Properties:
 * input.selectionStart – position of selection start (writeable),
 * input.selectionEnd – position of selection end (writeable),
 * input.selectionDirection – selection direction, one of: “forward”, “backward” or “none” (if e.g. selected with a double mouse click),
 * 
 * Events: input.onselect – triggers when something is selected.
 * 
 * Methods: 
 * input.select() – selects everything in the text control (can be textarea instead of input),
 * input.setSelectionRange(start, end, [direction]) – change the selection to span from position start till end, in the given direction (optional).
 * input.setRangeText(replacement, [start], [end], [selectionMode]) – replace a range of text with the new text.
 * Optional arguments start and end, if provided, set the range start and end, otherwise user selection is used.
 * 
 * The last argument, selectionMode, determines how the selection will be set after the text has been replaced. The possible values are:
 * "select" – the newly inserted text will be selected.
 * "start" – the selection range collapses just before the inserted text (the cursor will be immediately before it).
 * "end" – the selection range collapses just after the inserted text (the cursor will be right after it).
 * "preserve" – attempts to preserve the selection. This is the default.
 * 
 * Making unselectable
 */


/**
 * Event loop: microtasks and macrotasks
 * 
 * Event Loop
 * Macrotasks and Microtasks
 * 
 */
/**
 * Popups and window methods
 * 
 * Popup blocking
 * 
 * window.open
 * url
 * name
 * params
 * 
 * Settings for params:
 * Position:
 * left/top (numeric) – coordinates of the window top-left corner on the screen. There is a limitation: a new window cannot be positioned offscreen.
 * width/height (numeric) – width and height of a new window. There is a limit on minimal width/height, so it’s impossible to create an invisible window.
 * Window features:
 *  menubar (yes/no) – shows or hides the browser menu on the new window.
 *  toolbar (yes/no) – shows or hides the browser navigation bar (back, forward, reload etc) on the new window.
 *  location (yes/no) – shows or hides the URL field in the new window. FF and IE don’t allow to hide it by default.
 *  status (yes/no) – shows or hides the status bar. Again, most browsers force it to show.
 *  resizable (yes/no) – allows to disable the resize for the new window. Not recommended.
 *  scrollbars (yes/no) – allows to disable the scrollbars for the new window. Not recommended.
 * 
 * Accessing popup from window
 * 
 * Accessing window from popup
 * 
 * Closing a popup
 * 
 * Moving and resizing
 * 
 * Scrolling a window
 * 
 * Focus/blur on a window
 */

/**
 * Cross-window communication
 * 
 * Same Origin
 * 
 * In action: iframe
 * 
 * Windows on subdomains: document.domain
 * 
 * Iframe: wrong document pitfall
 * 
 * Collection: window.frames
 * 
 * The “sandbox” iframe attribute
 * 
 * Cross-window messaging
 * 
 * postMessage
 * 
 * onmessage
 */

/**
 * The clickjacking attack
 * 
 * The idea
 * The idea is very simple.
 * Here’s how clickjacking was done with Facebook:
 * A visitor is lured to the evil page. It doesn’t matter how.
 * The page has a harmless-looking link on it (like “get rich now” or “click here, very funny”).
 * Over that link the evil page positions a transparent <iframe> with src from facebook.com, in such a way that the “Like” button is right above that link. Usually that’s done with z-index.
 * In attempting to click the link, the visitor in fact clicks the button.
 * 
 * Old-school defences (weak)
 * 
 * Blocking top-navigation
 * 
 * Sandbox attribute
 * 
 * X-Frame-Options
 * 
 * Showing with disabled functionality
 * 
 * Samesite cookie attribute
 */
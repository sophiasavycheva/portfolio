import svg4everybody from 'svg4everybody';
import jQuery from 'jquery';

// Import jQuery plugins
import 'fullpage.js';

// Import polyfills
import 'promise-polyfill/src/polyfill';

// Expose libraries to the global Window object
window.$ = window.jQuery = jQuery;

// Manually initialize third-party libraries
svg4everybody();
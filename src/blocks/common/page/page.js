/**
 * @file Implementation of the page block
 */

import {
    debounce,
    throttle
} from '../../../js/util/index';
import * as LazyLoader from '../../../js/util/lazy-loader';

// TODO: import other blocks

// -------------------------- BEGIN MODULE VARIABLES --------------------------

const RESIZE_INTERVAL = 200; // Resize event debouncing interval
const SCROLL_INTERVAL = 200; // Scroll event throttling interval

// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

/**
 * Handle the window scroll event
 */
function handleWindowScroll() {
    LazyLoader.scanImages();

    // TODO: add code
}

/**
 * Handle the window resize event
 */
function handleWindowResize() {
    // TODO: add code
}

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the page block.
 */
export function initBlock() {
    const debouncedWindowResize = debounce(handleWindowResize, RESIZE_INTERVAL);
    const throttledWindowScroll = throttle(handleWindowScroll, SCROLL_INTERVAL);

    window.addEventListener('resize', debouncedWindowResize);
    window.addEventListener('scroll', throttledWindowScroll);

    LazyLoader.init();

    // TODO: initialize other blocks
    $('#fullPage').fullpage({
        scrollingSpeed: 700,
        verticalCentered: false,
        navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
        // sectionsColor: ['#474747', '#fff', '#474747', '#474747', '#fff', '#474747'],
        responsiveWidth: 900,
        anchors: ['item_0', 'item_1', 'item_2', 'item_3', 'item_4', 'item_5'],
        menu: '.nav__list',
        onLeave: function(origin, destination, direction) {
            console.log(origin.index);
        }
    });

    // Process the initial window size and scroll position
    handleWindowResize();
    handleWindowScroll();
}

// ---------------------------- END PUBLIC METHODS ----------------------------
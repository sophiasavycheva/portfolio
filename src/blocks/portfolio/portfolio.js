/**
 * @file Implementation of the portfolio block
 */

import Isotope from 'isotope-layout';
// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the portfolio block.
 * @return true if the block is present on the page, false otherwise
 */
export function initBlock() {
    // TODO: add code here
    const $grid = new Isotope('.portfolio__grid', {
        // options
        itemSelector: '.portfolio__item',
        layoutMode: 'fitRows',
        filter: '.web'
    });

    $('.portfolio__nav').on('click', 'button', function() {
        const filterValue = $(this).attr('data-filter');
        $grid.arrange({
            filter: filterValue
        });
    });
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------
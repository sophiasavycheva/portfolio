$(document).ready(function () {
    $("#fullPage").fullpage({
        scrollingSpeed: 700,
        verticalCentered: false,
        navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
        // sectionsColor: ['#474747', '#fff', '#474747', '#474747', '#fff', '#474747'],
        responsiveWidth: 900,

    });

    var swiperAbout = new Swiper('.aboutSlider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

    var blogSlider = new Swiper('.blogSlider', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 2,
    });

    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter: '.web'
    });

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
})
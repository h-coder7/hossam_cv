$(document).ready(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();




    // ---------- to top -----------
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // -------- fav_icon ----------
    $(".fav_icon").on("click" , function(){
        $(this).toggleClass("active");
    })

    // search effect 
$(".search_icon").on("click", function() {
    $(".searching").fadeIn(500);
})
$(".searching .close").on("click", function() {
    $(".searching").fadeOut(500);
})


    // -------- counter --------
        $('.counter').countUp({
            delay: 10,
            time: 2000
        });

});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ head slider -----------
    var swiper = new Swiper('.head_slider .swiper-container', {
        speed: 1000,
        pagination: {
            el: 'header .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: 'header .swiper_next',
            prevEl: 'header .swiper_prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // ------------- swiper products -------------
    var products_slider = new Swiper('.product_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.product_slider .swiper-button-next',
            prevEl: '.product_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

});
$(document).ready(function () {
    /*
     * Single product silder
     */
    $('.mg-slide-img-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.mg-product-slider-nav'
    });
    $('.mg-product-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.mg-slide-img-main',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    /*************************************/
    /*
     * Quantity counter
     */

    $('.mg-qty-plus-btn').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('.mg-qty-number').val());
        $('.mg-qty-number').val(quantity + 1);
    });

    $('.mg-qty-minus-btn').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('.mg-qty-number').val());
        if (quantity > 1) {
            $('.mg-qty-number').val(quantity - 1);
        }
    });

    $(".mg-add-review-btn").click(function (e) {
        e.preventDefault();
        $("#reviews-tab").tab('show');
        $("html, body").animate({
            scrollTop: $("#reviews-tab").offset().top
        }, 100);
    });
});
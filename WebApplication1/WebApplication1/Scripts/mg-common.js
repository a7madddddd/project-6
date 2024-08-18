$(document).ready(function () {
    /*
     * Slider
     */
    $('.mg-slider-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    /*
     * carousel
     */
    $('.mg-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>'
    });

    /*
     * Back To Top Button
     */

    $('#back-top a').on("click", function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 300);
    });
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $('#back-top').fadeOut(500);
        } else {
            $('#back-top').fadeIn(500);
        }
    });
    /*******************/

    /*
     * Quick view slider
     */
    if ($('.mg-quick-view-slider').length > 0) {
        $('.mg-quick-view-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            appendArrows: '.mg-qv-next-pre-btn',
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>'
        });
    }

    $(".mg-quick-view-modal-btn").click(function (event) {
        event.preventDefault();
        $("#mg-quick-view-modal").modal("show");
        setTimeout(function () {
            $('.mg-quick-view-slider').slick('slickSetOption', {}, true);
        }, 300);
    });
    /*************************/
    /*
     * Quantity counter
     */

    $('.mg-qty-plus-btn').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val());
        $(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val(quantity + 1);
    });

    $('.mg-qty-minus-btn').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val());
        if (quantity > 1) {
            $(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val(quantity - 1);
        }
    });

    $('.mg-product-remove-btn').click(function (e) {
        e.preventDefault();
        $(this).parents("tr").fadeOut('slow', function () {
            $(this).parents("tr").remove();
        });
    });
    /*********************************/
    /*
     * show hide
     */
    $(".mg-forget-password").click(function(){
        $(".mg-login-form-js").hide();
        $(".mg-forget-form").show();
      });

      $(".mg-redirect-login").click(function(){
        $(".mg-login-form-js").show();
        $(".mg-forget-form").hide();
      });
    /********************************/
});
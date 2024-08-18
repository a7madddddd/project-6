$(document).ready(function(){
    /*
     * Video PopUp
     */
    
    $('.mg-video-popup').magnificPopup({
        type: 'iframe',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            preload: [0, 1]
        }
    });
    /*
     * Slider
     */
    $('.mg-testimonial-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
        ]
    });
});


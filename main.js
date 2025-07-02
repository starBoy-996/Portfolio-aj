(function ($) {

  "use strict";

  $(window).on('load', function () {
    $('#portfolio').mixItUp();
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
    if ($(window).scrollTop() > 200) {
      $('.fixed-top').addClass('menu-bg');
    } else {
      $('.fixed-top').removeClass('menu-bg');
    }
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('.site-navigation, .header-white, .header').addClass('navbar-fixed');
      } else {
        $('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
      }
    });
    var wow = new wow({
      mobile: false
    });

    wow.init();
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });
    $('.counterUp').counterUp({
      delay: 20,
      time: 3000
    });
    $(".carousel-testimony").owlCarousel({
      loop: true,
      navText: false,
      autoplay: true,
      items: 1,
      slideSpeed: 5000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        979: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });



  });

}(jQuery));
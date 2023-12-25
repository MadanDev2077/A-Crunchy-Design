(function ($) {
  $(document).ready(function () {
    var swiper = new Swiper(".testi-wrapper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      grabCursor: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        740: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".testi-next-btn",
        prevEl: ".testi-prev-btn",
      },

      // And if we need scrollbar
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //   },
    });
  });
})(jQuery);

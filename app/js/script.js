const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  centerInsufficientSlides: true,

  slidePrevClass: 'swiper-button__prev',
  slideNextClass: 'swiper-button__next',

  navigation: {
    nextEl: '.swiper-buttons__next',
    prevEl: '.swiper-buttons__prev',
  },
});

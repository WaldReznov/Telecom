$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    prevArrow: '<button class="l-arrow" type="button"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button class="r-arrow" type="button"><img src="img/arrow-right.png"></button>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  
  $('.review-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    prevArrow: '<button class="l-arrow" type="button"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button class="r-arrow" type="button"><img src="img/arrow-right.png"></button>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  
  document.getElementById("burger").onclick = function() {open()};
  function open() {
  document.getElementById("burger").classList.toggle("menu-link-active");
  document.getElementById("navbar").classList.toggle("hamburger-navbar");
  document.getElementById("body").classList.toggle("scroll");
  };
});
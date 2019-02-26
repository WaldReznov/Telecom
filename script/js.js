$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="l-arrow" type="button"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button class="r-arrow" type="button"><img src="img/arrow-right.png"></button>'
  });  
  $('.review-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="l-arrow" type="button"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button class="r-arrow" type="button"><img src="img/arrow-right.png"></button>'
  });  
});
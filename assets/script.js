$(document).ready(function(){
  $('.slick-main').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    infinite: true,
   responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: false,     
    slidesToShow: 3
    }
  },
  {
    breakpoint: 400,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
    }
  ]
   });
});
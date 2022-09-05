function owlInitialize() {
    if ($(window).width() < 768) {
        $('.team-slider-box').addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop:false,    
            margin: 20,  
            autoWidth:true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,        
          
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
        $('.team-slider-box').removeClass("owl-carousel");
    }
    }
    $(document).ready(function(e) {
    owlInitialize();
    });
    $(window).resize(function() {
    owlInitialize();
    });



  $('.logo-carousel').slick({
    centerMode: false,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 6,
    responsive: [
    
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

 

$(document).ready(function(){



  $('.hamburger').on('click', function() {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('hidenavigation');
  });
  $('.hamburger-close').on('click', function() {
    $('.hamburger').toggleClass('open');
    $('.navigation').toggleClass('hidenavigation');
  });

    // $('.owl-carousel').owlCarousel({
    //   loop:false,
    //   margin:15,
    //   nav:false,
    //   dots:false,
    //   responsiveClass:true,
    //   responsive:{
    //       0:{
    //           items:1
              
    //       },
    //       768:{
    //           items:2
              
    //       },
    //       992:{
    //           items:3
              
    //       }
    //   }
    // });
  });

$('.carousel').carousel()

$(document).scroll(function() {

    var scrollTop = $(window).scrollTop();
            console.log(scrollTop);

          if (scrollTop >= 2000 ) {
              $('#menu').addClass("transparent");
          }
          else{
              $('#menu').removeClass("transparent");
          }
  });
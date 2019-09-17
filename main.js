$('.carousel').carousel()

$(document).scroll(function() {

    var scrollTop = $(window).scrollTop();
            console.log(scrollTop);

          if (scrollTop >= 1800 ) {
              $('#menu').addClass("change-fix-top");
          }
          else{
              $('#menu').removeClass("change-fix-top");
          }
  });

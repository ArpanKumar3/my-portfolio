(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();

  //back to top button & CV button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('fast');
      $('.btn-cv').fadeIn('fast');
      $('.btn-resume').fadeOut('fast');
    } else {
      $('.back-to-top').fadeOut('fast');
      $('.btn-cv').fadeOut('fast');
      $('.btn-resume').fadeIn('fast');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},200, 'easeInOutExpo');
    return false;
  });

  //scrolltop
    $('.scrolltop-mf').on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    });

    //scrolling nav
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 100, "easeInOutExpo");
				return false;
			}
		}
	});

    //scroll trigger link clicked
    $('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

    //navbar menu reduce
    $(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

    //text type
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
            var typed = new Typed('.text-slider', {
                strings: typed_strings.split(','),
                typeSpeed: 80,
                loop: true,
                backDelay: 1100,
                backSpeed: 30
            });
        }

})(jQuery);

function toggle() {
  var x = document.getElementById("navbarDefault");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
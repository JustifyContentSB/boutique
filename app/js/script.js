//HEADER
$(document).ready(function() {
	menu();
})

let body = $('body');
let overlay = $('.overlay');

function menu() {
	if ($(window).width() < 1280) { 
	    $('.header__burger-open').on('click', function(e) {
			e.preventDefault();
			$('.header__top').addClass('active');
			body.addClass('no-scroll');
			overlay.addClass('active');
		})
		$('.header__burger .close-btn').on('click', function(e) {
			e.preventDefault();
			$('.header__top').removeClass('active');
			body.removeClass('no-scroll');
			overlay.removeClass('active');
		})
		$('.nav__item-link').on('click', function(e) {
			e.preventDefault();
			$(this).next('.nav__item-submenu').toggleClass('active');
			$(this).toggleClass('active');
		})
  	}
}

//FEEDBACK POPUP
let feedback = $('.feedback');

$('.header__feedback').on('click', function(e) {
	e.preventDefault();
	feedback.addClass('active');
	body.addClass('no-scroll');
	overlay.addClass('active');
})

$('.feedback__close').on('click', function(e) {
	e.preventDefault();
	feedback.removeClass('active');
	body.removeClass('no-scroll');
	overlay.removeClass('active');
})

$(overlay).on('click', function() {
	feedback.removeClass('active');
	body.removeClass('no-scroll');
	feedback.removeClass('active');
	$('.header__top').removeClass('active');
	$(this).removeClass('active');
})
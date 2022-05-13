// (function ($) {

// 	// $('.home-slider').slick({
// 	// 	arrows: false,
// 	// 	dots: true,
// 	// 	infinite: true,
// 	// 	slidesToShow: 1,
// 	// 	slidesToScroll: 1,
// 	// });

// 	// $('.btn').on('click', function() {
// 	// 	// $('.popup-arenda-form').addClass('active');
// 	// 	$('.popup-arenda-form').show(300);
// 	// });

// 	// $('.popup-close').on('click', function() {
// 	// 	// $('.popup-arenda-form').removeClass('active');
// 	// 	$('.popup-arenda-form').hide(300);
// 	// });

// })(jQuery);

$(function () {

	$('.slider-card').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.slider-navigation'),
		prevArrow: '<span class="prev"></span>',
		nextArrow: `<span class="next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.77783 26.4444L14.2223 14L1.77783 1.55554" stroke="#1A0A03" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		</span>`
	});


	$('.category-slider').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: $('.slider-navigation-2'),
		prevArrow: `<span class="prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 1L0.999999 9L9 17" stroke="#1A0A03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></span>`,
		nextArrow: `<span class="next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 17L9 9L1 0.999998" stroke="#1A0A03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></span>`,
	});

	$('.testimonials-slide').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.slider-navigation-3'),
		prevArrow: `<span class="prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 1L0.999999 9L9 17" stroke="#1A0A03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></span>`,
		nextArrow: `<span class="next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 17L9 9L1 0.999998" stroke="#1A0A03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></span>`,
	});

});


// $('.slider-card-2').slick({
// 	// arrows: true,
// 	infinite: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	appendArrows: $('.slider-navigation-2'),
// 	prevArrow: '<span class="prev"></span>',
// 	nextArrow: '<span class="next"></span>'
// });

// $('.slider-reviews').slick({
// 	// arrows: true,
// 	infinite: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	appendArrows: $('.slider-navigation'),
// 	prevArrow: '<span class="prev"></span>',
// 	nextArrow: '<span class="next"></span>'
// });
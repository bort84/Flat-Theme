jQuery(document).ready(function($) {

	/* Hamburger Menu: Mobile */ 
	$('.hamburger-menu').click(function(){
		$(this).toggleClass('open');
		// $('.nav').stop().slideToggle();
		$('.main-nav').stop().toggle();
	});


	/* Scrolling nav bar */ 
	if ($('header').css('position') === 'fixed') {
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= 1) {
				$('header').addClass('active');
			} else if (scrollTop < 1) {
				$('header').removeClass('active');
			}
		});
	}

	/* Scrolling nav bar on window resize */ 
	$(window).resize(function(){
		if ($('header').css('position') === 'fixed') {
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if (scrollTop >= 1) {
					$('header').addClass('active');
				} else if (scrollTop < 1) {
					$('header').removeClass('active');
				}
			});
		}
	});
	

	/* slick gallery settings */ 
    $('#gallery div').slick( {
  		arrows: true,
  		autoplay: true,
  		autoplaySpeed: 3000,
  		speed: 500,
  		cssEase: 'ease-in-out',
  		adaptiveHeight: true,
        accessibility: false
    });

    /* slick-lightbox gallery settings */ 
	$('#gallery').slickLightbox({
		itemSelector: 'a',
	});

	/* Show page once js has loaded */ 
	$('body').removeClass('loading-js');
});
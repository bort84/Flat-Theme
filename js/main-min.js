jQuery(document).ready(function(e){e(".hamburger-menu").click(function(){e(this).toggleClass("open"),e(".main-nav").stop().toggle()}),"fixed"===e("header").css("position")&&e(window).scroll(function(){var a=e(window).scrollTop();a>=1?e("header").addClass("active"):a<1&&e("header").removeClass("active")}),e(window).resize(function(){"fixed"===e("header").css("position")&&e(window).scroll(function(){var a=e(window).scrollTop();a>=1?e("header").addClass("active"):a<1&&e("header").removeClass("active")})}),e("#gallery div").slick({arrows:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,cssEase:"ease-in-out",adaptiveHeight:!0,accessibility:!1}),e("#gallery").slickLightbox({itemSelector:"a"}),e("body").removeClass("loading-js")});
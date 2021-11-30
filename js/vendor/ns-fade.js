$(document).ready(function(){
    // Helper Functions
    function isPartiallyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
        var top = elementBoundary.top,
            bottom = elementBoundary.bottom,
            height = elementBoundary.height;
        return( (top + height >= 0) && (height + window.innerHeight >= bottom) );
    }

    function nsFade(target) {
        var fadeItems = jQuery('.ns-fade ' + target);
        for(var i = 0; i < fadeItems.length; i++) {
            var fadeItem = jQuery(fadeItems[i]);

            fadeItem.addClass('fade-deactive');

            if(isPartiallyVisible(fadeItem[0])){
                fadeItem.removeClass('fade-deactive');
                fadeItem.addClass('fade-active');
            } 

            // else {
            //     fadeItem.removeClass('fade-active');
            //     fadeItem.addClass('fade-deactive');
            // }
        }
    }

    // Not scrolling
    var isScrolling = false;
    
    // Function to control how often scrolls trigger
    function throttleScroll(e) {
        if(!isScrolling) {
            window.requestAnimationFrame(function(){
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

    $(window).scroll(throttleScroll); 

    // Elements to target using inline data attribute
    var target = $('.ns-fade').data('target');

    // Anything scroll related will happen here
    function scrolling() {
        nsFade(target);
    }

    // Call function once when page loads to render elements
    $().ready(scrolling);
});

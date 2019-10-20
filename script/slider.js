jQuery('.page-slider').flexslider({
	selector: '.slides > .slide', 
    animation: 'slide',
	directionNav: false,
	smoothHeight: false,
	controlNav: true,
	slideshow:false,
	controlsContainer: 'nav',
	manualControls: '.bubble',
  });


jQuery('.alt-left-button').click(function(){
     $('.page-slider').flexslider('prev');
});

jQuery('.alt-right-button').click(function(){
     $('.page-slider').flexslider('next');
});


$('#drag-me').on('mousedown touchstart', function() {
    $('.draggable-panel').draggable({
  disabled: false, containment: "document", scroll: true, scrollSpeed: 35, scrollSensitivity: 65
	});
  }).bind('mouseup mouseleave touchend', function() {
    $('.draggable-panel').draggable({
  disabled: true
	});
  });
  

var scroll = new SmoothScroll('a[href*="#anchor"]');





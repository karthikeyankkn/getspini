$(document).ready(function(){
	// variable declarations
	// preload funcitons
	windowHight();

	$( window ).resize(function() {
		windowHight();
	});
	// window height
	function windowHight(){
		var window_height = $(window).height();
		var window_width = $(window).width();
		$(".banner-container").css("height", window_height);
		if (window_width <= 500) {
			$(".banner-container").removeAttr("id");
		}
	}

	// slider1 code
	  $("#left_go").click(function(){
	   // var pos = $('.slider-parent').scrollRight() + 260;
	   //  $('.slider-parent').scrollRight(pos);
	    var pos = $('#slider1').scrollLeft() - 284;
	    $('#slider1').animate({scrollLeft: pos}, 300);
	  });
	  $("#right_go").click(function(){
	    // debugger
	    var pos = $('#slider1').scrollLeft() + 284;
	    $('#slider1').animate({scrollLeft: pos}, 300);
	    
	  });

	  // hamburger menu code
	  $('#hamburger, .header-menu ul li a').click(function(){
	    toggleMenu();
	  });

	  function toggleMenu(){
	  	$('#hamburger').toggleClass('open');
	    $("header").toggleClass("open-menu");
	    $("body").toggleClass("stop-scrolling");
	  }

	  // detect mobile

	 
});
$(document).ready(function(){
	// variable declarations
	// preload funcitons
	// windowHight();

	// $( window ).resize(function() {
	// 	windowHight();
	// });
	// window height
	// function windowHight(){
	// 	var window_height = $(window).height();
	// 	$(".banner-container").css("height", window_height;
	// }

	// load header and footer
	if (index_page == true) {
		$("header").load("header.html"); 
  		$("footer").load("footer.html");
	}else{
		$("header").load("../header.html"); 
  		$("footer").load("../footer.html");
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

	  // slider2 code
	  $("#left_go2").click(function(){
	   // var pos = $('.slider-parent').scrollRight() + 260;
	   //  $('.slider-parent').scrollRight(pos);
	    var pos = $('#slider2').scrollLeft() - 284;
	    $('#slider2').animate({scrollLeft: pos}, 300);
	  });
	  $("#right_go2").click(function(){
	    // debugger
	    var pos = $('#slider2').scrollLeft() + 284;
	    $('#slider2').animate({scrollLeft: pos}, 300);
	    
	  });
	 
});
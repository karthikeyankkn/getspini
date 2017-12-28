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
		// $(".banner-container").css("height", window_height);
		$(".spini-popup-container").css("height", window_height);
	}

	// load header and footer
	if (index_page == true) {
		$("header").load("header.html"); 
  		$("footer").load("footer.html");
	}else{
		$("header").load("../header.html"); 
  		$("footer").load("../footer.html");
	}

	// spini-popup-scripts
	$(".spini-popup-ans span").click(function(){
		$(this).toggleClass("active-answer").siblings().removeClass("active-answer");
		$(this).children("input[type='radio']").prop('checked',true);
	});

	// navigation script
	$('.next').click(function(){
      $(this).parents("li").hide();
      $(this).parents("li").next().fadeIn();
      var lastindex = $(this).parent().siblings();
      var index = $(this).parents("li").index();
      if(index == lastindex.length){  
        $(this).prop({disabled: true});
        $(this).parents("li").show();
       }
    });
    
    $('.back').click(function(){
    	debugger
      $(this).parents("li").hide();
      $(this).parents("li").prev().fadeIn();
      var index = $(this).parents("li").index();
      if(index == 0){  
        $(this).prop({disabled: true});
        $(this).parents("li").show();
       }
    });
	
	 
});
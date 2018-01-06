$(document).ready(function(){
	// variable declarations
  var name, ph_number, email;
  var qa1, qa2, qa3, qa4, qa5, qa6;
  var short_traverse, data;
	// preload funcitons
	windowHight();

	$( window ).resize(function() {
		windowHight();
	});
	// window height
	function windowHight(){
		var window_height = $(window).height();
		// $(".banner-container").css("height", window_height);
		$(".toggle-page-container").css("height", window_height);
	}

	// validate email
	function validateEmail(sEmail) {
		var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (filter.test(sEmail)) {
		return true;
		}else {
			return false;
		}
	}
	// load header and footer
	if (index_page == true) {
		$("header").load("header.html"); 
  		$("footer").load("footer.html");
	}else{
		$("header").load("../header.html"); 
  	$("footer").load("../footer.html");
    $(".alerts_page").load("../alerts.html");
	}

	// spini-popup-scripts
	$(".spini-popup-ans span").click(function(){
		$(this).addClass("active-answer").siblings().removeClass("active-answer");
		$(this).children("input[type='radio']").prop('checked',true);
	});

	// navigation script
	$('.next').click(function(){
		// debugger
      $(this).parents(".toggle-page-container ul li").hide();
      $(this).parents(".toggle-page-container ul li").next().fadeIn();
      var lastindex = $(this).parents(".toggle-page-container ul li").siblings();
      var index = $(this).parents(".toggle-page-container ul li").index();
      if(index == lastindex.length){  
        $(this).prop({disabled: true});
        $(this).parents(".toggle-page-container ul li").show();
       }
    });
    
    $('.back').click(function(){
    	// debugger
      $(this).parents(".toggle-page-container ul li").hide();
      $(this).parents(".toggle-page-container ul li").prev().fadeIn();
      var index = $(this).parents(".toggle-page-container ul li").index();
      if(index == 0){  
        $(this).prop({disabled: true});
        $(this).parents(".toggle-page-container ul li").show();
       }
    });

    // open popup
    $(".spini-sep-services ul li a").click(function(){
    	$(this).siblings(".toggle-page-container").fadeIn();
    });

    $(".submit").click(function(){
    	interior_qa();
      short_traverse = $(this).parents(".toggle-page-container ul li");
      contact_form();
    	alert(qa1+""+qa2+""+qa3+""+qa4+""+name+""+ph_number+""+email);
    });

    // contact form script starts
    function contact_form(){
      // debugger
      name = short_traverse.find("input[type='text']").val();
      ph_number = short_traverse.find("input[type='number']").val();
      email = short_traverse.find("input[type='email']").val();

      // validation script
      if(name == "" && ph_number == "" && email == "") {
        $(".error-mandatory").fadeIn();
      }else if(ph_number.length != 10){
        $(".error-contact-ph_number").fadeIn()
      }else if (email != "" && email != undefined) {
        if (validateEmail(email)) {
        success_contact_form();
      }else{
        $(".alert-danger").hide();
        $(".error-contact-email").fadeIn();
      }
      }else{
        success_contact_form();
      }
    }
    // success contact form script
    function success_contact_form(){
      senddata();
      $(".alert-danger").hide();
      $(".success-contact, .loading_image").fadeIn();
      setTimeout(function(){ 
        location.reload();
      }, 3000);
      $(".submit").hide();
      }
    // contact form script ends

    // questions for interior starts
    function interior_qa(){
      qa1 = $("input[name='what_services']:checked").val();
      qa2 = $("input[name='what_kind']:checked").val();
      qa3 = $("input[name='how_old']:checked").val();
      qa4 = $("input[name='what_carpet']:checked").val();
      debugger
    }
    // questions for interior ends

    // send data using API script starts
    function senddata(){
      debugger
      var ApiEndPoint = 'https://sapi.getspini.com:8443';
      var success;
      var data = {
          "prospectiveBuyersName" : name,
          "phoneNumOfProspectiveBuyer" : ph_number,
          "cityName" : "Chennai",
          "categoryName" : categoryName,
      };
      $.ajax({
          url: ApiEndPoint + "/SpinGrailsApp/web/site/leads/website/create/for/self/requirement",
          type: "POST",
          headers: {
              'Content-Type': 'application/json',
              'X-SPIN-API-ACCESS-TOKEN': 'KOIA8sl#4kasdd98!29jskdlmcxr48b39882#@'
          },
          data: JSON.stringify(data),
          cache: false,
          success: function(response) {
              alert("Api working successfully..!");
              console.log(response);
          },
          error: function(response) {
            alert("Api WAS not working :( ");
          },
          complete: function() {
              alert("Api Request WAS completed :D ");
          }
      });
    }
    // send data using API script ends
	
	 
});
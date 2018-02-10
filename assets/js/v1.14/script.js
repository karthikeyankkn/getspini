$(document).ready(function(){
	// variable declarations
  var name, ph_number, email;
  var qa1, qa2, qa3, qa4, qa5, qa6, qa7;
  var short_traverse, data, check_inner_page = false, selected_package, ApiEndPoint;
	// preload funcitons
	windowHight();
    // script for common device image starts
     // images for desktop
      var desktop_img = ["https://cdn.getspini.com/optimized/nest-bn.jpg",
                          "https://cdn.getspini.com/optimized/hiranandani-bn.jpg",
                          "https://cdn.getspini.com/optimized/stepsstone-bn.jpg"
                        ];

      // images for mobile
      var mobile_img = ["https://cdn.getspini.com/nest-mob-v2-1.jpg",
                        "https://cdn.getspini.com/akshaya-today-mob-v2-1.jpg",
                        "https://cdn.getspini.com/stepstone-mob-v2-1.jpg"];
      // links for slider
      var slider_link = ["realestate/nest-amaze-Sholinganallur.html",
                         "http://hiranandaniparks.com/",
                         "realestate/stepstone-ananthaya-Urapakkam.html"];

      var window_width, devices, slider_id, alt, parts, astSegment;
      // debugger
      
      common_img();
      
      function common_img(){
        window_width = $(window).width(); //get device width
      
        if (window_width > 500) {
          devices = desktop_img;
        }else{
          devices = mobile_img;
        }

        slider_id = $(".carousel").attr("id"); //get id of the carousel
        for(var i = 0; i < devices.length; i++){

          alt = devices[i];
          parts = alt.split('/');
          lastSegment = parts.pop() || parts.pop();

          $("#common-img").append('<div class="item"><a href ="'+slider_link[i]+'"><img src="'+devices[i]+'" alt="'+lastSegment+'" /></a></div>');
          $("#common-img-indicators").append('<li data-target="#'+slider_id+'" data-slide-to="'+i+'"></li>')
        }
        $("#common-img .item:first-child, #common-img-indicators li:first-child").addClass("active");

      }
    // script for common device image load end
  
	$( window ).resize(function() {
		// windowHight();
	});
	// window height
	function windowHight(){
		var window_height = $(window).height();
		// $(".banner-container").css("height", window_height);
		$(".toggle-page-container").css("height", window_height-102);
    $(".careers-iframe").css("height", window_height-115);
    $(".error-page").css("height", window_height);
	}

   
  if (location.origin == "http://getspini.com") {
    ApiEndPoint = 'https://api.getspini.com:8443';
  }else{
    ApiEndPoint = 'https://sapi.getspini.com:8443';
  }

  $(".error-page").click(function(){
    $(this).attr("href", window.location.origin);
  });

  $('[data-toggle="tooltip"]').tooltip();

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
  		$("footer").load("footer1.html");
	}else{
		$("header").load("../header.html"); 
  	$("footer").load("../footer1.html");
    $(".alerts_page").load("../alerts.html");
    // $(".contact-us").load("../contactus.html");
	}

	// spini-popup-scripts
	$(".spini-popup-ans span").click(function(){
		$(this).addClass("active-answer").siblings().removeClass("active-answer");
		$(this).children("input[type='radio']").prop('checked',true);
	});

	// navigation script
	$('.next').click(function(){
		// 
      $(this).parents(".toggle-page-container ul li").hide();
      $(this).parents(".toggle-page-container ul li").next().fadeIn();
      // var lastindex = $(this).parents(".toggle-page-container ul li").siblings();
      // var index = $(this).parents(".toggle-page-container ul li").index();
      // if(index == lastindex.length){  
      //   $(this).prop({disabled: true});
      //   $(this).parents(".toggle-page-container ul li").show();
      //  }
    });
    
    $('.back').click(function(){
    	// 
      $(this).parents(".toggle-page-container ul li").hide();
      $(this).parents(".toggle-page-container ul li").prev().fadeIn();
      // var index = $(this).parents(".toggle-page-container ul li").index();
      // if(index == 0){  
      //   $(this).prop({disabled: true});
      //   $(this).parents(".toggle-page-container ul li").show();
      //  }
    });

    // open popup
    $(".spini-sep-services ul li a").click(function(){
    	$(this).siblings(".toggle-page-container").fadeIn();
      $(".bg-overlay").show();
    });

    // close popup
    $(".toggle-page-container").append("<i class='toggle-page-container-close'>X<i/>");
    $(".toggle-page-container-close").click(function(){
      $(".toggle-page-container, .bg-overlay").fadeOut();
    });

    $(".submit").click(function(){
      
      var thiskey = $(this);
      var type =  thiskey[0].value;

      if (categoryName == "Real Estate(Buying)") {
        if (type == "apartments") {
          // apartments_qa();
        }
      }else if(categoryName == "Interior/Renovation/Modular Kitchen"){
        if(type == "interior"){
          // interior_qa();
        }
      }else if (categoryName == "Insurance") {
        if(type == "insurance"){
          // insurance_qa();
        }
      }else if (categoryName == "Loans") {
        if(type == "personal_loan"){
          // personal_loan_qa();
        }
      }
      
      short_traverse = $(this).parents(".toggle-page-container ul li");
      contact_form();
    	// alert(qa1+""+qa2+""+qa3+""+qa4+""+name+""+ph_number+""+email);
    });

    $(".submit_innerpage").click(function(){
      // debugger
      name = $("input[type='text']").val();
      ph_number = $("input[type='number']").val();
      email = $("input[type='email']").val();
      cityName = $("select[name='city']").val();
      if (categoryName == undefined) {
        categoryName = $("select[name='catagoryName']").val();
        selected_package = $("select[name='selected_package']").val();
      }

      // validation script
      if(name == "" && ph_number == "" && email == "" || cityName == "") {
        $(".error-mandatory").fadeIn();
      }else if(ph_number.length != 10){
        $(".error-contact-ph_number").fadeIn()
      }else if (email != "" && email != undefined) {
        if (validateEmail(email)) {
          check_inner_page = true;
            success_contact_form();
        }else{
          $(".alert-danger").hide();
          $(".error-contact-email").fadeIn();
        }
      }else{
        check_inner_page = true;
          success_contact_form();
      }
    });

    // contact form script starts
    function contact_form(){
      
      name = short_traverse.find("input[type='text']").val();
      ph_number = short_traverse.find("input[type='number']").val();
      email = short_traverse.find("input[type='email']").val();
      cityName = short_traverse.find("select[name='city']").val();



      // validation script
      if(name == "" && ph_number == "" && email == "" || cityName == "") {
        $(".error-mandatory").fadeIn();
      }else if(ph_number.length != 10){
        $(".error-contact-ph_number").fadeIn();
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
      // if (check_inner_page == false) {
      //   senddata();
      // }else{
      //   senddata_for_internal_page();
      // }
      debugger
      if (selected_package == undefined) {
        senddata();
      }else{
        // send email
          $.ajax({
              url: "https://formspree.io/contact@getspini.com", 
              method: "POST",
              data: {
                "Name" : name,
                "Phone Number": ph_number,
                "Email" : email,
                "City" : cityName,
                "category": categoryName,
                "Selected_Package" : selected_package,
                "_subject" : "Get spini partner-with-us!",
                "_cc" : "karthikeyan@spinircle.com,  dhivya.d@spinircle.com, anuradha.v@spinircle.com"
              },
              dataType: "json"
          });
          succsess_alert();
        }
      }
    // contact form script ends

    // questions for interior starts
    function interior_qa(){
      qa1 = $("input[name='what_services']:checked").val();
      qa2 = $("input[name='what_kind']:checked").val();
      qa3 = $("input[name='how_old']:checked").val();
      qa4 = $("input[name='what_carpet']:checked").val();
      
    }
    // questions for interior ends

    // questions for apartments starts
    function apartments_qa(){
      qa1 = $("input[name='apartments']:checked").val();
      qa2 = $("input[name='base']:checked").val();
      
    }
    // questions for apartments ends


    // send data using API script starts
    function senddata(){
      
      var success;
      var data;
      data = {
        "prospectiveBuyersName" : name,
        "phoneNumOfProspectiveBuyer" : ph_number,
        "cityName" : cityName,
        "categoryName" : categoryName,
        "subLocality" : "avadi"
      };

      
      $.ajax({
          url: ApiEndPoint + "/SpinGrailsApp/web/site/leads/website/create/for/self/requirement",
          type: "POST",
          headers: {
              'Content-Type': 'application/json',
              'X-SPIN-API-ACCESS-TOKEN': 'KOIA8sl#4kasdd98!29jskdlmcxr48b39882#@'
          },
          data: JSON.stringify(data),
          success: function(response) {
              // alert("Api working successfully..!");
              // console.log(response);
              succsess_alert();
          },
          error: function(response) {
            // alert("Api WAS not working :( ");
            $(".error-contact").fadeIn();
          },
          complete: function() {
              // alert("Api Request WAS completed :D ");
          }
      });
    }

    function succsess_alert(ebook){
      $(".alert-danger").hide();
      $(".success-contact, .loading_image").fadeIn();
      setTimeout(function(){ 
        // location.reload();
        window.location.href = '../thankyou-pages/thankyoupage-template.html';
      }, 3000);
      $(".submit").hide();
    }
    // send data using API script ends

    // scroll top script
      $(window).scroll(function() {
          if ($(window).scrollTop() > 100) {
              $("#scrolltop").fadeIn();
          }
          else {
              $("#scrolltop").fadeOut();
          }
      });
      $("#scrolltop").click(function(){
        
        var scroll = $("html, body");
        scroll.stop().animate({scrollTop:0}, 700, 'swing', function() {
        });
      });


      // radio accordion
      $('input[type="radio"]').click(function(){
        
        $(this).parent("label").siblings().show();
        $(this).parents("li").siblings().find("span").hide();
        // check_getestimate();
      });

      

      // function check_getestimate(){
      //   
      //   if (type_of_kitchen != undefined && quality_of_accessories != undefined && type_of_material != undefined ) {
      //     $(".getestimate").attr("disabled", false);
      //   }else{
      //     $(".getestimate").attr("disabled", true);
      //   }
      // }
      var lenghtx, lenghty, lenghtz, type_of_kitchenvalue, type_of_materialvalue, quality_of_accessoriesvalue, estimatedcost,uname, uemail,umobile, type_of_kitchen, quality_of_accessories, type_of_material;
      $(".getestimate").click(function(){
        // debugger
        type_of_kitchen = $("input[name='type_of_kitchen']:checked").val();
        quality_of_accessories = $("input[name='quality_of_accessories']:checked").val();
        type_of_material = $("input[name='type_of_material']:checked").val();

        // type of kitchen value
        if (type_of_kitchen == "L-shape") {
          lenghtx = document.getElementById('lshapex').value;
          lenghty = document.getElementById('lshapey').value;
          type_of_kitchenvalue = parseInt(lenghtx) + parseInt(lenghty);
        }else if (type_of_kitchen == "stright") {
          lenghtx = document.getElementById('sshapex').value;
          type_of_kitchenvalue = parseInt(lenghtx);
        }else if (type_of_kitchen == "U-Shape") {
          lenghtx = document.getElementById('ushapex').value;
          lenghty = document.getElementById('ushapey').value;
          lenghtz = document.getElementById('ushapez').value;
          type_of_kitchenvalue = parseInt(lenghtx) + parseInt(lenghty) + parseInt(lenghtz);
        }else if(type_of_kitchen == "Custom") {
          lenghtx = document.getElementById('customxyz').value;
          type_of_kitchenvalue = parseInt(lenghtx);
        }else{
          alert("Please select type of kitchen");
        }

        // type of material value
        if (type_of_material == "Pre") {
          type_of_materialvalue = 6000;
        }else if (type_of_material == "MDF/HDF") {
          type_of_materialvalue = 8000;
        }
        else if (type_of_material == "Hardwood") {
          type_of_materialvalue = 8000;
        }else if (type_of_material == "Commercial") {
          type_of_materialvalue = 9000;
        }else if (type_of_material == "Boiling") {
          type_of_materialvalue = 10000;
        }else if (type_of_material == "Boiling-w") {
          type_of_materialvalue = 12500;
        }else if (type_of_material == "Marine") {
          type_of_materialvalue = 16000;
        }else{
          alert("Please select Type of Material");
        }

        if(isNaN(type_of_kitchenvalue)){
          alert("Please enter all measurements");
          $(".radio span input").css("border-color","red");
        }else{
          $('#myModal').modal('show');
          $(".radio span input").css("border-color","green");
        }
      });
      $(".submit_estimation").click(function(){
        
        // calculation for design
        if (quality_of_accessories == "simple") {
          quality_of_accessoriesvalue = 15000;
        }else if (quality_of_accessories == "medium") {
          quality_of_accessoriesvalue = 30000;
        }
        else if (quality_of_accessories == "high") {
          quality_of_accessoriesvalue = 60000;
        }else{
          alert("Please select Quality of Accessories");
        }

        uname = $("input[name = estimate_name]").val();
        uemail = $('input[name = estimate_email]').val();
        umobile = $('input[name = estimate_ph_number]').val();

        estimatedcost = type_of_kitchenvalue * type_of_materialvalue + quality_of_accessoriesvalue;
        var rangecost = (estimatedcost * 0.3) + estimatedcost;
        document.getElementById("estimatedcost").innerHTML = estimatedcost;
        document.getElementById("rangecost").innerHTML = rangecost;
        document.getElementById("uname").innerHTML = uname;

         // validation script
        if(uname == "" && umobile == "" && uemail == "") {
          $(".error-mandatory").fadeIn();
        }else if(umobile.length != 10){
          $(".error-contact-ph_number").fadeIn()
        }else if (uemail != "" && uemail != undefined) {
          if (validateEmail(uemail)) {
            check_inner_page = true;
            // success_contact_form();
            $(this).attr("data-dismiss","modal");
             $("#calculate-area").fadeIn(2000);
             interior_estimate_mailsend();
          }else{
            $(".alert-danger").hide();
            $(".error-contact-email").fadeIn();
          }
        }else{
          check_inner_page = true;
          $("#calculate-area").fadeIn(2000);
          // send email
          interior_estimate_mailsend();
          
        }

        function interior_estimate_mailsend(){
          $.ajax({
            url: "https://formspree.io/contact@getspini.com", 
            method: "POST",
            data: {
              "Name" : uname,
              "Phone Number": umobile,
              "Email" : uemail,
              "Type_of_kitchen": type_of_kitchen,
              "Type_of_kitchenvalue" : type_of_kitchenvalue,
              "Type_of_material" : type_of_material,
              "Type_of_materialvalue" : type_of_materialvalue,
              "Quality_of_accessories" : quality_of_accessories,
              "Quality_of_accessoriesvalue" : quality_of_accessoriesvalue,
              "Estimatedcost" : estimatedcost,
              "Rangecost" : rangecost,
              "_subject" : "Lead from Interior Estimation Page !",
              "_cc" : "karthikeyan@spinircle.com, dhivya.d@spinircle.com, anuradha.v@spinircle.com"
            },
            dataType: "json"
          });
        }  
      });

      // multi cards repeat
      var multicard;
      get_json();
      // debugger
      function get_json(index){
        $.get("../assets/js/v1.14/multicard.json", function(data, status){
          multicard = data.multicard;
          for( var i = 0; i < multicard.length; i++ ){
            $("#"+multicard[i].card_idname+"").append("<li class='col-md-3 col-xs-6' onclick='show_page("+i+")'><div class='list-card'><a><img src="+multicard[i].img_src+"></a><article><p>"+multicard[i].card_description+"</p><i></i><span>"+multicard[i].card_area+"</span><a class='btn btn-primary'>See more</a></article></div></li>");
          }
       });
      }

      
	 
});
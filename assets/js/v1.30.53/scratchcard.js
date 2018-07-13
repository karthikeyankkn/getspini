    // offers image array starts
    var rand_num, dynamic_id, scratchOffer, coupon_img_download, sc_date, sc_time, sc_noon, sc_selected_alt;
    $(".multiple-scratch-cards-container ul li").click(function(){
      dynamic_id = $(this).attr("scratch_id");
      
      var plot = {
                    "scratch_card":[ 
                    {
                    "src":"https://www.getspini.com/assets/images/scratch-card/free_registration_coupon.jpg",
                    "offer": "free_registration_coupon"
                    }]
                  }

      var apartment = {
                    "scratch_card":[
                    {
                    "src":"https://www.getspini.com/assets/images/scratch-card/wall_coupon.jpg",
                    "offer": "wall_coupon"
                    }]
                  }

      var villa = {
                    "scratch_card":[
                    {
                    "src":"https://www.getspini.com/assets/images/scratch-card/modular_kitchen_coupon.jpg",
                    "offer": "modular_kitchen_coupon"
                    }]
                  }

      var construction = {
                    "scratch_card":[
                    {
                    "src":"https://www.getspini.com/assets/images/scratch-card/bathtub_coupon.jpg",
                    "offer": "bathtub_coupon"
                    }]
                  }
      // offers image array end
      function random_card(card){
        rand_num = Math.floor(Math.random() * 1);

        $("#bridge").css({"background": "url("+card.scratch_card[rand_num].src+") center #fff no-repeat", "background-size": "98%"});
          scratchOffer = card.scratch_card[rand_num].offer;
          localStorage.setItem("coupon_image",card.scratch_card[rand_num].src);
          // alert(scratchOffer)
      }

      if (dynamic_id == "plot") {
          random_card(plot);
      }else if (dynamic_id == "apartment") {
        random_card(apartment)
      }else if (dynamic_id == "villa") {
        random_card(villa);
      }
      else if (dynamic_id == "construction") {
        random_card(construction);
      }
      else{
        alert("System error..");
      }

      // model for scratch card
      // $('#show_scratch_model').modal('show');
      window.scrollTo(0, 0);
      $("body").addClass("stop-scrolling");
      $(".toggle-page-container, .bg-overlay").fadeIn();
    });

  // <!-- built in script for scratch card -->
    var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    brushRadius = (bridge.width / 100) * 5,
    brushRadius = 20,
    img = new Image();

    if (brushRadius < 50) { brushRadius = 50 }

    img.onload = function(){  
      bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
    }
    img.loc = '../assets/images/scratch-card/';
    img.filename = 'scratches.jpg';
    if (window.devicePixelRatio >= 2) {
      var nameParts = img.filename.split('.');
      img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
    } else {
      img.src = img.loc + img.filename;
    }

    function detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }

    function getBrushPos(xRef, yRef) {
      var bridgeRect = bridge.getBoundingClientRect();
        return {
        x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*bridge.width),
        y: Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*bridge.height)
        };
    }
          
    function drawDot(mouseX,mouseY){
      bridgeCanvas.beginPath();
        bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        bridgeCanvas.fillStyle = '#000';
        bridgeCanvas.globalCompositeOperation = "destination-out";
        bridgeCanvas.fill();
    }

    bridge.addEventListener("mousemove", function(e) {
      var brushPos = getBrushPos(e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);

    bridge.addEventListener("touchmove", function(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY);
            drawDot(brushPos.x, brushPos.y);
        }
    }, false);


    // get sms script
    $(".get-sms").click(function(){
      // debugger
      $(".scratch-card-container").hide();
      coupon_img_download = localStorage.getItem("coupon_image");

      if (dynamic_id == "plot" || dynamic_id == "construction") {
        location.href = "/thankyou-pages/thankyou-scratch-card.html"
      }

      $(".confirm-visiting-container").fadeIn();
      // download_coupon();
      // setTimeout(function(){location.reload();}, 3000);

     
        
    });

    $(".confirm-visiting-back").click(function(){
      $(".scratch-card-container").fadeIn();
      $(".confirm-visiting-container").hide();
    });

    $(".select-sc-plots span img").click(function(){
      //  sc_selected_alt = $(this).attr("alt");
      // console.log(sc_selected_alt);
      $(this).toggleClass('selected_sc_img');
      $(this).parent("span").siblings().children("img").removeClass('selected_sc_img');
    });

    $(".download-sc-coupon").click(function(){
      name = localStorage.getItem("name");
      ph_number = localStorage.getItem("ph_number");

      sc_selected_alt = $(".selected_sc_img").attr("alt");
      sc_date = $("input[name='sc-date']").val();
      sc_date = new Date(sc_date);
      sc_time = $("select[name='sc-time']").val();
      sc_noon = $("select[name='sc-noon']").val();
      sc_time = sc_time.concat(sc_noon);

      // if([sc_selected_alt,sc_date,sc_time].includes('')) {
      //   alert("Please fill all fields.");
      // }
      $('input[name="name"]').val(name);
      $('input[name="ph_number"]').val(ph_number);
      $('input[name="scratched_offer"]').val(scratchOffer);
      $('input[name="selected_site"]').val(sc_selected_alt);
      $('input[name="selected_date"]').val(sc_date);
      $('input[name="selected_time"]').val(sc_time);
      $('input[name="_next"]').val(location.origin+"/thankyou-pages/thankyou-scratch-card.html");
      
      $("#site_visit_mail").submit();
      // alert(sc_date+"<br>"+sc_time+"<br>"+sc_noon);
    });

    

    





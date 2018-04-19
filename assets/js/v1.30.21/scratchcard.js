    // offers image array starts
    var rand_num, dynamic_id, scratchOffer, coupon_img_download;
    $(".multiple-scratch-cards-container ul li").click(function(){
      debugger
      dynamic_id = $(this).attr("scratch_id");
      
      var card1 = {
                    "scratch_card":[
                    {
                    "src":"../assets/images/ipl_collection/dd-logo.png",
                    "offer": "dd"
                    }, 
                    {
                    "src":"../assets/images/ipl_collection/k11-logo.png",
                    "offer": "k11p"
                    },      
                    {
                    "src":"../assets/images/ipl_collection/kkr-logo.png",
                    "offer": "kkr"
                    }]
                  }

      var card2 = {
                    "scratch_card":[
                    {
                    "src":"../assets/images/ipl_collection/dd-logo.png",
                    "offer": "dd"
                    }, 
                    {
                    "src":"../assets/images/ipl_collection/k11-logo.png",
                    "offer": "k11p"
                    },      
                    {
                    "src":"../assets/images/ipl_collection/kkr-logo.png",
                    "offer": "kkr"
                    }]
                  }

      var card3 = {
                    "scratch_card":[
                    {
                    "src":"../assets/images/ipl_collection/dd-logo.png",
                    "offer": "dd"
                    }, 
                    {
                    "src":"../assets/images/ipl_collection/k11-logo.png",
                    "offer": "k11p"
                    },      
                    {
                    "src":"../assets/images/ipl_collection/kkr-logo.png",
                    "offer": "kkr"
                    }]
                  }

      var card4 = {
                    "scratch_card":[
                    {
                    "src":"../assets/images/ipl_collection/dd-logo.png",
                    "offer": "dd"
                    }, 
                    {
                    "src":"../assets/images/ipl_collection/k11-logo.png",
                    "offer": "k11p"
                    },      
                    {
                    "src":"../assets/images/ipl_collection/kkr-logo.png",
                    "offer": "kkr"
                    }]
                  }
      // offers image array end
      function random_card(card){
        rand_num = Math.floor(Math.random() * 3);

        $("#bridge").css({"background": "url("+card.scratch_card[rand_num].src+") center #fff no-repeat", "background-size": "80%"});
          scratchOffer = card.scratch_card[rand_num].offer;
          localStorage.setItem("coupon_image",card.scratch_card[rand_num].src);
          alert(scratchOffer)
      }

      if (dynamic_id == "bridge1") {
          random_card(card1)
      }else if (dynamic_id == "bridge2") {
        random_card(card2)
      }else if (dynamic_id == "bridge3") {
        random_card(card3)
      }
      else if (dynamic_id == "bridge4") {
        random_card(card4)
      }
      else{
        alert("System error..");
      }

      // model for scratch card
      // $('#show_scratch_model').modal('show');
      $(".toggle-page-container, .bg-overlay").fadeIn();
    });

  // <!-- built in script for scratch card -->
    var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    // brushRadius = (bridge.width / 100) * 5,
    brushRadius = 20,
    img = new Image();

    // if (brushRadius < 50) { brushRadius = 50 }

    img.onload = function(){  
      bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
    }
    img.loc = '../../assets/images/ipl_collection/';
    img.filename = 'scratch-layout.png';
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
      debugger
      // ph_number = localStorage.getItem("ph_number");
      // alert(ph_number);
      // var url = "https://api.getspini.com:8443/SpinGrailsApp/notifications/utilities/generic/sms";
      // var data = {
      //   "phoneNumbers":["8148303123"],
      //    "messageToSend": "Hi congratulation.  You have Won 10% on realestate.",
      //    "canSendToUnRegisteredNumbersAsWell": true,
      //    "jmsQName": "TransactionalSMS"
      // }
      // var headers = {
      //   'Content-Type': 'application/json',
      //   'X-SPIN-API-ACCESS-TOKEN': '7JLD9KKKKjy20aaslalk#ikl@3443#87%4ks9328ndhdb',
      //   'Access-Control-Allow-Origin': '*'
      // }
      // // var success, error;
      // $.ajax({
      //   type: "POST",
      //   url: url,
      //   headers: headers,
      //   dataType: 'json',
      //   data: JSON.stringify(data)
      // }); 

      alert("coupon will download ....");
      coupon_img_download = localStorage.getItem("coupon_image");

      function download_coupon(){
        var link = document.createElement('a');
        link.href = coupon_img_download;
        link.download = scratchOffer;
        link.dispatchEvent(new MouseEvent('click'));
      }
      download_coupon();
       setTimeout(function(){location.reload();}, 3000);
        
    });





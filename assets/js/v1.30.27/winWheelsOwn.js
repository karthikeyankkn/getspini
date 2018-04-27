  var theWheel = new Winwheel({
      'numSegments'       : 8,         // Specify number of segments.
      'outerRadius'       : 150,       // Set outer radius so wheel fits inside the background.
      'drawMode'          : 'image',   // drawMode must be set to image.
      'drawText'          : false,      // Need to set this true if want code-drawn text on image wheels.
      'textFontSize'      : 12,        // Set text options as desired.
      'textOrientation'   : 'curved',
      'textDirection'     : 'reversed',
      'textAlignment'     : 'outer',
      'textMargin'        : 5,
      'textFontFamily'    : 'monospace',
      'textStrokeStyle'   : 'black',
      'textLineWidth'     : 2,
      'textFillStyle'     : 'white',
      'segments'     :                // Define segments.
      [
         {'text' : '1'},
         {'text' : '2'},
         {'text' : '3'},
         {'text' : '4'},
         {'text' : '5'},
         {'text' : '6'},
         {'text' : '7'},
         {'text' : '8'}
         
      ],
      'animation' :                   // Specify the animation to use.
      {
          'type'     : 'spinToStop',
          'duration' : 5,     // Duration in seconds.
          'spins'    : 8,     // Number of complete spins.
          'callbackFinished' : alertPrize
      }
  });

  // Create new image object in memory.
  var loadedImg = new Image();

  // Create callback to execute once the image has finished loading.
  loadedImg.onload = function()
  {
      theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
      theWheel.draw();                    // Also call draw function to render the wheel.
  }

  // Set the image source, once complete this will trigger the onLoad callback (above).
  loadedImg.src = "assets/images/10.png";



                var wheelPower    = 3;
                var wheelSpinning = false;

                function startSpin()
                {
                    // if(!wheelSpinning){
                        theWheel.startAnimation();
                        wheelSpinning = true;
                    // }
                }

                function alertPrize(indicatedSegment)
                {
                    $('#winningPrizeEnd').hide('slow');
                    $('#winningPrize').show('slow');
                   
                }
  

           
             function offBtn(){
                $('.winningPopUpForRef').hide('slow');
            }
            setTimeout(function() {
                $('.winningPopUpForRef').show('slow');
                $('#overlay').show('slow');
              
            }, 2000);
            // function getCoupon(offer){
                
            //     vm.mobile_no = offer.userNo.toString();
            //     vm.post = {
            //         "coupon_code": {
            //             "mobile": vm.mobile_no,
            //             "offer_id": offer.id,
            //             "tracking_code": LoginService.TrackingCode(),
            //             "if_winwheel":true
            //         }
            //     }
            //     $http({
            //         method: "POST",
            //         url: apiBaseURL + 'coupon_codes',
            //         data: vm.post
            //     }).then(function mySuccess(response) {
                    
            //         $scope.finishedCoupon = true;
            //         $scope.resultData = response.data.data;
            //         console.log(resultData);
                    
            //         var temp = LoginService.isReferral();
            //         if (temp) {
            //             $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
            //             LoginService.getProfileInfo(function(data) {
            //                 vm.user = data;
            //                 window.user = data;
            //             })
            //         }
                    
            //     }, function myError(response) {
            //         // console.log(type);
            //         $timeout(function() {
            //             ngToast.dismiss();
            //             ngToast.create({
            //                 content: '<strong>ReferYogi</strong>: Code already sent',
            //                 dismissOnTimeout: true,
            //                 dismissButton: true,
            //                 dismissOnClick: true
            //             });
            //         }, 0)
            //         vm.openConformPopup();
            //         $scope.myWelcome = response.statusText;
            //     });
            // }
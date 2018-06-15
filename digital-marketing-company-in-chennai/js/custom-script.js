 
      $(".scroll").on('click', function(e) {
         e.preventDefault();
         var target = $(this).attr('href');
         $('html, body').animate({
           scrollTop: ($(target).offset().top)
         }, 500);
      });

      var j=0;
      // scale animation image
      var banner_images = [
                            "images/banner/01.jpg",
                            "images/banner/02.jpg",
                            "images/banner/03.jpg",
                            "images/banner/04.jpg"
                          ];

      var banner_headings = [
                              "<b>77%</b> of customers read online reviews before making a purchase",
                              "<b>241</b> Million active users in India's top social media - Facebook ",
                              "<b>200</b> mins every day is the time an average Indian spends on smartphone",
                              "<b>74%</b> of consumers rely on social media to make purchasing decisions"
                            ];

      for (var i = 0; i < banner_images.length; i++) {
        $(".banner-image-container").append("<img src="+banner_images[i]+" /><h1>"+banner_headings[i]+"</h1>");
        // $(".banner-image-container h1:eq("+i+")").siblings("h1").hide();
      }

      
        // $(".banner-image-container img:eq("+j+")").fadeIn().addClass("scale-animation");
        // $(".banner-image-container img:eq("+j+")").siblings().hide().removeClass("scale-animation");
        // // alert("This came");
        // j+=1;
        // if (j==3) {
        //   j=0;
        // }

        function banner_animation(){
          // console.log(j)
          $(".banner-image-container img:eq("+j+")").fadeIn().addClass("scale-animation");
          $(".banner-image-container h1:eq("+j+")").show();
          $(".banner-image-container img:eq("+j+")").siblings("img").hide().removeClass("scale-animation");
          $(".banner-image-container h1:eq("+j+")").siblings("h1").hide();
          // alert("This came");
          j+=1;
          if (j == banner_images.length) {
            j=0;
          }
        }
        banner_animation();
        setInterval(banner_animation , 5000);
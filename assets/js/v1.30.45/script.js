$(document).ready(function(){var t,a,i,n,e,s,o,r,l,c,p,d,m,g,h,u,f,y;R();var v,b,_,k,w,j,I,N,x,E,B,M,S,P,T,A,z,C,H,L,O=["http://cdn.getspini.com/banner/Nest-Fortune1.jpg","http://cdn.getspini.com/optimized/nest-bn.jpg","http://cdn.getspini.com/optimized/hiranandani-bn.jpg","http://cdn.getspini.com/optimized/stepsstone-bn.jpg","../assets/images/banner/Nest_20Kanathur.jpg","../assets/images/banner/Stepstone_20Prasanna.jpg","../assets/images/gvspl/GVSPl_20banner.jpg","http://cdn.getspini.com/banner/Nest-Suraj1.jpg","http://cdn.getspini.com/banner/Nest-Life1.jpg"],D=["http://cdn.getspini.com/banner/Nest-Fortune-Mob1.jpg","http://cdn.getspini.com/nest-mob-v2-1.jpg","http://cdn.getspini.com/akshaya-today-mob-v2-1.jpg","http://cdn.getspini.com/stepstone-mob-v2-1.jpg","../assets/images/banner/Nest_20Mob.jpg","../assets/images/banner/Stepstone_20Prasanna_20Mob.jpg","../assets/images/gvspl/GVSPL_20Mob.jpg","http://cdn.getspini.com/banner/Nest-Suraj-Mob1.jpg","http://cdn.getspini.com/banner/Nest-Life-Mob1.jpg"],F=["../realestate/nest-fortune-choolaimedu.html","../realestate/nest-amaze-Sholinganallur.html","../realestate/hiranandani-parks-orgadam.html","../realestate/stepstone-ananthaya-Urapakkam.html","../realestate/nest-njoy-villa-kanathur.html","../realestate/stepstone-prasanas-apartments-Sholinganallur.html","../realestate/gvspl-coimbatore.html","../realestate/nest-suraj-mahalingapuram.html","../realestate/nest-life-thiruvanmiyur.html"];function R(){var e=$(window).height();$(".toggle-page-container").css("height",e-102),$(".careers-iframe").css("height",e-115),$(".error-page").css("height",e)}function q(e){return!!/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/.test(e)}function G(){var e;null==s?(e={prospectiveBuyersName:t,phoneNumOfProspectiveBuyer:a,cityName:cityName,categoryName:categoryName,emailOfProspectiveBuyer:i,budgetAmount:n},localStorage.setItem("name",t),localStorage.setItem("ph_number",a),$.ajax({url:o+"/SpinGrailsApp/web/site/leads/website/create/for/self/requirement",type:"POST",headers:{"Content-Type":"application/json","X-SPIN-API-ACCESS-TOKEN":"KOIA8sl#4kasdd98!29jskdlmcxr48b39882#@"},data:JSON.stringify(e),success:function(e){var t=$("input[name='emi-calculater']").val();"true"==t?function(){Y=12*ae,J=ie/12/100,Z=Math.round(X*J*Math.pow(1+J,Y)/(Math.pow(1+J,Y)-1)),te=Math.round(X/Y),ee=Math.round(Math.round(Z)-te)*Y,$("#emi-model").modal("hide"),$(".emi-output").fadeIn(),Highcharts.setOptions({colors:["#55BF3B","#DF5353","#DDDF0D"]}),Highcharts.chart("emi_total_amount",{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:"Total Amount",align:"center",verticalAlign:"middle",y:40},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%"]}},series:[{type:"pie",name:"Browser share",innerSize:"58%",data:[["Principal",X],["Interest",ee]]}]});var e={chart:{type:"solidgauge"},title:null,pane:{center:["50%","85%"],size:"140%",startAngle:-90,endAngle:90,background:{backgroundColor:Highcharts.theme&&Highcharts.theme.background2||"#EEE",innerRadius:"60%",outerRadius:"100%",shape:"arc"}},tooltip:{enabled:!1},yAxis:{stops:[[.1,"#55BF3B"],[.5,"#DDDF0D"],[.9,"#DF5353"]],lineWidth:0,minorTickInterval:null,tickAmount:2,title:{y:-70},labels:{y:16}},plotOptions:{solidgauge:{dataLabels:{y:5,borderWidth:0,useHTML:!0}}}};Highcharts.chart("container-emi",Highcharts.merge(e,{yAxis:{min:100,max:2e5,title:{text:"EMI"}},series:[{name:"EMI",data:[Z],dataLabels:{format:'<div style="text-align:center"><span style="font-size:18px;color:silver; font-weight:100; padding-right: 5px;">&#8377</span><span style="font-size:18px;color:'+(Highcharts.theme&&Highcharts.theme.contrastTextColor||"black")+'">{y:.1f}</span><br/><span style="font-size:12px;color:silver">/Month</span></div>'},tooltip:{valueSuffix:" revolutions/min"}}]}))}():"scratch_card_page"==index_page?($(".scratch-card-data-collection").hide(),$(".toggle-page-container ul, .alerts_page").hide(),$(".scratch-card-container").fadeIn()):"spin_wheel_page"==index_page?(startSpin(),$(".toggle-page-container, #spin_button").hide(),$(".sw-cliam-prize button").css("display","block")):K()},error:function(e){$(".error-contact").fadeIn()},complete:function(){}})):($.ajax({url:"https://formspree.io/contact@getspini.com",method:"POST",data:{Name:t,"Phone Number":a,Email:i,City:cityName,category:categoryName,Selected_Package:s,_subject:"Get spini partner-with-us!",_cc:"karthikeyan@spinircle.com, arun.kumar@spinircle.com, gowrishankar@spinircle.com, anuradha.v@spinircle.com"},dataType:"json"}),K())}function K(e){$(".alert-danger").hide(),$(".success-contact, .loading_image").fadeIn(),setTimeout(function(){window.location.href="../thankyou-pages/thankyoupage-template.html"},3e3),$(".submit").hide()}function W(e){$.get("../assets/js/v1.30.45/multicard.json",function(e,t){C=e.multicard;for(var a=0;a<C.length;a++)$("#"+C[a].card_idname).append("<li class='col-md-3 col-xs-6' onclick='show_page("+a+")'><div class='list-card'><a><img src="+C[a].img_src+"></a><article><p>"+C[a].card_description+"</p><i></i><span>"+C[a].card_area+"</span><a class='btn btn-primary'>See more</a></article></div></li>")})}!function(){v=500<$(window).width()?O:D;b=$(".carousel").attr("id");for(var e=0;e<v.length;e++)_=v[e],k=_.split("/"),lastSegment=k.pop()||k.pop(),$("#common-img").append('<div class="item"><a href ="'+F[e]+'"><img src="'+v[e]+'" alt="'+lastSegment+'" /></a></div>'),$("#common-img-indicators").append('<li data-target="#'+b+'" data-slide-to="'+e+'"></li>');$("#common-img .item:first-child, #common-img-indicators li:first-child").addClass("active")}(),$(window).resize(function(){R()}),o="https://staging.getspini.com"==location.host||"http://localhost:8080"==location.host?"https://sapi.getspini.com:8443":"https://api.getspini.com:8443",$(".error-page").click(function(){$(this).attr("href",window.location.origin)}),$('[data-toggle="tooltip"]').tooltip(),1==index_page?($("header").load("header1.5.html"),$("footer").load("footer1.5.html")):($("header").load("../header1.5.html"),$("footer").load("../footer1.5.html"),$(".alerts_page").load("../alerts.html")),$(".spini-popup-ans span").click(function(){$(this).addClass("active-answer").siblings().removeClass("active-answer"),$(this).children("input[type='radio']").prop("checked",!0)}),$(".next").click(function(){$(this).parents(".toggle-page-container ul li").hide(),$(this).parents(".toggle-page-container ul li").next().fadeIn()}),$(".back").click(function(){$(this).parents(".toggle-page-container ul li").hide(),$(this).parents(".toggle-page-container ul li").prev().fadeIn()}),$(".spini-sep-services ul li a").click(function(){$(this).siblings(".toggle-page-container").fadeIn(),$(".bg-overlay").show()}),$(".toggle-page-container").append("<i class='toggle-page-container-close'>X<i/>"),$(".toggle-page-container-close").click(function(){$(".toggle-page-container, .bg-overlay").fadeOut(),"scratch_card_page"==index_page&&location.reload()}),$(".submit").click(function(){$(this)[0].value;"Real Estate(Buying)"==categoryName||"Interior/Renovation/Modular Kitchen"==categoryName||"Insurance"==categoryName||categoryName,e=$(this).parents(".toggle-page-container ul li"),function(){t=e.find("input[type='text']").val(),a=e.find("input[type='number']").val(),i=e.find("input[type='email']").val();"scratch_card_page"==index_page||"spin_wheel_page"==index_page?cityName="Chennai":cityName=e.find("select[name='city']").val();n=e.find("input[name='budgetAmount']").val(),[t,a,i,cityName,n].includes("")?$(".error-mandatory").fadeIn():10!=a.length?$(".error-contact-ph_number").fadeIn():""!=i&&null!=i?q(i)?G():($(".alert-danger").hide(),$(".error-contact-email").fadeIn()):G()}()}),$(".submit_innerpage").click(function(){t=$("input[type='text']").val(),a=$("input[name='ph_number']").val(),i=$("input[type='email']").val(),cityName=$("select[name='city']").val(),n=$("input[name='budgetAmount']").val(),null==categoryName&&(categoryName=$("select[name='catagoryName']").val(),s=$("select[name='selected_package']").val()),[t,a,i,cityName,n].includes("")?$(".error-mandatory").fadeIn():10!=a.length?$(".error-contact-ph_number").fadeIn():""!=i&&null!=i?q(i)?(!0,G()):($(".alert-danger").hide(),$(".error-contact-email").fadeIn()):(!0,G())}),$(window).scroll(function(){100<$(window).scrollTop()?$("#scrolltop").fadeIn():$("#scrolltop").fadeOut()}),$("#scrolltop").click(function(){$("html, body").stop().animate({scrollTop:0},700,"swing",function(){})}),$('input[type="radio"]').click(function(){$(this).parent("label").siblings().show(),$(this).parents("li").siblings().find("span").hide()}),$(".getestimate").click(function(){T=$("input[name='type_of_kitchen']:checked").val(),A=$("input[name='quality_of_accessories']:checked").val(),z=$("input[name='type_of_material']:checked").val(),"L-shape"==T?(w=document.getElementById("lshapex").value,j=document.getElementById("lshapey").value,N=parseInt(w)+parseInt(j)):"stright"==T?(w=document.getElementById("sshapex").value,N=parseInt(w)):"U-Shape"==T?(w=document.getElementById("ushapex").value,j=document.getElementById("ushapey").value,I=document.getElementById("ushapez").value,N=parseInt(w)+parseInt(j)+parseInt(I)):"Custom"==T?(w=document.getElementById("customxyz").value,N=parseInt(w)):alert("Please select type of kitchen"),"Pre"==z?x=6e3:"MDF/HDF"==z?x=8e3:"Hardwood"==z?x=8e3:"Commercial"==z?x=9e3:"Boiling"==z?x=1e4:"Boiling-w"==z?x=12500:"Marine"==z?x=16e3:alert("Please select Type of Material"),isNaN(N)?(alert("Please enter all measurements"),$(".radio span input").css("border-color","red")):($("#myModal").modal("show"),$(".radio span input").css("border-color","green"))}),$(".submit_estimation").click(function(){"simple"==A?E=15e3:"medium"==A?E=3e4:"high"==A?E=6e4:alert("Please select Quality of Accessories"),M=$("input[name = estimate_name]").val(),S=$("input[name = estimate_email]").val(),P=$("input[name = estimate_ph_number]").val();var e=.3*(B=N*x+E)+B;function t(e){for(var t=(e+="").split("."),a=t[0],i=1<t.length?"."+t[1]:"",n=/(\d+)(\d{3})/;n.test(a);)a=a.replace(n,"$1,$2");return a+i}function a(){$.ajax({url:"https://formspree.io/contact@getspini.com",method:"POST",data:{Name:M,"Phone Number":P,Email:S,Type_of_kitchen:T,Type_of_kitchenvalue:N,Type_of_material:z,Type_of_materialvalue:x,Quality_of_accessories:A,Quality_of_accessoriesvalue:E,Estimatedcost:B,Rangecost:e,_subject:"Lead from Interior Estimation Page !",_cc:"karthikeyan@spinircle.com, sharat.n@spinircle.com, anuradha.v@spinircle.com"},dataType:"json"})}document.getElementById("estimatedcost").innerHTML=t(B),document.getElementById("rangecost").innerHTML=t(e),""==(document.getElementById("uname").innerHTML=M)&&""==P&&""==S?$(".error-mandatory").fadeIn():10!=P.length?$(".error-contact-ph_number").fadeIn():""!=S&&null!=S?q(S)?(!0,$(this).attr("data-dismiss","modal"),$("#calculate-area").fadeIn(2e3),a()):($(".alert-danger").hide(),$(".error-contact-email").fadeIn()):(!0,$("#calculate-area").fadeIn(2e3),a())}),W();var Q=["../assets/images/bedroom1.jpg","../assets/images/bedroom2.jpg","../assets/images/bedroom3.jpg","../assets/images/bedroom4.jpg","../assets/images/livingroom1.jpg","../assets/images/livingroom2.jpg","../assets/images/livingroom3.jpg","../assets/images/livingroom4.jpg","../assets/images/kitchen1.jpg","../assets/images/kitchen2.jpg","../assets/images/kitchen3.jpg","../assets/images/kitchen4.jpg"];L=Q.length;for(var U=0;U<L;U++)$(".spini-interior-gallery ul").append('<li class="col-md-3" index="'+U+'"><a><img src="'+Q[U]+'" alt="interior-gallery" /></a></li>');function V(e){$(".view-gallery, .overlay").fadeIn(),$(".view-gallery img").attr("src",Q[e])}$(".spini-interior-gallery ul li").click(function(){V(H=$(this).attr("index"))}),$(".view-gallery").click(function(){$(".view-gallery, .overlay").fadeOut()}),$(".view-gallery img, .left-move, .right-move").click(function(e){e.stopPropagation()}),$(".right-move").click(function(){L<=++H&&(H=0),V(H)}),$(".left-move").click(function(){--H<0&&(H=L-1),V(H)}),setTimeout(function(){},5e3),$(".home-page-categories li").click(function(){l=$(this).attr("category"),$(this).addClass("selected-category"),$(this).siblings().removeClass("selected-category"),"realestate"==l?(categoryName="Real Estate(Buying)",c="Your dream home is now here",p="http://cdn.getspini.com/bg-index.jpg",u="List your property for free Ad listing on our website",f="https://spini.typeform.com/to/lNAjvb",y="Post Ad"):"interior"==l?(categoryName="Interior/Renovation/Modular Kitchen",c="Get interior designer at best price",p="http://blog.getspini.com/wp-content/uploads/2018/06/Home-2.jpg",u="Estimate the price of your modular kitchen in few minutes",f="/interiors/interior-estimation.html",y="Get Estimate"):"loans"==l&&(categoryName="Loans",c="Loans available @ lowest interest rate",p="http://cdn.getspini.com/loan-banner.jpg",u="Need a loan immediately with lower EMI's, Know more",f="/loans/loan-emi-calculator.html",y="Calculate EMI"),$(".homepage-lead-container h1").text(c),$(".banner-video-container").css("background-image","url("+p+")"),$(".features-add h1").text(u),$(".features-add a").attr("href",f).text(y)}),$(".home-page-categories li:nth-child(1)").click();var X,J,Y,Z,ee,te,ae,ie;U=2,setInterval(function(){$(".home-page-categories li:nth-child("+U+")").click(),3<++U&&(U=1)},5e3);function W(e){$.get("../assets/js/v1.30.45/cards.json",function(e,t){function a(){if(d.length>g)for(var e=m;e<=g;e++)$(".display-cards").append("<li class='col-md-3 col-xs-6 card'><div class='list-card'><a href='"+d[e].a_href+"'><img src="+d[e].card_img+"></a><article><p>"+d[e].card_title+"</p><i></i><span>"+d[e].card_area+"</span></div></li>");else $(".see-more-pagination").attr("disabled","disabled")}d=(d=e.cards).reverse(),$(".see-more-pagination").click(function(){m=g+1,g+=20,a()}),a(),$(".realestate-location-filter ul li").click(function(){$(".display-cards li, .see-more-pagination").hide(),h=$(this).attr("location"),$(".filter-arrow_box").text(h);for(var e=0;e<d.length;e++)d[e].card_city==h&&$(".display-cards").append("<li class='col-md-3 col-xs-6 card'><div class='list-card'><a href='"+d[e].a_href+"'><img src="+d[e].card_img+"></a><article><p>"+d[e].card_title+"</p><i></i><span>"+d[e].card_area+"</span></div></li>")})})}$(document).on("click",".list-card",function(e){r=$(this).children(".list-card a").attr("href"),window.location.href=r}),m=1,g=20,W(),$(".realestate-location-filter").click(function(){$(".bg-overlay, .filter-arrow_box").toggle(),$(".realestate-location-filter ul").slideToggle()}),$(".calculate-emi").click(function(){X=$("input[name='emi-principal']").val(),ae=$("input[name='emi-no-of-years']").val(),ie=$("input[name='emi-precentage']").val(),X=parseInt(X),ae=parseInt(ae),ie=parseInt(ie),isNaN(X)||isNaN(ae)||isNaN(ie)?alert("Please fill all fields"):$("#emi-model").modal("show")});var ne;"Real Estate(Buying)"==categoryName&&($(".contact-us ul").hide(),$(".contact-us").append('<div class="typeform-widget" data-url="https://spini.typeform.com/to/yxPRFr" data-transparency="50" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()<\/script>')),$(".fb-posts img").click(function(){$(".video_player").empty(),ne=$(this).attr("video_script"),$(".video_player").append(ne),$("#video_popup").modal("toggle")})});
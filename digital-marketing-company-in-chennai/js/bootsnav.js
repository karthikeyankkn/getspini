!function(a){"use strict";var b={initialize:function(){this.event(),this.hoverDropdown(),this.navbarSticky(),this.navbarScrollspy()},event:function(){var b=a("nav.navbar.bootsnav"),c=b.hasClass("navbar-sticky");if(c&&b.wrap("<div class='wrap-sticky'></div>"),b.hasClass("brand-center")){var d=new Array,e=a("nav.brand-center"),f=e.find("ul.navbar-nav");e.prepend("<span class='storage-name' style='display:none;'></span>"),e.find("ul.navbar-nav > li").each(function(){if(a(this).hasClass("active")){var b=a("a",this).eq(0).text();a(".storage-name").html(b)}d.push(a(this).html())});var g=d.splice(0,Math.round(d.length/2)),h=d,i="",j=function(a){i="";for(var b=0;b<a.length;b++)i+="<li>"+a[b]+"</li>"};j(g),f.html(i),e.find("ul.nav").first().addClass("navbar-left"),j(h),f.after('<ul class="nav navbar-nav"></ul>').next().html(i),e.find("ul.nav").last().addClass("navbar-right"),e.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"),e.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"),e.find("ul.navbar-nav > li").each(function(){var b=a("ul.dropdown-menu",this),c=a("ul.simple-dropdown",this),d=a("ul.megamenu-content",this);b.closest("li").addClass("dropdown"),c.closest("li").addClass("simple-dropdown"),d.closest("li").addClass("megamenu-fw")});var k=a(".storage-name").html();""==!k&&a("ul.navbar-nav > li:contains('"+k+"')").addClass("active")}b.hasClass("navbar-sidebar")?(a("body").addClass("wrap-nav-sidebar"),b.wrapInner("<div class='scroller'></div>")):a(".bootsnav").addClass("on"),b.find("ul.nav").hasClass("navbar-center")&&b.addClass("menu-center"),b.hasClass("navbar-full")?(a("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"),a(".wrap-full-menu").wrap("<div class='nav-full'></div>"),a("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")):b.hasClass("navbar-mobile")?b.removeClass("no-full"):b.addClass("no-full"),b.hasClass("navbar-mobile")&&(a(".navbar-collapse").on("shown.bs.collapse",function(){a("body").addClass("side-right")}),a(".navbar-collapse").on("hide.bs.collapse",function(){a("body").removeClass("side-right")}),a(window).on("resize",function(){a("body").removeClass("side-right")})),b.hasClass("no-background")&&a(window).on("scroll",function(){var b=a(window).scrollTop();b>34?a(".navbar-fixed").removeClass("no-background"):a(".navbar-fixed").addClass("no-background")}),b.hasClass("navbar-transparent")&&a(window).on("scroll",function(){var b=a(window).scrollTop();b>34?a(".navbar-fixed").removeClass("navbar-transparent"):a(".navbar-fixed").addClass("navbar-transparent")}),a(".btn-cart").on("click",function(a){a.stopPropagation()}),a("nav.navbar.bootsnav .attr-nav").each(function(){a("li.search > a",this).on("click",function(b){b.preventDefault(),a(".top-search").slideToggle()})}),a(".input-group-addon.close-search").on("click",function(){a(".top-search").slideUp()}),a("nav.navbar.bootsnav .attr-nav").each(function(){a("li.side-menu > a",this).on("click",function(b){b.preventDefault(),a("nav.navbar.bootsnav > .side").toggleClass("on"),a("body").toggleClass("on-side")})}),a(".side .close-side").on("click",function(b){b.preventDefault(),a("nav.navbar.bootsnav > .side").removeClass("on"),a("body").removeClass("on-side")})},hoverDropdown:function(){var b=a("nav.navbar.bootsnav"),c=a(window).width(),d=a(window).height(),e=b.find("ul.nav").data("in"),f=b.find("ul.nav").data("out");if(c<991){a(".scroller").css("height","auto"),a("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"),a("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"),a("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"),a("nav.navbar.bootsnav ul.nav").off("mouseleave"),a(".navbar-collapse").removeClass("animated"),a("nav.navbar.bootsnav ul.nav").each(function(){a(".dropdown-menu",this).addClass("animated"),a(".dropdown-menu",this).removeClass(f),a("a.dropdown-toggle",this).off("click"),a("a.dropdown-toggle",this).on("click",function(b){return b.stopPropagation(),a(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(e),a(this).closest("li.dropdown").first().toggleClass("on"),!1}),a("li.dropdown",this).each(function(){return a(this).find(".dropdown-menu").stop().fadeOut("fast"),a(this).on("hidden.bs.dropdown",function(){a(this).find(".dropdown-menu").stop().fadeOut("fast")}),!1}),a(".megamenu-fw",this).each(function(){a(".col-menu",this).each(function(){a(".content",this).addClass("animated"),a(".content",this).stop().fadeOut(),a(".title",this).off("click"),a(".title",this).on("click",function(){return a(this).closest(".col-menu").find(".content").stop().fadeToggle("fast").addClass(e),a(this).closest(".col-menu").toggleClass("on"),!1}),a(".content",this).on("click",function(a){a.stopPropagation()})})})});var g=function(){a("li.dropdown",this).removeClass("on"),a(".dropdown-menu",this).stop().fadeOut("fast"),a(".dropdown-menu",this).removeClass(e),a(".col-menu",this).removeClass("on"),a(".col-menu .content",this).stop().fadeOut("fast"),a(".col-menu .content",this).removeClass(e)};a("nav.navbar.bootsnav").on("mouseleave",function(){g()}),a("nav.navbar.bootsnav .attr-nav").each(function(){a(".dropdown-menu",this).removeClass("animated"),a("li.dropdown",this).off("mouseenter"),a("li.dropdown",this).off("mouseleave"),a("a.dropdown-toggle",this).off("click"),a("a.dropdown-toggle",this).on("click",function(b){b.stopPropagation(),a(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(),a(".navbar-toggle").each(function(){a(".fa",this).removeClass("fa-times"),a(".fa",this).addClass("fa-bars"),a(".navbar-collapse").removeClass("in"),a(".navbar-collapse").removeClass("on")})}),a(this).on("mouseleave",function(){return a(".dropdown-menu",this).stop().fadeOut(),a("li.dropdown",this).removeClass("on"),!1})}),a(".navbar-toggle").each(function(){a(this).off("click"),a(this).on("click",function(){a(".fa",this).toggleClass("fa-bars"),a(".fa",this).toggleClass("fa-times"),g()})})}else if(c>991){if(a(".scroller").css("height",d+"px"),b.hasClass("navbar-sidebar"))a("nav.navbar.bootsnav ul.nav").each(function(){a("a.dropdown-toggle",this).off("click"),a("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),a(".dropdown-menu",this).addClass("animated"),a("li.dropdown",this).on("mouseenter",function(){return a(".dropdown-menu",this).eq(0).removeClass(f),a(".dropdown-menu",this).eq(0).stop().fadeIn("fast").addClass(e),a(this).addClass("on"),!1}),a(".col-menu").each(function(){a(".content",this).addClass("animated"),a(".title",this).on("mouseenter",function(){return a(this).closest(".col-menu").find(".content").stop().fadeIn("fast").addClass(e),a(this).closest(".col-menu").addClass("on"),!1})}),a(this).on("mouseleave",function(){return a(".dropdown-menu",this).stop().removeClass(e),a(".dropdown-menu",this).stop().addClass(f).fadeOut("fast"),a(".col-menu",this).find(".content").stop().fadeOut("fast").removeClass(e),a(".col-menu",this).removeClass("on"),a("li.dropdown",this).removeClass("on"),!1})});else{var h=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);a("nav.navbar.bootsnav ul.nav").each(function(){a("a.dropdown-toggle",this).off("click"),a("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),a(".megamenu-fw",this).each(function(){a(".title",this).off("click"),a("a.dropdown-toggle",this).off("click"),a(".content").removeClass("animated")}),a(".dropdown-menu",this).addClass("animated"),(a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0)&&(a("li:not(.dropdown)",this).on("mouseenter",function(){a(this).parent().find(".dropdown-menu").stop().fadeOut("fast")}),a(document).on("click",".side-left-menu-close.active",function(){a(this).removeClass("active")})),a("li.dropdown",this).on("mouseenter",function(){var b=this;if(a(".side-left-menu-close").addClass("active"),(a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0)&&(a(this).parents(".dropdown-menu").length>0?a(this).parents(".dropdown-menu").find(".dropdown-menu").not(a(".dropdown-menu",this)).stop().fadeOut("fast"):(a(this).parents(".bootsnav .nav").find(".dropdown-menu").not(a(".dropdown-menu",this)).stop().fadeOut("fast"),a(":not(.second-level)",this).find(".third-level").stop().fadeOut("fast")),a(this).parent().hasClass("second-level")?a(this).parents(".navbar-nav").addClass("enter"):a(this).parent().hasClass("enter")&&a(".navbar-nav").removeClass("enter")),a(".dropdown-menu",this).eq(0).removeClass(f),a(".dropdown-menu",b).eq(0).stop().fadeIn("fast").addClass(h?e:e),a(this).addClass("on"),a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0){if(a(".left-nav-sidebar").length>0){var c=a(".sidebar-part1").outerWidth();c+=20,c+=a(".left-nav-on .navbar-nav").outerWidth()}else var c=a(".navbar-nav").outerWidth();var d=a(window).width();setTimeout(function(){a(".dropdown").each(function(){a(this).hasClass("on")&&(c+=a(".dropdown-menu li",this).outerWidth())}),a(".side-left-menu-close").width(d-c)},300)}return!1}),a("li.dropdown",this).on("mouseleave",function(){if(a(".dropdown-menu",this).eq(0).removeClass(e),("none"==a(".dropdown-menu",this).css("display")||!(a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0)||a(this).parents(".bootsnav .nav").hasClass("enter"))&&(a(".dropdown-menu",this).eq(0).stop().fadeOut("fast").addClass(h?f:f),a(this).removeClass("on")),a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0){if(a(".side-left-menu-close").addClass("active"),a(".left-nav-sidebar").length>0){var b=a(".sidebar-part1").outerWidth();b+=20,b+=a(".left-nav-on .navbar-nav").outerWidth()}else var b=a(".navbar-nav").outerWidth();var c=a(window).width();setTimeout(function(){a(".dropdown").each(function(){a(this).hasClass("on")&&(b+=a(".dropdown-menu li",this).outerWidth())}),a(".side-left-menu-close").width(c-b)},300)}}),a(this).on("mouseleave",function(){return a(".dropdown-menu",this).removeClass(e),a(".side-left-menu-close").removeClass("active"),a(".dropdown-menu",this).eq(0).stop().fadeOut("fast").addClass(h?f:f),a("li.dropdown",this).removeClass("on"),(a(".navbar-left-sidebar").length>0||a(".left-nav-sidebar").length>0)&&(a(".bootsnav .nav").hasClass("enter")?a(".bootsnav .nav").removeClass("enter"):a(".bootsnav .nav").find(".dropdown-menu").fadeOut("fast")),!1})})}a("nav.navbar.bootsnav .attr-nav").each(function(){a("a.dropdown-toggle",this).off("click"),a("a.dropdown-toggle",this).on("click",function(a){a.stopPropagation()}),a(".dropdown-menu",this).addClass("animated"),a("li.dropdown",this).on("mouseenter",function(){return a(".dropdown-menu",this).eq(0).removeClass(f),a(".dropdown-menu",this).eq(0).stop().fadeIn("fast").addClass(e),a(this).addClass("on"),!1}),a("li.dropdown",this).on("mouseleave",function(){a(".dropdown-menu",this).eq(0).removeClass(e),a(".dropdown-menu",this).eq(0).stop().fadeOut("fast").addClass(f),a(this).removeClass("on")}),a(this).on("mouseleave",function(){return a(".dropdown-menu",this).removeClass(e),a(".dropdown-menu",this).eq(0).stop().fadeOut("fast").addClass(f),a("li.dropdown",this).removeClass("on"),!1})})}if(b.hasClass("navbar-full")){var i=a(window).height(),j=a(window).width();a(".nav-full").css("height",i+"px"),a(".wrap-full-menu").css("height",i+"px"),a(".wrap-full-menu").css("width",j+"px"),a(".navbar-collapse").addClass("animated"),a(".navbar-toggle").each(function(){var b=a(this).data("target");a(this).off("click"),a(this).on("click",function(c){return c.preventDefault(),a(b).removeClass(f),a(b).addClass("in"),a(b).addClass(e),!1}),a("li.close-full-menu").on("click",function(c){return c.preventDefault(),a(b).addClass(f),setTimeout(function(){a(b).removeClass("in"),a(b).removeClass(e)},500),!1})})}},navbarSticky:function(){var b=a("nav.navbar.bootsnav"),c=b.hasClass("navbar-sticky");if(c){var d=b.height();a(".wrap-sticky").height(d);var e=a(".wrap-sticky").offset().top;a(window).on("scroll",function(){var c=a(window).scrollTop();c>e?b.addClass("sticked"):b.removeClass("sticked")})}},navbarScrollspy:function(){var b=a(".navbar-scrollspy"),c=a("body"),d=a("nav.navbar.bootsnav"),e=d.outerHeight();if(b.length){c.scrollspy({target:".navbar",offset:e}),a(".scroll").on("click",function(b){b.preventDefault(),a(".scroll").removeClass("active"),a(this).addClass("active"),a(".navbar-collapse").removeClass("in"),a(".navbar-toggle").each(function(){a(".fa",this).removeClass("fa-times"),a(".fa",this).addClass("fa-bars")});var e=(a(window).scrollTop(),a(this).find("a")),f=a(e.attr("href")).offset().top,g=a(window).width(),h=d.data("minus-value-desktop"),i=d.data("minus-value-mobile"),j=d.data("speed");if(g>992)var k=f-h;else var k=f-i;a("html, body").stop().animate({scrollTop:k},j)});var f=function(){var a=c.data("bs.scrollspy");a&&(e=d.outerHeight(),a.options.offset=e,c.data("bs.scrollspy",a),c.scrollspy("refresh"))};a(window).on("resize",function(){clearTimeout(a);var a=setTimeout(f,200)})}}};a(document).ready(function(){b.initialize()}),a(window).on("resize",function(){b.hoverDropdown(),setTimeout(function(){b.navbarSticky()},500),a(".navbar-toggle").each(function(){a(".fa",this).removeClass("fa-times"),a(".fa",this).addClass("fa-bars"),a(this).removeClass("fixed")}),a(".navbar-collapse").removeClass("in"),a(".navbar-collapse").removeClass("on"),a(".navbar-collapse").removeClass("bounceIn")})}(jQuery);
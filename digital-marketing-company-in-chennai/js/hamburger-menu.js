function bindEvent(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}!function(){function e(){f()}function f(){b&&bindEvent(b,"click",g),c&&bindEvent(c,"click",g)}function g(){d?(classie.remove(a,"show-menu"),$(".full-width-pull-menu").length&&(classie.remove(a,"overflow-hidden"),classie.remove(a,"position-fixed"))):(classie.add(a,"show-menu"),$(".full-width-pull-menu").length&&(classie.add(a,"overflow-hidden"),classie.add(a,"position-fixed"))),d=!d}var a=document.body,b=document.getElementById("open-button"),c=document.getElementById("close-button"),d=!1;e()}();
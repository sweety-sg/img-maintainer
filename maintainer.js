var myNav = document.getElementsByClassName('header');
var logo =document.getElementsByClassName('img-logo');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 2 || document.documentElement.scrollTop >= 2 ) {
        myNav[0].classList.add("scrolled");
        myNav[0].classList.remove("unscrolled");
        logo[0].classList.add("invisible");
    } 
    else {
        myNav[0].classList.add("unscrolled");
        myNav[0].classList.remove("scrolled");
        logo[0].classList.remove("invisible");
    }
};
"use strict";

$.material.init();
//back to top new btn
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//dropdown menu

$(document).ready(function () {

  $('[data-toggle="offcanvas"]').on('click',function () {
        $('#wrapper').toggleClass('toggled');

  });
  $(".back-icon").on('click',function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});



$(".dropdown").hover(
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeIn("50");
        $(this).toggleClass('open');
    },
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeOut("50");
        $(this).toggleClass('open');
    }
);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80116949-1', 'auto');
  ga('send', 'pageview');


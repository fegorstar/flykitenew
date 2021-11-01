(function ($) {
  "use strict";
 

  //memnu js
  jQuery(document).ready(function ($) {
    $(".menu-trigger").on('click', function () {
      $(".off-canven-menu").addClass("active")
      $(".offcanvas-overlay").addClass("active")
    });
    $(".close-icon i, .offcanvas-overlay, .main_menu .off-canven-menu ul li a, .banner_part, .logo").on('click', function () {
      $(".off-canven-menu").removeClass("active")
      $(".offcanvas-overlay").removeClass("active")
    });

    $(".logo").click(function() {
      $("#navbar ul li a").removeClass("active");
      $('.l1').addClass("active");
    });


  });

  
  $(function() {
    
    $("#navbar ul li a").click(function() {
    $("#navbar ul li a").removeClass("active");
    $(this).addClass("active");
    });

  
    
    });


}(jQuery));
jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 480) {
       $("#menu").addClass("menu_scroll");
      } else {
       $("#menu").removeClass("menu_scroll");
      }
    });
  });

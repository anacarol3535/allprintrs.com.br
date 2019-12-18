jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 200) {
       $("#botao-inicio").addClass("icone_up", "icone_up:hover");
       $("#botao-inicio").removeClass("icone_up-disable");
      } else {
       $("#botao-inicio").removeClass("icone_up", "icone_up:hover");
       $("#botao-inicio").addClass("icone_up-disable");
      }
    });
  });

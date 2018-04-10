//WOW SCRIPT

new WOW().init();

//========================
//           MENU
//========================

$(document).ready(function () {
     $("#respMenu").aceResponsiveMenu({
         resizeWidth: '768', // Set the same in Media query       
         animationSpeed: 'fast', //slow, medium, fast
         accoridonExpAll: false //Expands all the accordion menu on click
     });
});

//========================
//        Slider
//========================

$(document).ready(function() {
    $(".rslides").responsiveSlides({
        speed: 800
      });
  });

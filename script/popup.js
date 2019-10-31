$(document).ready(function(){
  $(".popup").hide();
  $(".popupContent").hide();


  for (var i = 1; i < 12; i++) {
    $("#pr" + i).click(function(){
      $(".popup").fadeIn();
      $(".popupContent").fadeIn();
    });
  }



  $(".retour").click(function(){
    $(".popup").fadeOut();
    $(".popupContent").fadeOut();
  });

});

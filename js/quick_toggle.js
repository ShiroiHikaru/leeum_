$(document).ready(function(){
  $(".quickform").hide();
  $(".b01").click(function(){
    $(".quickform").toggle(500);
  });

  $(".slider").bxSlider();

  $(".sitebox").click(function(){
    $(".family_list").slideToggle()
  });
});
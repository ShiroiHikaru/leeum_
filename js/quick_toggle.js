$(document).ready(function(){
  $(".quickform").hide();
  $(".b01").click(function(){
    $(".quickform").toggle(500);
  });

  $(".box1 h2").mouseenter(function(){
    $(this).animate({width:290, height: 400, left:-20, top: 0}, 0.5);
  });

  $(".box1 h2").mouseleave(function(){
    $(this).animate({width:290, height: 400, left:0, top: 0});
  });

});
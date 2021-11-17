$(document).ready(function(){
  $(".quickform").hide();
  $(".b01").click(function(){
    $(".quickform").toggle(500);
  });

  $(".site_list").hide();
  $(".sitelink h3").click(function(){
    $(".site_list").slideToggle("slow");
  });

  $(".arttext1").hide(function(){
    $(this).mouseenter(function(){
      $(this).slideToggle("slow");
    });
  });
});
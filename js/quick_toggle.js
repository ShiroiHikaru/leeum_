$(document).ready(function(){
  $(".quicklogin").hide(function(){
    $(".login").click(function(){
      $(".quicklogin").toggle("300");
    });
  });
    
  $(".site_list").hide();
  $(".sitelink h3").click(function(){
    $(".site_list").slideToggle("fast");
  });
});

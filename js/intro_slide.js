$(document).ready(function(){
  $("#interview .artist .artistbox .mario h2").mouseenter(function(){
    $("#interview .artist .artistbox .mario .arttext1").stop(true).slideDown("slow");
  });

  $("#interview .artist .artistbox .mario h2").mouseout(function(){
    $("#interview .artist .artistbox .mario .arttext1").slideUp("slow");
  });

  
});

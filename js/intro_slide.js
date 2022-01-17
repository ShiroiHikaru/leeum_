$(document).ready(function(){
  $("#interview .artist .artistbox .mario h2").mouseenter(function(){
    $("#interview .artist .artistbox .mario .arttext1").stop(true).slideDown("slow");
  });

  $("#interview .artist .artistbox .mario h2").mouseleave(function(){
    $("#interview .artist .artistbox .mario .arttext1").slideUp("slow");
  });

  $("#interview .artist .artistbox .jean h2").mouseenter(function(){
    $("#interview .artist .artistbox .jean .arttext2").stop(true).slideDown("slow");
  });

  $("#interview .artist .artistbox .jean h2").mouseleave(function(){
    $("#interview .artist .artistbox .jean .arttext2").slideUp("slow");
  });

  $("#interview .artist .artistbox .rem h2").mouseenter(function(){
    $("#interview .artist .artistbox .rem .arttext3").stop(true).slideDown("slow");
  });

  $("#interview .artist .artistbox .rem h2").mouseleave(function(){
    $("#interview .artist .artistbox .rem .arttext3").slideUp("slow");
  });

  
});

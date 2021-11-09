$(document).ready(function(){
  $(".quickform").hide();
  $(".b01").click(function(){
    $(".quickform").toggle(500);
  });



 $(".sitelink h3").click(function(){
  $(".site_list ul").toggle("slow");
 });
});
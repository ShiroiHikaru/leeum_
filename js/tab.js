$(document).ready(function(){
  $(".filter ul li a").click(function(){
    var scrollPosition = $($(this)).attr("#artist div").offset().top;
  });
});
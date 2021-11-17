$(document).ready(function(){
  $(".qna1 h3").click(function(){
    $(".qna1 p").not($(this).next()).slideUp("fast");
    $(this).next().slideToggle("fast");
  });

  $(".qna2 h3").click(function(){
    $(".qna2 p").not($(this).next()).slideUp("fast");
    $(this).next().slideToggle("fast");
  });

  $(".qna3 h3").click(function(){
    $(".qna3 p").not($(this).next()).slideUp("fast");
    $(this).next().slideToggle("fast");
  });

  $(".qna4 h3").click(function(){
    $(".qna4 p").not($(this).next()).slideUp("fast");
    $(this).next().slideToggle("fast");
  });
});
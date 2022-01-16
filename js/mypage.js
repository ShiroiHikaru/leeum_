$(document).ready(function(){
    $(".menu_wrap .dep1 .privacy1").click(function(){
        let idx = $(this).index();
        $("#box .mypage_section").hide();
        $("#box .mypage_section").eq(idx).show()
    });

    $(".menu_wrap .dep1 .privacy2").click(function(){
        let idx = $(this).index();
        $("#box .mypage_section2").hide();
        $("#box .mypage_section2").eq(idx).show()
    });
});
function join(){
  //변수설정
  var user = document.getElementById("user");
  
  if(user.value == ""){
    alert("이름을 입력해주세요.");
  };
  
  var agree = document.getElementById("agree");
  if(!agree){
    alert("동의버튼을 클릭하셔야 다음 페이지로 넘어갑니다.");
    return false;
  };
};
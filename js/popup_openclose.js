let dateObj=new Date();

function notice_getCookie(name)
    {let nameOfCookie=name+"=";
        let x=0;while(x<=document.cookie.length){
            let y=(x+nameOfCookie.length);
            if(document.cookie.substring(x,y)==nameOfCookie){
                if((endOfCookie=document.cookie.indexOf(";",y))==-1)
        endOfCookie=document.cookie.length;return unescape(document.cookie.substring(y,endOfCookie));
    }
    x=document.cookie.indexOf(" ",x)+1;if(x==0) break;
    } return"";
    }

function jsFncLayerPopupSetCookie(name,value,expiredays){
    let todayDate=new Date();todayDate.setTime(todayDate.getTime()+(expiredays*(24*60*60*1000)));
    document.cookie=name+"="+escape(value)+"; path=/; expires="+todayDate.toUTCString()+";"
}

function jsFncLayerPopupOpenWin(pDivId,pLayerYn){
    let objDiv=document.getElementById(pDivId);
    if(objDiv){
        if(notice_getCookie(pDivId)!="done"){
            document.getElementById(pDivId).style.display="block";
        }else{
            document.getElementById(pDivId).style.display="none";
        }
    }

    if(pLayerYn=="Y"){
        $(document).ready(function(){
            $('#layerMask').css({'height':$(document).height(),'display':'block'})});}}

function jsFncLayerPopupCloseWin(pDivId,pCheckBoxId,pExpireDays){
    let strObj=document.getElementById(pDivId);
    
    if(pCheckBoxId!=""){
        let strObjCheckBox=document.getElementById(pCheckBoxId);
        if(strObjCheckBox.checked==true){
            jsFncLayerPopupSetCookie(strObj.id,"done",pExpireDays);
        }
    } strObj.style.display="none";$('#layerMask').hide();}

function jsFncLayerPopupCloseWinNoCheck(pDivId,pCheckBoxId,pExpireDays){
    let strObj=document.getElementById(pDivId);jsFncLayerPopupSetCookie(strObj.id,"done",pExpireDays);strObj.style.display="none";$('#layerMask').hide();}

function jsFncLayerOnlyPopupCloseWin(pDivId){
    let strObj=document.getElementById(pDivId);strObj.style.display="none";
}
// ==UserScript==
// @name        AndyPlay By !!...coder_007...!!
// @namespace   AndyPlay By !!...coder_007...!!
// @description Just Login To AndyPlay And Rest Leave On This Script...!! 
// @include     *andyplay.*
// @include     *andyplay.com/*
// @require		https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     _007
// @author      coder_007
// @updateURL		http://userscripts.org/scripts/source/172818.meta.js
// @downloadURL		http://userscripts.org/scripts/source/172818.user.js
// @icon        http://t2.gstatic.com/images?q=tbn:ANd9GcQ2BYrq5RRPcbW_X2jC4PVwNHFoYT64C0o6XjaBn7um9wPZLgljow
// ==/UserScript==

$(function(){
    
    /****************This Site Is Not Good It"s Again Redirect To Played Quiz LolZz******************/
    
    var path = window.location.pathname;
    var url = window.location.href;
    var a = document.getElementsByClassName('btn btn-info');
    var d = document.getElementsByClassName('btn btn-danger');
    var b = document.getElementsByTagName('span');
    var c = document.getElementsByTagName('input');
    var sel= ['True','True','True','False'];
    var ss = sel[Math.floor(Math.random()*sel.length)];
    var s = ss;
    
    /****************TrueAndFalse****************/
    
    if(url.match("TrueAndFalse")){
        
        for (var i = 0; i < a.length; i++){
            if(a[i].defaultValue== s){
                a[i].click();
            }
        }
        for (var i = 0; i < c.length; i++){
            if(c[i].defaultValue=="Next"){
                c[i].click();
            }
        }
        for (var i = 0; i < d.length; i++){
            if(d[i].defaultValue=="Play Now"){
                d[i].click();
            }
        }
        for (var i = 0; i < b.length; i++){
            if(b[i].textContent=="Congratulations!! you have finish the game. The earned points credited on your eWallet, now you can play this game tomorrow."){
                //alert("You Have Completed TrueAndFalse");
                window.location.href=("http://www.andyplay.com/user/PlayQuiz");
            }
        }
    }
    /****************TrueAndFalse End****************/
    
    /******************Quiz Starts*******************/
    
    if(url.match("PlayQuiz")){
        for (var i = 0; i < d.length; i++){
            if(d[i].defaultValue=="Play Now"){
                d[i].click();
            }
        }
        for (var i = 0; i < c.length; i++){
            if(c[i].defaultValue=="Next"){
                c[i].click();
            }
        }
        for (var i = 0; i < b.length; i++){
            if(b[i].textContent=="Congratulations!! you have finish the game. The earned points credited on your eWallet, now you can play this game tomorrow."){
                alert("Congratulation..!! You Have Completed All Section For Today..!! Now You Can Logout..!!");
            }
        }
        if(c[6].outerHTML.length=="109" && c[5].outerHTML.length=="109" && c[4].outerHTML.length=="109" && c[3].outerHTML.length=="109"){
            c[3].click();
        }
        if(c[3].outerHTML.match("checked")){
            c[4].click();
        }
        if(c[4].outerHTML.match("checked")){
            c[5].click();
        }
        if(c[5].outerHTML.match("checked")){
            c[6].click();
        }
        setTimeout(function(){document.getElementById('content_subcontent_btncorrect').click();} , 600);
    }
    /***********Redirect page*******************/
    if(url=="http://www.andyplay.com/user/"){
        window.location.href=("http://www.andyplay.com/user/TrueAndFalse");
    }
    /******************End Redirect page****************************/
    /*********************Script End********************************/
});
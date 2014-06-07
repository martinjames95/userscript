// Copyright (c) 2009, ScheduleOnce LTD.
//
// ==UserScript==
// @name	  ScheduleOnce Google Calendar Add-on 
// @namespace     http://www.scheduleonce.com
// @description   The Google Calendar Add-on is a small browser extension that allows you to use ScheduleOnce directly from your Google Calendar.
// @include       http://www.google.com/calendar/*
// @include       https://www.google.com/calendar/*
// ==/UserScript==


var userEmail="";var baseURL="http://www.scheduleonce.com/";window.addEventListener("load",function(){if(unsafeWindow.document&&(document.getElementById("soFrame")==null)){var B='function switchMenu(obj,obj2) {var el = document.getElementById(obj);if ( el.style.display != "none" ) {	el.style.display = \'none\';}else {	el.style.display = \'\';}var el2 = document.getElementById(obj2);if ( el2.className == "calHeader goog-zippy-expanded normalText" ) {	el2.className = "calHeader goog-zippy-collapsed normalText";return;}if ( el2.className == "calHeader goog-zippy-collapsed normalText" ) {	el2.className = "calHeader goog-zippy-expanded normalText";return;}}';addGlobalScript(B);var A="function frameReload() {var f = document.getElementById('soFrame');f.src = f.src;}";addGlobalScript(A);userEmail=unsafeWindow.document.getElementById("guser").textContent.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)[0];var a=baseURL+"UserMeetings.aspx?email="+userEmail;var l=unsafeWindow.document.getElementById("dp_0_b1");var m=unsafeWindow.document.createElement("div");m.className="nb_0";m.style.paddingTop="12px";var c=unsafeWindow.document.createElement("div");var v=unsafeWindow.document.createElement("div");v.className="t1 chromeColor";var t=unsafeWindow.document.createElement("div");t.className="t2 chromeColor";c.style.width="100%";c.style.height="2px";v.style.backgroundColor="#ffde99";t.style.backgroundColor="#ffde99";c.appendChild(v);c.appendChild(t);var o=unsafeWindow.document.createElement("h2");var E=unsafeWindow.document.createElement("img");var u=unsafeWindow.document.createTextNode(" ScheduleOnce ");o.title="ScheduleOnce Google Calendar Add-on";o.className="calHeader goog-zippy-expanded normalText";o.id="h2";o.setAttribute("tabindex","0");o.style.backgroundColor="#ffde99";o.style.fontWeight="bold";E.className="h zippy-arrow";E.setAttribute("unselectable","on");E.src="//calendar.google.com/googlecalendar/images/blank.gif";o.setAttribute("onClick","switchMenu('bodyDiv','h2');");o.appendChild(E);o.appendChild(u);var k=unsafeWindow.document.createElement("div");var z=unsafeWindow.document.createElement("div");var i=unsafeWindow.document.createElement("img");z.className="calHeader textAlignRight";z.style.backgroundColor="#ffde99";i.src=baseURL+"images/refresh.png";i.title="Refresh meeting list";i.setAttribute("onClick","frameReload();");i.style.marginRight="5px";z.appendChild(i);var r=unsafeWindow.document.createElement("div");r.className="floatLeft";r.appendChild(o);k.appendChild(r);k.appendChild(z);var p=unsafeWindow.document.createElement("div");var D=unsafeWindow.document.createElement("div");var q=unsafeWindow.document.createElement("div");q.className="calendarsBottom";p.className="sidetable chromeColor";p.id="bodyDiv";p.style.padding="0pt 2px 1px";p.style.clear="both";p.style.backgroundColor="#ffde99";p.style.borderColor="#ffde99";var g=unsafeWindow.document.createElement("table");var d=unsafeWindow.document.createElement("tbody");var n=unsafeWindow.document.createElement("tr");var w=unsafeWindow.document.createElement("td");var e=unsafeWindow.document.createElement("div");var h=unsafeWindow.document.createElement("div");e.className="calList";e.style.border="1px solid #efaa22";h.className="calListRaw";e.id="divListM";var C=unsafeWindow.document.createElement("iframe");C.id="soFrame";C.name="soFrame";C.setAttribute("src",a);C.setAttribute("width","152");C.setAttribute("height","120");C.setAttribute("frameborder","0");C.setAttribute("marginheight","0");C.setAttribute("marginwidth","0");e.appendChild(C);w.appendChild(e);n.appendChild(w);d.appendChild(n);g.cellSpacing="0";g.cellPadding="0";g.style.tableLayout="fixed";g.style.width="100%";g.appendChild(d);var y=unsafeWindow.document.createElement("div");var s=unsafeWindow.document.createElement("span");var b=unsafeWindow.document.createTextNode("+ New meeting");s.title="Create a new meeting with ScheduleOne";y.className="callistLink textAlignRight";s.className="lk";s.onclick=openSOURL;s.appendChild(b);y.appendChild(s);var x=unsafeWindow.document.createElement("div");var f=unsafeWindow.document.createElement("span");var j=unsafeWindow.document.createTextNode("Help");f.title="ScheduleOnce help";x.className="callistLink floatLeft";f.className="lk";f.onclick=openHelpURL;f.appendChild(j);x.appendChild(f);q.appendChild(x);q.appendChild(y);D.appendChild(g);p.appendChild(D);p.appendChild(q);m.appendChild(c);m.appendChild(k);m.appendChild(p);l.parentNode.insertBefore(m,l.nextSibling)}},true);function openSOURL(){var a=baseURL+"NewMeeting.aspx?source=GC";window.open(a,"ScheduleOnceNM","chrome=yes,dependent=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,width=1024,height=600")}function openHelpURL(){var a=baseURL+"OrganizerHelp.aspx";window.open(a,"ScheduleOnceFAQ","")}function addGlobalScript(b){var a;a=unsafeWindow.document.getElementsByTagName("head")[0];if(!a){return}script=document.createElement("script");script.type="text/javascript";script.innerHTML=b;a.appendChild(script)};
// ==UserScript==
// @name           Trust System
// @namespace      www.bungie.net
// @description    Bnet trust system helps you know how far away from a title upgrade, taken from Achronos.
// @include        http://www.bungie.net*
// @version        1
// ==/UserScript==
function BAN_SELECT(){var banselect = document.getElementById('banselect').value;if(banselect=="Warning"){GM_setValue("Trust_Rating", trust_rating-1000)}else if(banselect=="3 Day"){GM_setValue("Trust_Rating", trust_rating-2000)}else if(banselect=="7 Day"){GM_setValue("Trust_Rating", trust_rating-3000)}else if(banselect=="14 Day"){GM_setValue("Trust_Rating", trust_rating-4000)}else if(banselect=="1 Month"){GM_setValue("Trust_Rating", trust_rating-5000)}alert("DOOSH! Banned!");}var trust_rating = GM_getValue("Trust_Rating");if(trust_rating == null){GM_setValue("Trust_Rating", 0);}if(document.URL == "http://www.bungie.net/"){GM_setValue("Trust_Rating", trust_rating+10);}if(document.URL.search("www.bungie.net/Forums/createpost.aspx") > -1){if(document.URL.search("act=reply") > -1){var submit_thread = document.getElementsByClassName('forum_post_submit_button').item(0);submit_thread.addEventListener("click", function(){GM_setValue("Trust_Rating", trust_rating+1)}, true);}else {var submit_thread = document.getElementsByClassName('forum_post_submit_button').item(0);submit_thread.addEventListener("click", function(){GM_setValue("Trust_Rating", trust_rating+5)}, true);}}var page_logger = GM_getValue("Pagelogger");if(page_logger == null){GM_setValue("Pagelogger", 0);}if(document.getElementById('ctl00_mainContent_header_gamertagLinkFloat')){if(page_logger==0){GM_setValue("Trust_Rating", trust_rating+2000);GM_setValue("Pagelogger", page_logger+5);}}if(trust_rating<0){var Percentage=0;}else{var Percentage = (trust_rating/24000)*100;}GM_addStyle("#outboxPB{padding: 1px 1px 1px 1px; border-style:inset;border-width:1px; width:300px;height:10px;} #progressbar{width:"+Percentage+"%;height:10px; background-color:#00D0FF;}");if(document.URL == "http://www.bungie.net/Account/Profile.aspx"){document.getElementsByClassName('profile').item(0).innerHTML += '<li><h3>Trust Meter <select style="margin-left:70px;" id="banselect"><option>Warning</option><option>3 Day</option><option>7 Day</option><option>14 Day</option><option>1 Month</option></select><input type="button" id="banned" value="Banned" ></h3><div id="outboxPB"><div id="progressbar" align="center"></div></div></li>';var banbutton = document.getElementById('banned');banbutton.addEventListener("click", BAN_SELECT , true);}
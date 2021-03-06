// ==UserScript==
// @name           Prism  (Please note all credit for this script goes to Shoecream)
// @namespace      shoecream@luelinks.net   
// @description    Turns Prism into a good poster
// @include        http://boards.endoftheinter.net/showmessages.php?*
// @include        https://boards.endoftheinter.net/showmessages.php?*
// ==/UserScript==

var userid = 14155;
var username = 'Fox1340';
var sayings = [
  'Prove to me how I\'m a a troll!',
  'Prove to me how I\'m a shitposter!',
  '<b>TUCKER MAX</b>',
  'Hundreds of users wanted me back when I was hellbanned! Prove to me that I won the Least Missed Hellbanned User!',
  'I\'m not a part of any groups around here but If I keep spamming "Nightmare Squad is Gay" then maybe someone will accept me',
  'ATTN: SUMMER SOLDIER ATTN: SUMMER SOLDIER ATTN: SUMMER SOLDIER ATTN: SUMMER SOLDIER ATTN: SUMMER SOLDIER ATTN: SUMMER SOLDIER',
  '<img src="http://i2.endoftheinter.net/i/n/dcbc46d03b927563f0bc923838407161/hamburglar.gif" />'
];
var signature = '<br/>---<br/>Prove to me that this is a sig <br/>';

function search_links_for(regex, dom/*, element*/) {
  var element = arguments[2];
  var a = dom.getElementsByTagName('a');
  for (var i = 0; i < a.length; i++) {
    var m = a[i].href.match(regex);
    if (m && m[1]) {
      if (element) return a[i];
      return m[1];
    }
  }
  return false;  
}

function process_messages (list) {
  if (list.target) list = [list.target];
  for (var i = 0; i < list.length; i++) {
    if (search_links_for(/profile.*user=(\d+)/, list[i]) != userid) continue;
    var id = search_links_for(/message\.php\?.*id=(\d+)/, list[i]);
    list[i].getElementsByClassName('message')[0].innerHTML = sayings[id % sayings.length] + signature;
    search_links_for(/profile\.ph(p)/, list[i], true).textContent = username;
  }
}

process_messages(document.getElementsByClassName('message-container'));

document.addEventListener('DOMNodeInserted', process_messages, false);
// ==UserScript==
// @name           Lastfm Link to Waffles
// @namespace      insertwitticismhere.com
// @include        http://www.last.fm/music/*
// ==/UserScript==

// Note to me on original code: +"+is%3Aflac"

var h = document.getElementsByTagName("h1")[0];
var ht = h.innerHTML;
h.innerHTML = "<a target='_BLANK' href='http://www.waffles.fm/browse.php?q=artist%3A"+ht.replace(/ /g,"+").replace(/&amp;/g,"and")+"'>"+ht+"</a><img src='http://static.waffles.fm/pic/smilies/smile1.gif' />";

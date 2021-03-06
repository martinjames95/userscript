// ==UserScript==
// @name          404-Blog-Not-Found/maplebread[.ja]
// @version       1.0
// @namespace     http://my.opera.com/oddeye/
// @description	  404 Blog Not Found
// @author        maplebread
// @include       http://blog.livedoor.jp/dankogai/*
// ==/UserScript==
var css = "@charset \"utf-8\";*{ font-size:1em !important; padding:0 !important; margin:0 !important; border :none !important; } div#banner{background-color:#fff !important} h1.blogtitle a {font-size:1.4em !important; font-weight:bold !important;} h2.date{font-size:0.8em !important; padding:0.5em !important;} h2.date a.aposted {display:none !important;} h3 {font-size:1.2em !important;} h3.title {display:block !important; width:auto !important; background-color:#000 !important; padding:0.5em 1em !important; color:#fff !important;} h3 a.aposted {display:block !important; width:auto !important; background-color:#808080 !important; padding:0.5em 1em !important; color:#fff !important; margin:-0.5em -1em !important;} h3 a.aposted:hover{background-color:#000 !important;} param[name=\"allowScriptAccess\"],param[name=\"movie\"],param[name=\"bgcolor\"],embed[name=\"amnlarge_mx\"] {display:none !important;} div#amzn_popup_div,div#analyzer_tags,div#amzn_wdgts_trimTextBlockJP80010 {display:none !important;} div.amn_large_banner {display:none !important;} div.amn_large_banner img {display:none !important;} div.bookcd {float:none !important; text-align:left !important; margin-bottom:0.5em !important; background-color:#fff !important;} div.bookcd br {display:none !important;} div.bookcd img {float:right !important; margin-left:1em !important;} div.bookcd a {margin-right :1em !important;} div.bookcd a[href^=\"http://www.amazon.co.jp\"] img {display:none !important;} a.acontinues {float:none !important; margin-bottom:1em !important;} table.form {margin:0.5em 1em !important;} input {border:1px solid #808080 !important;} textarea {border:1px solid #808080 !important;} img.pict {float:right !important; display:block !important; margin-left:1em !important;} pre {margin-bottom:0.5em !important; background-color:#fff !important; font-size:0.8em !important} div.description {display:none !important;} div#links {display:none !important;} div.pagetop {display:none !important;} div.blog {border:3px solid #808080 !important; margin-bottom:0.5em !important;} div#container {margin:0.5em 1em !important;} div#content {width:auto !important; margin:0.5em 1em !important;} div#content p {margin-top:0.5em !important; margin-bottom:0.5em !important;} div#content ul {margin:1em 2em !important;} div#content blockquote {padding:1em !important; margin:1em !important;} span#sbm {display:none !important;} div.posted {font-size:0.8em !important; margin:1em !important;} div.posted a {font-weight:normal !important;} div.main {margin:0.5em 1em !important} div.comments-head {display:block !important; width:auto !important; background-color:#000 !important; padding:0.5em 1em !important; color:#fff !important; font-size:1.2em !important; margin:1em 0 !important;} div.trackback-body,div.trackback-url,div.comments-body {margin:0.5em 1em !important; font-size:0.9em !important} div.trackback-post,div.comments-post {margin:0.5em 1em !important; font-size:0.8em !important; text-align:left !important;} div.trackback-body span {float:none !important} div.trackback-body br {display:none !important}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
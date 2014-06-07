// ==UserScript==
// @name           blaaa4
// @namespace      http://userscripts.org/users/23652
// @description    Puts a logo at the top of every site linking to its page on AboutUs.org
// @include        http://*.*
// @include        https://*.*
// @exclude        http://aboutus.org/*
// @exclude        http://*.aboutus.org/*
// @copyright      JoeSimmons
// @version        1.0.1
// @license        Creative Commons Attribution-Noncommercial 3.0 United States License
// ==/UserScript==

if(top.location!=self.location) {return;}

// get() function by JoeSimmons
// Syntax: get('http://www.google.com/', handleResponse);
function get(url, cb) {
GM_xmlhttpRequest({
    method: 'GET',
    url: url,
    headers: {'Accept': 'application/atom+xml,application/xml,text/xml,text/html'},
    onload: function(r) {cb(r);}
});
}

var host = window.location.host.replace(/^www\./,'');

var logo = window.document.createElement('img'),
	div = window.document.createElement('div'),
	a = window.document.createElement('a');
	a.setAttribute('href', 'http://www.aboutus.org/'+host);
	div.setAttribute('style', 'text-align:center;background:#fff;');
	logo.setAttribute('id', 'aboutus_logo');
	logo.setAttribute('border', '0');
	logo.setAttribute('src', 'http://www.legacy-game.net/img-bin/basic_logo.gif');
	a.appendChild(logo);
	div.appendChild(a);
if(!window.document.getElementById('aboutus_logo')) window.document.body.insertBefore(div, window.document.body.firstChild);

get('http://www.aboutus.org/'+host, function(r){
if(r.responseText.indexOf('It appears that AboutUs has not heard of this domain before')!=-1) window.document.getElementById('aboutus_logo').setAttribute('src', 'data:image/png;base64,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');
});
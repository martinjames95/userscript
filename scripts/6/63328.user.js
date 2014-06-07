// ==UserScript==
// @name           speedlounge non-flash rapidshare links for jDownloader
// @namespace      blurg!
// @description    speedlounge non-flash rapidshare links for jDownloader
// @include        http://www.speedlounge.in/detail.php?*
// @include        http://speedlounge.in/detail.php?*
// ==/UserScript==


var rapidlink = document.evaluate( '//embed[contains(@src, "IMG=Rapidshare")]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;

var jdimage = "data:image/png;base64,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"

if(rapidlink){
	var jdhref = 'jd://Linksave.in/'+window.atob(rapidlink.getAttribute('src').split('=')[1].split('=')[0]);
	var jdA = document.createElement('a');
	jdA.setAttribute('href',jdhref);
	var jdAi = document.createElement('img');
	jdAi.setAttribute('src', jdimage);
	jdAi.setAttribute('style', 'border:none;');		
	jdA.appendChild(jdAi);
	rapidlink.parentNode.insertBefore(jdA, rapidlink);
}
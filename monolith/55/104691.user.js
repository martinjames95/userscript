// ==UserScript==
// @name           Imgur Url Changer
// @namespace      http://omgmog.net
// @description    Simply replaces imgur urls with filmot
// @include        http://www.reddit.com/*
// @version        1.0
// ==/UserScript==


function get_anchors(){
       var anchors = new Array();
       var elms = document.getElementsByTagName('a');
       for(var i=0; i<elms.length; i++){
            if(elms[i].href) anchors.push(elms[i]);
       }
       return anchors;
    }

var allLinks, thisLink;
allLinks = get_anchors();

for (var i = 0; i < allLinks.length; i++) {
    thisLink = allLinks[i];
	
    if (thisLink.href.match('imgur.com')) {
		thisLink.href = thisLink.href.replace('imgur.com', 'filmot.com');
	}
	
}

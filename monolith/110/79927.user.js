// ==UserScript==
// @name		Za Channer
// @namespace		anonymous.user
// @description		etc
// @include		http://myown.oprah.com/*
// @version		1
// @copyright		2010, The world
// @license		GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==

if (document.location.href == 'http://myown.oprah.com/audition/index.html?request=video_details&response_id=5615&promo_id=1'){
	setInterval("add_vote(1, 5615,'NA');",50);
} else {
	setInterval("window.location='http://myown.oprah.com/audition/index.html?request=video_details&response_id=5615&promo_id=1';",50);
}

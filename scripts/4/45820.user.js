// ==UserScript==

// @date                    2009.04.04
// @description             redirects to the image.

// @include                 http://storeimgs.com/show.php/*



window.location.href = window.location.href.replace(/http:\/\/storeimgs\.com\/show\.php\//, 'http://storeimgs.com/out.php/i');
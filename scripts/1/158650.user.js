// ==UserScript==
// @name       Restore select & context menu
// @namespace  http://mewggle.com/
// @version    0.0.1
// @description  enter something useful
// @match http://*.pixnet.net/blog/*
// @match http://www.wretch.cc/blog/*
// @match http://blog.xuite.net/*
// @match http://blog.yam.com/*
// @copyright  2012+, Leonard
// ==/UserScript==

(function () {
    function R(a) {
        ona = "on" + a;
        if (window.addEventListener) window.addEventListener(a, function (e) {
            for (var n = e.originalTarget; n; n = n.parentNode) n[ona] = null;
        }, true);
        window[ona] = null;
        document[ona] = null;
        if (document.body) document.body[ona] = null;
    }
    R("contextmenu");
    R("click");
    R("mousedown");
    R("mouseup");
    R("selectstart");
    R("dragstart");
})();
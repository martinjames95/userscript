// ==UserScript==
// @name           Booth Player Highlighter
// @namespace      GLB
// @description    Booth Highlighter
// @include        http://goallineblitz.com/game/game.pl?game_id=*&mode=pbp*
// ==/UserScript==

(function() {


const COLOR_MAP = {
"mota": {"background": "hotpink"},
"gary coleman": {"background": "hotpink"},
"garrett gilbert": {"background": "hotpink"},
"harry paratestes": {"background": "hotpink"},
"walnuts": {"background": "hotpink"},
"tarquinn": {"background": "hotpink"},
"emmanuel": {"background": "hotpink"},
"bobby peru": {"background": "hotpink"},
"treehorn": {"background": "hotpink"},
"growler mcnabb": {"background": "hotpink"},
"doubletary": {"background": "hotpink"},
"hibbert": {"background": "hotpink"},


};

function highlightText() {

var allTextNodes = document.evaluate('//text()', document, null,
XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
null);

for (var i = 0; i < allTextNodes.snapshotLength; i++) {
var ele = allTextNodes.snapshotItem(i);
for (var key in COLOR_MAP) {
if (ele.nodeValue.toLowerCase().indexOf(key) != -1) {
var span = document.createElement("span");
ele.parentNode.replaceChild(span, ele);
span.appendChild(ele);
for (var css in COLOR_MAP[key]) {
span.style[css] = COLOR_MAP[key][css];
}
}
}
}
}

highlightText();
})();
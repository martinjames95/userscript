// ==UserScript==
// @name           Knuddels.de MulitLogin
// @namespace      http://userscripts.org/users/patlux
// @description    Dieses Script erlaubt euch, mehrere Applets auf die Startseite des jeweiligen Hosters hinzuzufügen.
// @include        http://www.knuddels.de/*.html?*
// @include        http://www.knuddels.at/*
// @include        http://www.knuddels.ch/*
// @Copyright	   patlux
// @grant          none
// ==/UserScript==

var h2 = null;
var MClass = get_MClass();
var applet = document.getElementById('chatappletw');
var anz = 1;

add_link();

function add_link()
{
	if (MClass == null)
	{
		alert("Browser wurde nicht erkannt! Script wird abgebrochen");
		return;
	}
	else if (h2 == null)
	{
		alert("Browser wurde nicht erkannt! Script wird abgebrochen");
		return;
	}
	h2.innerHTML = '<div class="hbegin"></div><h2>Chat Login</h2><a href="#" id="addApplet" style="font-size:10px; font-weight: bold;">(Applet++)</a><span style="color:#A1A1A1; font-size:9px;"> by <a style="color:#A1A1A1;" href="http://u-hacks.net/members/patlux-4/" target="_blank"><b>patlux</b></a> | Visit <a style="color:#A1A1A1;" href="http://u-hacks.net/" target="_blank">U-Hacks.net</a></span>';
	document.getElementById('addApplet').addEventListener('click', addApplet, false);
}

function get_MClass()
{
	var DivTags = document.getElementsByTagName('div');
	var hd = new Array(0);
	var h22 = new Array(0);
	var j = 0;
	var h = 0;
	if (navigator.userAgent.indexOf('Chrome') != -1) // Chrome
	{
	for (var i=0; i < DivTags.length; i++)
	{
		if (DivTags[i].getAttribute('class') == 'h h2')
		{
			h22[h] = DivTags[i];
			h++;
			h2 = h22[3];
		}
		if (DivTags[i].getAttribute('class') == 'm' & hd.length < 10)
		{
			hd[j] = DivTags[i];
			j++;
			MClass = hd[9];

		}
	}
	return MClass;
	}
	else // FireFox
	{
		MClass = document.getElementsByClassName('m')[9];
		h2 = document.getElementsByClassName('h h2')[3];
		return MClass;
	}
	return null;
}

function addApplet()
{
	var cc = '_'+anz;
	if (anz == 1)
	{
		cc = '';
	}
	var app = document.getElementById('chatappletw' + cc);
	var apl = document.createElement('div');
	apl.setAttribute('id', 'chatappletw' + cc);
	apl.setAttribute('style', 'margin-top:15px;');
	apl.innerHTML = applet.innerHTML;
	app.parentNode.insertBefore(apl, app);
}
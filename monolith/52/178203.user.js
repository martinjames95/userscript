// ==UserScript==
// @name		TheOldReader Colorized feed posts
// @namespace		TOR
// @description		This script set colorfull feeds in TheOldReader
// @version		1.0.0
// @description  Fixes a few UI elements for easy reading with TheOldReader
// @match      http://theoldreader.com/*
// @match      http://theoldreader.com
// @homepage   http://www.kraeg.ru/
// @copyright  2013, Kirill V. Krasnov
// ==/UserScript==

.nav-list li.nav-header a, .nav-list li.nav-header a:hover, .nav-list li.nav-header
{
  margin: 0 0 0 0;
  padding-top: 0;
  padding-bottom: 0;
}

.nav-list li {
  padding: 1px 0;
}

.subscribe .btn-primary {
  padding: 2px 2px 2px 2px;
}
.subscribe .icon {
  top: 4px;
}

.reader .sidebar-fixed-top .well {
  padding: 27px 0 10px 0;  
}

div.post.unread[data-feed$="0"]{background-color: hsla(  0,100%,90%,1);}
div.post[data-feed$="0"]{background-color: hsla(  0,70%,95%,1);}
div.post.unread[data-feed$="1"]{background-color: hsla( 15,100%,88%,1);}
div.post[data-feed$="1"]{background-color: hsla( 15,100%,95%,1);}
div.post.unread[data-feed$="2"]{background-color: hsla( 30,100%,85%,1);}
div.post[data-feed$="2"]{background-color: hsla( 30,100%,95%,1);}
div.post.unread[data-feed$="3"]{background-color: hsla( 45,100%,82%,1);}
div.post[data-feed$="3"]{background-color: hsla( 45,100%,95%,1);}
div.post.unread[data-feed$="4"]{background-color: hsla( 60,100%,83%,1);}
div.post[data-feed$="4"]{background-color: hsla( 60,100%,95%,1);}
div.post.unread[data-feed$="5"]{background-color: hsla( 75,100%,83%,1);}
div.post[data-feed$="5"]{background-color: hsla( 75,100%,95%,1);}
div.post.unread[data-feed$="6"]{background-color: hsla( 90,100%,85%,1);}
div.post[data-feed$="6"]{background-color: hsla( 90,100%,95%,1);}
div.post.unread[data-feed$="7"]{background-color: hsla(105,100%,88%,1);}
div.post[data-feed$="7"]{background-color: hsla(105,100%,95%,1);}
div.post.unread[data-feed$="8"]{background-color: hsla(120,100%,88%,1);}
div.post[data-feed$="8"]{background-color: hsla(120,100%,95%,1);}
div.post.unread[data-feed$="9"]{background-color: hsla(135,100%,88%,1);}
div.post[data-feed$="9"]{background-color: hsla(135,100%,95%,1);}
div.post.unread[data-feed$="a"]{background-color: hsla(150,100%,88%,1);}
div.post[data-feed$="a"]{background-color: hsla(150,100%,95%,1);}
div.post.unread[data-feed$="b"]{background-color: hsla(165,100%,88%,1);}
div.post[data-feed$="b"]{background-color: hsla(165,100%,95%,1);}
div.post.unread[data-feed$="c"]{background-color: hsla(180,100%,88%,1);}
div.post[data-feed$="c"]{background-color: hsla(180,100%,95%,1);}
div.post.unread[data-feed$="d"]{background-color: hsla(195,100%,88%,1);}
div.post[data-feed$="d"]{background-color: hsla(195,100%,95%,1);}
div.post.unread[data-feed$="e"]{background-color: hsla(210,100%,88%,1);}
div.post[data-feed$="e"]{background-color: hsla(210,100%,95%,1);}
div.post.unread[data-feed$="f"]{background-color: hsla(225,100%,88%,1);}
div.post[data-feed$="f"]{background-color: hsla(225,100%,95%,1);}


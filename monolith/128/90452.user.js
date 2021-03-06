// ==UserScript==
// @name Facebook Simple
// @version 0.1
// @author Andrew Geraghty
// @namespace http://userscripts.org/scripts/new?form=true
// @description Makes Facebook simple
// @include *.facebook.com/*
// ==/UserScript== {
body{
background: url("http://fedora.nicubunu.ro/centos/wallpapers/simple_wallpaper.png") #fff top center fixed !important;
}
body>#blueBar{ background: none !important;}
.jewel, .jewelBox{ border: none !important; }
.jewelBox{ background-color: rgba(255,255,255,0.9) !important; }
#headNavOut{ background: none !important; border: none !important }
#pageNav a { color: #111 !important; }
#pageNav a:hover { color: #333 !important; background: none !important; }
#navAccount{border: none !important;}
#navAccount ul{ background-color: rgba(255,255,255,0.9) !important;  border: none !important; }
#contentCol,#left_column,#right_column{ background-color: rgba(255,255,255,0.4) !important;  border: none !important;}
.inputtext,.add_comment_text,.uiMorePager, .box_header{ background-color: rgba(255,255,255,0.5) !important; }
.ufi_section, .photo_table, .photo_container{background: none !important; border: none !important;}
#sidebar_ads, #pagelet_adbox, #ego{
display: none !important;
}
#photoborder{ background-color: rgba(255,255,255,0.4) !important;  border: none !important; padding: 10px 0;}
.profile_sidebar_ads{ height: 30px; }
#pagelet_chbox{border: none !important;}
#pageFooter, #rightCol, #contentArea, .UIStory, #mainContainer, .profile_top_wash{background: none !important; border: none !important;}

#contentCurve{ display: none !important; }
.gray_box {background-color: rgba(255,255,255,0.4) !important;  border: none !important;}
#pagelet_tab_content{ padding: 10px; }
.uiSideNav a { border: none !important; }
.uiSideNav li.selected a{background-color: rgba(255,255,255,0.4) !important;}
.uiSideNav a:hover{background-color: rgba(255,255,255,0.4) !important;}
}
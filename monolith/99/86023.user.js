// ==UserScript==
// @name           changeColors
// @namespace      wkw
// @include        http://www.wer-kennt-wen.de/*
// ==/UserScript==

//für onlineliste:
addGlobalStyle('#onlineliste tbody{background: white; }');

// "final" vars
var version = '2010.11.09';
var scriptURL = '86023';
//http://userscripts.org/scripts/show/ + scriptURL

var scriptname = 'changeColors';

var url= document.URL;
var user = document.getElementById('navigation').getElementsByTagName('li')[2].innerHTML;

//mögliche Farben
var colors = ['aliceblue','antiquewhite','aquamarine','azure','beige','black','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','gainsboro','ghostwhite','gold','goldenrod','greenyellow','honeydew','hotpink','indianred','indigo','ivory','0khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','limegreen','linen','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat','whitesmoke','yellow','yellowgreen'];

//mögliche Farben für Headings
var Hbgcolors = ['blau','green','red','yellow','pink'];


// mainfunction
	function main(){
	
		if (GM_getValue(user+ 'ownCSS',null) == null || GM_getValue(user+'ownCSS',null) == 'null')
		{
		// überschriftfarbe	
				if ( GM_getValue(user + 'HColor',null) != null)
					addGlobalStyle('h1,h2,h3,h4,h5,h6 { color: ' + GM_getValue(user + 'HColor',null) + ' ! important; }');
			// Hintergrundfarbe
				if ( GM_getValue(user + 'bgColor',null) != null)
					addGlobalStyle('body {background: ' + GM_getValue(user + 'bgColor',null) + ' ! important; }');
			//link farbe
				if ( GM_getValue(user + 'LColor',null) != null)
					addGlobalStyle('a {color:'+GM_getValue(user + 'LColor',null)+' ! important; }');
			// schriftfarbe
				if( GM_getValue(user + 'FColor',null) != null)
					addGlobalStyle('p,label {color: ' + GM_getValue(user + 'FColor',null) + '!important;}');
			// testfarbe
				if (user.trim() == 'Sarah' || user.trim() == 'Ellen' || user.trim() == 'Albert' || user.trim() =='Miguel')
				{
					addGlobalStyle('.odd td,.odd a {background: pink !important; color:hotpink !important;} .normal td,.normal a {background:hotpink !important; color: pink !important;}');
				//	addGlobalStyle('.normal a,.odd a{color: orchid !important;}');
				}
				if (GM_getValue(user + 'HbgColor','blau').indexOf('blau') == -1)
				{
					addGlobalStyle('.navi ul,#navigation , #navbalken , .invitationsHeaders th , h2 {background: '+ GM_getValue(user + 'HbgColor','blau') + '!important;}');
				}
		}
		else
		{
			addGlobalStyle(GM_getValue(user + 'ownCSS'));
		}	
		//fügt die Buttons des Arrays Buttons der navigationsleiste hinzu
		if(url.indexOf('start') > -1|| url.indexOf('settings/privacy/JSscripts') > -1){
			if(url.indexOf('update') > -1)
			{
				window.location.href = '/start';
				update();
			}
			addText('h6','el1',scriptname);
			addText('p','el1',' \n Version: '+ version);
			// löscht element wenn das script installiert ist	
			document.getElementById('el2').removeChild(document.getElementById('div' + scriptURL));
			
			
		}
		if(url.indexOf('settings/privacy/JSscripts') > -1){
			if(url.indexOf('settings/privacy/JSscripts/selectColor') > -1)
			{
				function addOption(color)
				{
					var option = document.createElement('option');
					option.id = 'Color' + color;
					option.setAttribute('style','background:' + color);
					option.innerHTML = color;
					document.getElementById('ColorSelectElement').appendChild(option);
					if(url.indexOf('HbgColor') == -1)
						document.getElementById('Color' + color).addEventListener('click',function(){GM_setValue(user + url.substring(url.indexOf('select')+12),this.id.replace('Color',''));window.location.href='http://www.wer-kennt-wen.de/settings/privacy/JSscripts';},true);
					else
					{
						document.getElementById('Color' + color).addEventListener('click',function(){GM_setValue(user + url.substring(url.indexOf('select')+12),'url("http://www.dreipage2.de/userdaten5/005405/05/bilder/changecolors/' + this.id.replace('Color','') + '-h2-right.gif")');window.location.href='http://www.wer-kennt-wen.de/settings/privacy/JSscripts';},true);
					}
				}
				
				var div = document.createElement('div');
				div.id = 'selectColor' + url.substring(url.indexOf('select' + 11),url.length); 
				div.innerHTML = '<select id ="ColorSelectElement"><option>Farbe wählen</option></select>';
				document.getElementById('JSEinstellungen').appendChild(div);
				
				if(url.indexOf('bgColor') > -1)
				{
					addOption('eigenesBild');

				}
				if ( url.indexOf('HbgColor') == -1)
				{
					addOption('eigeneFarbe');
					for (i = 0; i < colors.length;i++)
					{
						addOption(colors[i]);
					}
					
				}
				else
				{
					for(i = 0;i < Hbgcolors.length;i++)
					{
						addOption(Hbgcolors[i]);
					}
				}
				
				if(url.indexOf('bgColor') > -1)
					document.getElementById('ColoreigenesBild').addEventListener('click',function(){GM_setValue(user + url.substring(url.indexOf('select')+12),'url("' + prompt('Gib den link des Bildes ein','Bild') + '")');window.location.href='http://www.wer-kennt-wen.de/settings/privacy/JSscripts';},true);
				else
					document.getElementById('Color' + 'eigeneFarbe').addEventListener('click',function(){GM_setValue(user + url.substring(url.indexOf('select')+12),'#' + prompt('Gib den link den Farbcode ein','Farbcode'));window.location.href='http://www.wer-kennt-wen.de/settings/privacy/JSscripts';},true);
				
			}
			else
			{
				addText('h3','JSEinstellungen','Farben anpassen: ');
				var div = document.createElement('div');
					div.id = 'div' + scriptURL;
					div.innerHTML = '<p><input id="BackgroundC" class="formbutton" type="Button" name="test" value="Hintergrundfarbe" style="background:' + GM_getValue(user + 'bgColor',null) + '" >   <input id="FontC" class="formbutton" type="Button" name="test" value="Schriftfarbe"  style="background:' + GM_getValue(user + 'FColor',null) + '" > <input id="HeadC" class="formbutton" type="Button" name="test" value="Überschriftenfarbe" style="background:' + GM_getValue(user + 'HColor',null) + '"  >   <input id="LinkC" class="formbutton" type="Button" name="test" value="Linkfarbe"  style="background:' + GM_getValue(user + 'LColor','#135AA0') + '" > <input id="HeadingbgC" class="formbutton" type="Button" name="test" value="ÜberschriftenHintergrund" style="background:' + GM_getValue(user + 'HbgColor',null) + '" > </p><p id = "ownCSS"><input id="ownCSSbutton" class="formbutton" type="Button" name="test" value="Eigenen Style verwenden" style="" >';
				document.getElementById('JSEinstellungen').appendChild(div);
			
				document.getElementById('BackgroundC').addEventListener('click',function(){window.location.href = 'http://www.wer-kennt-wen.de/settings/privacy/JSscripts/selectColor/bgColor';},true);
				document.getElementById('FontC').addEventListener('click',function(){window.location.href = 'http://www.wer-kennt-wen.de/settings/privacy/JSscripts/selectColor/FColor';},true);
				document.getElementById('HeadC').addEventListener('click',function(){window.location.href = 'http://www.wer-kennt-wen.de/settings/privacy/JSscripts/selectColor/HColor';},true);
				document.getElementById('LinkC').addEventListener('click',function(){window.location.href = 'http://www.wer-kennt-wen.de/settings/privacy/JSscripts/selectColor/LColor';},true);
				document.getElementById('HeadingbgC').addEventListener('click',function(){window.location.href = 'http://www.wer-kennt-wen.de/settings/privacy/JSscripts/selectColor/HbgColor';},true);
				document.getElementById('ownCSSbutton').addEventListener('click',function(){addOwnCSS();},true);
				//HilfeElemente
				addHilfe('Farben ändern','Du kannst die Schriftfarbe, die Überschriftenfarbe und die Hintergrundfarbe ändern. Klicke dazu auf den zugehörigen Button.');
				addHilfe('eigene/r Farbe/Farbcode','Du kannst bei Hintergrundfarbe,Schriftfarrbe,Überschriftenfarbe und Linkfarbe eigene Faren bzw Farbcodes einfügen inem du bei der Auswahl auf eigene Farbe klickst. Für einen eigenen Farbcode musst du "#" davor eingeben.');
				addHilfe('eigenes Hintergrundbild','Du kannst ein eigenes Hintergrundbild einfügen indem du in der Auswahl auf "eigenes Bild" und gib in dem öffnenden Pop Up den link des ildes ein.');
			}
		}
	}
//andere Funktionen	

//erzeugt einen neuen Button !!fügt keine Funktion hinzu!!
	function addButton(PlaceID,ButtonID,ButtonText,href){
		if(document.getElementById(PlaceID) != null)
		{
			var newButton = document.createElement('input');
			newButton.id = ButtonID;
			newButton.class = 'formbutton';
			newButton.type = 'Button';
			newButton.value = ButtonText;
		
			 newButton.href = href;
			document.getElementById(PlaceID).appendChild(newButton);
		}
	}
	
	function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	}
	
	function addHilfe(heading,text)
	{
		addText('h2','JSHilfe',heading);
		addText('p' ,'JSHilfe',text);
	}
	
	function addOwnCSS(){
		addText('h3','ownCSS','Eigenen Style(CSS) verwenden');
		var textarea = document.createElement('textarea');
		document.getElementById('ownCSSbutton').parentNode.removeChild(document.getElementById('ownCSSbutton'));
		document.getElementById('ownCSS').appendChild(textarea);
		var p = document.createElement('p');
		p.innerHTML = '<input id="ownCSSbutton" class="formbutton" type="Button" name="test" value="Eigenen Style verwenden" style="" >';
		document.getElementById('ownCSS').appendChild(p);
		document.getElementById('ownCSSbutton').addEventListener('click',function(){alert(textarea.value);GM_setValue(user + 'ownCSS',textarea.value);},true);
	}
	
	
//	Typen: p,h1,h2,h3,h4,h5,h6
	function addText(Typ,PlaceID,Text){
		if(document.getElementById(PlaceID) != null)
		{
			var newText = document.createElement(Typ);
			var spanElement = document.createElement('span');
			
			spanElement.innerHTML = Text;
			newText.appendChild(spanElement);
			
			document.getElementById(PlaceID).appendChild(newText);
		}
	}
	
	function update(){
		GM_xmlhttpRequest({
			method: 'GET',
			url: 'http://userscripts.org/scripts/source/' + scriptURL,
			onload: function(responseDetails) {
				if (responseDetails.responseText.substring(responseDetails.responseText.indexOf(scriptname) + scriptname.length,responseDetails.responseText.indexOf(scriptname) + scriptname.length + 11).indexOf(version) == -1)
				{
				//	alert(responseDetails.responseText.substring(responseDetails.responseText.indexOf(scriptname) + scriptname.length,responseDetails.responseText.indexOf(scriptname) + scriptname.length+11).trim());
					if(confirm('Es ist eine neue Version verfügbar. \n Installieren?'))
					{
						//GM_openInTab('http://userscripts.org/scripts/source/' + scriptURL+ '.user.js');
						window.location.href = 'http://userscripts.org/scripts/source/' + scriptURL+ '.user.js';
					}
				}
				else
					{
						alert(scriptname + ': \nDein Script ist auf dem neuesten stand :)');
					}
			}
		});	
	}

// läd das sript sobald wkw fertig eladen hat
window.addEventListener('load',function(){main();},true);
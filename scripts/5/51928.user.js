// ==UserScript==
// @name          change Gmail Logo
// @description   Changes default gmail logo to a custom logo. for the new gmail themes
// @author        haden
// @version       1.0
// @include       http://mail.google.com/*
// @include       https://mail.google.com/*
// ==/UserScript==


// You need to convert your image to a base64 representation.  There are many online sites which offer base64 conversion. 
// eg. http://www.opinionatedgeek.com/dotnet/tools/Base64Encode/Default.aspx


function onLoadHandler(){


if(window.parent!=null && window.parent.parent!=null && window.parent.parent.document.getElementById("canvas_frame")!=null)
{
	frmDocument= window.parent.parent.document.getElementById("canvas_frame").contentDocument;


	var gLogo=frmDocument.getElementById(":rc");
	
	if(gLogo!=null && gLogo.tagName=="DIV")
	
	/* this is where you need to enter the base64 representation of the image.
	gLogo.style.setProperty("background-image","url(data:image/image_type;base64,base64_representation)","important");
	
	replace image_type  with the type of the image eg.gif,jpeg,png
	replace base64_representation with the base64 representation of the image
	
	*/
	gLogo.style.setProperty("background-image","url(data:image/png;base64,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)","important");
		
}
	
	
}

	



window.addEventListener('load',onLoadHandler,true);
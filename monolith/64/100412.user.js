// ==UserScript==
// @name          Kick
// @namespace     //http://userscripts.org/users/316793
// @description	  Kicks idle users
// @include       http://icanhazchat.com/*
// @include       http://www.icanhazchat.com/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

// Append some text to the element with id someText using the jQuery library.
$(document).ready(function(){
	$('#lblDynamicFootLink').append('<span class="kickIdle" style="cursor:pointer;margin-left:10px;font-weight:bold">Kick Idle</span>');	
	
	$('.kickIdle').click(function(){
			$('strike').each(function(index){
				var test =	$(this).text();							setTimeout( function(){								$('#txtMsg').val('/kick ' + test);				$('#btn').click(); 			}, 5000);
			});
	});
	 				
 });
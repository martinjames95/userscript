// ==UserScript==
// @name       UnlockedMW VIP
// @namespace   mafiawars
// @description Unlocks MW
// @include     http://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     http://mwfb.zynga.com/mwfb/remote/html_server.php*
// @include     http://facebook.mafiawars.zynga.com/mwfb/xd_receiver.htm
// @include     http://apps.facebook.com/inthemafia/*
// @include     http://apps.new.facebook.com/inthemafia/*
// @include     http://www.facebook.com/connect/uiserver*
// @include     https://www.facebook.com/dialog/feed*
// @exclude     http://mwfb.zynga.com/mwfb/*#*
// @exclude     http://facebook.mafiawars.zynga.com/mwfb/*#*
// @exclude     http://apps.facebook.com/inthemafia/sk_updater.php*
// @exclude	    http://facebook.mafiawars.zynga.com/mwfb/iframe_proxy.php*
// @include     https://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     https://mwfb.zynga.com/mwfb/remote/html_server.php*
// @include     https://facebook.mafiawars.zynga.com/mwfb/xd_receiver.htm
// @include     https://apps.facebook.com/inthemafia/*
// @include     https://apps.new.facebook.com/inthemafia/*
// @include     https://www.facebook.com/connect/uiserver*
// @exclude     https://mwfb.zynga.com/mwfb/*#*
// @exclude     https://facebook.mafiawars.zynga.com/mwfb/*#*
// @exclude     https://apps.facebook.com/inthemafia/sk_updater.php*
// @exclude	    https://facebook.mafiawars.zynga.com/mwfb/iframe_proxy.php*
// @version     4.8.4
// ==/UserScript==

// UnlockedMW images and the majority of source code is Copyright 2011 Slayer Enterprises, LLC
// We grant you a license for non-commerical purposes only, no warranty is expressed or implied. 
// You may NOT DUPLICATE or DISTRIBUTE the copyrighted source without obtaining written permission 
// from Slayer Enterprises, LLC.
// Credits to these great developers: Alex "The Mafia Wars Cheat", Gibson_Sg, GuessX

function injectScript(source) {
	// Utilities
	var isFunction = function (arg) {
		return (Object.prototype.toString.call(arg) == "[object Function]");
	};
	var jsEscape = function (str) {
		// Replaces quotes with numerical escape sequences to
		// avoid single-quote-double-quote-hell, also helps by escaping HTML special chars.
		if (!str || !str.length)
			return str;
		// use \W in the square brackets if you have trouble with any values.
		var r = /['"<>\/]/g,
		result = "",
		l = 0,
		c;
		do {
			c = r.exec(str);
			result += (c ? (str.substring(l, r.lastIndex - 1) + "\\x" + c[0].charCodeAt(0).toString(16)) : (str.substring(l)));
		} while (c && ((l = r.lastIndex) > 0))
		return (result.length ? result : str);
	};
	var bFunction = isFunction(source);
	var elem = document.createElement("script"); // create the new script element.
	var script,
	ret,
	id = "";
	if (bFunction) {
		// We're dealing with a function, prepare the arguments.
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			var raw = arguments[i];
			var arg;
			if (isFunction(raw)) // argument is a function.
				arg = "eval(\"" + jsEscape("(" + raw.toString() + ")") + "\")";
			else if (Object.prototype.toString.call(raw) == '[object Date]') // Date
				arg = "(new Date(" + raw.getTime().toString() + "))";
			else if (Object.prototype.toString.call(raw) == '[object RegExp]') // RegExp
				arg = "(new RegExp(" + raw.toString() + "))";
			else if (typeof raw === 'string' || typeof raw === 'object') // String or another object
				arg = "JSON.parse(\"" + jsEscape(JSON.stringify(raw)) + "\")";
			else
				arg = raw.toString(); // Anything else number/boolean
			args.push(arg); // push the new argument on the list
		}
		// generate a random id string for the script block
		while (id.length < 16)
			id += String.fromCharCode(((!id.length || Math.random() > 0.5) ? 0x61 + Math.floor(Math.random() * 0x19) : 0x30 + Math.floor(Math.random() * 0x9)));
		// build the final script string, wrapping the original in a boot-strapper/proxy:
		script = "(function(){var value={callResult: null, throwValue: false};try{value.callResult=((" + source.toString() + ")(" + args.join() + "));}catch(e){value.throwValue=true;value.callResult=e;};" + "document.getElementById('" + id + "').innerText=JSON.stringify(value);})();";
		elem.id = id;
	} else // plain string, just copy it over.
	{
		script = source;
	}
	elem.type = "text/javascript";
	elem.innerHTML = script;
	// insert the element into the DOM (it starts to execute instantly)
	document.head.appendChild(elem);
	if (bFunction) {
		// get the return value from our function:
		ret = JSON.parse(elem.innerText);
		// remove the now-useless clutter.
		elem.parentNode.removeChild(elem);
		// make sure the garbage collector picks it instantly. (and hope it does)
		delete(elem);
		// see if our returned value was thrown or not
		if (ret.throwValue)
			throw(ret.callResult);
		else
			return (ret.callResult);
	} else // plain text insertion, return the new script element.
		return (elem);
}

var myscript = function () {
	$V6gtjjjOaDsPs6mTM8a = function (n) {
	if (typeof($V6gtjjjOaDsPs6mTM8a.list[n]) == "string")
		return $V6gtjjjOaDsPs6mTM8a.list[n].split("").reverse().join("");
	return $V6gtjjjOaDsPs6mTM8a.list[n]
	};
	$V6gtjjjOaDsPs6mTM8a.list = ["repparw_tegdiw_2vf", "sgnittes_dekcolnu", /"group_atk"/, "wen_llac_yxes etihw trohs wen_nottub_yxes", /user not found/i, /too low of a level to declare war/, /<!-- Current Page: war_controller ([\d]+) -->/, /"masteryTotal":/, /jobResult":{"city":8,"id":(\d+),/, /jobResult":{"city":9/, /jobResult":{"city":7/, /"job_mastery_percentage":/, " ]])\";etihw dilos xp1 :redrob\",)(gnirts(sniatnoc[elyts@[]\"xifraelc ydob_egassem\"=ssalc@[vid//", "ntb-etanimile-tidnab", "3_elggoTslavir", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"3_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"neerg trohs wen_nottub_yxes\"=ssalc a<", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"2_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"kcalb trohs wen_nottub_yxes\"=ssalc a<", "1_elggoTslavir", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"1_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"neerg trohs wen_nottub_yxes\"=ssalc a<", "_elggoTtegrat\"=di \";xp02:tfel;evitaler:noitisop;xp03:thgir-gniddap\"=elyts \"kcalb trohs wen_nottub_yxes\"=ssalc a<", "_elggoTtegrat\"=di \";xp02:tfel;evitaler:noitisop;xp03:thgir-gniddap\"=elyts \"neerg trohs wen_nottub_yxes\"=ssalc a<", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"0_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"kcalb trohs wen_nottub_yxes\"=ssalc a<", ">a/<>naps/<>naps/<>\"gnp.61x61_animats_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", /rivalsToggle_(\d+)/, "cni_tl_kta_wmu", "ltt_tl_kta_wmu", ";xp0 :pot ;evitaler :noitisop", "MBmotsuCdekcolnU", "\"=di \"ppa_elggot\"=ssalc \";xp0:pot ;evitaler:noitisop\"=elyts a<;psbn&>\"08\"=htdiw dt<", ">rt/< >dt/<>a/<>\"", "\"=di \"ppa_elggot\"=ssalc\";xp0:pot ;evitaler:noitisop\"=elyts a<;psbn&>\"08\"=htdiw dt<", ">llams<>dt<>dt/<", ">llams<>dt<>dt/<>\"", ">\"030303#\"=rolocgb rt<", "])\'0 :hserfeR\',)(gnirts(sniatnoc[naps//naps//]\"tsoc_hserfer_bor\"=di@[a//", "=noitanitsed&7=ytic_wx&levart=noitca_wx&levart=rellortnoc_wx?php.revres_lmth/etomer", ";)bor.rellortnoCgnibboR ,)2(boRerp.rellortnoCgnibboR ,0 ,1 ,\'", "llAboRkcilCeno", "gnibboR ot nruteR :reyalS", ">vid/<>vid/<>retnec/<>naps/<", ">\"xp5-:pot;evitaler:noitisop\"=elyts \"eltit_pupoPym\"=di naps<>\"eltit_eludom_eripme\"=ssalc \"xp02:thgieh;xp", "\"=htdiw \"fig.002x067_tneidarg_gb/eripme/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>\"pop_ofni_PE_inim\"=ssalc \"99999:xedni-z\"=elyts vid<>a/<>\"))di.edoNtnerap.siht(dIyBtnemelEteg.tnemucod(dlihCevomer.)\'reddof_pupop\'(dIyBtnemelEteg.tnemucod\"=kcilcno \"esolc_pop\"=ssalc \"#\"=ferh \"esolC_poPym\"=di a<>\";999999:xedni-z;xp", ":tfel;xp001:pot;etulosba:noitisop\"=elyts \" xob_pop\"=ssalc \"", "!txen WMdekcolnU ot nigol ot deen lliw uoY ?dekcolnU etadpu dna egarots lla raelc ot tnaw yllaer uoy oD", "sgnitteSevaS", ">vid/<>a/<>naps/<>naps/<etadpU & egarotS raelC>naps<>naps<>\"kcalb wen_nottub_yxes\"=ssalc \"etaDpUecroF\"=di a<>rb<>rb<>a/<>naps/<>naps/<erotS ppA>naps<>naps<>\"kcalb wen_nottub_yxes\"=ssalc \"MBmotsuC\"=di a<;psbn&;psbn&>a/<>naps/<>naps/<evaS>naps<>naps<>\"kcalb wen_nottub_yxes\"=ssalc \"sgnitteSevaS\"=di a<", "\"=eulav tupni<;psbn&]0001-*333[ etaR kcattA thgiF", "\"=eulav tupni<;psbn&etaR yaleD gnibboR/sdauqS boR>\"dekcehC\"=eulav \"dauqsbor\"=eman \"dauqsbor\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<YN ni;psbn&>\"dekcehC\"=eulav \"ynlaeh\"=eman \"ynlaeh\"=di \"xobkcehc\"=epyt tupni<>\"2dimroftsop\"=di \";xp05:htdiw;enon:eziser\" =elyts \"regetni\"=epyt \"", "\"=eulav tupni<;psbn&tegrat rep skcatta mumixaM>\"dekcehC\"=eulav \"kcehcpots\"=eman \"kcehcpots\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<stegraT yhtlaeH diovA;psbn&>\"dekcehC\"=eulav \"yhtlaeh\"=eman \"yhtlaeh\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<>\"3dimroftsop\"=di \";xp05:htdiw;enon:eziser\" =elyts \"regetni\"=epyt \"", "\"=eulav tupni<;psbn& ot seci tsopotuA >\"dekcehC\"=eulav \"tsopotua\"=eman \"tsopotua\"=di \"xobkcehc\"=epyt tupni<>rb<", "nioj/moc.wmdekcolnu//:ptth", "htlaeh_xam_resu", "0000000001=tnuoma&", "8=di_tneilc_wx&5=ytic&6=epyt_gnidliub&", /\,/g, "tsoob eerf a teG", /Need help icing yours.+/, ".slavir ruoy eci ot tsoob thgif eerf ruoy teG", /var feed = (.+?); MW\.Feed/, /msg.fight_result =/, "tnuoc_latot_wmu", "tnuoc_eci_wmu", "deci_yalrevo_rednefed_2vf", /user_fields\['user_stamina'\] = parseInt\("([\d]+)/, /'user_cash_london'\] = "\\u00a3([\d,]+)"/, /xw_controller=hitlist&xw_action=attack([&\w\d=]+)/, /message_body">You <strong>LOST<\/strong> the fight/, "yub_eslupmi wen_kcatta_yxes der muidem wen_nottub_yxes", /user_stamina":([\d]+)/, "ogacihc_hsac_resu", /exp_to_next_level":([\d]+),/, "no_tsoob_ntbktarewop_2vthgif", "ntBkcattA2Vthgif yub_eslupmi der trohs wen_nottub_yxes", "sutats_thgif_rekcatta", /The action was not able to be completed/, /Mafia you Attacked/, /Your Attackers/, /targetToggle/, "1=bat&weiv=noitca_wx&thgif=rellortnoc_wx?php.revres_lmth/etomer", /10 Attack/, "wen_hserfer_egap_yxes wen_nottub_yxes", "!daed ro gnorts oot era stegrat reyalS", "daed_reyalp_tsil_thgif", "tsilthgif gnidaoL-eR reyalS", "=noitanitsed&levart=noitca_wx&levart=rellortnoc_wx?php.revres_lmth/etomer", " GNIPPOTS deretsam :reyalS", /'user_cash_vegas'\] = "([V$\d,]+)"/, /user_cash_nyc'\] = "([$\d,]+)"/, /user_cash'\] = parseInt\("([\d]+)/, /user_energy'\] = parseInt\("([\d]+)/, /"user_stamina":([\d]+),"user_max_stamina/, /percent_complete":([\d]+),"/, /user_cash_brazil":"([BRL$\d,]+)"/, /user_cash_vegas":"([V$\d,]+)"/, /user_cash_london":"([Â£\d,]+)"/, "cyn_hsac_resu", "1=emarf_qer_piks&", "dedocnelru-mrof-www-x/noitacilppa", "tseuqeRpttHLMX", /'p\|([\d]+)',0,'(.+)'\);/, /job([\d]+)/, /tab=([\d]+)/, /person=([\d]+)/, /tmp=([\da-f]+)/, /([\d]+) Energy/, "level_txen_ot_pxe", "C7%p=di_tegrat&", "=ytic_wx&raw_eralced=noitca_wx&raw=rellortnoc_wx?php.revres_lmth/etomer", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp031:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"ffOnOtsoP\"=di a<>a/<>naps/<>naps/<>\"\"", "\"=crs gmi<>\";xp5-:pot ;evitaler:noitisop\"=elyts \"knalb_\"=tegrat \"ogol\"=di \"moc.wmdekcolnu//:ptth\"=ferh a<>\";xp057:htdiw;xp03 :thgieh\"=elyts \"eltit_eludom_eripme xifraelc\"=ssalc \"tnetnoc_rabloot\"=di vid<", "htlaeh_kcolc", "rabloot_kcolnu", "tpircsavaj/txet", "reniatnoc_sloot", ">vid/<>vid/<", "\"=di \"mbdaol_dekcolnu\"=ssalc a<", "reniatnoc_gol", "\"=crs \";6.0 :yticapo;)06=yticapo(ahpla :retlif ;xp9 :pot ;evitaler :noitisop\"=elyts \"retoof_gol_WMU\"=di gmi<>\"077063887536612/emaG-sraW-aifaM-ruoy-kcolnU-WMdekcolnU/segap/moc.koobecaf.www//:ptth\"=ferh \"knalb_=tegrat \"egapnaF WMdekcolnU\"=eltit a<>vid/<(: deggol sgnihtoN>\";yerg:roloc;%43:tfel;xp2:pot;evitaler:noitisop\"=elyts vid<>\";kcolb:x-wolfrevo;kcolb:y-wolfrevo;xp56:thgieh-nim;xp073:thgieh-xam;xp6:pot;xp6 :pot ;xp6 xp6 :suidar-tfel-mottob-redrob ;xp6 xp6 :suidar-thgir-mottob-redrob ;xp6   :thgirmottob-suidar-redrob-zom- ;xp6   :tfelmottob-suidar-redrob-zom-;kcalb:roloc-dnuorgkcab;xp691-:tfel;evitaler:noitisop;xp092:htdiw;xp1-:pot-nigram;enon :yalpsid ;02 :xedni-z\"=elyts \"gol-WMU\"=di vid<>a/< >naps/<naps/<goL>\";suounitnoc :ycilop-enilni-dnuorgkcab-zom- ;gniddap :nigiro-dnuorgkcab-zom- ;redrob :pilc-dnuorgkcab-zom- ;tfel :ngila-txet ;%05 xp57 llorcs taeper-on )fig.worra_levart_nwodpord/scihparg/bfwm/moc.agnyz.citats.bfwm//:ptth(lru tnerapsnart :dnuorgkcab\"=elyts naps<>naps<>\";xp59 :htdiw\"=elyts \"redrob_etihw_kcalb trohs wen_nottub_yxes\"=ssalc a<>\";xp471 :pot ;xp056 :tfel ;xp001 :htdiw;etulosba:noitisop\"=elyts \"reniatnoc_gol\"=di vid<>elyts/<};xp8- :pot ;evitaler :noitisop ;xp5 :mottob-nigram ;otua :thgir-nigram ;otua :tfel-nigram ;kcolb :yalpsid{ retoof_gol_WMU# };xp2 0 :nigram ;dlob :thgiew-tnof ;xp21 :ezis-tnof ;xp1 xp1 xp1 :htdiw-redrob ;dcdcdc# dilos xp1 :redrob{gol-WMU#>\"ssc/txet\"=epyt elyts<", "retoof_gol_WMU", "fws.01draobpilCoreZ/segami/moc.wmdekcolnu.ehcac//:ptth", "\"=crs \";6.0 :yticapo;)06=yticapo(ahpla :retlif ;xp4 :pot ;evitaler :noitisop\"=elyts \"retoof_gol_WMU\"=di gmi<>\"077063887536612/emaG-sraW-aifaM-ruoy-kcolnU-WMdekcolnU/segap/moc.koobecaf.www//:ptth\"=ferh \"knalb_=tegrat \"egapnaF WMdekcolnU\"=eltit a<>vid/<", ">ht/<>\"%52\"=htdiw ht<>ht/<>naps/<", ">rt<>\"0\"=redrob elbat<", /^Slayer/, ")1=yticapo(ahpla", "stegraT reppoH gnihcteF reyalS", /&amp;/g, /Sucker Punch/, /Remove from Mafia/, "01dimroftsop", "hcnuaLreppoH", "\"=eulav tupni<;psbn& DI tekcuB kcattA>rb<>rb<>rb<!reppoh morf stegrat thgif yllacitamotua ot WMdekcolnU esu won nac uoy ,moc.stsilwm ta sdneirf ruo morf ecivres a si reppoH>rb<", "eludoMetadpUreyalP", ".yrter neht ,eralced ot tnaw yllaer uoy fi tser remit a esahcrup ,raw ta ydaerlA", "daeh_raw_eralced", "evitcA edoM elttaB reyalS", "detceles bat_van_nalc", "evitcA edoM gnibboR reyalS", "evitcA edoM tsilthgiF reyalS", /levels">\((.*?)\)/, /Ask Mafia to Attack and Let them Get a Reward!/, "])\"gnibboR\" ,.(sniatnoc[a//])\"no_bat\" ,ssalc@(sniatnoc[il//", "])\"slaviR\" ,.(sniatnoc[a//])\"elddim_bat no_bat\" ,ssalc@(sniatnoc[il//", "])\"srethgiF\" ,.(sniatnoc[a//])\"elddim_bat no_bat\" ,ssalc@(sniatnoc[il//", "deppotS reyalS", ">naps/<>naps/<>\"fig.10_61x61_ygrene_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", ">naps/<>naps/<>\"fig.10_61x61_htlaeh_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs  gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", "kcalb trohs wen_nottub_yxes", "der trohs wen_nottub_yxes", "eldnahtnihmetiwol", ";xp521 :htdiw;xp5:pot;xp7-:tfel;evitaler:noitisop", ";kcolb :yalpsid", "\"=kcilcno vid<", ";)(elggot.eludoMsmetItsroW.WM", "2yalrevOrorrE#", "dnuorgkcaBgnidaoL#", "sj.smeti_evitca_ym/sppa/moc.wmdekcolnu.rabloot//:ptth", "smetI evitcA yM", ".ay rof mekop eht syalP", "sj.reyubetarc/stpircs/wm/xsseug/moc.etaroballaerc.www//:ptth", "sj.xuder.bojtaeper/telkramkoob/moc.telkcops//:ptth", "xudeR boJtaepeR", "selttab ylimaf eht tuoba ofni tnatropmi teG", "!enorD wen ruo tseT ateB", "sj.renetrohs_lru/sppa/moc.wmdekcolnu.rabloot//:ptth", "sj.bm_der/sppa/moc.wmdekcolnu.rabloot//:ptth", "retfiG gaB yretsyM deR", "ffuts yretsam ylimaf morf PX tcelloc ot siht esU", "sj.sdrawerelttab/mb/moc.reficul-ufmm//:ptth", "rotcelloC elttaB", ".stniop lliks ruoy sngissA", "sj.ssob_ylimaf/sppa/moc.wmdekcolnu.rabloot//:ptth", "rethgiF ssoB dekcolnU", ".YN ni sessob eht sthgiF", "sj.ateb-tsilkcehc/telkramkoob/moc.telkcops//:ptth", "sj.ofni_ylimaf/telkramkoob/moc.telkcops//:ptth", "sj.skniltfigwm/mb/moc.reficul-ufmm//:ptth", "sj.cpx2ne/stpircs/wm/xsseug/moc.etaroballaerc.www//:ptth", "sj.enordsxg/stpircs/wm/xsseug/moc.etaroballaerc.www//:ptth", "sj.rekcuhC/sg/kd.ynomis//:ptth", "sj.ynitteg/mb/moc.reficul-ufmm//:ptth", "sj.rezylana.yrotnevni/telkramkoob/moc.telkcops//:ptth", "rezylanA metI", "rethgiF ssoB reficuL", ".weivrevo reisae rof meht spuorg dna stsop detaler sraW aifaM rof deef swen ruoy nacS", "sj.rotcelloctfig/telkramkoob/moc.telkcops//:ptth", "rotcelloC tfiG", ".thgif ssoB eht ni ecno esu ,sessob ylimaf eht thgiF", "sj.puorgyrotnevni/telkramkoob/moc.telkcops//:ptth", "spuorG yrotnevnI", "reganaM ylimaF", ".yalp t\'nod taht seno eht tuo kcik ,aifam ruoy eganaM", "sj.stols_esool/telkramkoob/moc.telkcops//:ptth", "sj.retsalbtfig/telkramkoob/moc.telkcops//:ptth", "retsalB tfiG", ".gnitfarc yliad ruoy od dna ,seitreporp ruoy morf tcelloC", "sj.ateb-cmz/telkramkoob/moc.telkcops//:ptth", "rotcelloC CMZ", ".resworb ruoy ni rablooT agnyZ eht gnillatsni tuohtiw tsoob modnar eht teG", ".seitreporp cificeps bor ottelkramkoob gnibboR", "sj.gb.rebbor/telkramkoob/moc.telkcops.www//:ptth", "sj.rotan-a-nissassa/telkramkoob/moc.telkcops//:ptth", "rotaN-a-nissassA", ".neercs thgif ro egap eliforp no esU .koobecaf ot sraW aifaM morf sehctiwS", ".emag eht emarfnU", ".ylno srebmem PIV ruo rof si loot sihT .lizarB ni smeG eht tluaV", ".ylno srebmem PIV rof si loot sihT .PR gnisu gnitfarC ylraE", "EC39TZqMWdprv7RA6PHmt6072LVm4gzDt", /mw_city(\d)/, "==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,46esab;gnp/egami:atad", "=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,46esab;gnp/egami:atad", "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,46esab;gnp/egami:atad", "CCmQuSkTFlEAAAAAruGStgEYe53F9H6XU3vyXR5pp4jUcVK3P0/bgYUWBksP5smua5llFuq/a2zd8/X+LJXllniyPR5lp4hUtfw/LxOR+W8CsvkPEPRTlna2xRLta6llsCtnh84/ja4vp0He87HNt7iYxEZkRWR5lXeHd2ZnWXYNTRuyKi2bafa2K1MVajAmM2504hX7cKcwiujklEjoeXAR1WVVXktv7KrvhfwaTH3/vcCJc4wRs43OZOWsKO8mO7sFfPncb9iEANY+HxxlTZ250g2XJGHFWRCt6Qky7I0oqpiADLvYt0OPduWjW7vjOSLb4b5yCckr8/EPnb/lN4BSyFVwBHczKWRbscq0CtINWX97GMJV6oFe5FJEITcjxiD8ujFlGpRFWQ8DtvEPlyl8UiDCGu1HXuSlFjhvTkg88ZOSCDWcXuhL84vzlgwipIvyapk+m34qxrnliSi0l5Dmha/IiMXcJQoLibbjctXVm/UuNySLdt7rdwe7sT3FFG+ffl+agwPrf8VDugk8DJZyb5zvXVFAkWtS2UB1yOu4EAOoFCD/TYZFWgOlNJav2XZlUPoylv49n4h8lAxql5VmUPwypOqSVX7EplL2POq4x8RESrcnP7cIZjoSboBUXfTtP/Cy72Et9/SCWiEmyNkXuhV7j/xCT/nEkZuZFUQBFc6IRis6+XcyqQF57OB5XSSei8FaPd9ZSnfdTQ9dHUqexroF03j3mBDBsHDY2XeoRYXsiNAP0gMkXreiQtwvSgWTNf5PElVxo6WbEcC5kTaj3MamDFanc4vvbKwKSE3FrhNmsG7rWFX4uGpA6oK2W/DZCzgi1okbXvYp1E+OTwbbg/2tHIuQ9sVve/ud899mz7336jrun2gPJJnR7yuy88Pufh52YTsYO9qTx0Vo0Jt3KKDxMYFLrnzKXODggKX2D1KzUNIyCp1XDLycvCXyUAvwiIuCKrIgwgCI++yqhzwhTWD9byelEy3FfQjip2LoN0vje/zi103RlTXqVVl5UE3Jz8YAyg4VPnib/+lrfZetlFWKJ7TSypUuo2pM/9EphamYvPVQMY0s8lwuClc5Uft4Ev6Izxp5pC7HlgsjmRLzmm37zJr+6izwx3dnKWM3bdGGRW9xxp+pLGC+8ZCGyTHxvph7H9CNEaaqhy0aXSBapSVPzbuftGhIgdKKqHhNMyOnCXCKLW9SLtEdLWkoSvfCOlk8N5pe1J5s91UbKLTxCO9lMPpXMHXRUKgJbVthjy1vwsQTbxz7KhfHHNsvSm4uURFAiWmibD2/xFuxazBBevTyltMZ1ad9H+nNX3hoQrbUttm8zUEN/r9NubaRR9cc4n/GbMp17ZHslDRrF66YjPO6/HWKJ7jSy7/uVxu9K/j0hItOnPDF2pHMkSYEYJs4n1oLonRP9LQocLHF2zwGdh1yaoZneofDrPqi63kjRUOmGtWYS4Ebi+AQcLZevJexmal/u0StMkOOJ17zoUJK3WjszpkeLLmwp0iKT16p/+0TL5VZrqKwPJJYeq/Vrk+2c9pONqisKHJea+rlEOpIltmMEbxE8kVezU+GWpx2RxcVfD9F6qTLlyY4rQIquiPJn8op7cost8+0iktMv/dJzKHy9usVpE+vc3Zn9OIiBmJpEL7p996z+Sx6zkttRvIjIvTX5WsSraUtfdWBEdD2axnkVkyTNUq/qWEPi5LkgHJ3/7NVK7NheulTA7FMGb5Uu8nezeZW2z1wKANnokZTPef8athNTN2UH01NZfgdJlQl2KubY4iVxv6vMgoblaxJUdxO/Uyl88gs/J/3EY/i3Ky8TseCFBm+zL9PRvG1cL5QqYLtpQZWlKHHO82Mgn/UrmWg0gbmj9GuPTRXMVwoGj80rl9KNsCHEFcE074H+UFtkXrb2oR0+z3kK3vYtcMdohdYy8deuOODIiV2pmaFR5WQU1lkXaB5lXSBWWcFtyFrLiXrnwjmtq/maopB6bM2MNPVTncgN5CxS5YdTgaf3EMFK9lKFf9BYSd/+0l7jJxTR7LGCfdkTwM6pXEtHv+XPfAm3aGC0wSIZvq4cTeMy8aJMvGqYexe2Hv70NsCz9nMXsjTcccaPLROslgRVZYOyi1gLl1i2xFzpN6wJMTyBncyP96IVPjnGto7zkk/E3PqvX/wUFNIiM763tRqXsEiRimj8kJ72cI0l5AzGR31pDRS+OGLepW+Ts3iPtZVNW3ail5lLph52w3+knv8l7K9CHG0BjzPf1s69ZAc8KsYrSD71O3oY0LhFP9aZVIN3Gqhq/FMyxXMUZ/aa0/uZxTvdlsVt0VOneVC4v4r3vTSK5wY278tb7/iyKxif2beqPxjntvk3GlIX69jm18Rzuzn5xD9jhErmSD90TmSu8mopiqwo/uZNSd3ccZGw2G/RVAlJDR7gZ5tNK+s/tTwmHAS068jeS8CHU3n9QLWjvcCCCyvYMEzM1Uddwgb5S8xt5Nbu6tXSIkYiZjT271fgdC4sHf4gXqeTSB6rrq6n9QfEbGZRc7hbqJc8aP0Y1LRp/F09M46JL5WQL4bdyg22gh41/qkwELmcubjKKnZYfZZ8KcuN8uJwlHi5tlzcpv/8aZQt7fcXBPxmPWI7FBzcgRGNwfzbwnxIwP/ixwTGWV83zrJZiLzYepHfmKxlY8wA+eKayZKT5CKAuu/FtUVzrgvaHHTnv9l2ZRlfUiSiaIx/79bzVP/umGuBDmZYxd3ckQwxeGHXOFDm4S2isTJBijuZ2z3nzfODZpylzDnlWb7512dtbu8+cnko8bGrw4qJcFfyemVzxhW6hvkzF7mKnPDrjpCOXNTBdyOn0llMHJZYDHHst5R5+FNl+6tn5zm+ps/F9QKLdBz633uLmzzu57rGIvMZcWJc3MkUNVDHZisgOXrfXTWXSmqdYNGMWu8ueX1mjSsxwOj72Td951CdMOe3GevgrsrmJ246cMEullkbUEijoDfREBDT9NAIizhfBMvPbURvPmsar92cGBRYDXGqOZTdaXvxpSn9M1SBN6EptvMCmWZaq5aE4Mji//lLmHfGGh/eWWrqtXMtVwyNgctJ+4ZN8mFi4e5lpATGdVP9j36czWCDLms3eZ5g/2PlLOnfutzR4Jj5Ze3EeT2m8p9ipA51mkFvjud7KP87cwtAqbtZO+htwI13ltqrtSYALmcT21MArWzvUDy669VNSMYIeQKEemuXXsZmJWJnSy67vnH45FzZbk+6M3bygP6G+FYmH/dHgnhFy8y89bri35G2dXR1H4OuYOEq79YtiEPBeojSP3FouqKq3Q9sBbW/cM8kb1k9YX9zZ2Zk1aLNAL408lKNuTPV5SVaQE3LntnTj3/NynGeTG3ODYnmL5jfkjo6hmX2wXsUSIXiCX2yvUiLytN+7G+oFzRYjV2Dj/M2sQBe+kq6wzJxysJUou+ixmCxdfitmAlqPaLKjhYDOsGosLGbdv764meBV9U2uGgyv57uX4vhFVX/UHu8/MoEz7/3jPfDHUn/sTGCNTEEqD/+QGlpD/JnPhHrhJSkadsmY+kvMne/Vxg8affVE7i7C9ZQ/kx6YplF3qXcLsc5a+kuU0eyc8pPPJPQ4pRTBEOcRZsZ3yAIdXiUJBujJmYGoaHuJRp+fmiN40aWww7o7fIXGf2veP4cruhEwL7kxITfihY4h/ITdWyY2FT1Oh7FXFOs7YCzPeH3t5Kv9kc8rI9GE+ki3637GfGWuQFn6HsPOZkJGyu8l8tsbWiNb0fd5P/R3s4PHJlTt5zqAQ7YLCxrSZWpk+GndFbXHA7jdvoE3/xlg2jnkAK4iJX3cY8b/ydm/4jGSA9lDfxH9gimwDGjU3wq4nhgpmnYUlFGjgZmFDGnRnNZOxr1ZE5iBTmvs0w+49VAqT/Mk7tob7Ymlvsbn/l48dRdbBdwR/x4z7iJwYrxEiscRlvBVZGJ5HR9J4FjblSZkIFVB54J3K6bBr+yXQ6GJx0m1clezS6Gk1ipcbmSt3dBTF54o5dO9AcrRoXuhdz09ql8tNrB4nXZgn/MY6Sv7fb4vHeTM1FNDpbZOtVEe/CPSgO1UqC3EJO4KtknIXknWMZlXbHztSFpOz0yiCZbZLHGk9T2LpJeL978LAWN/PmNdnYOvZVECbnM3iivLWNvZvSOLGsXPXrXe7WcYSvpGMOfi9iFqM52fEh9dQvXu9vZxd7n+QezkRDXU840/zNamjO8ldVdDgv7C6p3VJy/+t1P+/KzH0/b2vQ9agGd0O/0E09zH1BDVeGgh9JKEJWwpx2663lEuzObDL5HJKnyEQIxKy//3JC+0n9CJv+nIKWc9E64k9sG4TG9tL4WfQAIou0jU/zxkG4sLcHG/im7myJvb+8rU3/fNu9M8GFKRW+zU/ke0Wdw84KeZwfDJqTf3BH9lT0GNVXZMPqT/xZjD0fvXnKz1TveJS7wCeMXtiPDk0SWV2YO7kMENda6O8/HOPf6WQpOvWbTc4PzfGDHfIA2PXEPxhU5MPvENZlRrn+ecgSOfmDdhV3U6Oir93bN/+v/oZK8wX6Vg/wdyFzl6iF1IXQl/qSIu50iKEkQrJsgKqbZGDeuPPFP+QSbrjqNDnHg+MJTsWQFCGaOckdD4/fF9Ie/3Li55WEXv7cIazG+SkxmVMMdRiXhVIHGdEQsneujdvfS407H/8vDj/eLuM/+u/05LykhuoI6mpC7UogvIE+9/Y9mrozGBBrYDmTdYtWcypn5iNavxd2DVpkQWt1WO8i8fg1YwHSjrXvEi72xt/MwbYsbz5H2jT2jmaqLrlMJwwpB3xm6SkuyhwMyIdUOPXM3fX3hbbDvDCXyJDxWOlDXBm1MhS2jvS6XuXoYMHTbfgWI9EFZKN6mtGIiIF+F4hIizoy4xktcYg2fubyrkixsKlRO197YXl1tPLmHBnTntzm6kFM1/2sAUds4eyVMwlyVL8tsihpBD+z/I2yTjPMFuuRUpq1gp6HWLy0m88Eaxc+OY6IN1WQjV20HMU1RYmuTTO501YmRHjfWt0WQttDD428EHWl8WmIqKYchF+tNyXFHbLS7AD80/2oAkMus7jiYZtl2+jppFjbjGen9pBjbScxzX03Zu4OxmlassXO8B9mqRXRZAZ2SOtRY4IVLfrde+7NjwtdrTyW8JrlmTWl1VPsgvzTPrmRHtqta4L/xECr3y1YzAFnertnSAHiX5d8Kcv3lEHcwLB7HbSW3OmzcYnMpG9hRtOY0+GHW0p6hzi9wxBryNX42M1l1rKDsa/wi0CEEcFdlgPfyUmdvT5u9EiLteYgcH6nYOG6B5vItazV7Q2c4e0cwrZ14tZAc84cbMFEEL4Lv92A+oCIp8YCCfr/rIZ+EDrHYPViNf4b+AbzNdzF4V9wtf/BcwO0zppNbOQt8N7h3tRK8BecXQCRlUVNwCeM98kns/8sG5qbZ9EWu7qVQv/cOc+hGWNfQmHBU4kvZUwiyiZQ4h3hT+8HRZbY2fsf1MqpiTv8JMW/3zxeaS+PPdYBJu2MZihdhAu+E//lfT2/fO+snPZZTGNc4u+iKLn8KiNcdov/dO702TdaUmNSLeGv4ulJbyYepNxL8I7B3QCmcnXubYobb82smf2CuPgDr/YPyl0lTm5xYA2YmihNUZb3x/+iJboLGH3u4Sqep34wjqq4Wuk9Xcmu5MWSiDcE7yNPI3JbXHg8lvzo5RvaSRZ5aiaX+rc5vaHPJVNlIZO7caSFx3whe+AZVHcbZgdVG3ehfxKO2tOpPW81E7zVLqQRrNzpZaLPDj9TsteUnUnCEIMYzb3ebP4cqjAWzNW6Xt9P/ZbYAQ0mMC8X0PmaTBFFXi9ZaVXR174pemTY4m7RT37y7EbCM3mgltPnCdO4R+y1JQi+TDndNdJL2D88XXPmBmvzEz0tcka45DC57Jl6oTb6MXPT7abi839VMI+3CTjMwd4QjihchFWUqtqDD02ZaLMVRsjQuUNZCPDDdJaPDU3bHJsKZ9K2GZif4I+2w9MrPox5efytdRo7BUkBo/yI3GHitw6d/yoVhy6bo0e7iLXwzmEnPTdLGPcSWUhUFotTFlOinzemEY7CXPgvdxidW6yGXdEb48wHDzDwXw+v+xvG1usKqMvdxZzeenCrnPMtfRwmd7eRZPDssdV078otLBueI3JvSQCC2GVLa5XOINfBqHZ2FDaKKlk0sdyFz6W+XMLgMKccS46xDP5tYySgBcw12ZFHHk2DMHYt/zRkmjPlr0ECaWUaG9pmQan90VYF5PgqnHMNfiT7DfABUX34OwxVcoPMkEz3Yb4MrrQ2wJxe5TmreB3u/KZSdx10kYGF+fDDIdad4OzxGrzf5J7p6ivxmG3KTaL526qlHEy/il6qztQGD+X76O1xjUjXGH6YDpkuumCb0HuJgvFh5uUiNyJbeJ/8B7tHKyElCHJfrn76uvEkV/jcPUEChmodH9tjJe8iAnZzyNZuFQWoxUCsmXCRM2lTE5Y7ix8H2K21rUBduP1zsI/T5h/432qVUgKiFyuexq5i6fVCRJ86aqJg5Pt0GUnHeocWN9t8IutnHSpzrACDI1shpmZAJlddL12UQd4t06DWMil0qeI22jALcIyTgwNjmADqhreczp4p2vpG59IZL1NJDFfzB9R7S8621x5IFjNuImp0IdUVCeh/eqirdE10QsIRFS41MZmKcjAyHWU7vAn+TZ/kKIk+62pYR5aasJJG12faW4oJlNpUP27DKse0gwt7yTE1SHdMOZjJI5ht80J4DhDX04qrVpyTKeeCy5FgZBLvk+UFhBMfY4PD/RrmY2TJQ/qCqDmlef5InGqNMgSTjo6YkZtj99sC1Ybt5KmxqMtTTqGJ2CcFyvdiODa4J8NnIpBGR9uIKRDjKLqWtmWcC9p4h7mAaMVcdPUkVIRZESQrUlq4QGWMlNT7HGwtTrdkpcn6RXW9lYYVKAbcNV+TEt26S+oQKTkyG+N5QJc4prEI+KasImKPLo9G84Mj69hkYhrH/0TwGdRERZcJZL9pMqUYJq/byEG61T636TWJJGdFWZpk6PbehCoSzQP8Nnt9C8XOkIgnaa8hWPKkEpNGAaXTMZ+nRp750M1gJH0mZaFANRDbFyieosKq9PiUtJtbNx2vxfqV+rz6ePSDIiqISoqWmapmi3dJVKoQizLKLrsiO5uzmKKaoNDUrR1+fKa/8C/OtD4PbxeJ50SNT3O1fef3TJSqi2EKpto6bRXxIYTrNoSVURdaZmPK4xnTp7Ox3u/i91bCd3rof1C3FB+HTUQRUUcF1TV3Ihquj22brNnWdQg1cZmsVXKUKvlUuWPqmnSzap62QVQFGGFRCy3PbweJ5cSyg5gf2RpT/yrv1u9bYs4iwS0H+m8EzoOIQSNgvcnEEZClBcAvDy3GmPhDJPoIKIjqmqs8Q9Juse1WN2FeraC17ppr23TUtKihQR4nlnAuhCV7YETXRl4+7ubr9R4pkkPLenu+cUqnq1uWVXuDu6IgzgXk4XARplX9DjelbATpg+kToKxMqTAza+ZeYMlRnQZl10UBwoc7l/xF/B1dKB+l/Nl2pcbp106S9piV9klvL1eaXo46S/D7s2raNP09USN1Y/fYpksPL9xtfCLVT0aa2aqNqUXd3tlwN4TU5JkmRaFOeCkGYgnoipgUK7ciz4ioP+IypSbd1SxUlDmaXdxHlBYITS7YFt3NbnUqkqOrWXLLBo1i7O7soVq3TfLVU1dvzI0cura00RHVxkVbrmAPvt4iKe546Zl/A/kksz79+3zJqzs9v+QSg9U5VWrIKlkQRkhkF8+4Ahy2BY2n4YapXU4fT8/V/q0RfK6i5FHXin9EOZVTVXko9IIXsOaao2qhkyNUTRLNWnMhqan08aIs777cq1eNVMTQWVEQ/azHT/Z/dSN1Uv9+L8kkcd5LrUzM7XpaFqVLNvHMdO0cM51VQRRlUXZtt5ScjNEUcv9CZxkVfXHWyXpEcjuQdtzU9xk0bF5tXSejRH2Nj1GR/NjS0SbLFkRP7JfqxNgWsRk0TBZNkVCQCBC6to8vKJv0s2CJGbsx9P/0Trd/fBuG8JJ5NqAq5zf5iaHKDTme6FJq0WLUSIt88Ip+QyqtMJi1Q7q2AKNvbW1nlprBCydg3Bl6sh2myLjFMirj+yCJsvWqBMVfUomTPCwkERdnRcbFkXfaxtG6zC03eABdAgk8+5Lr3r93bhwLwWNg9zVkkvZm97eUFm6UNZkpqyuRiuCKoN1MKyjgyjuCUHfyF2zYbhnIHiFr0c17pkt02SN1HBMS0Tfb1XdFiwriNmVTR7t04jqCd1WLcXrdWr6D3d0ZYqUq5VVukmu7ozHTUCYJFqbhISbR+/wgg3fgY9AfyPkkQXLY53uG93VXdHTSNNEmQJtpmRVJl3Ir1alt2+Jc/hkyroxA+UtfD5TSbk6JKedKCWDI6buiTpc7LJcN7+3leUU/YBBvpgQ+QpGc1mX7t1mSxHREbUzjQnS45xs5z1g6qrO22artJ3OaRh/TR4m+6ojuqptxa6aukymag24FuAlrsmmwjLvW6q6zU6dPXD5fRxe5pmrWl7W2kvWyPq6wUFYTUeskACaIClvMzfEEsu2arNka6qbo+xs5zB7BpvYPvVQBFUj+6rvzSlWXd1VV7t3eHQ75pi+/eOFc/7rJeXd0WdNNd3TvRA+M17m92e4stWK72r491R31Vv351s75S8zPlUd00d7Nx61l9moHPe0hrObor3Wa7pnee4t3q2VHdkWHd0uLUlaUtW91V/WeFUQ7nuu9E/6+t8/6wXR/233nnl99z+b3f1Ly6fs3127cKfNFUAh3vz957BvnbeZvvvn3QmCKIBEh0TIJCIEdGGaLIQQoh8qeQQYHg4IhHKEVklBUUBBdd0RHP5oOcZ2/vnXn//f+vPjlnhvtVVJdHsZ5DhGVBRUSRoBAAQGqvdcAD7AAAMsDAAwcZhEcJAAAAUQY8vwjxCAAB1UQnRAAAAQ6c4srAI0RSNXAAAAALIMIYDAAAYAC8AAAAsDAAAgUEhUSNAAAAogGK0wROBVi,46esab;gnp/egami:atad", "CCmQuSkTFlEAAAAADL7x2HDQ0Y4Cx/m/79p2njjsumYKyNSz26L83F+fP/4YeVjzvpXbQFnVES9VIMoi6xYptNqb+29YREeYCDX/Djgihj5td4xgCGrxjhNqUPCuk4it+JZo3JiCIk7z3yU8LgiSf1zracOOvqx4x/qK9HeB2Bvk9EKK5tHS50JmgNIBl7snQw3h6ZsvFegPzrITOhCcJAzonJsaPLEKL/OUU5GQcPLDAb5uQ7JMh9zYjaxh1TxOoAfg80WMxR4GajWk5WWC+0sQWMCCipPESzJJbMJIT7smhPgXVAWMHNprf8yOxtJNcJj9HdkqMHPWkRDLs28xd68FIs7GE2Q4EW31ZaQ5YGhFqLR8jhgmeOjTgDPW36nCMCMe41pgjXsaWLqJkAXjN2lBTKXok4J+L5Uvgw9sMEBy+xkJZQivMKlXRt6q6eiTX0oFUibjM2aweUhXH4Q7XI314S+Yq/xiiJXaDN3qDPjM2LQEajZA1b5jatTLEpIMahmwi+Z0ilJF2wmC+oGJheVbM+nBXXe0u85sz8SYhH2hPBCaKp2zkLwWOjJtzZYLO8ijdk9HqLlsBh3b3H7DT2ASB02TLmUr1bmqHwEq8r0JxioEdTtPap6Y45bNIVRQngExsu5P48IFJi+wvGLvKUczJ4SyaX6AC2wnSNqJORfjjvlauEHYqRyw5EhKaVkpKaaf6In/a8PTaHRo5KqX4l39c++/eu3z5xvDJurBitVOvbvhpIpflFKZYWk9ZeZR0n2NSRCX9ZJZYVilIMFduRiFMwMC/IDhKobdlczKVYRtwQltYtVpVmRZWu1aiwOXU1NFcv9zHTRYTiUXT2aj4QVQElEcCAAAh9/8fAAAAYACQAAAAABAAAgUEhUSNAAAAogGK0wROBVi,46esab;gnp/egami:atad", "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,46esab;gnp/egami:atad", "CCmQuSkTFlEAAAAA81iKjhz+A/8nQuv/V4ft7W/lyjfleqa5nPtj9fM+rx/Sp3Zh61yBoW0rZ59Wmc33KlGiCXWaeV9il9Yfq1n+9uc67RmwbnvivJ496UkfZlsxpZcWsxDhLmcX9Cd5txXjSfE9u+zo88wZdk+bWKRyJQBhmpKClu60/m0bJmlNsMydrbyrG865P+6ua9NrRsiw4HuRQBgzvI4UMhTUG3abqYj0VETmEsLhjfqCg3MCUVj90wldeNAWwg7PbpRpfemJO+BjETcQzwHZ7+iEGHGhAL6iMt36SpMdmqJeHzBEXG6VllOlqX+5xnteQBwZqKAcn6jUcO2ASGRgLDgwvAIRsNi/8rozZ90vwYeytYClzXgeCH8PfxHFtR6nC5qwtfUkEAWQWlbG4OabhECWyPzeUDUQW1JqyLzsW3jEWcdYtf7XO0mXP8JD9KU3sqZ3bjuVBJIABoAm/QFaF4U7TM6HtMs3j7sXZhuuU0FKMFN5dVv8rZgsHIKT7Vis3tEQTyAppIkEQZvwHzozeYrtq7yKn3NFwstiLLV1ajHAAAXb45SZi9GZh5SbvNmOM1EW0hFV6laAAAwAGZNmzM1QgM3ay92dlJXaGBSZi9GZBBQZyF2d0Z2bTRHWFRHHAAAAL9ajkDDM6ADMrAjM6YDN6kTMUNTMtQDMtATMwIDAlRXYk1SemlGZv1GdYVEdlAAAAwIpsieOw8yMvcjMAUWbpRFIu9Wa0FWZyNEdYVEdVAAAA8X28sLMwoDMwsCMyojN0oTOxQ1Mx0CNw0CMxAjMAUGdhRWLlRXYlJ3Y0hVR0VCAAAwsd+aGooemVDgvK6zuc9+0VDbvwEiCg4+yjMIoWwP8wHqUhOZiUyBQgGIZzRb+JGX/BQmDZP4LaOhTdVPr8VWQv+v3jKkMiKmWoF8KOZzgvEMKg+uvcOeng+J/d8YzzFI3/aLcC417s2x1Z1bGsbaYcGevj/Zhx1X4cOuzwVFlMvSvNKuuW9gTV4qpgliYFESOGTFogJAf453BG94zFen/wzJ4MhOAazf8c/1HXAC2g6pUEnUDmT08JqGnbhFNrMTDmLBbEhJTinaPYDwlOMpzuyWfnwgGVcDhOPBLEhsJUODLZgjW/8DNmhGk92/WEbOAEfzaur3LsRP5DbrlmpIIyXPT9IwdWaOBhQk77zJ5nnzJ18GZHWm2Mj5pe+Oe22QixSkgdKBlHsvI1IXiqQpQWOoQHKEdlgSUSQDSpBtTA+jeWUsWYEL2Rn4vFSRUE8SMT25y4QVQElUUBAAAD3qxcBAEAAAAQAAAAcWQwZXCAAAA87X3SHgELAAASsAAAMXWIBXCAAAATeavg+PA/Dw/AQ0RLJmBAAAAh9/8fAAAAYACQAAAAABAAAgUEhUSNAAAAogGK0wROBVi,46esab;gnp/egami:atad", "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,46esab;gnp/egami:atad", "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,46esab;gnp/egami:atad", "CCmQuSkTFlEAAAAAHsEcoCZp3ABA/r9F8vqfLl/Jk/Xk+VkC6FtApAZPTcup6mWpaimc/6Rar//6/n/Nk/rk+dU+XQ+PRKynMh5KMVmpCNtPQmKq0Mu6pVXP5kF3Qa4fKzRz/PpfLl/Jk/Xk+1E9TLtu5f0+XyW1Fk18WazUoPG2smvtDH6KmKgH/K/Rd+vkmnm4OcC/Ke7Tohonrxvi0e/q0qsHQuAfYvRFq5Z27O+6ekoPZXT6vBdHsQQ+ai7hIizny/WyPqVej7dUnpdtvtl1wLMtZYAZ3kzWfkKnS2vNxNxHRE3DQE3PkX1XxDZceQhyl5zk/abHzVds7t6j5njm4bZJ7wGPBRcXfVd4ANWMYC8ysM30h5wafVqgONi4uEi4i4o21YqipdlyrHAr6idPwmEx8VExN1hC6CQngiIzmNjawmEx8VExN1hhrUEjQ700pRrxMW7/sgxNhvmYibijMKKza1g99/7bBhtc8VExN1hGF9yBgy2330s9CwXRRFNl4RHd1B2JEzFRRXNWQtdrNot0A/Ei4m4oqCLoVulFGKl0A/Ei4m4o4yRQgCdYGPecYnQ8XEBN2NEFUVoI7JNwPhIr6QTVWjG96tTA+cySpZeV1aebaGIoUnq+97H7Ca5dREpeacpoH9CAwxTGQm96f88zdzTgiCNK2T6YZmV2F9eKl/YwnMW08C/Hev+MjVBbHvZYCstEHpW+jFV78NPqoZQFdOYgOh94IaTitzXNq2PgQP99LfcGVDtbu7RPJ92SNeoT9wBz23mDhX+4v0ifAFrhXDvw1RnbX2ijiklmY+BcsqZQtOwGQI5v5GlDJYpWQxoRjw1tuXzHPBqmWxmCg+iUFyXcjRPQIj7rng0DSaihGGYNycLzp+2VLVIrcwAGu++YXUJRYKLF+8xfWsP3XvRKsyyUcSed/8Foud3+zv4VX9msLlh5z1QTNNUlXZlnVlF3RGseps2TGYHXujKvmX3PP1SazWOhFpn2NaKvG+RcFbCpUJxv7dsLf9aDVe2PqIgFqIeU7J7o+NkNfc3uc7GsVmAFjC1D1UbhExfXcE8D+klSvXx+/RqNAfZppn3lVCbq92abic0iN0Z/HOEE5xnTlTBy+KFk+YuivbPgYaKvo6RT3+A7WUhF0C3rk5jAozrvRxCz07blxfvSWGsUYB1aO5iBywylWsWNYS22tjdZ+8sY2HcOEXPdToh2/uFSnOZrCWve9+BNliHVY5Hf2nSmZGIXv9K2SUQxUE5T16i0DtETwcfdHWswpc3uLWoOFx8jirfRjub/8vYRFsH5IJcue5NLGRBtiarwp2JW5Xc3YY1zeAdjy1Ve3LZ6nN9G0wdvosM3sOjoSPOdT5gBRkaqsKRjaKFwW+6mWKC+++yseiZ3kIpCvtsXeDUxsnGsV+x+96LA910TiEZ7e6d0dVfTw38SGZbEO8aEJ6lv/eGitWp/yE3Ne8jBACXMUT9VkKb8mNXeN2b3vzgiJYu0Eyb2aSnWbFARETGPshNLS7y6eN7TcQvtCsal29cGz/IYqsrcdm4QjpgwSFsW7nY8dkEd2/GMfB5CoVfJh8qWBz/87foRZ/QEU8x+ifAe5Jn8yv12XRePRCL3sacKpPLN2ngX+oB0GX580k4NraVaj7ZwogLOYXQ445FG6D3WKgFPe0wyKn9W9sy7i62d7PZpBgSbc2cZ8J/75OMCSR1uVagLq8ii/ca3r/cH1N8wvv27AWv0EdzrXALRQhqcIiK2bHwDb162CYlN9aQEZWabi4mjWk2SCkl1M42tbF6jnFXbSiW5l3mKtav09lYTqnfc9sw27ie7LTeXY3rekw3V2Rgjv1FNb+KOyVDG5XcpdQ01lMvhY2s6wyrU8YDVty4g+u2agt5Z2dz8mxRhJzGBjFWzC01Mzg0oxJcz8MrkKLqoNs7Ku9Aj7lAbUT912Gls3ayM6DbJb6nnZhF/mZtdUkzrr/sIt1TnBSCa/ZhNLExtUNGuDKy2nThXPLbCxavWcESPc4wC1KN61d0pgfXFSh/o6y2wYy1VJyvhW/g+xImuj5qiWfs25dWxVAbFtxyClKN6pnz8JHVQRkUDSs93xhOGWMSeSy7S0ZCHQ6+LX4NHd0e/95/vTO3fU5vV4hNDqYry4WUB5PhK6j8hGeM/iX+8czoYkxH2bNDNxNTW9O+PN2Yag/NlUmH8XZGzukCs9WKe4XwkT4jwo4oUr4bf0lmw5THVeNbYotz8mCMVW6d+GwOp/tvE7perB7Vve8bjXcIz/W/YJgo7LbD3e/foLe568rco0tO/zsyaFdmNtrv8hu6LLP8yv8yPIA+dYrh6+Kobu5mna0rzib5i5DNM66jYtXH1WlrZh1pznz2xt6///taknNRqUzOgXeb0hefdP88yHFgYwqt2abzTXv5MYCTZlXxa9iyfoeC9ZFAvvtBwyVHcHotuRTcrNFk4b9hxZIznMVT1mFe98Vf91/94ruKqHOc4gfaJ2Rha1gxKNbe4nYr464/vvWRffdVhkjRE/qu4hayYbMsnnnL4XMmnEYOeVt8WbFlQ9xNL77zzwOmnC3GkVY3udtR3uTvKD3n1SkKOLnk6fSCnhhDm+HS4E8zxAj12YLToB1VSQBJ0GPUypl2bmJV86qcETlc38F/J0NlAvEWbOKWTZys5jhF24o2wtGL+LX6orb5PxgHtYlFz6L2xjFbodRgDHMwCLREMDEAgFb/+9NwXf3ugq55waB58TmN70DF60BzEJQ46uzWux32uq0w9tbkhBzp2tW5m7oAXusxnHO9weT8nKOZZRfNymm+6g3Q91XW5RtJAdl4IjIDxvtj1m6/JTkorkIdaxMe84HMDGO0ARjO9EMaTEe7qri6d71b0jEJy/L+R+EPs38zv8L+pHrQ2qe/Bwigh4vXbWdoG9LGWWxkM1dDoCOQf6LZwBG4D95d9y3y5sHBDzlrjpubeM9HIwaYnXDboYxKWmMeZKf/4nMZyh2VXd5wHPYYJ9/5m7Id/+nv/6T1lVaPzU9n6q7jlnhXaZlNYW8izc2mVHfyZNomZYlavsVsDMkg6JV4esaQOs7PR9Lgwh8GOrRW0cyMIQj4g9eq0rsJmY/yd3USbOd6UQAMtYNQwFD/xpnuUmaplfGC7jN4XftlD/wbqWfFVWb0Jzr3UEhX5jLh3Jpz8jOG2ZhZP91342IsQ6IZEzubI3/p3lXejWjAjoxVLZXzZzyBLUeU0eL9KbhFOf92Ti80TPFkVr3Qjbtr3Bb/i4d39NX8380D1RWt4W1Xm+7DcPfTkGs9hGyq2Y13A8FvuO/hYKxSmCw1Ln7sKekBELbkxnDh9zPvSzt42bbFAf94l+4rvH6NDPAYmajESvP8sWhtChESIp7k+V1bv8uws9unao5z8VkMtb3Pl69QOsJ7ahZ0x3KIc1BrB5LuxMu4IkdeFDLcI/BzfYnlsZjoplKt25xdf8bgZmJk72tjFKLM287Y1aLMDLIP4wADMFLZ0C6gDIgPKX6Hv8y7i94yhlC4nRE3Fj/D9K6r/FYdtYVgkJXYiOyo2pUe7hv/5KDUS+80icwCWcz1GQQSOw24CF5YFTAxXGDtJVmfWBRLs3eZieDL2hFaQbRrFLUAha1iFlQHsTIuLgYeU9t7bAi0Qvq92/VYsWcxL0w3eg5yFFWAM6Fp4+SEx2DsyM/PC4ps9Tl/P6GwKsrHOHxfqVFttr7esF6G3sxGYMxETlQHsTIuLgYeU9tbXllMsnlbeN/u4c8VqFAieQeeuTv4arBmk71bhuZWY1SjVMnSRqRuAlUws5XVvWzQ0RT2tv9ylLTB1UDM2YrNwPhIuDmZR23+Z5rvl2JnUvMP/8vn/+Cq73V9A9QDcszWrzPMkSB1ILFvESIhJP4hbMNO+5vnyhke5gLu4idLawCLsWZlVREd0WLAfFRMHK/ytrhITJN5emAELowlKq2Ix+94TBXbynEOoXzBH9M4oA2aXuSxc0BiRERMTlebsncCJcxbmUjhkZITEd8xxW0dbud9ZnBGHcwhEWKAfFR8/VG09tX7pAgZmYPV6OfUDNgQ7ETsje6JkP7s4G59HAA+gevkPDkX1A/4rLSDV0d093D/2938Tyv3HZEP2K1tpzmFr60tbwyFXdB2JEzFQJjGfnW/6gHxBXgM4AA62q04t34GvktVULI9Fg5DbUkjtC9d1bbIqS52tbd4kVqzU+bndw5qruOEm9A2JEzVS4/o/T73ACKsMy92ZIDrTkMHdzw63P+wTEYFX4m2QBP9Y7v7uESP9w7jP+AL5i7jIifQ1PGWERmROZF7jyIbAsd/Nv+1v/dwn8gyksuq6xe/1XDMBEQAIgCarYRi4E19FQ4Dr/hwihI/Fleh/2QjC0i1U7lc3GJdEnVQRvuBKrHL+4gTIFWIhWscZ02hgOBifb3mtEzIjI2HW53hGYXcZLBI0QD9tb26w/eb1NMbHdU9WnkTuXciM0RU/+CLKoi6h2bjNjYVC48Ii4uZaTIsQC5m1Ys4vc7hGwV/PpuyHSwnSVrc42C5nb1q1mHlr70hjazqEx9RExtQONR6T34s74PFrM6PtCunYucZ5bEL3KJyfP+IjKHFwuGs72gWXwOm4KopmS68UpNh3m7qoOP3JdXVv1VVUHn2Hon485yt7bjKXSJlUdBL54vIi4FIne69xCWY8H5xXp1bVnezLi8Vaj66xkSKpDmN73voEOzLREVkOnBuZ+Ki4eICMr3u977g6nUX9ZutDgViLhIuDnwviLzvHPcAC0pTHKguYyL/8nDL2stDBcHQai7wJ8vp8n8C+85DHswKrAuyKnd1ZQxhDHMLutGAUi/Xy/WC/TK/PI/rI19zjHPegRGZknMZyF3czIXWZlNv8yL/xCIogn72d70pg1GTbfLp/Jl/Hk/Vk24ZJlVWfFVURPJ7L7VURFZX+5nvWTkIxpTVn+McPX8/pAZQeObW/vn5mv/LvM/+M9N/n8P/zx9oPQSLO+MXmA/+O/7CrMCyVmGqWLeJBTRWEBF0V8GiQXlKKLF4SICEiIQ+39FZABF3FZXANgwNxNSSycRalcPpXmpIiiaoWrV7MzcsGFXJWJsZ5DhGVBRUSX7AAAQGqvdcAD7AAAMsDAAwcZhEcJAAAAUQY8vwjxCAAB1UQnRAAAAQ6c4srAI0RSNXAAAAALIMIYDAAAYAC8AAAAsDAAAgUEhUSNAAAAogGK0wROBVi,46esab;gnp/egami:atad", "==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,46esab;gnp/egami:atad", "==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,46esab;gnp/egami:atad", "repparw_ytic_wm", "=/+9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA", "sj.dliubdeeps/sppa/moc.wmdekcolnu.rabloot//:ptth", "sj.smegtluav/sppa/moc.wmdekcolnu.rabloot//:ptth", "sj.emarfnu/sppa/moc.wmdekcolnu.rabloot//:ptth", "sj.hctiws/moc.wmdekcolnu.rabloot//:ptth", ".esu erofeb relaeh WMdekcolnU ffo nruT .loot gnithgif hcir erutaeF", ".egap boR eht no nur eb ot deen ton seod ,telkramkoob gnibboR weN", "xudeR rebboR", "sj.xuder.rebbor/telkramkoob/moc.telkcops//:ptth", "sj.kcapinim/aifam/moc.mlohkcops.www//:ptth", ".kcab tfig otua htiw ,retneC egasseM agnyZ eht morf stfiG tcelloC", "reganaM ytreporP", "sj.reganam.ytreporp/telkramkoob/moc.telkcops.www//:ptth", ".aifam eritne ruoy ot stfig fo stsol tsalB", ".tnemeveihca eht teg meht pleh ,stols sdneirf ruoy yalP", "reganaM aifaM", "sj.yrotsih_aifam/telkramkoob/moc.telkcops//:ptth", "sj.yrotsih_ylimaf/telkramkoob/moc.telkcops//:ptth", ".smeti depuorg fo evah uoy tool ynam woh no weiv a teg ylkciuQ", "rethgiF ssoB kcopS", "sj.rethgif-ssob-ylimaf/telkramkoob/moc.telkcops//:ptth", ".siht htiw deen uoy tahw tcelloc ,stfig htiw aifam ruoy gnitsalb retfA", "rennacS maertS", "sj.rennacs-maerts/telkramkoob/moc.telkcops//:ptth", "sj.5ssobsmafwm/mb/moc.reficul-ufmm//:ptth", ".fo dir teg nac uoy tahw ees ,yrotnevni ruoy sezylanA", ".pupop a gnisu ,lru gnol a morf LRUyniT etareneG", ".ffuts elbatfig htiw skrow ,aifam ruoy ot stfig dneS", ".pu gnilevel uoy peek ot cte ,sbor ,sboj snuR", ".setar PX ot ygrenE seviG", "aifam ruoy ot stfig dnes ot siht esU", ".egap ylimaf eht no noitamrofni erom teG", ".serohc ruoy od ot uoy dnimer ,tsilkcehC yliaD", "rethgiF ssoB YN", "sj.rethgifssobyn/telkramkoob/moc.telkcops//:ptth", "loot rehto yna naht retteb sessob ylimaf eht sthgiF", "nissassA tnioP llikS", "sj.retsop_lliks/telkramkoob/moc.telkcops//:ptth", ".egap elttab morf esu ,elttab ylimaf morf tooL tcelloC", "PX tcelloC nalC", "sj.pxtcellocnalc/mb/moc.reficul-ufmm//:ptth", "sdneirf ruoy ot sgaB yretsyM deR tfiG", "ecivres em.nokcops gnisu SLRU yniT etareneG", "enorD dekcolnU", "sj.enordu/sppa/moc.wmdekcolnu.rabloot//:ptth", "sj.tluserelttab/mb/moc.reficul-ufmm//:ptth", ".ay rof sboj staepeR", ".ereht tuo sOH etarc uoy lla roF", "rotan-a-znieH", "sj.rotarekop/telkramkoob/moc.telkcops//:ptth", ".YLNO gnithgif ot sdrager ni ,esnefed + kcatta rof smeti evitca lla stsiL", "yalrevOgnidaoL#", "1yalrevOrorrE#", "nottub_ekil_wm#", ".esolc ot em kcilC", ">vid/<>\"elddimsba\"=ngila \"61\"=thgieh \"91\"=htdiw \"fig.10_61x22_kcatta_aifam_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>\"serocS metI tsewoL\"=eltit \";xp85:pot;xp01-:tfel;evitaler:noitisop;xp02:htdiw\"=elyts \"", "gnikcart_tats_wmu", ">rt/<>ht/<0>\"cni_tl_fed_wmu\"=di \"doog\"=ssalc \"%04\"=htdiw ht<>ht/<000,000>\"ltt_tl_fed_wmu\"=di \"esnefed_puorg\"=ssalc \"lamron:thgiew-tnof\"=elyts \"%06\"=htdiw ht<>rt<>rt/<>ht/<0>\"cni_tl_kta_wmu\"=di \"doog\"=ssalc \"%04\"=htdiw ht<>ht/<000,000>\"ltt_tl_kta_wmu\"=di \"kcatta_puorg\"=ssalc \"lamron:thgiew-tnof\"=elyts \"%06\"=htdiw ht<>rt<", ">retnec/<>b/<serocS metI tsewoL>b<>retnec<", ">naps/<>naps/<>\"gnp.61x61_animats_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", "neerg trohs wen_nottub_yxes", ">naps/<>naps/<>\"fig.10_61x61_htlaeh_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<", ">naps/<>naps/<>\"", "egnaro trohs wen_nottub_yxes", ">a/<>naps/<>naps/<>\"\"", "evitcA tsilthgiF ykcitS reyalS", "evitcA slaviR ykcitS reyalS", "evitcA edoM gnibboR ykcitS reyalS", /user=p\|(\d+)'.+>Profile/, "evitcA edoM eliforP reyalS", "evitcA edoM slaviR reyalS", "])\"seilimaF\" ,.(sniatnoc[a//])\"tsrif_bat no_bat\" ,ssalc@(sniatnoc[il//", /user=(.+?)\"/, "evitcA ylimaF thgiF reyalS", /Declare war now for/, "etihw muidem wen_nottub_yxes", "stegraT reppoH moc.stsilwM thgiF", ">rb<>rb<>a/<>naps/<>naps/<tratS>naps<>naps<>\"kcalb wen_nottub_yxes\"=ssalc \"hcnuaL\"=di a<>rb<>rb<>\"01dimroftsop\"=di \";xp051:htdiw;enon:eziser\"=elyts \"txet\"=epyt\"", "reddof_pupop", "lautxetnoc tpmorp_yub_eslupmi", "tegrat reppoH txeN gnidaoL reyalS", /Sucker Punch.+?<a href="(.+?)".+?>Add to Hitlist/, "=tekcub?php.wmdekcolnu_evilteg/stelkraMkooB/moc.stsilwm//:ptth", "gnorts oot llA ro stegraT eviL oN :reyalS", ")06=yticapo(ahpla", ">\";xp682:htdiw;xp051 :thgieh-nim ;xp003 :thgieh-xam;kcolb:x-wolfrevo;llorcs:y-wolfrevo\"=elyts vid<>a/<;psbn&;psbn&goL raelC;psbn&;psbn&>\"gol_raelc-WMU\"=di a<>\";2.0 :yticapo;)02=yticapo(ahpla :retlif;xp2-:pot;evitaler:noitisop;%09:htdiw\"=elyts rh<", ">\";xp2-:pot;xp5:tfel;evitaler:noitisop\"=elyts naps<>\"%57\"=htdiw ht<", ">\";2.0 :yticapo;)02=yticapo(ahpla :retlif;xp1-:pot;evitaler:noitisop;%09:htdiw\"=elyts rh<>elbat/<>rt/<", ">vid/<>vid/<>a/<>naps/<>naps/<)!ateb( ypoC>naps<>naps<>\";xp03-:pot ;xp081:tfel ;evitaler:noitisop\"=elyts \"wen_nottub_yxes\"=ssalc \"#\"=ferh \"golelbaypoc\"=di a<>a/<>\"", ">naps/<>naps/<!deipoC secI>naps<>naps<", "gol_raelc-WMU", ">vid/<>vid/<>a/<>\"", "> \";x051:htdiw;xp2-:pot-nigram;enon :yalpsid ;02 :xedni-z\"=elyts \"uneMsloot\"=di vid<>a/< >naps/<naps/<slooT>\";suounitnoc :ycilop-enilni-dnuorgkcab-zom- ;gniddap :nigiro-dnuorgkcab-zom- ;redrob :pilc-dnuorgkcab-zom- ;tfel :ngila-txet ;%05 xp57 llorcs taeper-on )fig.worra_levart_nwodpord/scihparg/bfwm/moc.agnyz.citats.bfwm//:ptth(lru tnerapsnart :dnuorgkcab\"=elyts naps<>naps<>\";xp59 :htdiw\"=elyts \"redrob_etihw_kcalb trohs wen_nottub_yxes\"=ssalc a<>\";xp471 :pot ;xp09 :tfel ;etulosba :noitisop ;xp001 :htdiw\"=elyts \"reniatnoc_sloot\"=di vid<>elyts/<};xp2 0 :nigram ;dlob :thgiew-tnof ;xp21 :ezis-tnof ;xp1 xp1 0 :htdiw-redrob ;dcdcdc# dilos xp1 :redrob{ uneMsloot#>\"ssc/txet\"=epyt elyts<", ">\"elddim noitanitsed_yxes\"=ssalc vid<>\"", "sknil_kcolnu", "mbdaol_dekcolnu", "=ytic_wx&metIsunoBdda=noitca_wx&sunoBpUlevel=rellortnoc_wx?php.revres_lmth/etomer", "sgnitteSkcolnu", ">a/<!WON LAEH>\"#\"=ferh a<", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp521:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"ffOnOlivE\"=di a<>a/<>naps/<>naps/<>\"gnp.hcnerw_remmah_noci/3v/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp021:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"sgnitteSkcolnu\"=di a<>a/<>naps/<>naps/<>\"fig.10_61x61_hsac_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>naps<>\"xp01:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"BnottuBknaB\"=di \"kcalb trohs wen_nottub_yxes\"=ssalc a<>a/<>\"", ">vid/<>naps/<>naps/<0>\";yerg:roloc;xp04:htdiw;xp03:tfel;evitaler:noitisop\"=elyts \")slliK + secI( latoT\"=eltit \"tnuoc_latot_wmu\"=di naps<>naps/<:T >\";xp03:tfel;evitaler:noitisop\"=elyts naps<>naps/<0>\";yerg:roloc;xp04:htdiw;xp51:tfel;evitaler:noitisop\"=elyts \"slliK\"=eltit \"tnuoc_llik_wmu\"=di naps<>naps/<:K >\";xp51:tfel;evitaler:noitisop\"=elyts naps<>naps/<0>\";yerg:roloc;xp04:htdiw;evitaler:noitisop\"=elyts \"secI\"=eltit \"tnuoc_eci_wmu\"=di naps<>naps/<:I>naps<>\"sutatSdekcolnu\"=di \";xp81:ezis-tnof;xp002:htdiw;xp651:tfel;xp21-:pot;evitaler:noitisop\"=elyts naps<>a/<>naps/<>naps/<>\"fig.10_61x61_ygrene_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp541:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"ffOnOsboJ\"=di a<>a/<>naps/<>naps/<>\"gnp.61x61_animats_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp041:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"ffOnOmatS\"=di a<>a/<>naps/<>naps/<>\"fig.10_61x61_htlaeh_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"kcalb trohs wen_nottub_yxes\"=ssalc \";xp531:tfel ;xp51-:pot ;evitaler:noitisop\"=elyts \"ffOnOlaeH\"=di a<>a/<>naps/<>naps/<>\"", /([\d]+)/, "egap_raw_eralced=morf&", "]])\";etihw dilos xp1 :redrob\",)(gnirts(sniatnoc[elyts@[]\"xifraelc ydob_egassem\"=ssalc@[vid//", "=ytic_wx&bojod=noitca_wx&boj=rellortnoc_wx?php.revres_lmth", /cb=([\da-f]+)/, /job=([\d]+)/, "]])\"552 ,552 ,552\",)(gnirts(sniatnoc[elyts@[]\"ofni_boj\"=ssalc@[vid//", /(p\|[\d]+)/, "htiW-detseuqeR-X", "epyT-tnetnoC", "=di_resu_wx_fs&1=daoletil&1=xaja", /user_cash_nyc":"([$\d,]+)"/, "nodnol_hsac_resu", "sagev_hsac_resu", "lizarb_hsac_resu", " :htdiw ;tfel :taolf ;tfel :ngila-txet ;)94 ,202 ,14(bgr :roloc-dnuorgkcab ;neddih :y-wolfrevo ;neddih :x-wolfrevo", "animats_resu", /user_cash_nyc'\] = "([$\d,]+)/, /percent_complete'\] = "([\d]+)/, /exp_to_next_level'\] = parseInt\("([\d]+)/, /'user_cash_london'\] = "([Â£\d,]+)"/, /'user_cash_brazil'\] = "([BRL$\d,]+)"/, "=resu&weiv=noitca_wx&stats=rellortnoc_wx?php.revres_lmth/etomer", "levart=unem&=smaraPtxen&xedni=morf&", "0=bat&weiv=noitca_wx&thgif=rellortnoc_wx?php.revres_lmth/etomer", "p_kcatta_ntb", " yub_eslupmi wen_kcatta_yxes trohs wen_nottub_yxes", " yub_eslupmi wen_kcatta_yxes muidem wen_nottub_yxes", ".tsilthgif gnidaoL-eR reyalS", /Your Rivals/, /Family Rivals/, /btn_attack_p/, /is already dead or too weak!/, ".skcus kcehceci agnyZ :reyalS", /Lost/, "ntBkcattA2Vthgif yub_hctab_eslupmi der trohs wen_nottub_yxes", "ffo_tsoob_ntbktarewop_2vthgif", /user_cash_london":"\\u00a3([\d,]+)"/, /user_cash_chicago":"\\u00a2([\d,]+)"/, "nelots_yalrevo_rednefed_2vf", "])\'niagA kcattA\',)(gnirts(sniatnoc[]\'wen_kcatta_yxes der trohs wen_nottub_yxes\'=ssalc@[a//", "?php.revres_lmth", /user_fields\['exp_to_next_level'\] = parseInt\("([\d]+)/, /'user_cash_chicago'\] = "\\u00a2([\d,]+)"/, "tsil_diova_dekcolnu", /boost', 'link': '(.+?)'/, "tnuoc_llik_wmu", "dellik_yalrevo_rednefed_2vf", /'feed_js': '(.+?)'/, ".slavir ruoy eci ot tsoob thgif eerf a teG", /Think you can do better.+/, /Need to whack someone.+/, /V\$([\d,]+)/, "=tnuoma&tisopeDknaBnoitcA=noitcaod&5=ytic_wx&noitcaod=noitca_wx&2Vytreporp=rellortnoc_wx?php.revres_lmth", "=ytic_wx&lla_tisoped=noitca_wx&knab=rellortnoc_wx?php.revres_lmth", "8=di_tneilc_wx&yevrus_spn_wohs=noitca_wx&yevrus=rellortnoc_wx?php.revres_lmth", /,/, "laeh=noitca_wx&latipsoh=rellortnoc_wx?php.revres_lmth", "\"=eulav tupni<;psbn&gniniamer PX ta esuaP>\"dekcehC\"=eulav \"kcehcesuap\"=eman \"kcehcesuap\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<tahC ediH >\"dekcehC\"=eulav \"tahCevomer.sgnittes.dekcolnu\"=eman \"tahcmer\"=di \"xobkcehc\"=epyt tupni<;psbn&knabotuA >\"dekcehC\"=eulav \"tiknab\"=eman \"knabotua\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<srelaetS ecI >\"dekcehC\"=eulav \"nelotswollof\"=eman \"nelotswollof\"=di \"xobkcehc\"=epyt tupni<;psbn&;psbn&tsruB esU>\"dekcehC\"=eulav \"tsrub\"=eman \"tsrub\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<>\"dimroftsop\"=di \";xp09:htdiw;enon:eziser\"=elyts \"txet\"=epyt \"", "\"=eulav tupni<;psbn&dlohserhT laeH>rb<>rb<>\"7dimroftsop\"=di \";xp05:htdiw;enon:eziser\" =elyts \"regetni\"=epyt \"", ">rb<>rb<sunoB pu-leveL mialC >\"dekcehC\"=eulav \"levelmialc\"=eman \"levelmialc\"=di \"xobkcehc\"=epyt tupni<>rb<>rb<>\"5dimroftsop\"=di \";xp53:htdiw;enon:eziser\" =elyts \"regetni\"=epyt \"", ">rb<>rb<agnyZ yb dewolla deeps tsetsaf eht si 333*>rb<>\"6dimroftsop\"=di \";xp53:htdiw;enon:eziser\" =elyts \"regetni\"=epyt \"", "sgnitteSdekcolnU", "nelotswollof", "php.nigol-pw/moc.wmdekcolnu//:ptth", " :htdiw;kcolb :yalpsid;xp", ":htdiw;xp5-:pot;evitaler:noitisop\"=elyts vid<>rb<>\"gnp.dekcolnu/segami/moc.wmdekcolnu.ehcac//:ptth\"=crs \";evitaler:noitisop\"=elyts gmi<>retnec<>\";xp0:tfel;xp0:pot;etulosba:noitisop;)ged081(etator:mrofsnart-tikbew-;)ged081(etator:mrofsnart-zom-;)ged081(etator:mrofsnart\"=elyts \"57\"=thgieh \"", ">\"xp5:pot;evitaler:noitisop\"=elyts naps<>vid/<>naps/<", "sdnoces 03 ni niaga yrt - animats fo tuo gnibboR :reyalS", /RobbingController.robAllHelper\((\d+),/, "=tols&1=ytic_wx&bor=noitca_wx&gnibbor=rellortnoc_wx?php.revres_lmth/etomer\',\'\'(xaja_od", "tsoc_hserfer_bor", "levart=unem&=smaraPtxen&1=enoz&gnibbor=morf&", ">\"4\"=gniddapllec \"0\"=gnicapsllec \"0\"=redrob elbat<>\";llorcs:y-wolfrevo;xp004:thgieh-xam;xp044:htdiw-xam;xp024:htdiw\"=elyts vid<>rb<", "\"=crs gmi<>dt<", ">rb<>llams/<", ">dt/< >llams/<", "\"=crs gmi<>\"", "\"=crs gmi<>\"knalb_\"=tegrat \"/piv-ot-edargpu/moc.wmdekcolnu//:ptth\"=ferh \"ppa_elggot\"=ssalc \";xp0:pot ;evitaler:noitisop\"=elyts a<;psbn&>\"08\"=htdiw dt<", ">vid/<>elbat/<", "erotS ppA telkramkooB", "sppa_dekcolnu", "ltt_tl_fed_wmu", "cni_tl_fed_wmu", /targetToggle_(\d+)/, "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"0_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"neerg trohs wen_nottub_yxes\"=ssalc a<", "0_elggoTslavir", ">a/<>naps/<>naps/<>\"gnp.61x61_animats_noci/scihparg/bfwm/moc.ndcngz.citats.bfwm//:ptth\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"", "_elggoTtegrat", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"1_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"kcalb trohs wen_nottub_yxes\"=ssalc a<", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"2_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"neerg trohs wen_nottub_yxes\"=ssalc a<", "2_elggoTslavir", "\"=crs gmi<>naps<>\"wen_htlaeh_yxes\"=ssalc naps<>\"3_elggoTslavir\"=di \";xp61:tfel;xp32:pot;evitaler:noitisop\"=elyts \"kcalb trohs wen_nottub_yxes\"=ssalc a<", /local_xw_sig = '([\da-f]+)';/, "yub_eslupmi der trohs wen_nottub_yxes wen_nottub_yxes", /\\/g, /"job_mastery_percentage":(\d+),/, /jobResult":{"city":8/, /jobResult":{"city":7,"id":(\d+),/, /jobResult":{"city":9,"id":(\d+),/, /"masteryTotal":(\d+),/, /their war status/, /are already at war/, /does not exist/i, "wen_llac_yxes. raw_eralced#", "cmz_reddof_pupop#", /[^A-Za-z0-9\+\/\=]/g];
	
	localStorage.setItem("scriptumw", 1);	
	var g = {
		images : {
			unlocked_icon : $V6gtjjjOaDsPs6mTM8a(215),
			fb_icon : $V6gtjjjOaDsPs6mTM8a(216),
			evil_icon : $V6gtjjjOaDsPs6mTM8a(214),
			spock_app : $V6gtjjjOaDsPs6mTM8a(217),
			mmfu_app : $V6gtjjjOaDsPs6mTM8a(213),
			unlocked_app : $V6gtjjjOaDsPs6mTM8a(218),
			simony_app : $V6gtjjjOaDsPs6mTM8a(212),
			guessx_app : $V6gtjjjOaDsPs6mTM8a(219),
			installed : $V6gtjjjOaDsPs6mTM8a(211),
			disabled : $V6gtjjjOaDsPs6mTM8a(220),
			viponly : $V6gtjjjOaDsPs6mTM8a(210),
			autostart : $V6gtjjjOaDsPs6mTM8a(221)
		},
		log : new Array(),
		user : {
			firstRun : true,
			group_atk : 0,
			group_def : 0,
			start_group_atk : 0,
			start_group_def : 0,
			group_atk_inc : 0,
			group_def_inc : 0
		},
		xw_user : User.id,
		city : $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1],
		umwavoidlist : new Array(),
		rivalcycle : new Array(),
		livelinks : new Array(),
		livelinkindex : 0,
		familytargets : new Array(),
		familymodeOn : false,
		familyindex : 0,
		newfighton : false,
		settings : {
			stamOn : false,
			postOn : false,
			healOn : false,
			fbfeedloc : "",
			jobsOn : false,
			healat : 500,
			healny : true,
			umwicesteal : false,
			burstOn : true,
			pauseOn : false,
			stopat : 500,
			autopostOn : false,
			rref : 187,
			FighterInt : 333,
			autoBank : false,
			removeChat : false,
			abortOn : false,
			abortHeal : false,
			abortAt : 40,
			hopperid : $V6gtjjjOaDsPs6mTM8a(208),
			userobsquads : false,
			claimlevel : false,
			slayerOn : false,
			slayerMode : 0,
			count : 1,
			customRivals : new Array(),
		},
		hitlist : false,
		abortCount : 0,
		CurHealth : 0,
		evilOn : false,
		NYjobon : false,
		Bjobon : false,
		popcount : 0,
		targetid : 0,
		target_name : "",
		ajax : false,
		icecount : 0,
		killcount : 0,
		Bjobid : 0,
		ILVjobon : false,
		fightwatchdogtimout : 0,
		icecheckfail : false,
		fightInterval : 0,
		healInterval : 0,
		energyInterval : 0,
		keyStr : $V6gtjjjOaDsPs6mTM8a(223),
		evilInterval : 0,
		evilCity : $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1],
		closing : false,
		fightActionRunning : false,
		declaring_war : false,
		currlevel : $("#user_level").text(),
		is_vip : true,
		RHangCHKInterval : 0,
		RobbingHung : false
	};
	var h = new Array({
			vendor : "Spockholms",
			name : "BOSS Fighter",
			description : "BOSS Fighter",
			url : "http://spocklet.com/bookmarklet/family-boss-fighter.js",
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : "New NY Property parts",
			description : "New NY Property parts",
			url : "http://spocklet.com/bookmarklet/missionlink.js",
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "UnlockedMW",
			name : "Speedbuild",
			description : $V6gtjjjOaDsPs6mTM8a(207),
			url : $V6gtjjjOaDsPs6mTM8a(224),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		}, {
			vendor : "UnlockedMW",
			name : "Vault Gems",
			description : $V6gtjjjOaDsPs6mTM8a(206),
			url : $V6gtjjjOaDsPs6mTM8a(225),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		}, {
			vendor : "UnlockedMW",
			name : "Unframe",
			description : $V6gtjjjOaDsPs6mTM8a(205),
			url : $V6gtjjjOaDsPs6mTM8a(226),
			image : g.images.unlocked_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : "Switch",
			description : $V6gtjjjOaDsPs6mTM8a(204),
			url : $V6gtjjjOaDsPs6mTM8a(227),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(203),
			description : $V6gtjjjOaDsPs6mTM8a(228),
			url : $V6gtjjjOaDsPs6mTM8a(202),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : "Robber BG",
			description : $V6gtjjjOaDsPs6mTM8a(229),
			url : $V6gtjjjOaDsPs6mTM8a(201),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(230),
			description : $V6gtjjjOaDsPs6mTM8a(200),
			url : $V6gtjjjOaDsPs6mTM8a(231),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : "MiniPack",
			description : $V6gtjjjOaDsPs6mTM8a(199),
			url : $V6gtjjjOaDsPs6mTM8a(232),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(198),
			description : $V6gtjjjOaDsPs6mTM8a(233),
			url : $V6gtjjjOaDsPs6mTM8a(197),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(234),
			description : $V6gtjjjOaDsPs6mTM8a(196),
			url : $V6gtjjjOaDsPs6mTM8a(235),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(195),
			description : $V6gtjjjOaDsPs6mTM8a(236),
			url : $V6gtjjjOaDsPs6mTM8a(194),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : "Loose Slots",
			description : $V6gtjjjOaDsPs6mTM8a(237),
			url : $V6gtjjjOaDsPs6mTM8a(193),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(238),
			description : $V6gtjjjOaDsPs6mTM8a(192),
			url : $V6gtjjjOaDsPs6mTM8a(239),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(191),
			description : $V6gtjjjOaDsPs6mTM8a(192),
			url : $V6gtjjjOaDsPs6mTM8a(240),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(190),
			description : $V6gtjjjOaDsPs6mTM8a(241),
			url : $V6gtjjjOaDsPs6mTM8a(189),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(242),
			description : $V6gtjjjOaDsPs6mTM8a(188),
			url : $V6gtjjjOaDsPs6mTM8a(243),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(187),
			description : $V6gtjjjOaDsPs6mTM8a(244),
			url : $V6gtjjjOaDsPs6mTM8a(186),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(245),
			description : $V6gtjjjOaDsPs6mTM8a(185),
			url : $V6gtjjjOaDsPs6mTM8a(246),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Lucifer",
			name : $V6gtjjjOaDsPs6mTM8a(184),
			description : $V6gtjjjOaDsPs6mTM8a(188),
			url : $V6gtjjjOaDsPs6mTM8a(247),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(183),
			description : $V6gtjjjOaDsPs6mTM8a(248),
			url : $V6gtjjjOaDsPs6mTM8a(182),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Lucifer",
			name : "Tiny Urls",
			description : $V6gtjjjOaDsPs6mTM8a(249),
			url : $V6gtjjjOaDsPs6mTM8a(181),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Simony",
			name : "Chucker",
			description : $V6gtjjjOaDsPs6mTM8a(250),
			url : $V6gtjjjOaDsPs6mTM8a(180),
			image : g.images.simony_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "GuessX",
			name : "Drone.x",
			description : $V6gtjjjOaDsPs6mTM8a(251),
			url : $V6gtjjjOaDsPs6mTM8a(179),
			image : g.images.guessx_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "GuessX",
			name : "En2XP.x",
			description : $V6gtjjjOaDsPs6mTM8a(252),
			url : $V6gtjjjOaDsPs6mTM8a(178),
			image : g.images.guessx_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "Lucifer",
			name : "Gift Sender",
			description : $V6gtjjjOaDsPs6mTM8a(253),
			url : $V6gtjjjOaDsPs6mTM8a(177),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : "Family Info",
			description : $V6gtjjjOaDsPs6mTM8a(254),
			url : $V6gtjjjOaDsPs6mTM8a(176),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : "Checklist",
			description : $V6gtjjjOaDsPs6mTM8a(255),
			url : $V6gtjjjOaDsPs6mTM8a(175),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(256),
			description : $V6gtjjjOaDsPs6mTM8a(174),
			url : $V6gtjjjOaDsPs6mTM8a(257),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "UnlockedMW",
			name : $V6gtjjjOaDsPs6mTM8a(173),
			description : $V6gtjjjOaDsPs6mTM8a(258),
			url : $V6gtjjjOaDsPs6mTM8a(172),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(259),
			description : $V6gtjjjOaDsPs6mTM8a(171),
			url : $V6gtjjjOaDsPs6mTM8a(260),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Lucifer",
			name : $V6gtjjjOaDsPs6mTM8a(170),
			description : $V6gtjjjOaDsPs6mTM8a(261),
			url : $V6gtjjjOaDsPs6mTM8a(169),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Lucifer",
			name : $V6gtjjjOaDsPs6mTM8a(262),
			description : $V6gtjjjOaDsPs6mTM8a(168),
			url : $V6gtjjjOaDsPs6mTM8a(263),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "UnlockedMW",
			name : $V6gtjjjOaDsPs6mTM8a(167),
			description : $V6gtjjjOaDsPs6mTM8a(264),
			url : $V6gtjjjOaDsPs6mTM8a(166),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		}, {
			vendor : "UnlockedMW",
			name : "URL Shorten",
			description : $V6gtjjjOaDsPs6mTM8a(265),
			url : $V6gtjjjOaDsPs6mTM8a(165),
			image : g.images.unlocked_app,
			isvip : false,
			isinstalled : true
		}, {
			vendor : "UnlockedMW",
			name : $V6gtjjjOaDsPs6mTM8a(266),
			description : $V6gtjjjOaDsPs6mTM8a(164),
			url : $V6gtjjjOaDsPs6mTM8a(267),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		}, {
			vendor : "Lucifer",
			name : "Battle Info",
			description : $V6gtjjjOaDsPs6mTM8a(163),
			url : $V6gtjjjOaDsPs6mTM8a(268),
			image : g.images.mmfu_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(162),
			description : $V6gtjjjOaDsPs6mTM8a(269),
			url : $V6gtjjjOaDsPs6mTM8a(161),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "GuessX",
			name : "CrateBuyer",
			description : $V6gtjjjOaDsPs6mTM8a(270),
			url : $V6gtjjjOaDsPs6mTM8a(160),
			image : g.images.guessx_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "Spockholms",
			name : $V6gtjjjOaDsPs6mTM8a(271),
			description : $V6gtjjjOaDsPs6mTM8a(159),
			url : $V6gtjjjOaDsPs6mTM8a(272),
			image : g.images.spock_app,
			isvip : false,
			isinstalled : false
		}, {
			vendor : "UnlockedMW",
			name : $V6gtjjjOaDsPs6mTM8a(158),
			description : $V6gtjjjOaDsPs6mTM8a(273),
			url : $V6gtjjjOaDsPs6mTM8a(157),
			image : g.images.unlocked_app,
			isvip : true,
			isinstalled : false
		});
	function k() {
		if ($($V6gtjjjOaDsPs6mTM8a(274))) {
			$($V6gtjjjOaDsPs6mTM8a(274)).remove();
			$($V6gtjjjOaDsPs6mTM8a(156)).remove();
			$($V6gtjjjOaDsPs6mTM8a(275)).remove();
			$($V6gtjjjOaDsPs6mTM8a(155)).remove();
			$($V6gtjjjOaDsPs6mTM8a(276)).remove();
			$("#zbar").parent().remove()
		}
		var c = document.getElementsByTagName("\x61"),
		d = $V6gtjjjOaDsPs6mTM8a(154);
		for (var i = 0; i < c.length; i++) {
			if (c[i].innerHTML === "\x69") {
				c[i].setAttribute("title", "\x20");
				c[i].parentNode.setAttribute("title", $V6gtjjjOaDsPs6mTM8a(277));
				c[i].parentNode.setAttribute("onclick", d);
				c[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(153) + d + $V6gtjjjOaDsPs6mTM8a(278);
				c[i].parentNode.parentNode.setAttribute("style", $V6gtjjjOaDsPs6mTM8a(152));
				i == c.length
			}
		}
		var M = document.getElementById("lowitemhint");
		M.removeChild(M.lastChild);
		M.removeChild(M.lastChild);
		M.style.width = "230px";
		var N = document.createElement("table");
		N.id = $V6gtjjjOaDsPs6mTM8a(279);
		N.border = 0;
		N.setAttribute("style", $V6gtjjjOaDsPs6mTM8a(151));
		var O = $V6gtjjjOaDsPs6mTM8a(280);
		M.appendChild(N);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(279)).innerHTML = O;
		document.getElementById($V6gtjjjOaDsPs6mTM8a(150)).innerHTML = $V6gtjjjOaDsPs6mTM8a(281)
	}
	function l() {
		if (g.settings.stamOn == true) {
			g.settings.stamOn = 2;
			document.getElementById("StamOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
			document.getElementById("StamOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(282)
		} else {
			if (g.settings.stamOn == 2) {
				g.settings.stamOn = false;
				g.newfighton = false;
				clearInterval(g.fightInterval);
				document.getElementById("StamOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
				document.getElementById("StamOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(282)
			} else {
				g.fightInterval = setInterval(Fighter, g.settings.FighterInt);
				g.settings.stamOn = true;
				document.getElementById("StamOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
				document.getElementById("StamOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(282)
			}
		}
		writeSettings()
	}
	function m() {
		if (g.settings.healOn == true) {
			g.settings.healOn = "red";
			document.getElementById("HealOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
			document.getElementById("HealOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(147)
		} else {
			if (g.settings.healOn == "red") {
				g.settings.healOn = false;
				clearInterval(g.healInterval);
				document.getElementById("HealOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
				document.getElementById("HealOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(147)
			} else {
				g.healInterval = setInterval(DoAutoHeal, 2000);
				g.settings.healOn = true;
				document.getElementById("HealOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
				document.getElementById("HealOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(284)
			}
		}
		writeSettings()
	}
	function n() {
		if (g.settings.postOn == true) {
			g.settings.postOn = false;
			document.getElementById("PostOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
			document.getElementById("PostOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.fb_icon + $V6gtjjjOaDsPs6mTM8a(285)
		} else {
			g.settings.postOn = true;
			document.getElementById("PostOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
			document.getElementById("PostOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.fb_icon + $V6gtjjjOaDsPs6mTM8a(285)
		}
		writeSettings()
	}
	function o() {
		important_function();
		if (g.settings.jobsOn == true) {
			clearInterval(g.energyInterval);
			g.energyInterval = setInterval(Jobber, 1000);
			g.settings.jobsOn = 2;
			document.getElementById("JobsOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
			document.getElementById("JobsOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(145)
		} else {
			if (g.settings.jobsOn == 2) {
				g.NYjobon = false;
				g.settings.jobsOn = false;
				clearInterval(g.energyInterval);
				document.getElementById("JobsOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
				document.getElementById("JobsOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(145)
			} else {
				g.energyInterval = setInterval(Jobber, 1000);
				g.settings.jobsOn = true;
				document.getElementById("JobsOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(286));
				document.getElementById("JobsOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(145)
			}
		}
		writeSettings()
	}
	function p() {
		important_function();
		if (g.evilOn == true) {
			if (g.settings.slayerOn == true) {
				g.settings.slayerOn = false;
				writeSettings();
				g.evilOn = false;
				g.familymodeOn = false;
				g.livelinks = [];
				g.livelinkindex = 0;
				clearInterval(g.evilInterval);
				logEntry($V6gtjjjOaDsPs6mTM8a(144));
				document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
				document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
			} else {
				if (document.evaluate($V6gtjjjOaDsPs6mTM8a(143), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
					g.settings.slayerMode = 0;
					logEntry($V6gtjjjOaDsPs6mTM8a(288));
					document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
					document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
					g.settings.slayerOn = true;
					writeSettings()
				} else {
					if (document.evaluate($V6gtjjjOaDsPs6mTM8a(142), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
						g.settings.slayerMode = 1;
						logEntry($V6gtjjjOaDsPs6mTM8a(289));
						document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
						document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
						g.settings.slayerOn = true;
						writeSettings()
					} else {
						if (document.evaluate($V6gtjjjOaDsPs6mTM8a(141), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
							g.settings.slayerMode = 2;
							logEntry($V6gtjjjOaDsPs6mTM8a(290));
							document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
							document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
							g.settings.slayerOn = true;
							writeSettings()
						} else {
							g.evilOn = false;
							g.familymodeOn = false;
							g.livelinks = [];
							g.livelinkindex = 0;
							clearInterval(g.evilInterval);
							logEntry($V6gtjjjOaDsPs6mTM8a(144));
							document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
							document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
						}
					}
				}
			}
		} else {
			g.evilCity = $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1];
			if ($V6gtjjjOaDsPs6mTM8a(140).test(document.body.innerHTML)) {
				g.targetid = "p|" + ($V6gtjjjOaDsPs6mTM8a(291).exec(document.body.innerHTML)[1]);
				g.target_name = $V6gtjjjOaDsPs6mTM8a(139).exec(document.body.innerHTML)[1];
				g.evilInterval = setInterval(PureEvil, 15000);
				g.evilOn = true;
				logEntry($V6gtjjjOaDsPs6mTM8a(292));
				document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
				document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
				PureEvil()
			} else {
				if (document.evaluate($V6gtjjjOaDsPs6mTM8a(143), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
					g.evilOn = true;
					logEntry($V6gtjjjOaDsPs6mTM8a(138));
					document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
					document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
					g.evilInterval = setInterval(Fightlist, 5000);
					Fightlist()
				} else {
					if (document.evaluate($V6gtjjjOaDsPs6mTM8a(142), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
						g.evilOn = true;
						logEntry($V6gtjjjOaDsPs6mTM8a(293));
						document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
						document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
						g.evilInterval = setInterval(Rivals, 5000);
						Rivals()
					} else {
						if (document.evaluate($V6gtjjjOaDsPs6mTM8a(141), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
							g.evilOn = true;
							logEntry($V6gtjjjOaDsPs6mTM8a(137));
							document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
							document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
							setTimeout(LetThereBeRobberies, 1000)
						} else {
							if (document.evaluate($V6gtjjjOaDsPs6mTM8a(294), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
								var M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(136));
								if (M.length > 0 && M[0].id == "battle_tab") {
									g.evilOn = true;
									document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
									document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
									g.familymodeOn = true;
									var N = document.getElementsByClassName("fl");
									for (i = 1; i < N.length - 1; i++) {
										var O = decodeID($V6gtjjjOaDsPs6mTM8a(295).exec(N[i].innerHTML)[1]);
										if (g.umwavoidlist.isAvoid(O)) {
											g.familytargets[i - 1] = new familyMember(O, "strong")
										} else {
											g.familytargets[i - 1] = new familyMember(O, "weak")
										}
									}
									g.evilInterval = setInterval(Battle, 5000);
									logEntry($V6gtjjjOaDsPs6mTM8a(135));
									Battle()
								} else {
									g.evilOn = true;
									g.familymodeOn = true;
									var j = 0;
									g.familyindex = 0;
									g.familytargets.length = 0;
									var N = document.getElementsByClassName("name_n_rank");
									for (i = 0; i < N.length; i++) {
										if (N[i].style.clear == "both") {
											g.familytargets[j++] = new familyMember(decodeID($V6gtjjjOaDsPs6mTM8a(295).exec(N[i].innerHTML)[1]), "weak")
										}
									}
									document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
									document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
									g.evilInterval = setInterval(FightFamily, 5000);
									logEntry($V6gtjjjOaDsPs6mTM8a(296));
									FightFamily()
								}
							} else {
								if (document.getElementById($V6gtjjjOaDsPs6mTM8a(134)) && $V6gtjjjOaDsPs6mTM8a(297).test(document.body.innerHTML)) {
									alert($V6gtjjjOaDsPs6mTM8a(133));
									return
								} else {
									if (document.getElementById($V6gtjjjOaDsPs6mTM8a(134)) && document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(298))) {
										document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
										document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
										g.evilOn = true;
										declare_war(null)
									} else {
										if (document.getElementById($V6gtjjjOaDsPs6mTM8a(132))) {
											popupTitle = $V6gtjjjOaDsPs6mTM8a(299);
											content = $V6gtjjjOaDsPs6mTM8a(131) + g.settings.hopperid + $V6gtjjjOaDsPs6mTM8a(300);
											height = "280";
											myPop($V6gtjjjOaDsPs6mTM8a(130), popupTitle, content, height);
											document.getElementById("Launch").onclick = hopper
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	function hopper() {
		setTimeout(function () {
			document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).removeChild(document.getElementById($V6gtjjjOaDsPs6mTM8a(130)))
		}, 10);
		g.settings.hopperid = document.getElementById($V6gtjjjOaDsPs6mTM8a(129)).value;
		writeSettings();
		document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
		document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
		g.evilOn = true;
		loadNextHopper();
		g.evilInterval = setInterval(Hopperlist, 10000)
	}
	function Hopperlist() {
		if (commonFightCheck()) {
			return
		}
		stickyCity();
		if (g.settings.autoBank) {
			Bank()
		}
		if ((document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(302)).length > 0) || ($V6gtjjjOaDsPs6mTM8a(128).test(document.body.innerHTML))) {
			logEntry($V6gtjjjOaDsPs6mTM8a(303));
			g.livelinkindex++;
			loadNextHopper();
			return
		}
		if (g.settings.autoBank) {
			Bank()
		}
		if ($V6gtjjjOaDsPs6mTM8a(127).test(document.body.innerHTML)) {
			var M = $V6gtjjjOaDsPs6mTM8a(304).exec(document.body.innerHTML)[1].replace($V6gtjjjOaDsPs6mTM8a(126), "\x26");
			g.target_name = $V6gtjjjOaDsPs6mTM8a(139).exec(document.body.innerHTML)[1];
			g.targetid = g.livelinks[g.livelinkindex];
			document.getElementById("btn_attack_" + g.livelinks[g.livelinkindex].replace("\x7c", "")).click()
		} else {
			g.livelinkindex++;
			loadNextHopper()
		}
	}
	function q() {
		$.getJSON($V6gtjjjOaDsPs6mTM8a(305) + g.settings.hopperid + "&callback=?", function (M) {
			var N = eval(M);
			for (i = 0; i < N.length; i++) {
				if (N[i].mwid != "none") {
					g.livelinks[g.livelinks.length] = N[i].mwid
				}
			}
		})
	}
	function loadNextHopper() {
		if (g.livelinkindex >= g.livelinks.length) {
			logEntry($V6gtjjjOaDsPs6mTM8a(125));
			g.livelinkindex = 0;
			g.livelinks = [];
			q();
			setTimeout(loadHopperTarget, 1500)
		} else {
			loadHopperTarget()
		}
	}
	function loadHopperTarget() {
		if (g.settings.stamOn != 2) {
			for (var i = g.livelinkindex; i <= g.livelinks.length; i++) {
				if (!g.umwavoidlist.isAvoid(g.livelinks[i])) {
					break
				}
				g.livelinkindex++
			}
		}
		if (g.livelinkindex < g.livelinks.length) {
			loadProfile(g.livelinks[g.livelinkindex])
		} else {
			logEntry($V6gtjjjOaDsPs6mTM8a(306))
		}
	}
	function s() {
		var M = document.getElementById("toolsMenu");
		if (M) {
			M.style.display = "block"
		}
	}
	function t() {
		var M = document.getElementById("toolsMenu");
		if (M) {
			M.style.display = "none"
		}
	}
	function u() {
		var M = document.getElementById("toolsMenu");
		if (M) {
			if (M.style.display == "none") {
				M.style.display = "block"
			}
			if (M.style.display == "block") {
				M.style.display = "none"
			}
		}
	}
	function v() {
		if (this.id) {
			document.getElementById(this.id).style.filter = $V6gtjjjOaDsPs6mTM8a(124);
			document.getElementById(this.id).style.opacity = "\x31"
		}
	}
	function w() {
		if (this.id) {
			document.getElementById(this.id).style.filter = $V6gtjjjOaDsPs6mTM8a(307);
			document.getElementById(this.id).style.opacity = "0.6"
		}
	}
	var x;
	function y() {
		var M = document.getElementById("UMW-log");
		if (M) {
			if (M.style.display == "none") {
				document.getElementById("UMW-log").style.display = "block";
				UMW_update_log()
			} else {
				if (M.style.display == "block") {
					document.getElementById("UMW-log").style.display = "none";
					x.destroy()
				}
			}
		}
	}
	function logEntry(M) {
		if ($V6gtjjjOaDsPs6mTM8a(123).test(M) || g.log[g.log.length - 1] != M) {
			g.log[g.log.length] = M
		}
		UMW_update_log()
	}
	function UMW_update_log() {
		var M = null,
		N = g.log,
		O = "";
		M = $V6gtjjjOaDsPs6mTM8a(308);
		for (var i = 0; i < N.length ; i++) {
			var P = $V6gtjjjOaDsPs6mTM8a(122);
			P += $V6gtjjjOaDsPs6mTM8a(309) + N[i] + $V6gtjjjOaDsPs6mTM8a(121);
			P += $V6gtjjjOaDsPs6mTM8a(310);
			M += P;
			if (!$V6gtjjjOaDsPs6mTM8a(123).test(N[i])) {
				O += N[i] + "\n"
			}
		}
		M += $V6gtjjjOaDsPs6mTM8a(120) + g.images.unlocked_icon + $V6gtjjjOaDsPs6mTM8a(311);
		document.getElementById("UMW-log").innerHTML = M;
		ZeroClipboard.setMoviePath($V6gtjjjOaDsPs6mTM8a(119));
		x = new ZeroClipboard.Client();
		x.setText(O);
		x.setHandCursor(true);
		x.setCSSEffects(true);
		x.addEventListener("complete", function (Q, R) {
			document.getElementById("copyablelog").innerHTML = $V6gtjjjOaDsPs6mTM8a(312)
		});
		x.glue("copyablelog");
		document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseover", v, false);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseout", w, false);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(313)).addEventListener("click", UMW_clear_log, false)
	}
	function UMW_clear_log() {
		g.log = new Array();
		UMW_update_log()
	}
	function z() {
		var M = document.getElementById("mw_masthead");
		if (M) {
			var N,
			O = $V6gtjjjOaDsPs6mTM8a(117) + g.images.unlocked_icon + $V6gtjjjOaDsPs6mTM8a(314);
			if (document.getElementById("unlock_log")) {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(116)).addEventListener("click", y, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseover", v, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseout", w, false);
				document.getElementById("UMW-log").addEventListener("click", y, false)
			} else {
				N = document.createElement("div");
				N.id = "unlock_log";
				M.appendChild(N);
				N.innerHTML = O;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(116)).addEventListener("click", y, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseover", v, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(118)).addEventListener("mouseout", w, false);
				document.getElementById("UMW-log").addEventListener("click", y, false)
			}
		}
	}
	function A() {
		var M = document.getElementById("mw_masthead");
		if (M) {
			var N,
			O = $V6gtjjjOaDsPs6mTM8a(315);
			for (var i = 0; i < h.length; i++) {
				if (h[i].isinstalled) {
					O += $V6gtjjjOaDsPs6mTM8a(115) + i + $V6gtjjjOaDsPs6mTM8a(316) + h[i].name + "</div></a>"
				}
			}
			O += $V6gtjjjOaDsPs6mTM8a(114);
			if (document.getElementById($V6gtjjjOaDsPs6mTM8a(317))) {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(317)).innerHTML = O;
				N = document.getElementById($V6gtjjjOaDsPs6mTM8a(317));
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("click", u, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("mouseover", s, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("mouseout", t, false);
				for (var i = 0; i < document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(318)).length; i++) {
					document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(318))[i].onclick = loadbm
				}
			} else {
				N = document.createElement("div");
				N.id = $V6gtjjjOaDsPs6mTM8a(317);
				M.appendChild(N);
				N.innerHTML = O;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("click", u, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("mouseover", s, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(113)).addEventListener("mouseout", t, false);
				for (var i = 0; i < document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(318)).length; i++) {
					document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(318))[i].onclick = loadbm
				}
			}
		}
	}
	function loadbm() {
		var M = parseInt(this.id);
		bm_url = h[M].url;
		var a = document.createElement("script");
		a.type = $V6gtjjjOaDsPs6mTM8a(112);
		a.src = bm_url + "\x3f" + Math.random();
		document.getElementsByTagName("head")[0].appendChild(a)
	}
	function B() {
		if (g.settings.claimlevel) {
			var M = $("#user_level").text();
			if (M != g.currlevel) {
				for (i = 0; i < g.settings.count; i++) {
					do_ajax("", $V6gtjjjOaDsPs6mTM8a(319) + g.city + "&no_load=1")
				}
				g.currlevel++
			}
		}
		var N = document.getElementById("menubar");
		if (g.settings.removeChat) {
			try {
				document.getElementById("clanChat").parentNode.removeChild(document.getElementById("clanChat"))
			} catch (O) {}
			
		}
		if (N) {
			var P;
			if (document.getElementById($V6gtjjjOaDsPs6mTM8a(111))) {
				P = document.getElementById($V6gtjjjOaDsPs6mTM8a(111));
				document.getElementById("BankButtonB").addEventListener("click", Bank, false);
				document.getElementById("PostOnOff").addEventListener("click", n, false);
				document.getElementById("HealOnOff").addEventListener("click", m, false);
				document.getElementById("StamOnOff").addEventListener("click", l, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(320)).addEventListener("click", Settings, false);
				document.getElementById("EvilOnOff").addEventListener("click", p, false)
			} else {
				P = document.createElement("div");
				P.id = $V6gtjjjOaDsPs6mTM8a(111);
				N.appendChild(P);
				var Q = document.getElementById($V6gtjjjOaDsPs6mTM8a(110));
				healbutton_div = document.createElement("div");
				healbutton_div.id = "quickheal";
				Q.appendChild(healbutton_div);
				healbutton_div.innerHTML = $V6gtjjjOaDsPs6mTM8a(321);
				document.getElementById("quickheal").addEventListener("click", HealNY, false);
				var R = $V6gtjjjOaDsPs6mTM8a(109) + g.images.unlocked_icon + $V6gtjjjOaDsPs6mTM8a(322) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(108) + g.images.fb_icon + $V6gtjjjOaDsPs6mTM8a(323);
				P.innerHTML = R;
				document.getElementById("BankButtonB").addEventListener("click", Bank, false);
				document.getElementById("PostOnOff").addEventListener("click", n, false);
				document.getElementById("HealOnOff").addEventListener("click", m, false);
				document.getElementById("StamOnOff").addEventListener("click", l, false);
				document.getElementById("JobsOnOff").addEventListener("click", o, false);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(320)).addEventListener("click", Settings, false);
				document.getElementById("EvilOnOff").addEventListener("click", p, false);
				if (g.settings.stamOn == true) {
					document.getElementById("StamOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
					document.getElementById("StamOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(282)
				} else {
					if (g.settings.stamOn == 2) {
						document.getElementById("StamOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
						document.getElementById("StamOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(282)
					}
				}
				if (g.settings.healOn == true) {
					document.getElementById("HealOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
					document.getElementById("HealOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(284)
				} else {
					if (g.settings.healOn == "red") {
						document.getElementById("HealOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
						document.getElementById("HealOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(284)
					}
				}
				if (g.settings.postOn == true) {
					document.getElementById("PostOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
					document.getElementById("PostOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.fb_icon + $V6gtjjjOaDsPs6mTM8a(285)
				}
				if (g.settings.jobsOn == true) {
					document.getElementById("JobsOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(286));
					document.getElementById("JobsOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(145)
				} else {
					if (g.settings.jobsOn == 2) {
						document.getElementById("JobsOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
						document.getElementById("JobsOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(145)
					}
				}
				if (g.settings.evilOn == true) {
					document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
					document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
				}
				if (g.settings.slayerOn == true) {
					document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(149));
					document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
				}
			}
		}
		A();
		z()
	}
	function declare_war(M) {
		var N = null;
		if (parseInt(M)) {
			N = M
		} else {
			if (!M || M == undefined) {
				var a = Math.floor(Math.random() * 11);
				if (a > 5) {
					b = 9999999
				} else {
					b = 999999
				}
				N = Math.floor(Math.random() * b)
			}
		}
		var O = $V6gtjjjOaDsPs6mTM8a(107) + g.city + "&xw_person=" + $V6gtjjjOaDsPs6mTM8a(324).exec(g.xw_user)[1] + $V6gtjjjOaDsPs6mTM8a(106) + N + $V6gtjjjOaDsPs6mTM8a(325);
		g.declaring_war = true;
		do_ajax("inner_page", O, 1, 1)
	}
	function Jobber() {
		if (g.NYjobon || g.ILVjobon || g.Bjobon) {
			if (g.settings.pauseOn) {
				if (parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML) < g.settings.stopat) {
					g.NYjobon = false;
					g.ILVjobon = false;
					g.Bjobon = false;
					return
				}
			}
			var M,
			N;
			if (g.NYjobon) {
				M = document.evaluate($V6gtjjjOaDsPs6mTM8a(326), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				M = M.snapshotItem(0).innerHTML;
				g.city = $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1];
				if (parseInt(document.getElementById("user_energy").innerHTML) < parseInt(($V6gtjjjOaDsPs6mTM8a(104).exec(M))[1])) {
					g.NYjobon = false;
					return
				}
				N = $V6gtjjjOaDsPs6mTM8a(327) + g.city + "&tmp=" + ($V6gtjjjOaDsPs6mTM8a(103).exec(M))[1] + "&cb=" + ($V6gtjjjOaDsPs6mTM8a(328).exec(M))[1] + "&xw_person=" + ($V6gtjjjOaDsPs6mTM8a(102).exec(M))[1] + "&job=" + ($V6gtjjjOaDsPs6mTM8a(329).exec(M))[1] + "&tab=" + ($V6gtjjjOaDsPs6mTM8a(101).exec(M))[1]
			} else {
				if (g.ILVjobon) {
					if (document.getElementsByClassName("buy_prompt").length > 0) {
						g.ILVjobon = false;
						return
					}
					g.city = $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1];
					M = document.evaluate($V6gtjjjOaDsPs6mTM8a(330), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
					M = parseInt(($V6gtjjjOaDsPs6mTM8a(100).exec(M.snapshotItem(0).id))[1]);
					if (([4, 6, 8, 13, 16, 25, 28, 31, 39, 42, 46, 49, 52, 59, 60, 61, 70, 74, 79, 82].indexOf(M) !== -1 && g.city == 6) || ([5, 11, 12, 20, 23, 33, 41, 46, 51, 54, 56, 62, 65, 67, 72, 76, 78].indexOf(M) !== -1 && g.city == 5)) {
						ExpertMapController.selectNode(M);
						return MapController.doFightJob(M, ($V6gtjjjOaDsPs6mTM8a(331).exec(document.getElementById("fight_list0").onclick))[1], 1, ($V6gtjjjOaDsPs6mTM8a(99).exec(document.getElementById("fight_list0").onclick))[2])
					} else {
						ExpertMapController.selectNode(M);
						return MapController.panelButtonDoJob(M)
					}
				} else {
					if (g.Bjobon) {
						document.getElementById("btn_dojob_" + g.Bjobid).click();
						return
					}
				}
			}
			var O = new XMLHttpRequest();
			O.open("POST", N, true);
			O.setRequestHeader($V6gtjjjOaDsPs6mTM8a(332), $V6gtjjjOaDsPs6mTM8a(98));
			O.setRequestHeader("Accept", "*/*");
			O.setRequestHeader($V6gtjjjOaDsPs6mTM8a(333), $V6gtjjjOaDsPs6mTM8a(97));
			O.send($V6gtjjjOaDsPs6mTM8a(334) + g.xw_user + "&sf_xw_sig=" + local_xw_sig + $V6gtjjjOaDsPs6mTM8a(96));
			O.onreadystatechange = function () {
				if (this.readyState == 4) {
					response = O.responseText;
					if (($V6gtjjjOaDsPs6mTM8a(335).test(response))) {
						document.getElementById($V6gtjjjOaDsPs6mTM8a(95)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(335).exec(response))[1];
						document.getElementById($V6gtjjjOaDsPs6mTM8a(336)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(94).exec(response))[1];
						document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(93).exec(response))[1];
						document.getElementById($V6gtjjjOaDsPs6mTM8a(338)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(92).exec(response))[1];
						document.getElementById("level_bar").setAttribute("style", $V6gtjjjOaDsPs6mTM8a(339) + ($V6gtjjjOaDsPs6mTM8a(91).exec(response))[1] + "%;");
						document.getElementById($V6gtjjjOaDsPs6mTM8a(340)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(90).exec(response))[1]
					} else {
						if (($V6gtjjjOaDsPs6mTM8a(341).test(response))) {
							document.getElementById("inner_page").innerHTML = response;
							document.getElementById("user_energy").innerHTML = ($V6gtjjjOaDsPs6mTM8a(89).exec(response))[1];
							document.getElementById("level_bar").setAttribute("style", $V6gtjjjOaDsPs6mTM8a(339) + ($V6gtjjjOaDsPs6mTM8a(342).exec(response))[1] + "%;");
							document.getElementsByClassName("cur_cash").innerHTML = ($V6gtjjjOaDsPs6mTM8a(88).exec(response))[1];
							document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(343).exec(response))[1];
							document.getElementById($V6gtjjjOaDsPs6mTM8a(95)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(87).exec(response))[1];
							document.getElementById($V6gtjjjOaDsPs6mTM8a(336)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(344).exec(response))[1];
							document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(86).exec(response))[1];
							document.getElementById($V6gtjjjOaDsPs6mTM8a(338)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(345).exec(response))[1]
						}
					}
				}
			};
		}
	}
	function C() {
		g.NYjobon = false;
		g.ILVjobon = false;
		g.Bjobon = false;
		logEntry($V6gtjjjOaDsPs6mTM8a(85));
		return
	}
	function loadProfile(M) {
		do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(346) + M, 1, 1, 0, 0)
	}
	function commonFightCheck() {
		if (g.fightActionRunning || isFightPopOpen() || (parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(340)).innerHTML) <= 10) || (g.settings.healOn && parseInt(document.getElementById("user_health").innerHTML) < g.settings.healat) || (parseInt(document.getElementById("user_health").innerHTML < 30))) {
			return true
		} else {
			return false
		}
	}
	function stickyCity() {
		g.city = $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1];
		if (g.evilCity != g.city) {
			do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(84) + g.evilCity + $V6gtjjjOaDsPs6mTM8a(347), 1, 1, 0, 0)
		}
	}
	function Fightlist() {
		var i;
		if (commonFightCheck()) {
			return
		}
		if ((document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(302)).length > 0) || (document.evaluate($V6gtjjjOaDsPs6mTM8a(143), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength == 0)) {
			logEntry($V6gtjjjOaDsPs6mTM8a(83));
			do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(348), 1, 1, 0, 0);
			return
		}
		stickyCity();
		if (g.settings.autoBank) {
			Bank()
		}
		g.fightActionRunning = true;
		clearTimeout(g.fightwatchdogtimout);
		g.fightwatchdogtimout = setTimeout(resetfightaction, 15000);
		var M = document.getElementsByClassName("action"),
		N = Math.floor(Math.random() * (M.length - 1)) + 1;
		for (i = M.length - N; i > 1; i--) {
			var O = M[i].parentNode.firstElementChild.className;
			if ((O != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
				break
			}
		}
		g.targetid = M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
		if (g.umwavoidlist.isAvoid(g.targetid)) {
			logEntry($V6gtjjjOaDsPs6mTM8a(81));
			g.fightActionRunning = false;
			do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(348), 1, 1, 0, 0);
			return
		}
		M[i].firstElementChild.click()
	}
	Array.prototype.findIndex = function (M) {
		var N = "";
		for (var i = 0; i < this.length; i++) {
			if (this[i].pid == M) {
				return i
			}
		}
		return N
	};
	function Battle() {
		var M;
		if (commonFightCheck()) {
			return
		}
		stickyCity();
		if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(350)).length > 0) {
			var N = document.getElementsByClassName("fl");
			if (N.length - 1 > g.familytargets.length) {
				for (i = 1; i < N.length; i++) {
					var O = decodeID($V6gtjjjOaDsPs6mTM8a(295).exec(N[i].innerHTML)[1]);
					if (g.familytargets.findIndex(O) === "") {
						if (g.umwavoidlist.isAvoid(O)) {
							g.familytargets[g.familytargets.length] = new familyMember(O, "strong")
						} else {
							g.familytargets[g.familytargets.length] = new familyMember(O, "weak")
						}
					}
				}
			}
			M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(350));
			i = Math.floor(Math.random() * M.length);
			if (g.familytargets[g.familytargets.findIndex(M[i].id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|"))].stat == "strong") {
				for (i = 0; i < M.length; i++) {
					if (g.familytargets[g.familytargets.findIndex(M[i].id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|"))].stat == "weak") {
						break
					}
				}
			}
			if (i >= M.length) {
				M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(80));
				M[0].click()
			}
			g.familyindex = g.familytargets.findIndex(M[i].id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|"));
			if (g.familytargets[g.familyindex].stat == "strong") {
				M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(80));
				M[0].click()
			} else {
				g.targetid = g.familytargets[g.familyindex].pid;
				M[i].click()
			}
		} else {
			if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(351)).length > 0) {
				M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(351));
				if (!$V6gtjjjOaDsPs6mTM8a(79).test(M[0].innerHTML)) {
					return
				}
				for (i = 0; i < 5; i++) {
					M[0].click()
				}
			} else {
				M = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(80));
				M[0].click()
			}
		}
	}
	function Rivals() {
		var i;
		if (commonFightCheck()) {
			return
		}
		stickyCity();
		if ((document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(302)).length > 0) || (document.evaluate($V6gtjjjOaDsPs6mTM8a(142), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength == 0)) {
			logEntry($V6gtjjjOaDsPs6mTM8a(352));
			do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(78), 1, 1, 0, 0);
			return
		}
		if (g.settings.autoBank) {
			Bank()
		}
		g.fightActionRunning = true;
		clearTimeout(g.fightwatchdogtimout);
		g.fightwatchdogtimout = setTimeout(resetfightaction, 15000);
		var M = document.getElementsByClassName("action");
		if (g.is_vip) {
			for (i = 0; i < M.length; i++) {
				if ($V6gtjjjOaDsPs6mTM8a(353).test(M[i].parentNode.firstElementChild.innerHTML) && (g.settings.customRivals[0] == 1)) {
					var j = 10;
					i++;
					while (i < M.length && $V6gtjjjOaDsPs6mTM8a(77).test(M[i].firstElementChild.id)) {
						var N = M[i].parentNode.firstElementChild.className;
						if ((g.settings.customRivals[j] == 1) && (N != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].lastElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
							if (!g.rivalcycle[i]) {
								g.rivalcycle[i] = true;
								g.targetid = M[i].lastElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
								M[i].lastElementChild.click();
								return
							}
						}
						j++;
						i++
					}
					i--
				} else {
					if ($V6gtjjjOaDsPs6mTM8a(354).test(M[i].parentNode.firstElementChild.innerHTML) && (g.settings.customRivals[1] == 1)) {
						var j = 20;
						i++;
						while (i < M.length && $V6gtjjjOaDsPs6mTM8a(77).test(M[i].firstElementChild.id)) {
							var N = M[i].parentNode.firstElementChild.className;
							if ((g.settings.customRivals[j] == 1) && (N != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].lastElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
								if (!g.rivalcycle[i]) {
									g.rivalcycle[i] = true;
									g.targetid = M[i].lastElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
									M[i].lastElementChild.click();
									return
								}
							}
							j++;
							i++
						}
						i--
					} else {
						if ($V6gtjjjOaDsPs6mTM8a(76).test(M[i].parentNode.firstElementChild.innerHTML) && g.settings.customRivals[2] == 1) {
							i++;
							while (i < M.length && $V6gtjjjOaDsPs6mTM8a(355).test(M[i].firstElementChild.id)) {
								var N = M[i].parentNode.firstElementChild.className;
								if ((N != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
									if (!g.rivalcycle[i]) {
										g.rivalcycle[i] = true;
										g.targetid = M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
										M[i].firstElementChild.click();
										return
									}
								}
								j++;
								i++
							}
							i--
						} else {
							if ($V6gtjjjOaDsPs6mTM8a(75).test(M[i].parentNode.firstElementChild.innerHTML) && g.settings.customRivals[3] == 1) {
								i++;
								while (i < M.length && $V6gtjjjOaDsPs6mTM8a(355).test(M[i].firstElementChild.id)) {
									var N = M[i].parentNode.firstElementChild.className;
									if ((N != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
										if (!g.rivalcycle[i]) {
											g.rivalcycle[i] = true;
											g.targetid = M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
											M[i].firstElementChild.click();
											return
										}
									}
									j++;
									i++
								}
								i--
							}
						}
					}
				}
			}
			logEntry($V6gtjjjOaDsPs6mTM8a(81));
			for (var j = 0; j < g.rivalcycle.length; j++) {
				g.rivalcycle[j] = false
			}
			g.fightActionRunning = false;
			do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(78), 1, 1, 0, 0);
			return
		} else {
			for (i = 1; i < M.length; i++) {
				if (!M[i].firstElementChild) {
					break
				}
			}
			for (; i > 0; i--) {
				if (M[i].firstElementChild) {
					var N = M[i].parentNode.firstElementChild.className;
					if ((N != $V6gtjjjOaDsPs6mTM8a(82)) && (g.settings.stamOn == 2 || !g.umwavoidlist.isAvoid(M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|")))) {
						if (!g.rivalcycle[i]) {
							g.rivalcycle[i] = true;
							break
						}
					}
				}
			}
			if (g.rivalcycle[1] == true) {
				for (var j = 0; j < g.rivalcycle.length; j++) {
					g.rivalcycle[j] = false
				}
			}
			if (i == 0) {
				logEntry($V6gtjjjOaDsPs6mTM8a(81));
				for (var j = 0; j < g.rivalcycle.length; j++) {
					g.rivalcycle[j] = false
				}
				g.fightActionRunning = false;
				do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(78), 1, 1, 0, 0);
				return
			}
			g.targetid = M[i].firstElementChild.id.replace($V6gtjjjOaDsPs6mTM8a(349), "p|");
			M[i].firstElementChild.click()
		}
	}
	function D() {
		g.icecheckfail = false
	}
	function FightFamily() {
		if (commonFightCheck()) {
			return
		}
		stickyCity();
		if (g.settings.autoBank) {
			Bank()
		}
		if ((document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(302)).length > 0) || ($V6gtjjjOaDsPs6mTM8a(128).test(document.body.innerHTML)) || g.familytargets[g.familyindex].stat == "strong") {
			g.familyindex++;
			if (g.familyindex >= g.familytargets.length) {
				g.familyindex = 0
			}
			if (g.settings.stamOn != 2) {
				for (i = g.familyindex; i < g.familytargets.length; i++) {
					if (!g.umwavoidlist.isAvoid(g.familytargets[g.familyindex].pid)) {
						break
					}
					g.familyindex++
				}
			}
			loadProfile(g.familytargets[g.familyindex].pid);
			return
		}
		if (g.settings.autoBank) {
			Bank()
		}
		if ($V6gtjjjOaDsPs6mTM8a(127).test(document.body.innerHTML)) {
			var M = $V6gtjjjOaDsPs6mTM8a(304).exec(document.body.innerHTML)[1].replace($V6gtjjjOaDsPs6mTM8a(126), "\x26");
			g.target_name = $V6gtjjjOaDsPs6mTM8a(139).exec(document.body.innerHTML)[1];
			if (g.icecheckfail) {
				document.getElementById("btn_attack_" + g.familytargets[g.familyindex].pid.replace("\x7c", "")).click()
			} else {
				var N = {
					ajax : 1,
					liteload : 1,
					sf_xw_user_id : g.xw_user,
					sf_xw_sig : local_xw_sig
				};
				$.ajax({
					type : "POST",
					url : M,
					timeout : 30000,
					data : N,
					success : function (msg) {
						if ($V6gtjjjOaDsPs6mTM8a(356).test(msg)) {
							logEntry("Slayer " + g.target_name + " is dead.");
							g.familyindex++;
							if (g.familyindex >= g.familytargets.length) {
								g.familyindex = 0
							}
							if (g.settings.stamOn != 2) {
								for (i = g.familyindex; i < g.familytargets.length; i++) {
									if (!g.umwavoidlist.isAvoid(g.familytargets[g.familyindex].pid)) {
										break
									}
									g.familyindex++
								}
							}
							loadProfile(g.familytargets[g.familyindex].pid);
							return
						} else {
							if ($V6gtjjjOaDsPs6mTM8a(74).test(msg)) {
								g.icecheckfail = true;
								setTimeout(D, 45000);
								logEntry($V6gtjjjOaDsPs6mTM8a(357));
								return
							} else {
								if ($V6gtjjjOaDsPs6mTM8a(127).test(document.body.innerHTML)) {
									g.targetid = g.familytargets[g.familyindex].pid;
									document.getElementById("btn_attack_" + g.familytargets[g.familyindex].pid.replace("\x7c", "")).click()
								}
							}
						}
					},
					error : function (O, status, P) {
						return
					}
				})
			}
		} else {
			g.familyindex++;
			if (g.familyindex >= g.familytargets.length) {
				g.familyindex = 0
			}
			if (g.settings.stamOn != 2) {
				for (i = g.familyindex; i < g.familytargets.length; i++) {
					if (!g.umwavoidlist.isAvoid(g.familytargets[g.familyindex].pid)) {
						break
					}
					g.familyindex++
				}
			}
			loadProfile(g.familytargets[g.familyindex].pid)
		}
	}
	function PureEvil() {
		if (commonFightCheck()) {
			return
		}
		stickyCity();
		if (g.settings.autoBank) {
			Bank()
		}
		if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(302)).length > 0) {
			setTimeout(PureEvil, 1500);
			loadProfile(g.targetid);
			return
		}
		if ($V6gtjjjOaDsPs6mTM8a(127).test(document.body.innerHTML)) {
			var M = $V6gtjjjOaDsPs6mTM8a(304).exec(document.body.innerHTML)[1].replace($V6gtjjjOaDsPs6mTM8a(126), "\x26"),
			N = {
				ajax : 1,
				liteload : 1,
				sf_xw_user_id : g.xw_user,
				sf_xw_sig : local_xw_sig
			};
			$.ajax({
				type : "POST",
				url : M,
				timeout : 30000,
				data : N,
				success : function (msg) {
					if ($V6gtjjjOaDsPs6mTM8a(356).test(msg)) {
						logEntry("Slayer " + g.target_name + " is dead");
						return
					} else {
						if ($V6gtjjjOaDsPs6mTM8a(74).test(msg)) {
							logEntry($V6gtjjjOaDsPs6mTM8a(357));
							return
						} else {
							if ($V6gtjjjOaDsPs6mTM8a(127).test(document.body.innerHTML)) {
								document.getElementById("btn_attack_" + g.targetid.replace("\x7c", "")).click()
							}
						}
					}
				},
				error : function (O, status, P) {
					return
				}
			})
		} else {
			setTimeout(PureEvil, 1500);
			loadProfile(g.targetid)
		}
	}
	function Fighter() {
		var M,
		i,
		N;
		if (g.newfighton) {
			if (g.settings.pauseOn) {
				if (parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML) < g.settings.stopat) {
					g.newfighton = false;
					return
				}
			}
			if (isFightPopOpen()) {
				var O = document.getElementById($V6gtjjjOaDsPs6mTM8a(73));
				if (!$V6gtjjjOaDsPs6mTM8a(358).test(O.innerHTML) || g.settings.stamOn == 2) {
					O = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(72));
					if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(359)).length > 0) {
						O = document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(359))[1]
					}
					if (document.getElementById($V6gtjjjOaDsPs6mTM8a(71)).style.display == "block" || document.getElementById($V6gtjjjOaDsPs6mTM8a(360)).style.display == "block") {
						N = parseInt(document.getElementById("user_health").innerHTML);
						if ((g.settings.healOn && N < g.settings.healat) || N < 30) {
							return
						}
						url = O.href.replace("remote/", "");
						g.abortCount++;
						if (g.settings.abortOn && g.abortCount > g.settings.abortAt) {
							g.newfighton = false;
							g.abortCount = 0;
							if (!g.closing) {
								setTimeout(closeFightPop, 2500)
							}
							g.closing = true;
							return
						}
						if (g.settings.burstOn) {
							url = url.replace("click_amt=1", "click_amt=7")
						}
						var P = new XMLHttpRequest();
						P.open("POST", url, true);
						P.setRequestHeader($V6gtjjjOaDsPs6mTM8a(332), $V6gtjjjOaDsPs6mTM8a(98));
						P.setRequestHeader("Accept", "*/*");
						P.setRequestHeader($V6gtjjjOaDsPs6mTM8a(333), $V6gtjjjOaDsPs6mTM8a(97));
						P.send($V6gtjjjOaDsPs6mTM8a(334) + g.xw_user + "&sf_xw_sig=" + local_xw_sig + $V6gtjjjOaDsPs6mTM8a(96));
						P.onreadystatechange = function () {
							if (this.readyState == 4) {
								response = P.responseText;
								try {
									var msg = JSON.parse(response)
								} catch (R) {
									return
								}
								if (!msg.fight_result) {
									return
								}
								document.getElementById("user_health").innerHTML = msg.user_fields.user_health;
								User.health = msg.user_fields.user_health;
								g.CurHealth = msg.user_fields.user_health;
								if (g.settings.abortHeal == true && g.abortCount > 3 && msg.fight_result.defender.current_health_pct >= 100) {
									g.newfighton = false;
									g.abortCount = 0;
									if (!g.closing) {
										setTimeout(closeFightPop, 2500)
									}
									g.closing = true;
									return
								}
								FightV2.powerAttack(msg, this);
								parseNewFightResults(response);
								var S = ($V6gtjjjOaDsPs6mTM8a(91).exec(response))[1];
								document.getElementById("level_bar").setAttribute("style", $V6gtjjjOaDsPs6mTM8a(339) + S + "%;");
								document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(70).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(95)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(335).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(93).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(338)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(92).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(336)).innerHTML = "Â£" + ($V6gtjjjOaDsPs6mTM8a(361).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(69)).innerHTML = "Â¢" + ($V6gtjjjOaDsPs6mTM8a(362).exec(response))[1];
								document.getElementById($V6gtjjjOaDsPs6mTM8a(340)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(68).exec(response))[1]
							}
						};
						return
					}
				}
				g.newfighton = false;
				g.abortCount = 0;
				if (g.settings.umwicesteal) {
					if (document.getElementById($V6gtjjjOaDsPs6mTM8a(363)).style.display == "block") {
						if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(67)).length > 0) {
							document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(67))[0].click();
							return
						}
					}
				}
				if (!g.closing) {
					setTimeout(closeFightPop, 2500)
				}
				g.closing = true
			}
		}
		if (g.hitlist) {
			if (g.settings.pauseOn) {
				if (parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML) < g.settings.stopat) {
					g.hitlist = false;
					return
				}
			}
			element = document.evaluate($V6gtjjjOaDsPs6mTM8a(364), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			if (element.snapshotLength > 0) {
				element = element.snapshotItem(0).href;
				var Q = document.getElementById("content_row").innerHTML;
				if (!($V6gtjjjOaDsPs6mTM8a(66).test(Q))) {
					url = $V6gtjjjOaDsPs6mTM8a(365) + ($V6gtjjjOaDsPs6mTM8a(65).exec(element))[0]
				} else {
					g.hitlist = false;
					return
				}
			}
			N = parseInt(document.getElementById("user_health").innerHTML);
			if ((g.settings.healOn && N < g.settings.healat) || N < 30) {
				return
			}
			var P = new XMLHttpRequest();
			P.open("POST", url, true);
			P.setRequestHeader($V6gtjjjOaDsPs6mTM8a(332), $V6gtjjjOaDsPs6mTM8a(98));
			P.setRequestHeader("Accept", "*/*");
			P.setRequestHeader($V6gtjjjOaDsPs6mTM8a(333), $V6gtjjjOaDsPs6mTM8a(97));
			P.send($V6gtjjjOaDsPs6mTM8a(334) + g.xw_user + "&sf_xw_sig=" + local_xw_sig + $V6gtjjjOaDsPs6mTM8a(96));
			P.onreadystatechange = function () {
				if (this.readyState == 4) {
					response = P.responseText;
					document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(366).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(95)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(87).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(86).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(338)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(345).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(336)).innerHTML = "Â£" + ($V6gtjjjOaDsPs6mTM8a(64).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(69)).innerHTML = "Â¢" + ($V6gtjjjOaDsPs6mTM8a(367).exec(response))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(340)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(63).exec(response))[1];
					document.getElementById("inner_page").innerHTML = response
				}
			};
		}
	}
	function parseNewFightResults(M) {
		var N = document.getElementById($V6gtjjjOaDsPs6mTM8a(73));
		if (!N) {
			return
		}
		var O = $V6gtjjjOaDsPs6mTM8a(358).test(N.innerHTML);
		if (O) {
			if (!g.umwavoidlist.isAvoid(g.targetid)) {
				g.umwavoidlist[g.umwavoidlist.length] = g.targetid;
				localStorage.setItem($V6gtjjjOaDsPs6mTM8a(368), JSON.stringify(g.umwavoidlist))
			}
		}
		if (g.familymodeOn && O) {
			g.familytargets[g.familyindex].stat = "strong"
		}
		if (!O || (g.settings.stamOn == 2)) {
			if (!g.newfighton) {
				g.newfighton = true
			}
		} else {
			g.newfighton = false;
			g.abortCount = 0;
			if (g.settings.stamOn && isFightPopOpen()) {
				if (g.settings.umwicesteal) {
					if (document.getElementById($V6gtjjjOaDsPs6mTM8a(363)).style.display == "block") {
						if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(67)).length > 0) {
							document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(67))[0].click();
							return
						}
					}
				}
				setTimeout(closeFightPop, 2500)
			}
		}
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(62)).style.display == "block") {
			if (($V6gtjjjOaDsPs6mTM8a(369).test(M))) {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(61)).innerHTML = ++g.icecount;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(370)).innerHTML = g.killcount;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(60)).innerHTML = g.icecount + g.killcount * 2;
				publishIce(M)
			}
		}
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(371)).style.display == "block") {
			if (($V6gtjjjOaDsPs6mTM8a(369).test(M))) {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(61)).innerHTML = g.icecount;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(370)).innerHTML = ++g.killcount;
				document.getElementById($V6gtjjjOaDsPs6mTM8a(60)).innerHTML = g.icecount + g.killcount * 2;
				publishIce(M)
			}
		}
	}
	function publishIce(M) {
		var N;
		if ($V6gtjjjOaDsPs6mTM8a(59).test(M)) {
			try {
				N = $V6gtjjjOaDsPs6mTM8a(372).exec(M)[0]
			} catch (O) {
				return
			}
		} else {
			try {
				var msg = JSON.parse(M);
				N = msg.fight_result.feed_js
			} catch (O) {
				return
			}
		}
		var P = $V6gtjjjOaDsPs6mTM8a(58).exec(N)[1];
		P = "\x28" + P + "\x29";
		var Q = eval(P);
		Q.description = Q.description.replace($V6gtjjjOaDsPs6mTM8a(373), "");
		Q.description = Q.description.replace($V6gtjjjOaDsPs6mTM8a(57), "");
		Q.description = Q.description.replace($V6gtjjjOaDsPs6mTM8a(374), "");
		Q.description = Q.description.replace($V6gtjjjOaDsPs6mTM8a(56), "");
		logEntry(Q.description.replace($V6gtjjjOaDsPs6mTM8a(375), ""));
		if (g.settings.fbfeedloc != "") {
			Q.targetId = g.settings.fbfeedloc
		}
		if (g.settings.autopostOn) {
			Q.actionLinks[0].name = Q.actionLinks[0].name.replace("Get a boost", "Get a Boost");
			Q.actionLinks[0].name = Q.actionLinks[0].name.replace($V6gtjjjOaDsPs6mTM8a(55), "Get a Boost")
		}
		if (g.settings.postOn) {
			MW.Feed(Q)
		}
	}
	function Bank() {
		g.city = $V6gtjjjOaDsPs6mTM8a(209).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(222)).className)[1];
		if (g.city == 5) {
			vegascash = $V6gtjjjOaDsPs6mTM8a(376).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML)[1];
			vegascash = parseInt(vegascash.replace($V6gtjjjOaDsPs6mTM8a(54), ""));
			url = $V6gtjjjOaDsPs6mTM8a(377) + vegascash + $V6gtjjjOaDsPs6mTM8a(53)
		} else {
			url = $V6gtjjjOaDsPs6mTM8a(378) + g.city + $V6gtjjjOaDsPs6mTM8a(52)
		}
		var M = {
			ajax : 1,
			liteload : 1,
			sf_xw_user_id : g.xw_user,
			sf_xw_sig : local_xw_sig
		};
		$.ajax({
			type : "POST",
			url : url,
			timeout : 30000,
			data : M,
			success : function (N) {
				if (($V6gtjjjOaDsPs6mTM8a(335).test(N))) {
					document.getElementById($V6gtjjjOaDsPs6mTM8a(95)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(335).exec(N))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(336)).innerHTML = "Â£" + ($V6gtjjjOaDsPs6mTM8a(361).exec(N))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(337)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(93).exec(N))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(338)).innerHTML = ($V6gtjjjOaDsPs6mTM8a(92).exec(N))[1];
					document.getElementById($V6gtjjjOaDsPs6mTM8a(69)).innerHTML = "Â¢" + ($V6gtjjjOaDsPs6mTM8a(362).exec(N))[1]
				}
			}
		})
	}
	function DoAutoHeal() {
		var M = $V6gtjjjOaDsPs6mTM8a(379),
		N = parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(51)).innerHTML);
		g.CurHealth = parseInt(document.getElementById("user_health").innerHTML);
		var O = new XMLHttpRequest();
		O.open("POST", M, true);
		O.setRequestHeader($V6gtjjjOaDsPs6mTM8a(332), $V6gtjjjOaDsPs6mTM8a(98));
		O.setRequestHeader("Accept", "*/*");
		O.setRequestHeader($V6gtjjjOaDsPs6mTM8a(333), $V6gtjjjOaDsPs6mTM8a(97));
		O.send($V6gtjjjOaDsPs6mTM8a(334) + g.xw_user + "&sf_xw_sig=" + local_xw_sig + $V6gtjjjOaDsPs6mTM8a(96));
		O.onreadystatechange = function () {
			if (this.readyState == 4) {
				response = O.responseText;
				try {
					var b = eval("\x28" + response + "\x29");
					document.getElementById("user_health").innerHTML = b.user_fields.user_health;
					g.CurHealth = b.user_fields.user_health;
					User.health = b.user_fields.user_health;
					g.user.group_atk = b.fightbar.group_atk;
					g.user.group_def = b.fightbar.group_def;
					if (g.user.firstRun == true) {
						g.user.start_group_atk = b.fightbar.group_atk.replace($V6gtjjjOaDsPs6mTM8a(380), "");
						g.user.start_group_def = b.fightbar.group_def.replace($V6gtjjjOaDsPs6mTM8a(380), "");
						g.user.firstRun = false
					}
					update_user_scores()
				} catch (P) {}
				
			}
		};
		if (parseInt(g.CurHealth) < g.settings.healat && g.settings.healOn == "red" && parseInt(User.stamina) > 5 && (g.evilOn || g.newfighton)) {
			HealNY()
		} else {
			if (parseInt(g.CurHealth) < g.settings.healat && g.settings.healOn == true) {
				HealNY()
			}
		}
	}
	function important_function() {
		
	}
	function HealNY() {
		url = $V6gtjjjOaDsPs6mTM8a(381);
		if (g.settings.healny == true) {
			url += "&xcity=1"
		}
		send = $V6gtjjjOaDsPs6mTM8a(334) + g.xw_user + "&sf_xw_sig=" + local_xw_sig;
		var M = new XMLHttpRequest();
		M.open("POST", url, true);
		M.setRequestHeader($V6gtjjjOaDsPs6mTM8a(332), $V6gtjjjOaDsPs6mTM8a(98));
		M.setRequestHeader($V6gtjjjOaDsPs6mTM8a(333), $V6gtjjjOaDsPs6mTM8a(97));
		M.send(send);
		M.onreadystatechange = function () {
			if (this.readyState == 4) {
				response = M.responseText;
				var b = eval("\x28" + response + "\x29");
				try {
					document.getElementById("user_health").innerHTML = b.user_fields.user_health;
					g.CurHealth = b.user_fields.user_health;
					User.health = b.user_fields.user_health;
					g.user.group_atk = b.fightbar.group_atk;
					g.user.group_def = b.fightbar.group_def;
					if (g.user.firstRun == true) {
						g.user.start_group_atk = b.fightbar.group_atk.replace($V6gtjjjOaDsPs6mTM8a(380), "");
						g.user.start_group_def = b.fightbar.group_def.replace($V6gtjjjOaDsPs6mTM8a(380), "");
						g.user.firstRun = false
					}
					update_user_scores()
				} catch (N) {}
				
			}
		};
	}
	function Settings() {
		var M = ".8.4",
		N = g.settings.fbfeedloc;
		popupTitle = "UnlockedMW";
		if (g.is_vip) {
			popupTitle += " VIP 4"
		} else {
			popupTitle += " PRO 3"
		}
		popupTitle += M;
		content = $V6gtjjjOaDsPs6mTM8a(49) + N + $V6gtjjjOaDsPs6mTM8a(382) + g.settings.stopat + $V6gtjjjOaDsPs6mTM8a(48) + g.settings.abortAt + $V6gtjjjOaDsPs6mTM8a(383) + g.settings.healat + $V6gtjjjOaDsPs6mTM8a(47) + g.settings.rref + $V6gtjjjOaDsPs6mTM8a(384);
		if (g.is_vip) {
			content += $V6gtjjjOaDsPs6mTM8a(46) + g.settings.FighterInt + $V6gtjjjOaDsPs6mTM8a(385)
		}
		content += $V6gtjjjOaDsPs6mTM8a(45);
		height = "670";
		myPop($V6gtjjjOaDsPs6mTM8a(386), popupTitle, content, height);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(44)).onclick = saveSettings;
		document.getElementById("CustomBM").onclick = display_appstore;
		document.getElementById("ForceUpDate").onclick = forceupDate;
		if (g.settings.umwicesteal) {
			document.getElementById($V6gtjjjOaDsPs6mTM8a(387)).checked = true
		}
		if (g.settings.burstOn) {
			document.getElementById("burst").checked = true
		}
		if (g.settings.pauseOn) {
			document.getElementById("pausecheck").checked = true
		}
		if (g.settings.abortOn) {
			document.getElementById("stopcheck").checked = true
		}
		if (g.settings.autopostOn) {
			document.getElementById("autopost").checked = true
		}
		if (g.settings.autoBank) {
			document.getElementById("autobank").checked = true
		}
		if (g.settings.removeChat) {
			document.getElementById("remchat").checked = true
		}
		if (g.settings.userobsquads) {
			document.getElementById("robsquad").checked = true
		}
		if (g.settings.healny) {
			document.getElementById("healny").checked = true
		}
		if (g.settings.abortHeal) {
			document.getElementById("healthy").checked = true
		}
		if (g.settings.claimlevel) {
			document.getElementById("claimlevel").checked = true
		}
	}
	function saveSettings() {
		setTimeout(function () {
			document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).removeChild(document.getElementById($V6gtjjjOaDsPs6mTM8a(386)))
		}, 10);
		if (g.is_vip) {
			g.settings.FighterInt = document.getElementById("postformid6").value
		}
		g.settings.rref = parseInt(document.getElementById("postformid5").value);
		g.settings.fbfeedloc = document.getElementById("postformid").value;
		g.settings.healat = parseInt(document.getElementById("postformid2").value);
		g.settings.stopat = parseInt(document.getElementById("postformid3").value);
		g.settings.abortAt = parseInt(document.getElementById("postformid7").value);
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(387)).checked == true) {
			g.settings.umwicesteal = true
		} else {
			g.settings.umwicesteal = false
		}
		if (document.getElementById("autopost").checked == true) {
			g.settings.autopostOn = true
		} else {
			g.settings.autopostOn = false
		}
		if (document.getElementById("burst").checked == true) {
			g.settings.burstOn = true
		} else {
			g.settings.burstOn = false
		}
		if (document.getElementById("pausecheck").checked == true) {
			g.settings.pauseOn = true
		} else {
			g.settings.pauseOn = false
		}
		if (document.getElementById("stopcheck").checked == true) {
			g.settings.abortOn = true
		} else {
			g.settings.abortOn = false
		}
		if (document.getElementById("autobank").checked == true) {
			g.settings.autoBank = true
		} else {
			g.settings.autoBank = false
		}
		if (document.getElementById("robsquad").checked == true) {
			g.settings.userobsquads = true
		} else {
			g.settings.userobsquads = false
		}
		if (document.getElementById("remchat").checked == true) {
			g.settings.removeChat = true
		} else {
			g.settings.removeChat = false
		}
		if (document.getElementById("healthy").checked == true) {
			g.settings.abortHeal = true
		} else {
			g.settings.abortHeal = false
		}
		if (document.getElementById("healny").checked == true) {
			g.settings.healny = true
		} else {
			g.settings.healny = false
		}
		if (document.getElementById("claimlevel").checked == true) {
			g.settings.claimlevel = true
		} else {
			g.settings.claimlevel = false
		}
		writeSettings()
	}
	function forceupDate() {
		if (confirm($V6gtjjjOaDsPs6mTM8a(43))) {
			localStorage.clear();
			top.location.href = $V6gtjjjOaDsPs6mTM8a(388)
		}
	}
	function E(M) {
		var N = null,
		i;
		for (i = 0; i < M.length; i++) {
			if (M[i].checked) {
				N = M[i].value;
				break
			}
		}
		return N
	}
	function myPop(M, N, O, P, Q, R) {
		if (!P || P == undefined) {
			P = "600"
		}
		if (!Q || Q == undefined) {
			Q = "330"
		}
		var S = '<div id="' + M + $V6gtjjjOaDsPs6mTM8a(42) + (375 - (Q / 2)) + $V6gtjjjOaDsPs6mTM8a(389) + Q + "px;height:" + P + $V6gtjjjOaDsPs6mTM8a(41) + Q + $V6gtjjjOaDsPs6mTM8a(390) + (Q - 10) + $V6gtjjjOaDsPs6mTM8a(40) + N + $V6gtjjjOaDsPs6mTM8a(391) + O + $V6gtjjjOaDsPs6mTM8a(39);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).innerHTML += S;
		if (R) {
			setTimeout(function () {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).removeChild(document.getElementById(M))
			}, R)
		}
	}
	function F() {
		document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).removeChild(document.getElementById("myPopup"))
	}
	function LetThereBeRobberies() {
		var M = parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(340)).innerHTML);
		if (!g.evilOn || g.RobbingHung) {
			return
		}
		if (g.settings.pauseOn) {
			if (parseInt(document.getElementById($V6gtjjjOaDsPs6mTM8a(105)).innerHTML) < g.settings.stopat) {
				g.evilOn = false;
				logEntry($V6gtjjjOaDsPs6mTM8a(144));
				document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
				document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
				return
			}
		}
		if (M < 50) {
			logEntry($V6gtjjjOaDsPs6mTM8a(392));
			setTimeout(LetThereBeRobberies, 30000)
		} else {
			if (document.evaluate($V6gtjjjOaDsPs6mTM8a(141), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength == 0) {
				TravelRobbing();
				logEntry($V6gtjjjOaDsPs6mTM8a(38));
				setTimeout(LetThereBeRobberies, 3000)
			} else {
				if (parseInt($V6gtjjjOaDsPs6mTM8a(393).exec(document.getElementById($V6gtjjjOaDsPs6mTM8a(37)).onclick)[1]) > 0 && g.settings.userobsquads) {
					setTimeout(RefreshMeRS, (6900));
					document.getElementById($V6gtjjjOaDsPs6mTM8a(37)).click()
				} else {
					g.RobbingHung = true;
					g.RHangCHKInterval = setTimeout(RobbingWatchdog, 30000);
					robTheBoard();
					setTimeout(RefreshMe, 6900)
				}
			}
		}
	}
	function robTheBoard() {
		if (g.RobbingHung) {
			var M = 8;
			for (var i = 8; i >= 0; i--) {
				setTimeout($V6gtjjjOaDsPs6mTM8a(394) + M + $V6gtjjjOaDsPs6mTM8a(36), i * g.settings.rref);
				M--
			}
		}
	}
	function RefreshMeRS() {
		CloseDoopidPopup();
		setTimeout(LetThereBeRobberies, 4000);
		document.getElementById($V6gtjjjOaDsPs6mTM8a(395)).click()
	}
	function RobbingWatchdog() {
		clearTimeout(g.RHangCHKInterval);
		g.RobbingHung = false;
		TravelRobbing();
		setTimeout(LetThereBeRobberies, 5000);
		return
	}
	function TravelRobbing() {
		do_ajax("inner_page", $V6gtjjjOaDsPs6mTM8a(35) + g.evilCity + $V6gtjjjOaDsPs6mTM8a(396), 1, 1, 0, 0)
	}
	function RefreshMe() {
		try {
			var M = document.evaluate($V6gtjjjOaDsPs6mTM8a(34), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			if (M.snapshotLength >= 1) {
				clearTimeout(g.RHangCHKInterval);
				g.RobbingHung = false;
				CloseDoopidPopup();
				setTimeout(LetThereBeRobberies, 4000);
				document.getElementById($V6gtjjjOaDsPs6mTM8a(395)).click()
			} else {
				if (g.RobbingHung) {
					robTheBoard();
					setTimeout(RefreshMe, 5000)
				}
			}
		} catch (N) {}
		
	}
	function resetfightaction() {
		g.fightActionRunning = false;
		closeFightPop()
	}
	function display_appstore() {
		try {
			if (document.getElementById($V6gtjjjOaDsPs6mTM8a(386))) {
				document.getElementById($V6gtjjjOaDsPs6mTM8a(301)).removeChild(document.getElementById($V6gtjjjOaDsPs6mTM8a(386)))
			}
		} catch (e) {}
		
		var b = $V6gtjjjOaDsPs6mTM8a(397),
		d = 500,
		i;
		for (i = 0; i < h.length; i++) {
			if (i % 2 == 0) {
				b += "<tr>"
			} else {
				b += $V6gtjjjOaDsPs6mTM8a(33)
			}
			b += $V6gtjjjOaDsPs6mTM8a(398) + h[i].image + $V6gtjjjOaDsPs6mTM8a(32) + h[i].vendor + $V6gtjjjOaDsPs6mTM8a(399) + (i + 1) + ".&nbsp;" + h[i].name + $V6gtjjjOaDsPs6mTM8a(31) + h[i].description + $V6gtjjjOaDsPs6mTM8a(400);
			if (h[i].isinstalled == 2) {
				b += $V6gtjjjOaDsPs6mTM8a(30) + i + $V6gtjjjOaDsPs6mTM8a(401) + g.images.autostart + $V6gtjjjOaDsPs6mTM8a(29)
			} else {
				if (h[i].isinstalled == true) {
					b += $V6gtjjjOaDsPs6mTM8a(30) + i + $V6gtjjjOaDsPs6mTM8a(401) + g.images.installed + $V6gtjjjOaDsPs6mTM8a(29)
				} else {
					if (h[i].isvip && !g.is_vip) {
						b += $V6gtjjjOaDsPs6mTM8a(402) + g.images.viponly + $V6gtjjjOaDsPs6mTM8a(29)
					} else {
						b += $V6gtjjjOaDsPs6mTM8a(28) + i + $V6gtjjjOaDsPs6mTM8a(401) + g.images.disabled + $V6gtjjjOaDsPs6mTM8a(29)
					}
				}
			}
		}
		b += $V6gtjjjOaDsPs6mTM8a(403);
		myPop($V6gtjjjOaDsPs6mTM8a(27), $V6gtjjjOaDsPs6mTM8a(404), b, d, "440");
		var M = document.getElementsByClassName("toggle_app");
		for (var r = 0; r < M.length; r++) {
			document.getElementsByClassName("toggle_app")[r].onclick = toggle_app
		}
	}
	function toggle_app() {
		var M = parseInt(this.id);
		if (h[M].isvip && !g.is_vip) {
			return
		}
		if (h[M].isinstalled == 2) {
			h[M].isinstalled = false;
			document.getElementsByClassName("toggle_app")[M].innerHTML = '<img src="' + g.images.disabled + '">';
			document.getElementsByClassName("toggle_app")[M].setAttribute("style", $V6gtjjjOaDsPs6mTM8a(26))
		} else {
			if (h[M].isinstalled == true) {
				h[M].isinstalled = 2;
				document.getElementsByClassName("toggle_app")[M].innerHTML = '<img src="' + g.images.autostart + '">';
				document.getElementsByClassName("toggle_app")[M].setAttribute("style", $V6gtjjjOaDsPs6mTM8a(26))
			} else {
				h[M].isinstalled = true;
				document.getElementsByClassName("toggle_app")[M].innerHTML = '<img src="' + g.images.installed + '">';
				document.getElementsByClassName("toggle_app")[M].setAttribute("style", $V6gtjjjOaDsPs6mTM8a(26))
			}
		}
		save_app_settings();
		A()
	}
	function save_app_settings() {
		var M = new Array();
		for (var i = 0; i < h.length; i++) {
			M[i] = h[i].isinstalled
		}
		localStorage.setItem($V6gtjjjOaDsPs6mTM8a(405), JSON.stringify(M))
	}
	function G() {
		var i;
		if (!localStorage.getItem($V6gtjjjOaDsPs6mTM8a(405))) {
			save_app_settings()
		} else {
			var M = JSON.parse(localStorage.getItem($V6gtjjjOaDsPs6mTM8a(405)));
			for (i = 0; i < M.length; i++) {
				h[i].isinstalled = M[i]
			}
			if (h.length > M.length) {
				save_app_settings()
			}
		}
	}
	function update_user_scores() {
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(279))) {
			var M = g.user;
			document.getElementById($V6gtjjjOaDsPs6mTM8a(25)).innerHTML = M.group_atk;
			document.getElementById($V6gtjjjOaDsPs6mTM8a(406)).innerHTML = M.group_def;
			var N = parseInt(parseInt(M.group_atk.replace($V6gtjjjOaDsPs6mTM8a(380), "")) - parseInt(M.start_group_atk.replace($V6gtjjjOaDsPs6mTM8a(380), ""))),
			O = document.getElementById($V6gtjjjOaDsPs6mTM8a(24));
			if (N >= 0) {
				O.innerHTML = "\x2b" + N;
				O.className = "good"
			} else {
				if (N < 0) {
					O.innerHTML = N;
					O.className = "bad"
				}
			}
			var P = parseInt(parseInt(M.group_def.replace($V6gtjjjOaDsPs6mTM8a(380), "")) - parseInt(M.start_group_def.replace($V6gtjjjOaDsPs6mTM8a(380), ""))),
			Q = document.getElementById($V6gtjjjOaDsPs6mTM8a(407));
			if (P >= 0) {
				Q.innerHTML = "\x2b" + P;
				Q.className = "good"
			} else {
				if (P < 0) {
					Q.innerHTML = P;
					Q.className = "bad"
				}
			}
		}
	}
	function H() {
		var M = this.id;
		rivalindex = $V6gtjjjOaDsPs6mTM8a(23).exec(M)[1];
		if (g.settings.customRivals[rivalindex] == 1) {
			document.getElementById(M).setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
			document.getElementById(M).innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
			g.settings.customRivals[rivalindex] = 0;
			writeSettings()
		} else {
			document.getElementById(M).setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
			document.getElementById(M).innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
			g.settings.customRivals[rivalindex] = 1;
			writeSettings()
		}
	}
	function I() {
		var M = this.id;
		rivalindex = $V6gtjjjOaDsPs6mTM8a(408).exec(M)[1];
		if (g.settings.customRivals[rivalindex] == 1) {
			document.getElementById(M).setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
			document.getElementById(M).innerHTML = $V6gtjjjOaDsPs6mTM8a(22);
			g.settings.customRivals[rivalindex] = 0;
			writeSettings()
		} else {
			document.getElementById(M).setAttribute("class", $V6gtjjjOaDsPs6mTM8a(283));
			document.getElementById(M).innerHTML = $V6gtjjjOaDsPs6mTM8a(22);
			g.settings.customRivals[rivalindex] = 1;
			writeSettings()
		}
	}
	function J() {
		var M = document.getElementsByClassName("action");
		for (i = 0; i < M.length; i++) {
			if (!M[i].firstElementChild) {
				if ($V6gtjjjOaDsPs6mTM8a(353).test(M[i].parentNode.firstElementChild.innerHTML)) {
					var j = 10;
					if (g.settings.customRivals[0] == 1) {
						M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(409) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
					} else {
						M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(21) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
					}
					document.getElementById($V6gtjjjOaDsPs6mTM8a(410)).onclick = H;
					i++;
					while (i < M.length && M[i].firstElementChild) {
						M[i].setAttribute("style", "width:200px");
						if (g.settings.customRivals[j] == 1) {
							M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(20) + j + $V6gtjjjOaDsPs6mTM8a(411) + M[i].innerHTML
						} else {
							M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(19) + j + $V6gtjjjOaDsPs6mTM8a(411) + M[i].innerHTML
						}
						document.getElementById($V6gtjjjOaDsPs6mTM8a(412) + j).onclick = I;
						j++;
						i++
					}
					i--
				} else {
					if ($V6gtjjjOaDsPs6mTM8a(354).test(M[i].parentNode.firstElementChild.innerHTML)) {
						var j = 20;
						if (g.settings.customRivals[1] == 1) {
							M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(18) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
						} else {
							M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(413) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
						}
						document.getElementById($V6gtjjjOaDsPs6mTM8a(17)).onclick = H;
						i++;
						while (i < M.length && M[i].firstElementChild) {
							M[i].setAttribute("style", "width:200px");
							if (g.settings.customRivals[j] == 1) {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(20) + j + $V6gtjjjOaDsPs6mTM8a(411) + M[i].innerHTML
							} else {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(19) + j + $V6gtjjjOaDsPs6mTM8a(411) + M[i].innerHTML
							}
							document.getElementById($V6gtjjjOaDsPs6mTM8a(412) + j).onclick = I;
							j++;
							i++
						}
						i--
					} else {
						if ($V6gtjjjOaDsPs6mTM8a(76).test(M[i].parentNode.firstElementChild.innerHTML)) {
							if (g.settings.customRivals[2] == 1) {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(414) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
							} else {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(16) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
							}
							document.getElementById($V6gtjjjOaDsPs6mTM8a(415)).onclick = H
						} else {
							if (g.settings.customRivals[3] == 1) {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(15) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
							} else {
								M[i].innerHTML = $V6gtjjjOaDsPs6mTM8a(416) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287)
							}
							document.getElementById($V6gtjjjOaDsPs6mTM8a(14)).onclick = H
						}
					}
				}
			}
		}
	}
	$("body").ajaxComplete(function (e, M, N) {
		if (g.is_vip) {
			if (document.evaluate($V6gtjjjOaDsPs6mTM8a(142), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
				J()
			}
		}
		var O = M.responseText;
		if ($V6gtjjjOaDsPs6mTM8a(417).test(O)) {
			local_xw_sig = $V6gtjjjOaDsPs6mTM8a(417).exec(O)[1]
		}
		if (g.ajax) {
			g.ajax = false;
			return
		}
		if (g.fightActionRunning) {
			g.fightActionRunning = false;
			clearTimeout(g.fightwatchdogtimout)
		}
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(73))) {
			parseNewFightResults(O)
		}
		if (document.evaluate($V6gtjjjOaDsPs6mTM8a(364), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
			g.hitlist = true
		} else {
			if (g.hitlist) {
				g.hitlist = false
			}
		}
		var P = 0;
		if (g.settings.jobsOn != false) {
			if (document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(13)).length > 0) {
				document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(418))[0].click()
			}
			if (document.evaluate($V6gtjjjOaDsPs6mTM8a(12), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0) {
				g.NYjobon = true
			} else {
				if (g.NYjobon) {
					g.NYjobon = false
				}
			}
			if (document.evaluate($V6gtjjjOaDsPs6mTM8a(330), document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > 0 && document.getElementsByClassName("buy_prompt").length == 0) {
				g.ILVjobon = true
			} else {
				if (g.ILVjobon) {
					g.ILVjobon = false
				}
			}
			var Q = O.replace($V6gtjjjOaDsPs6mTM8a(419), "");
			if ($V6gtjjjOaDsPs6mTM8a(11).test(Q)) {
				P = $V6gtjjjOaDsPs6mTM8a(420).exec(Q)[1];
				if (P == 100 && g.settings.jobsOn != 2) {
					C()
				}
			}
			if ($V6gtjjjOaDsPs6mTM8a(10).test(O) || $V6gtjjjOaDsPs6mTM8a(421).test(O) || $V6gtjjjOaDsPs6mTM8a(9).test(O)) {
				if ($V6gtjjjOaDsPs6mTM8a(10).test(O)) {
					g.Bjobid = $V6gtjjjOaDsPs6mTM8a(422).exec(O)[1]
				}
				if ($V6gtjjjOaDsPs6mTM8a(421).test(O)) {
					g.Bjobid = $V6gtjjjOaDsPs6mTM8a(8).exec(O)[1]
				}
				if ($V6gtjjjOaDsPs6mTM8a(9).test(O)) {
					g.Bjobid = $V6gtjjjOaDsPs6mTM8a(423).exec(O)[1]
				}
				g.Bjobon = true
			} else {
				if (g.Bjobon) {
					g.Bjobon = false
				}
			}
			if ($V6gtjjjOaDsPs6mTM8a(7).test(O)) {
				P = $V6gtjjjOaDsPs6mTM8a(424).exec(O)[1];
				if (P == 100 && g.settings.jobsOn != 2) {
					C()
				}
			}
		}
		if (g.declaring_war == true && $V6gtjjjOaDsPs6mTM8a(6).test(O)) {
			if ($V6gtjjjOaDsPs6mTM8a(425).test(O)) {
				setTimeout(function () {
					declare_war(null)
				}, 0)
			} else {
				if ($V6gtjjjOaDsPs6mTM8a(5).test(O)) {
					setTimeout(function () {
						fP(null)
					}, 0)
				} else {
					if ($V6gtjjjOaDsPs6mTM8a(426).test(O)) {
						g.declaring_war = false
					} else {
						if ($V6gtjjjOaDsPs6mTM8a(4).test(O) || $V6gtjjjOaDsPs6mTM8a(427).test(O)) {
							setTimeout(function () {
								declare_war(null)
							}, 0)
						} else {
							setTimeout(function () {
								var R = $V6gtjjjOaDsPs6mTM8a(324).exec(document.getElementsByClassName($V6gtjjjOaDsPs6mTM8a(3))[0].getAttribute("onclick"))[1];
								MW.Feed(postFeedAndSendCallForHelpNew);
								$($V6gtjjjOaDsPs6mTM8a(428)).css("display", "none");
								MW.Popup.hideAndRemove(R);
								g.declaring_war = false
							}, 1500);
							document.getElementById("EvilOnOff").setAttribute("class", $V6gtjjjOaDsPs6mTM8a(148));
							document.getElementById("EvilOnOff").innerHTML = $V6gtjjjOaDsPs6mTM8a(146) + g.images.evil_icon + $V6gtjjjOaDsPs6mTM8a(287);
							g.evilOn = false
						}
					}
				}
			}
			return
		}
		if (($V6gtjjjOaDsPs6mTM8a(2).test(O))) {
			var b = eval("\x28" + O + "\x29");
			g.user.group_atk = b.fightbar.group_atk;
			g.user.group_def = b.fightbar.group_def;
			if (g.user.firstRun == true) {
				g.user.start_group_atk = b.fightbar.group_atk.replace($V6gtjjjOaDsPs6mTM8a(380), "");
				g.user.start_group_def = b.fightbar.group_def.replace($V6gtjjjOaDsPs6mTM8a(380), "");
				g.user.firstRun = false
			}
			update_user_scores()
		}
	});
	function K() {
		k();
		G();
		if (!localStorage.getItem($V6gtjjjOaDsPs6mTM8a(368))) {
			g.umwavoidlist[0] = "p|24627687";
			localStorage.setItem($V6gtjjjOaDsPs6mTM8a(368), JSON.stringify(g.umwavoidlist))
		} else {
			g.umwavoidlist = JSON.parse(localStorage.getItem($V6gtjjjOaDsPs6mTM8a(368)))
		}
		readSettings();
		B();
		if (g.settings.stamOn == true || g.settings.stamOn == 2) {
			g.fightInterval = setInterval(Fighter, g.settings.FighterInt)
		}
		if ((g.settings.healOn == true) || (g.settings.healOn == "red")) {
			g.healInterval = setInterval(DoAutoHeal, 2000)
		}
		if (g.settings.jobsOn == true || g.settings.jobsOn == 2) {
			g.energyInterval = setInterval(Jobber, 1000)
		}
		if (g.settings.slayerOn == true) {
			if (g.settings.slayerMode == 0) {
				g.evilInterval = setInterval(Fightlist, 5000);
				g.evilOn = true
			} else {
				if (g.settings.slayerMode == 1) {
					g.evilInterval = setInterval(Rivals, 5000);
					g.evilOn = true
				} else {
					if (g.settings.slayerMode == 2) {
						setTimeout(LetThereBeRobberies, 3000);
						g.evilOn = true
					}
				}
			}
		}
		setInterval(B, 10000);
		setTimeout(KillStupidPop, 10000);
		for (var i = 0; i < h.length; i++) {
			if (h[i].isinstalled == 2) {
				var M = h[i].url,
				a = document.createElement("script");
				a.type = $V6gtjjjOaDsPs6mTM8a(112);
				a.src = M + "\x3f" + Math.random();
				document.getElementsByTagName("head")[0].appendChild(a)
			}
		}
	}
	if (document.getElementById($V6gtjjjOaDsPs6mTM8a(111))) {
		return
	} else {
		K()
	}
	function KillStupidPop() {
		if ($($V6gtjjjOaDsPs6mTM8a(429)).css("display") == "block") {
			$($V6gtjjjOaDsPs6mTM8a(429)).css("display", "none")
		}
	}
	function writeSettings() {
		if (localStorage.getItem("scriptumw")) {
			localStorage.setItem($V6gtjjjOaDsPs6mTM8a(1), JSON.stringify(g.settings))
		} else {
			g.settings.healat = 5000;
			g.settings.FighterInt = 333
		}
	}
	function readSettings() {
		if (!localStorage.getItem($V6gtjjjOaDsPs6mTM8a(1)) || !localStorage.getItem("scriptumw")) {
			writeSettings()
		} else {
			tempsettings = JSON.parse(localStorage.getItem($V6gtjjjOaDsPs6mTM8a(1)));
			if (Object.keys(tempsettings).length != Object.keys(g.settings).length) {
				writeSettings()
			} else {
				g.settings = tempsettings
			}
		}
	}
	function L(M, N) {
		N = N || document;
		return document.evaluate(M, N, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
	}
	HTMLElement.prototype.click = function () {
		$(this).click()
	};
	function familyMember(M, N) {
		this.pid = M;
		this.stat = N
	}
	function decodeID(M) {
		M = unescape(M);
		if (isNaN(M)) {
			M = decode64(M)
		}
		return M
	}
	function decode64(M) {
		var N = "",
		O,
		P,
		Q = "",
		R,
		S,
		T,
		U = "",
		i = 0,
		V = $V6gtjjjOaDsPs6mTM8a(430);
		if (V.exec(M)) {}
		
		M = M.replace($V6gtjjjOaDsPs6mTM8a(430), "");
		do {
			R = g.keyStr.indexOf(M.charAt(i++));
			S = g.keyStr.indexOf(M.charAt(i++));
			T = g.keyStr.indexOf(M.charAt(i++));
			U = g.keyStr.indexOf(M.charAt(i++));
			O = (R << 2) | (S >> 4);
			P = ((S & 15) << 4) | (T >> 2);
			Q = ((T & 3) << 6) | U;
			N = N + String.fromCharCode(O);
			if (T != 64) {
				N = N + String.fromCharCode(P)
			}
			if (U != 64) {
				N = N + String.fromCharCode(Q)
			}
			O = P = Q = "";
			R = S = T = U = ""
		} while (i < M.length);
		return N
	}
	function isFightPopOpen() {
		if (document.getElementById($V6gtjjjOaDsPs6mTM8a(0))) {
			if (document.getElementById($V6gtjjjOaDsPs6mTM8a(0)).style.display != "none") {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
	function closeFightPop() {
		g.ajax = true;
		g.closing = false;
		CloseJS()
	}
	function CloseDoopidPopup() {
		if ($(".pop_bg").length > 0) {
			$(".pop_bg").each(function () {
				var M = this.id;
				MW.Popup.hide(M.substr(M.lastIndexOf("\x5f") + 1))
			})
		}
	}
	Array.prototype.isAvoid = function (M) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == M) {
				return true
			}
		}
		return false
	};
};
injectScript(myscript);

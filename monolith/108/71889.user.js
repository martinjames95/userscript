﻿// ==UserScript==
// @name           Feuerwache.net Fahrzeugvorschlaege modifyed by MisteryMan
// @namespace      http://userscripts.org/users/71889
// @description    aangepast voor alarmeringen die kloppen met nederlandse procedures
// @include        http://www.feuerwache.net/*
// @author         sawos
// @info           Hilfestellung über Mailfunktion im Spiel erhältlich,
// @version        2010-03-10 09:45
// ==/UserScript==

/*
  FAQ:
  - kann ich meine eigene AAO sichern, damit ich nach dem Update nicht alles neu machen muss?
    kopiere unten alles zwischen "KOPIEREN AB HIER" und "KOPIEREN BIS HIER" in eine leere
    Textdatei und nach dem Update überschreibst Du damit meine Zuordnungen wieder.
    
  - kann man die Häkchen bei den Verbandeinsätzen auch standardmäßig setzen?
    -> Nein, weil im Verband seltener komplette Einsätze bearbeitet werden, sondern
       meist nur einzelne Sonder-FZ gefordert sind.
       
*/


// Anzahl der Spalten in der Verfügbar-Anzeige.
var MAXSPALTENVERFUEGBAR=99;

// ******************************************************************************************
// ACHTUNG!
// Die Variablen UPDATEURL und INSTALLURL müssen angepasst werden, wenn Du das Script 
// anpasst (z.B. AAO änderst) und erneut veröffentlichst. S.a. Beschreibung unter
// http://userscripts.org/scripts/show/50002
// ******************************************************************************************

// soll täglich nach einem Update des AAO-Scriptes gesucht werden?
var CHECKFORUPDATES=true;
// unter welchem URL finde ich Infos über das Script?
var UPDATEURL="http://userscripts.org/scripts/show/71889";
// unter welchem URL finde ich das Script als Installation?
var INSTALLURL="http://userscripts.org/scripts/source/71889.user.js";

// ******************************************************************************************
// AAO KOPIEREN AB HIER //

var Einsatzklassen = {
  // hier die Einsatzstichworte einer Einsatzklasse und zusätzlichen Fahrzeugen zuordnen
  // Es werden später alle Fahrzeuge vorgeschlagen, die der Einsatzklasse angehören
  // (z.B. 3xLF bei "Feuer3") sowie alle hier zusätzlich genannten Fahrzeuge
  //
  // Syntax in der Alarmierungsliste:
  //   Einsatzklasse zuerst, dann ggf. ein Plus (+) und weiter Fahrzeugklassen, diese 
  //   durch Komma (,) voneinander getrennt. Alternativen durch Schrägstrich (/) getrennt
  //   Optionale Fahrzeuge (werden nur in der Liste hervorgehoben) mit Pipe (|) anfügen
  //   zum Beispiel 'F1+RW/TS,ELW|GW-M,DL' ->
  //       alarmiere alles nach F1, zusätzlich einen RW oder LF16-TS, sowie einen ELW.
  //       markiere zusätzlich den nächsten GW-M sowie die nächste DL
  //
  'Auffahrunfall'               : 'F1',
  'Baum auf Auto'               : 'F1',
  'Baum auf Dach'               : 'F1+DL',
  'Baum auf Straße'             : 'F1',
  'Brand in Autohaus'           : 'F2',
  'Brand in Briefkasten'        : 'F1',
  'Brand in Druckerei'          : 'F2,5+DL',
  'Brand in KFZ-Werkstatt'      : 'F2',
  'Brand in Lackfabrik'         : 'F4|GW-G,GW-M',
  'Brand in Schule'             : 'F2',
  'Brand in Spedition'          : 'F2,5',
  'Brand in Sporthalle'         : 'F2,5+DL',
  'Brand in Zugdepot'           : 'F2,5+DL',
  'Brand im Baumarkt'           : 'F4+RW',
  'Brand im Sägewerk'           : 'F2,5+DL',
  'Brand im Supermarkt'         : 'F2+DL',
  'Brennende Bäume'             : 'F1',
  'Brennende S-Bahn'            : 'F2+GW-S',
  'Brennende Telefonzelle'      : 'F1',
  'Brennender LKW'              : 'F1',
  'Brennender Müllwagen'        : 'F1',
  'Brennender PKW'              : 'F1',
  'Brennender Sicherungskasten' : 'F1',
  'Brennendes Gras'             : 'F1',
  'Chemieunfall (an Schule)'    : 'F2+DL',
  'Chlorgas Alarm (Schwimmbad)' : 'F2+DL',
  'Container Brand'             : 'F1',
  'Dachstuhlbrand'              : 'F1+DL',
  'Fahrstuhl - Türöffnung'      : 'TH1',
  'Feldbrand'                   : 'F1',
  'Fettbrand in Pommesbude'     : 'F2',
  'Feuer im Altenheim'          : 'F2+DL',
  'Feuer im Laubhaufen'         : 'F1',
  'Gartenlaubenbrand'           : 'F1',
  'Gastronomiebrand'            : 'F2+DL',
  'Gewerbebrand'                : 'F2,5+DL',
  'Kellerbrand'                 : 'F2',
  'Keller unter Wasser'         : 'F1',
  'Kinobrand'                   : 'F2,5+DL',
  'Kleiner Waldbrand'           : 'F1',
  'Motorrad-Brand'              : 'F1',
  'Mülleimer Brand'             : 'F1',
  'Ölspur'                      : 'F1+GW-Öl',
  'Person im Fluss'             : 'LF,GW-T',
  'Scheunenbrand'               : 'F2',
  'Schornsteinbrand'            : 'F2+DL',
  'Schuppenbrand'               : 'F2',
  'Silobrand'                   : 'F2',
  'Sperrmüllbrand'              : 'F1',
  'Strohballen Brand'           : 'F2',
  'Traktorbrand'                : 'F1',
  'Verkehrsunfall'              : 'F1+RW',
  'Wohnblockbrand'              : 'F3',
  'Wohnungsbrand'               : 'F2+DL',
  'Wohnwagenbrand'              : 'F1',
  'Brand auf Weihnachtsmarkt'      : 'F2',
  'Brand-Weihnachtsbaum in Kirche' : 'F3',
};
  
var Einsatzklasse_Fahrzeugzuordnung = {
  // hier wird definiert, welche Fahrzeuge standardmäßig zu den verschiedenen
  // Einsatzklassen geschickt werden. Einzelne Fahrzeuge werden durch Komma (,)
  // getrennt, Alternativen durch (/).
  // !!!ACHTUNG: HIER KEINE OPTIONALEN FAHRZEUGE (|) EINTRAGEN!!!

  'NEUNEU'  :  'LF',
  'undef':  'LF',
  'F1'   :  'LF',
  'F2'   :  'LF,LF',
  'F2,5' :  'LF,LF,LF',
  'F3'   :  'LF,LF,LF/TLF,ELW',
  'F4'   :  'LF,LF,LF,LF/TLF,DL,ELW,GW-A',
  'TH1'  :  'RW',
  'TH2'  :  'RW,LF',
  'GSG'  :  'LF,LF,LF,LF/TLF,RW,ELW,GW-M,GW-G',
};
// KOPIEREN BIS HIER //
// ******************************************************************************************











  


//
// usually no need to change anything below this line
//




var Fahrzeugklassen = {
  // hier die verfügbaren Fahrzeugen mit ihrer Beschreibung und der Zuordnung 
  // zu einer Fahrzeugklasse auflisten. 
  // in der gleichen Reihenfolge, wie hier die Fahrzeugklassen aufgeführt sind,
  // werden sie auch in der Verfügbarkeits-Anzeige der Einsatzinfobox angezeigt.
  'RTW'                :   'RTW'       ,
  'LF 10/6'            :   'LF'        ,
  'LF 20/16'           :   'LF'        ,
  'LF 8'               :   'LF'        ,
  'Kleinlöschfahrzeug' :   'LF'        ,
  'TLF 20/40 - SL'     :   'TLF'       ,
  'DLA (K) 23/12'      :   'DL'        ,
  '(DLA (K) 23 / 12)'  :   'DL'        ,
  'ELW 1'              :   'ELW'       ,
  'LF 16-TS'           :   'TS'        ,
  'RW'                 :   'RW'        ,
  'GW-A'               :   'GW-A'      ,
  'GW-L2 - Wasser'     :   'GW-L2'     ,
  'GW-Öl'              :   'GW-Öl'     ,
  'GW-Schiene'         :   'GW-S'      ,
  'GW-Taucher'         :   'GW-T'      ,
  'GW-Gefahrgut'       :   'GW-G'      ,
  'GW-Messtechnik'     :   'GW-M'      ,
};

var Fahrzeuggeschwindigkeiten = {
  'RTW'                :   75     ,
  'LF 10/6'            :   58     ,
  'LF 20/16'           :   60     ,
  'LF 8'               :   48     ,
  'Kleinlöschfahrzeug' :   60     ,
  'TLF 20/40 - SL'     :   49     ,
  'DLA (K) 23/12'      :   63     ,
  'ELW 1'              :   77     ,
  'LF 16-TS'           :   52     ,
  'RW'                 :   49     ,
  'GW-A'               :   56     ,
  'GW-L2 - Wasser'     :   53     ,
  'GW-Öl'              :   51     ,
  'GW-Schiene'         :   57     ,
  'GW-Gefahrgut'       :   46     ,
  'GW-Messtechnik'     :   40     ,
  'GW-Taucher'         :   62     ,
};

var Nachforderungen = {
/*
  an alle Script-Anpasser:
  die Erkennung von Nachforderungen wurde überarbeitet, so dass nun die große Liste nicht mehr nötig ist.
  Die Erkennung läuft nun so, dass automatisch eine Nachforderung erkannt wird, wenn die exakte Beschreibung
  des Fahrzeuges (also z.B. "DLA (K) 23/12" und nicht nur "DL") in einer Rückmeldung von der Einsatzstelle
  erscheint. Der RW wird da auch richtig erkannt, weil auf Groß/Kleinschreibung geachtet wird, also eine Meldung
  "...für erweiterte Hilfeleistung..." wird da nicht als RW-Anforderung bewertet.
  
  Da die Rückmeldungstexte beim GW-L2-Wasser uneinheitlich sind, müssen diese weiterhin hier in der Liste
  aufgeführt werden.
*/
  "Hier muss Wasser über weite Wegstrecken transportiert werden. Wir benötigen einen GW-L2 Wasser." : "GW-L2",
  "Das Feuer ist weiter ausserhalb und alle Wasserreserven sind aufgebraucht. Wir brauchen einen GW-L2 -Wasser um weitere Schläuche verlegen zu können." : "GW-L2",
};

var WikiLinks = {
  'Auffahrunfall'                  : 'http://wiki.feuerwache.net/wiki/Auffahrunfall',
  'Baum auf Auto'                  : 'http://wiki.feuerwache.net/wiki/Baum_auf_Auto',
  'Baum auf Dach'                  : 'http://wiki.feuerwache.net/wiki/Baum_auf_Dach',
  'Baum auf Straße'                : 'http://wiki.feuerwache.net/wiki/Baum_auf_Stra%C3%9Fe',
  'Brand in Autohaus'              : 'http://wiki.feuerwache.net/wiki/Brand_in_Autohaus',
  'Brand in Briefkasten'           : 'http://wiki.feuerwache.net/wiki/Brand_in_Briefkasten',
  'Brand im Baumarkt'              : 'http://wiki.feuerwache.net/wiki/Brand_im_Baumarkt',
  'Brand in Druckerei'             : 'http://wiki.feuerwache.net/wiki/Brand_in_Druckerei',
  'Brand in KFZ-Werkstatt'         : 'http://wiki.feuerwache.net/wiki/Brand_in_KFZ-Werkstatt',
  'Brand in Lackfabrik'            : 'http://wiki.feuerwache.net/wiki/Brand_in_Lackfabrik',
  'Brand im Sägewerk'              : 'http://wiki.feuerwache.net/wiki/Brand_im_S%C3%A4gewerk',
  'Brand im Supermarkt'            : 'http://wiki.feuerwache.net/wiki/Brand_im_Supermarkt',
  'Brand in Schule'                : 'http://wiki.feuerwache.net/wiki/Brand_in_Schule',
  'Brand in Spedition'             : 'http://wiki.feuerwache.net/wiki/Brand_in_Spedition',
  'Brand in Sporthalle'            : 'http://wiki.feuerwache.net/wiki/Brand_in_Sporthalle',
  'Brand in Zugdepot'              : 'http://wiki.feuerwache.net/wiki/Brand_im_Zugdepot',
  'Brennende Bäume'                : 'http://wiki.feuerwache.net/wiki/Brennende_B%C3%A4ume',
  'Brennende S-Bahn'               : 'http://wiki.feuerwache.net/wiki/Brennende_S-Bahn',
  'Brennende Telefonzelle'         : 'http://wiki.feuerwache.net/wiki/Brennende_Telefonzelle',
  'Brennender LKW'                 : 'http://wiki.feuerwache.net/wiki/Brennender_LKW',
  'Brennender Müllwagen'           : 'http://wiki.feuerwache.net/wiki/Brennender_M%C3%BCllwagen',
  'Brennender PKW'                 : 'http://wiki.feuerwache.net/wiki/Brennender_PKW',
  'Brennender Sicherungskasten'    : 'http://wiki.feuerwache.net/wiki/Brennender_Sicherungskasten',
  'Brennendes Gras'                : 'http://wiki.feuerwache.net/wiki/Brennendes_Gras',
  'Chemieunfall (an Schule)'       : 'http://wiki.feuerwache.net/wiki/Chemieunfall_%28an_Schule%29',
  'Chlorgas Alarm (Schwimmbad)'    : 'http://wiki.feuerwache.net/wiki/Chlorgas_Alarm_%28Schwimmbad%29',
  'Container Brand'                : 'http://wiki.feuerwache.net/wiki/Containerbrand',
  'Dachstuhlbrand'                 : 'http://wiki.feuerwache.net/wiki/Dachstuhlbrand',
  'Fahrstuhl - Türöffnung'         : 'http://wiki.feuerwache.net/wiki/Fahrstuhl-T%C3%BCr%C3%B6ffnung',
  'Feldbrand'                      : 'http://wiki.feuerwache.net/wiki/Feldbrand',
  'Fettbrand in Pommesbude'        : 'http://wiki.feuerwache.net/wiki/Fettbrand_in_Pommesbude',
  'Feuer im Altenheim'             : 'http://wiki.feuerwache.net/wiki/Feuer_im_Altenheim',
  'Feuer im Laubhaufen'            : 'http://wiki.feuerwache.net/wiki/Feuer_im_Laubhaufen',
  'Gartenlaubenbrand'              : 'http://wiki.feuerwache.net/wiki/Gartenlaubenbrand',
  'Gastronomiebrand'               : 'http://wiki.feuerwache.net/wiki/Gastronomiebrand',
  'Gewerbebrand'                   : 'http://wiki.feuerwache.net/wiki/Gewerbebrand',
  'Kellerbrand'                    : 'http://wiki.feuerwache.net/wiki/Kellerbrand',
  'Keller unter Wasser'            : 'http://wiki.feuerwache.net/wiki/Keller_unter_Wasser',
  'Kinobrand'                      : 'http://wiki.feuerwache.net/wiki/Kinobrand',
  'Kleiner Waldbrand'              : 'http://wiki.feuerwache.net/wiki/Kleiner_Waldbrand',
  'Motorrad-Brand'                 : 'http://wiki.feuerwache.net/wiki/Motorradbrand',
  'Mülleimer Brand'                : 'http://wiki.feuerwache.net/wiki/M%C3%BClleimerbrand',
  'Ölspur'                         : 'http://wiki.feuerwache.net/wiki/%C3%96lspur',
  'Person im Fluss'                : 'http://wiki.feuerwache.net/wiki/Person_im_Fluss',
  'Scheunenbrand'                  : 'http://wiki.feuerwache.net/wiki/Scheunenbrand',
  'Schornsteinbrand'               : 'http://wiki.feuerwache.net/wiki/Schornsteinbrand',
  'Schuppenbrand'                  : 'http://wiki.feuerwache.net/wiki/Schuppenbrand',
  'Silobrand'                      : 'http://wiki.feuerwache.net/wiki/Silobrand',
  'Sperrmüllbrand'                 : 'http://wiki.feuerwache.net/wiki/Sperrm%C3%BCllbrand',
  'Strohballen Brand'              : 'http://wiki.feuerwache.net/wiki/Strohballen_Brand',
  'Traktorbrand'                   : 'http://wiki.feuerwache.net/wiki/Traktorbrand',
  'Verkehrsunfall'                 : 'http://wiki.feuerwache.net/wiki/Verkehrsunfall',
  'Wohnblockbrand'                 : 'http://wiki.feuerwache.net/wiki/Wohnblockbrand',
  'Wohnungsbrand'                  : 'http://wiki.feuerwache.net/wiki/Wohnungsbrand',
  'Wohnwagenbrand'                 : 'http://wiki.feuerwache.net/wiki/Wohnwagenbrand',
  'Brand auf Weihnachtsmarkt'      : 'http://wiki.feuerwache.net/wiki/Brand_auf_Weihnachtsmarkt',
  'Brand-Weihnachtsbaum in Kirche' : 'http://wiki.feuerwache.net/wiki/Brand-Weihnachtsbaum_in_Kirche',
};

//
// really no need to change anything below
//





















//
// ...unless you know what you do...
//


var ToAlarm = new Array;
var Optional = new Array;
var Unterwegs = new Array;
var AmOrt = new Array;
var AufAnfahrt = new Array;
var Wartend = new Array;
var NichtVerf = new Array;
var ichBins;
var FirstRun=true;
var CBClicked=false;
var debugging;
var machVorschlag=true;
var zweiterAbmarsch=GM_getValue("zweiterAbmarsch",0);
var AlleGleich;
var showInfoKlasseInListe;
var showInfoStichwort,InfotextStichwort;
var showInfoKlasse,InfotextKlasse;
var showInfoKlassenalarm,InfotextKlassenalarm;
var showInfoKlassenalarmOpt,InfotextKlassenalarmOpt;
var showInfoRTW,InfotextRTW;
var showInfoUnterwegs,InfotextUnterwegs;
var showInfoNachforderungen,InfotextNachforderungen;
var showInfoToAlarm,InfotextToAlarm;
var showInfoFahrzeit,InfotextFahrzeit;
var showInfoFahrzeitOpt,InfotextFahrzeitOpt;
var showInfoNichtVerfuegbar,InfotextNichtVerfuegbar;
var showInfoVerfuegbar,InfotextVerfuegbar;
var ScriptUpdateAvailable="";
var adr = document.location.href;

init();
main();

function main()
{ 
  mylog("main\nadr=" + adr);
  
  ichBins = true;
  
  if (adr == "http://www.feuerwache.net/feuerwehr-einsaetze")
  { bearbeiteÜbersichtsseite(); }
  else if (adr == "http://www.feuerwache.net/feuerwehrleitstelle")
  { bearbeiteLeitstelle(); }
  else if (adr == "http://www.feuerwache.net/feuerwehrfahrzeuge")
  { bearbeiteFahrzeugliste(); }
  else if (adr == "http://www.feuerwache.net/feuerwachen")
  { bearbeiteFeuerwachenliste(); }
  else if (adr == "http://www.feuerwache.net/personal/list")
  { bearbeitePersonaltabellen(); }
  else if (adr.match("http://www.feuerwache.net/feuerwachen/.*/feuerwehrleute"))
  { bearbeitePersonaltabellen(); }
  else if (adr.match("http://www.feuerwache.net/feuerwachen/.*/feuerwehrautos"))
  { bearbeiteWacheFahrzeugliste(); }
  else if (adr.match("http://www.feuerwache.net/vehicle/show/caption_url/*"))
  { bearbeiteFahrzeugkauf(); }
  else if (adr.match("http://www.feuerwache.net/feuerwehrfahrzeuge/[0-9]*/verschieben"))
  { bearbeiteFahrzeugkauf(); }
  else if (adr.match("http://www.feuerwache.net/building_to_user/show/id/*"))
  { bearbeiteLehrgangszuteilung(); }
  else if (adr.match("http://www.feuerwache.net/feuerwehr-einsaetze/[0-9]*"))
  { bearbeiteEinsatzseite(); }
  else if (adr.match("http://www.feuerwache.net/feuerwehrfahrzeuge/[0-9]*/bearbeiten"))
  { bearbeiteFahrzeugseite(); }
  
  ichBins = false;
}

function bearbeiteFahrzeugseite()
{ // Fahrzeug bearbeiten
  var H = "<script type='text/javascript'>\n";
  H += "function ToggleStatus6()\n";
  H += "{\n";
  H += "  var I=document.getElementById('caption');\n";
  H += "  var FN=I.value;\n";
  H += "  if (FN.substr(0,4).toUpperCase()=='XXX ')\n";
  H += "  { I.value = FN.substr(4,FN.length-4); }\n";
  H += "  else { I.value = 'XXX ' + FN; }\n";
  H += "}\n";
  H += "</script>\n\n";
  H += "<a href='javascript:ToggleStatus6();';>Fahrzeug in/außer Dienst stellen</a>\n";
  
  var INP = document.getElementById("caption");
  var td = document.createElement("td");
  td.innerHTML = H;
  INP.parentNode.parentNode.insertBefore(td,INP.parentNode.nextSibling);
}

function bearbeiteFahrzeugkauf()
{ var FRM = document.getElementsByTagName("form")[0];
  if (!FRM) return;
  var TB = FRM.getElementsByTagName("table")[0];
  if (!TB) return;
  var TR = TB.getElementsByTagName("tr")[2];
  if (!TR) return;
  var TD = TR.getElementsByTagName("td")[0];
  if (!TD) return;

  for each (Par in TD.getElementsByTagName("p"))
  { if (Par.innerHTML.match("Diese Feuerwache kann keine Fahrzeuge mehr aufnehmen"))
    { Par.style.display = "none"; }
    if (Par.innerHTML.match("Zuwenig bzw. keine Stellplätze für Rettungswagen"))
    { Par.style.display = "none"; }
  }
}

function bearbeiteWacheFahrzeugliste()
{ 
  var DC = document.getElementById("content");
  var TBs = DC.getElementsByClassName("defaultTable");
  var H2s = DC.getElementsByTagName("h2");

  for each (H2 in H2s)
  { var A = H2.getElementsByTagName("a")[0];
    if (A)
    {
      var FWLink = A.href;
      H2.innerHTML += "&nbsp;&nbsp;<a href='" + FWLink + "/feuerwehrleute'><font size='-1'>(Personal)</font></a>";
    }
  }
}

function bearbeiteFeuerwachenliste()
{ 
  var TRs = document.getElementById("content").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  for (i=0;i<TRs.length;i++)
  { var TR=TRs[i];
    var TD = TR.getElementsByTagName("td")[1];
    var L = TD.getElementsByTagName("a")[0];
    
    // Spalte Fahrzeuge
    var TD = TR.getElementsByTagName("td")[3];
    var H1 = TD.getElementsByTagName("a")[0].innerHTML;
    var H2 = TD.innerHTML.split(" / ")[1];
    var H = "&nbsp;" + H1 + " / " + H2 + "&nbsp;" ;
    if (parseInt(H1) != parseInt(H2)) H = "<font color='yellow'>"+H+"</font>";
    H = "<a href='" + L + "/feuerwehrautos'>" + H + "</a>";
    TD.innerHTML = H;

    // Spalte Rettungswagen
    TD = TR.getElementsByTagName("td")[4];
    H = TD.innerHTML;
    H2 = H.split("/");
    if (parseInt(H2[0]) != parseInt(H2[1])) H = "<font color='yellow'>"+H+"</font>";
    TD.innerHTML = H;

    // Spalte Feuerwehrleute
    TD = TR.getElementsByTagName("td")[5];
    var A = TD.getElementsByTagName("a")[0];
    A.innerHTML = "&nbsp;" + A.innerHTML + "&nbsp;";

    // Spalte Stufe
    TD = TR.getElementsByTagName("td")[6];
    TD.style.textAlign = "left";
    H = TD.innerHTML;
    if (parseInt(H) < 5) H += "&nbsp;<a href='" + L + "/ausbauen'>&nbsp;+&nbsp;</a>";
    TD.innerHTML = H;
  }
}

function bearbeiteLeitstelle()
{
  var DC = document.getElementById("content");
  var TBs = DC.getElementsByClassName("defaultTable");
  var H2s = DC.getElementsByTagName("h2");

  for each (H2 in H2s)
  { var A = H2.getElementsByTagName("a")[0];
    if (A)
    {
      var FWLink = A.href;
      H2.innerHTML += "<br><a href='" + FWLink + "/feuerwehrleute'><font size='-1'>Personal</font></a>";
      H2.innerHTML += "&nbsp/&nbsp<a href='" + FWLink + "/feuerwehrautos'><font size='-1'>Fahrzeuge</font></a>";
    }
  }
}

function bearbeitePersonaltabellen()
{
  var DC = document.getElementById("content");
  var TBs = DC.getElementsByClassName("defaultTable");
  var H2s = DC.getElementsByTagName("h2");

  for (var i=0; i<TBs.length; i++)
  { var TB=TBs[i];
  
    var T = BearbeitePersonaltabelle(TB);

    if (T != "")
    { var FWStat = document.createElement("div")
      TB.parentNode.insertBefore(FWStat,TB);
      FWStat.innerHTML = T;
    }
    
    var H2 = H2s[i];
    var A = H2.getElementsByTagName("a")[0];
    var FWLink = A.href;
    H2.innerHTML += "&nbsp&nbsp<a href='" + FWLink + "/feuerwehrautos'><font size='-1'>(Fahrzeuge)</font></a>";
  }
  
  // vor der ersten Überschrift Default-Sortierung anbieten:
  if (!document.getElementById("DefaultSort"))
  {
    var div = document.createElement("div");
    div.style.paddingBottom = "10px";
    div.innerHTML = "Standard-Sortierung: ";
    var H1 = document.getElementsByTagName("h1")[0];
    if (!H1) H1 = document.getElementsByTagName("h2")[0];
    H1.parentNode.insertBefore(div,H1);
    
    var SEL = document.createElement("select");
    SEL.id = "DefaultSort";
    SEL.options[SEL.length] = new Option("(unsortiert)","-1");
    SEL.options[SEL.length] = new Option("Name");
    SEL.options[SEL.length] = new Option("Motivation");
    SEL.options[SEL.length] = new Option("Fähigkeiten");
    SEL.options[SEL.length] = new Option("Alter");
    SEL.options[SEL.length] = new Option("Ausbildung");
    SEL.options[SEL.length] = new Option("Status");
    SEL.options[SEL.length] = new Option("Schicht");
    div.appendChild(SEL);
    
    document.getElementById("DefaultSort").addEventListener( "change" , DefaultSortChanged , true );
  }
  var SEL = document.getElementById("DefaultSort");
  SEL.value = GM_getValue("DefaultTabSort","-1");
}

function DefaultSortChanged()
{ var S = document.getElementById('DefaultSort').value
  GM_setValue("DefaultTabSort",S);
}

function bearbeiteLehrgangszuteilung()
{
  for each (R in document.getElementsByName("education_type"))
  { R.addEventListener ( "click" , Markiere_Schueler , true ) ; }
}

function Markiere_Schueler()
{ var GG = document.getElementById("education_type_1").checked;
  var RA = document.getElementById("education_type_2").checked;
  var TA = document.getElementById("education_type_3").checked;
  var DT=document.getElementsByClassName("defaultTable");
  if (DT.length<2) return;

  for (var i=1; i<DT.length; i++)
  { var TB = DT[i];
    for each (TR in TB.getElementsByTagName("tr"))
    { var TDs = TR.getElementsByTagName("td");
      if (TDs.length==6) 
      { TDs[0].style.backgroundColor="transparent";
        var Ausb = TDs[5].innerHTML;
        var verf = (TDs[1].innerHTML.match("Nicht verfügbar") == null);
        var Mot  = parseInt(TDs[2].innerHTML);
        if (Mot >= 75) TDs[2].style.color="#66FF66";
        if (Mot <= 25) TDs[2].style.color="#FF6666";
        if (verf)
        { var bgc="";
          if (GG && Ausb.match("Gefahrgut")==null) bgc="#226622";
          if (RA && Ausb.match("Rettungsassistent")==null) bgc="#662222";
          if (TA && Ausb.match("Taucher")==null) bgc="#222266";
          if (bgc) 
          { TDs[0].style.backgroundColor = bgc; 
            TR.style.display = "";
          }
          else 
          { TR.style.display = "none";
          }
        }
        else
        { TR.style.display = "none";
        }
      }
    }
  }
}

function bearbeiteFahrzeugliste()
{ var DC=document.getElementById("content");
  var ArrTR=new Array;
  
  var H2s = DC.getElementsByTagName("h2");
  for each (H2 in H2s)
  { var A = H2.getElementsByTagName("a")[0];
    if (A)
    { var FWLink = A.href;
      H2.innerHTML += "&nbsp&nbsp<a href='" + FWLink + "/feuerwehrleute'><font size='-1'>(Personal)</font></a>";
    }
  }

  var H1 = document.getElementsByTagName("h1")[0];
  var H2=document.createElement("h2");
  H2.innerHTML = "Übersicht";
  DC.insertBefore(H2,H1.nextSibling);
  
  var TB=document.createElement("table");
  TB.className="defaultTable";
  TB.id="Übersichtstabelle";
  var T = "<thead><tr>\n";
  T += "<th>FZ-Typ</th>";
  T += "<th>Anzahl</th>";
  T += "<th style='background-color:#0000F8;'>Dienst-<br>fahrt<br>(S1)</th>";
  T += "<th style='background-color:#00FF2d;color:#000000;'>auf<br>Wache<br>(S2)</th>";
  T += "<th style='background-color:#FFCC27;color:#000000;'>zum<br>Einsatz<br>(S3)</th>";
  T += "<th style='background-color:#FF5A19;color:#000000;'>im<br>Einsatz<br>(S4)</th>";
  T += "<th style='background-color:#BABABA;color:#000000;'>nicht<br>Bereit<br>(S6)</th>";
  T += "<th style='background-color:#DAD815;color:#000000;'>Patient<br>an Bord<br>(S7)</th>";
  T += "<th>&Sigma; km</th>";
  T += "<th>&Oslash;-km</th>";
  T += "<th>&Oslash; Zust.</th>";
  T += "</tr></thead><tbody>\n";
  
  var FZNamen = new Array;
  var gefFZ = new Array;
  var gefS1 = new Array;
  var gefS2 = new Array;
  var gefS3 = new Array;
  var gefS4 = new Array;
  var gefS6 = new Array;
  var gefS6a = new Array;
  var gefS7 = new Array;
  var kmSumme = new Array;
  var ZustandSumme = new Array;
  var gesamtZustand=0;
  var AnzS1=0;
  var AnzS2=0;
  var AnzS3=0;
  var AnzS4=0;
  var AnzS6=0;
  var AnzS6a=0;
  var AnzS7=0;
  var gesamtkm=0;
  var ArrTopKM = new Array;
  
  var TBs = document.getElementsByClassName("defaultTable");
  for (var i=0;i<TBs.length;i++)
  { 
    var TR=TBs[i].getElementsByTagName("tr")[0];
    var LastTH = TR.getElementsByTagName("th")[TR.getElementsByTagName("th").length-1].innerHTML;
    if (LastTH=="Zustand")
    { var TRs = TBs[i].getElementsByTagName("tr");
      var AnzTR = TRs.length;
      for (var j=1;j<AnzTR;j++)
      { var FZName = TRs[j].getElementsByTagName("td")[2].innerHTML;
        if (gefFZ[FZName] == undefined) 
        { FZNamen.push(FZName);
          gefFZ[FZName]=1;
          gefS1[FZName]=0;
          gefS2[FZName]=0;
          gefS3[FZName]=0;
          gefS4[FZName]=0;
          gefS6[FZName]=0;
          gefS6a[FZName]=0;
          gefS7[FZName]=0;
          kmSumme[FZName]=0;
          ZustandSumme[FZName]=0;
        }
        else 
        { gefFZ[FZName]++;
        }
        var Funkname = TRs[j].getElementsByTagName("td")[1].getElementsByTagName("a")[0].innerHTML;
        
        var FZStat = trim(TRs[j].getElementsByTagName("td")[3].innerHTML);
        if (FZStat=="Einsatzbereit auf Wache" && Funkname.substr(0,3).toUpperCase()=="XXX") FZStat = "Außer Dienst";
        switch (FZStat)
        { case "Frei (Dienstfahrt)":      gefS1[FZName]++; break;
          case "Einsatzbereit auf Wache": gefS2[FZName]++; break;
          case "Auf dem Weg zum Einsatz": gefS3[FZName]++; break;
          case "Ankunft am Einsatzort":   gefS4[FZName]++; break;
          case "Nicht einsatzbereit":     gefS6[FZName]++; break;
          case "Außer Dienst":            gefS6a[FZName]++; break;
          case "Patient aufgenommen":     gefS7[FZName]++; break;
        }
        
        var FZLink = TRs[j].getElementsByTagName("td")[1].innerHTML;
        var kmStand = TRs[j].getElementsByTagName("td")[5].innerHTML;
        var IntkmStand = parseInt(kmStand.substr(0,kmStand.length-2).replace(".",""))
        ArrTopKM.push(new Array(IntkmStand,FZLink));
        kmSumme[FZName] += IntkmStand;
        
        //Zustand prüfen und ggf. Link zur Werkstatt einbauen
        var TD = TRs[j].getElementsByTagName("td")[6];
        var FZID = TRs[j].getElementsByTagName("td")[1].getElementsByTagName("a")[0].href;
        FZID = FZID.replace("http://www.feuerwache.net/feuerwehrfahrzeuge/","");
        var Zustand = parseInt(removeTags(TD.innerHTML));
        if (Zustand != 100)
        { ArrTR.push(TRs[j].cloneNode(true));
        }
        ZustandSumme[FZName] += Zustand;
      }
    }
  }

  for each (FZName in FZNamen.sort())
  { 
    AnzS1 += gefS1[FZName];
    AnzS2 += gefS2[FZName];
    AnzS3 += gefS3[FZName];
    AnzS4 += gefS4[FZName];
    AnzS6 += gefS6[FZName];
    AnzS6a += gefS6a[FZName];
    AnzS7 += gefS7[FZName];
    gesamtkm += kmSumme[FZName];
    gesamtZustand += ZustandSumme[FZName];
    
    if (gefS1[FZName]==0) gefS1[FZName] = "<font color='#666666'>0</font>";
    if (gefS2[FZName]==0) gefS2[FZName] = "<font color='#666666'>0</font>";
    if (gefS3[FZName]==0) gefS3[FZName] = "<font color='#666666'>0</font>";
    if (gefS4[FZName]==0) gefS4[FZName] = "<font color='#666666'>0</font>";
    if (gefS6[FZName]==0) gefS6[FZName] = "<font color='#666666'>0</font>";
    if (gefS6a[FZName]==0) gefS6a[FZName] = "";
    if (gefS7[FZName]==0) gefS7[FZName] = "<font color='#666666'>0</font>";

    T += "<tr><td><b>" + FZName + "</b></td>";
    T += "<td style='text-align:center'>" + gefFZ[FZName] + "</td>";
    T += "<td style='text-align:center'>" + gefS1[FZName] + "</td>";
    T += "<td style='text-align:center'>" + gefS2[FZName] + "</td>";
    T += "<td style='text-align:center'>" + gefS3[FZName] + "</td>";
    T += "<td style='text-align:center'>" + gefS4[FZName] + "</td>";
    T += "<td style='text-align:center'>" + gefS6[FZName];
    if (gefS6a[FZName]) T += " + " + gefS6a[FZName];
    T += "</td>";
    T += "<td style='text-align:center'>" + gefS7[FZName] + "</td>";
    T += "<td style='text-align:right'>" + makeDots(kmSumme[FZName]) + "</td>";
    var Schnitt = parseInt(kmSumme[FZName] / gefFZ[FZName]);
    T += "<td style='text-align:right'>" + makeDots(Schnitt) + "</td>";
    Schnitt = parseInt(10 * ZustandSumme[FZName] / gefFZ[FZName]) / 10;
    var txtSchnitt = Schnitt.toString();
    if (txtSchnitt.substr(txtSchnitt.length-2,1) != ".") txtSchnitt += ".0";
    T += "<td style='text-align:right'>" + txtSchnitt + " %</td>";
    T += "</tr>\n";
  }
  var Anz = AnzS1+AnzS2+AnzS3+AnzS4+AnzS6+AnzS6a+AnzS7;
  T += "<tr><th style='text-align:left'>SUMME</th>";
  T += "<th>" + Anz + "</th>";
  T += "<th>" + AnzS1 + "</th>";
  T += "<th>" + AnzS2 + "</th>";
  T += "<th>" + AnzS3 + "</th>";
  T += "<th>" + AnzS4 + "</th>";
  T += "<th>" + AnzS6;
  if (AnzS6a) T += " + " + AnzS6a;
  T += "</th>";
  T += "<th>" + AnzS7 + "</th>";
  T += "<th style='text-align:right;padding:1px 5px;'>" + makeDots(gesamtkm) + "</th>";
  var Schnitt = parseInt(gesamtkm / Anz);
  T += "<th style='text-align:right;padding:1px 5px;'>" + makeDots(Schnitt) + "</th>";
  Schnitt = parseInt(10 * gesamtZustand / Anz) / 10;
  var txtSchnitt = Schnitt.toString();
  if (txtSchnitt.substr(txtSchnitt.length-2,1) != ".") txtSchnitt += ".0";
  T += "<th style='text-align:right;padding:1px 5px;'>" + txtSchnitt + " %</th>";
  T += "</tr>\n";
  T += "</tbody></table>\n";
  TB.innerHTML=T;
  DC.insertBefore(TB,H2.nextSibling);
  
  TB = TBs[TBs.length-1];
  var lastTR = TB.getElementsByTagName("tr")[TB.getElementsByTagName("tr").length-1];
  var TR=document.createElement("tr");
  lastTR.parentNode.insertBefore(TR,lastTR.nextSibling);
  TR.innerHTML = "<th>Fahrzeuge mit der höchsten Laufleistung:</th>\n<td></td>";
  var TD=TR.getElementsByTagName("td")[0];

  ArrTopKM.sort(function s(a,b){return b[0]-a[0];});
  for (var i=0;i<5;i++)
  { TD.innerHTML += ArrTopKM[i][1] + " (" + makeDots(ArrTopKM[i][0]) + " km)<br>\n";
  }
  
  // Tabelle mit beschädigten Fahrzeugen in Dokument schreiben, 
  // aber erstmal verstecken, Anzeigen erst durch Klick auf Toggle-Link

  var NewDiv = document.createElement("div");
  var H = "<script type='text/javascript'>\n";
  H += "function toggledisplay()\n";
  H += "{ var e = document.getElementById('DivZustandstabelle');\n";
  H += "  e.style.display = (e.style.display == 'block') ? 'none' : 'block';\n";
  H += "}\n";
  H += "</script>";

  H += "<a href='javascript:toggledisplay();';>beschädigte Fahrzeuge auflisten</a>";
  H += "<br>\n";
  NewDiv.innerHTML = H;
  
  var hiddenDiv=document.createElement("div");
  hiddenDiv.id = "DivZustandstabelle";
  hiddenDiv.style.display = "none";
  var H2 = document.createElement("h2");
  H2.appendChild(document.createTextNode("beschädigte Fahrzeuge"));
  hiddenDiv.appendChild(H2);
  var hiddTB = document.createElement("table");
  hiddTB.className="defaultTable";
  hiddTB.id="Zustandstabelle";
  hiddenDiv.appendChild(hiddTB);
  var THead=document.createElement("thead");
  hiddTB.appendChild(THead);
  H = "<tr>";
  H += "<th style='width: 10px;'></th>\n";
  H += "<th style='width: auto;'>Funkrufname</th>\n";
  H += "<th style='width: 120px;'>Fahrzeugtyp</th>\n";
  H += "<th style='width: 190px;'>FMS</th>\n";
  H += "<th style='width: 55px;' title='Aktuelle Position'>Akt. Pos</th>\n";
  H += "<th style='width: 100px;'>Laufleistung</th>\n";
  H += "<th style='width: 60px;'>Zustand</th>\n";
  H += "</tr>\n";
  THead.innerHTML = H;
  var TBody=document.createElement("tbody");
  hiddTB.appendChild(TBody);
  
  NewDiv.appendChild(hiddenDiv);
  TB=document.getElementById("Übersichtstabelle");
  TB.parentNode.insertBefore(NewDiv,TB.nextSibling);
  TB=document.getElementById("Zustandstabelle").getElementsByTagName("tbody")[0];
  for each (TR in ArrTR) TB.appendChild(TR);
  
  // Tabelle sortieren
  SortTabelle(hiddTB,6,true,true,true);
}

function bearbeiteEinsatzseite()
{ 
  // Alle Infobox-Variablen leer machen
  InfotextStichwort="";
  InfotextKlasse="";
  InfotextKlassenalarm="";
  InfotextKlassenalarmOpt="";
  InfotextRTW="";
  InfotextUnterwegs="";
  InfotextNachforderungen="";
  InfotextToAlarm="";
  InfotextFahrzeit="";
  InfotextFahrzeitOpt="";
  InfotextNichtVerfuegbar="";
  InfotextVerfuegbar="";

  // verfügbare FZ zählen
  if (showInfoVerfuegbar) InfotextVerfuegbar = zaehleVerfuegbar();
  
  // im Verbandseinsatz die Checkbox per default NICHT anhaken, sonst schon
  if (document.getElementById("machVorschlag") == undefined) machVorschlag = !Verbandseinsatz();
  
  // Einsatzstichwort ermitteln
  var EinsatzDiv = document.getElementById("mission_content");
  var Einsatz = document.getElementsByTagName("h1")[0];
  var Einsatzstichwort = getStichwort(Einsatz.innerHTML);
  if (showInfoStichwort) 
  { InfotextStichwort = Einsatzstichwort;
    var L = getWikiLink(Einsatzstichwort);
    if (L != "") InfotextStichwort = "<a target='_new' href='" + L + "'>" + Einsatzstichwort + "</a>";
  }
  
  // Einsatzklasse
  var Einsatzklasse = getEinsatzKlasse(Einsatzstichwort);
  if (showInfoKlasse) InfotextKlasse = Einsatzklasse;
  // Fahrzeuge zusammenstellen
  FillAlarmListe(Einsatzklasse);

  if (showInfoKlassenalarm) InfotextKlassenalarm = ToAlarm.toString();
  if (showInfoKlassenalarmOpt && Optional.length>0) InfotextKlassenalarmOpt = Optional.toString();

  // Anzahl der nötigen RTW ermitteln
  var V = Verletzte();
  if (V>0)
  { if (showInfoRTW) 
    { InfotextRTW = "";
      for (var i=0;i<V;i++) InfotextRTW += "<img class='famfamfamicon' src='/images/pill.png' alt='Pill'>";
      InfotextRTW += " " + V + " verletzte Person";
      if (V>1) InfotextRTW +="en";
    }
    while (V>0) { ToAlarm.push("RTW"); V--; }
  }
  
  // bereits eingebundene Fahrzeuge ermitteln
  FillUnterwegsListe();

  // Diese Unterwegs-Fahrzeuge auflisten...
  if (Unterwegs.length>0)
  { if (showInfoUnterwegs) 
    { if (AmOrt.length) InfotextUnterwegs += "am Ort: <font color='green'>" + AmOrt.toString() + "</font>, ";
      if (AufAnfahrt.length) InfotextUnterwegs += "auf Anfahrt: <font color='orange'>" + AufAnfahrt.toString() + "</font>, ";
      if (Wartend.length) InfotextUnterwegs += "wartend: <font color='brown'>" + Wartend.toString() + "</font>, ";
      InfotextUnterwegs = InfotextUnterwegs.substr(0,InfotextUnterwegs.length-2);
    }
  }

  // ToAlarm um die FZ kürzen, die bereits unterwegs sind
  // sowie die Reihenfolge anpassen, dass Alternativen am Ende stehen
  bereinigeToAlarm();
  
  // Nachforderungen auslesen
  var NF = AddNachforderungen();
  if (NF != "" && showInfoNachforderungen) InfotxetNachforderungen = NF;

  if (!machVorschlag)
  { // es sollen keine Vorschläge angehakt werden, also alles aus ToAlarm
    // nach Optional verschieben, so dass alles nur gelb markiert wird.
    while (ToAlarm.length>0) Optional.push(ToAlarm.pop());
  }

  if (ToAlarm.length>0) 
  { if (showInfoToAlarm) InfotextToAlarm = "<font color='red'>" + ToAlarm + "</font>"; }
  else
  { if (showInfoToAlarm)
    {
      InfotextToAlarm = "<font color='green'>Niets.</font> "; 
      if (Optional.length>0) InfotextToAlarm += "(Optional: " + Optional + ")";
    }
  }

// ************************************************************************************
// an dieser Stelle sind die Listen ToAlarm und Optional gefüllt. Jetzt kann alles
// aus ToAlarm abgehakt werden und alles aus Optional gelb markiert
// ************************************************************************************
    
  // ToAlarm-Fahrzeuge tatsächlich abhaken
  var Dauer1 = AlarmiereFahrzeuge();
  if (Dauer1 != "" && showInfoFahrzeit) InfotextFahrzeit = Dauer1;
  
  // Optionale Fahrzeuge markieren
  var Dauer2 = MarkiereFahrzeuge();
  if (Dauer2 != "" && showInfoFahrzeitOpt) InfotextFahrzeitOpt = Dauer2;
  
  // falls Fahrzeuge nicht alarmiert werden konnten, diese auflisten
  if (ToAlarm.length > 0 && showInfoNichtVerfuegbar) InfotextNichtVerfuegbar = ToAlarm.toString();
  
  // Text für die Infobox zusammenstellen
  var Info = "<h2>Einsatzinfos</h2>\n";

  // Vorschläge ein- und ausschalten
  Info += "<input type='checkbox' id='machVorschlag' ";
  if (machVorschlag) Info +="checked";
  Info += "> vorgeschlagene Fahrzeuge sofort abhaken<br>\n";
  
  Info += "Abmarschreihenfolge beachten: <input type='checkbox' id='zweiterAbmarschTr' ";
  if (zweiterAbmarsch==1) Info +="checked";
  Info +=">  (zuerst Trupp-FZ)";
  Info += "&nbsp;&nbsp;<input type='checkbox' id='zweiterAbmarschAusb' ";
  if (zweiterAbmarsch==2) Info +="checked";
  Info +=">  (zuerst Sonderausbildungs-FZ)\n";
  
  // Infos in Tabelle strukturieren
  Info += "<table class='defaultTable'>\n";
  var InfoVorspann = "<tr><th style='width: 150px;'>";

  if (InfotextStichwort) Info += InfoVorspann + "Stichwort</th><td>" + InfotextStichwort + "</td></tr>\n";
  if (InfotextKlasse) 
  { Info += InfoVorspann + "Einsatzklasse</th><td><font color='yellow'>" + InfotextKlasse + "</font>";
    if (InfotextKlassenalarmOpt) InfotextKlassenalarm += ", Optional: " + InfotextKlassenalarmOpt + "&nbsp;";
    if (InfotextKlassenalarm) Info += "&nbsp;&nbsp;(&nbsp;" + InfotextKlassenalarm + "&nbsp;)";
    Info += "</td></tr>\n";
  }
  if (InfotextRTW) Info += InfoVorspann + "RTW benötigt</th><td>" + InfotextRTW + "</td></tr>\n";
  if (InfotextNachforderungen) Info += InfoVorspann + "Nachforderung</th><td>" + InfotextNachforderungen + "</td></tr>\n";
  if (InfotextUnterwegs) Info += InfoVorspann + "status:</th><td>" + InfotextUnterwegs + "</td></tr>\n";
  if (InfotextToAlarm) Info += InfoVorspann + "Nog nodig:</th><td id='TA'>" + InfotextToAlarm + "</td></tr>\n";
  if (InfotextVerfuegbar) Info += InfoVorspann + "<a target='_new' href='http://www.feuerwache.net/feuerwehrfahrzeuge'>verfügbar</a></th><td><font color='green'>" + InfotextVerfuegbar + "</font></td></tr>\n";
  if (InfotextFahrzeit || InfotextFahrzeitOpt) 
  { Info += InfoVorspann + "Aanrij tijd</th><td>"
    if (InfotextFahrzeit) Info += "notwendige Fahrzeuge " + InfotextFahrzeit;
    if (InfotextFahrzeit && InfotextFahrzeitOpt) Info += "<br>";
    if (InfotextFahrzeitOpt) Info += "optionale Fahrzeuge " + InfotextFahrzeitOpt;
    Info += "</td></tr>\n";
  }
  if (InfotextNichtVerfuegbar) Info += InfoVorspann + "<font color='red'>nicht verfügbar</font></th><td><font color='red'>" + InfotextNichtVerfuegbar + "</font></td></tr>\n";
  
  Info += "</table>\n";

  mylog("Info=\n" + Info);
  
  // Infobereich in die Seite einbauen
  var InfoBereich = document.getElementById("InfoBereich");
  if (!InfoBereich)
  { InfoBereich = document.createElement("div");
    InfoBereich.id = "InfoBereich";
    EinsatzDiv.parentNode.insertBefore(InfoBereich,Einsatz.nextSibling);
  }
  InfoBereich.innerHTML = Info;

  document.getElementById("machVorschlag").addEventListener ( "click" , machVorschlag_clicked , false ) ;
  document.getElementById("zweiterAbmarschAusb").addEventListener ( "click" , zweiterAbmarsch_clicked , false ) ;
  document.getElementById("zweiterAbmarschTr").addEventListener ( "click" , zweiterAbmarsch_clicked , false ) ;
  
  var D = KonfigHTML();
  if (D != "") 
  { InfoBereich.parentNode.insertBefore(D,InfoBereich.nextSibling);
    AddKonfigEventlisteners();
  }
  
  var BTN = document.getElementsByName("commit")[0];
  if (BTN) BTN.addEventListener ( "click" , function(){ FirstRun=true; } , false ) ;
  
  for each (A in document.getElementsByTagName("a"))
  { if (A.innerHTML == "zurück alarmieren") A.addEventListener ( "click" , function(){ FirstRun=true;CBClicked=false; } , false ) ; }
  
  for each (I in document.getElementsByName("vehicle_to_user_id[]"))
  { I.addEventListener ( "click" , function(){ CBClicked=true; } , false ) ; }
  
  findeFahrzeugeZumZurückalarmieren();
  
  FirstRun=false;
}

function findeFahrzeugeZumZurückalarmieren()
{ var D = document.getElementById("driving_vehicle");
  var TB1=D.getElementsByTagName("table")[0];
  if (!TB1) return;
  var Rows1 = TB1.getElementsByTagName("tr");
  
  D = document.getElementsByClassName("free_vehicle")[0];
  var TB2=D.getElementsByTagName("table")[0];
  if (!TB2) return;
  var Rows2 = TB2.getElementsByTagName("tr");
  
  for (var i=1; i<Rows1.length; i++)
  { var Row1 = Rows1[i];
    var FZID1 = Row1.getElementsByTagName("td")[0].getElementsByTagName("a")[0].href;
    FZID1 = FZID1.replace("http://www.feuerwache.net/feuerwehrfahrzeuge/","");
    var FZBez1 = Row1.getElementsByTagName("td")[1].innerHTML;
    var FZKlasse1 = getFahrzeugKlasse(FZBez1);
    if (!FZKlasse1) FZKlasse1 = "1";
    var RestSek1 = document.getElementById("hidden_driving_countdown_" + FZID1).value;
    if (!RestSek1) RestSek1=0;
    
    var sucheWeiter=true;
    var j=1;
    while (sucheWeiter)
    { var Row2 = Rows2[j];
      var FZBez2 = Row2.getElementsByTagName("td")[2].innerHTML;
      var FZKlasse2 = getFahrzeugKlasse(FZBez2);
      var Fahrzeit2 = Row2.getElementsByTagName("td")[4].innerHTML;
      var FahrtSek2 = ZeitToSek(Fahrzeit2);
      var FZName2 = Row2.getElementsByTagName("td")[1].getElementsByTagName("a")[0].innerHTML;
      if (FZName2.substr(0,3).toUpperCase()=="XXX") FZKlasse2 = "2";
      FZName2 = Row2.getElementsByTagName("td")[1].innerHTML;
      if (!FZName2.match(".*(unterwegs)")) FahrtSek2 += 90;
      if (FZKlasse1 == FZKlasse2 && RestSek1 > FahrtSek2)
      { Row1.getElementsByTagName("td")[5].style.backgroundColor="#662222";
        Row2.getElementsByTagName("td")[4].style.backgroundColor="#226622";
        sucheWeiter = false;
      }
      if (FahrtSek2 > RestSek1) sucheWeiter = false;
      j++;
      if (j >= Rows2.length) sucheWeiter = false;
    }
  }
}

function bearbeiteÜbersichtsseite()
{ if (showInfoKlasseInListe)
  { for each (TD in document.getElementsByTagName("td"))
    { for each (A in TD.getElementsByTagName("a"))
      { if ( A.href.indexOf("http://www.feuerwache.net/feuerwehr-einsaetze/") == 0)
        { TD.innerHTML += "&nbsp;<font color='red'>(" + getEinsatzKlasse(A.innerHTML) + ")</font>";
        }
      }
    }
  }
  
  var H1=document.getElementsByTagName("h1")[0];
  var D = KonfigHTML();
  if (D != "") 
  { H1.parentNode.insertBefore(D,H1);
    AddKonfigEventlisteners();
  }
}

function AddKonfigEventlisteners()
{ var Boxes = document.getElementsByName("KonfigBox");
  for each (Box in Boxes)
  { Box.addEventListener("click",KonfigBox_clicked,false);
  }

  if (ScriptUpdateAvailable != "") 
  { document.getElementById("installURL").addEventListener ( 
      "click" , 
      function(){ GM_setValue("Version",ScriptUpdateAvailable); ScriptUpdateAvailable=""; GM_setValue("pleaseUpdate",""); } , 
      true )
  }
}

function SortiereNachSpalte(Tab,SortBy)
{
  var Spalte = -1;
  var c=0;
  for each (TH in Tab.getElementsByTagName("th"))
  { if (TH.innerHTML == SortBy) Spalte=c;
    c++;
  }
  if (Spalte == -1) return;
  
  switch(SortBy)
  { case "Name":        SortTabelle(Tab,Spalte,true,false,true); break;
    case "Motivation":  SortTabelle(Tab,Spalte,false,true,false); break;
    case "Fähigkeiten": SortTabelle(Tab,Spalte,false,true,false); break;
    case "Alter":       SortTabelle(Tab,Spalte,true,true,false); break;
    case "Ausbildung":  SortTabelle(Tab,Spalte,true,false,false); break;
    case "Status":      SortTabelle(Tab,Spalte,true,false,false); break;
    case "Schicht":     SortTabelle(Tab,Spalte,true,true,false); break;
  }
}

function SortiereNachSpalteClick(event)
{ var t = event.target;
  var SortBy = t.innerHTML;
  var Tab = t.parentNode.parentNode.parentNode;
  if (!Tab) return;

  SortiereNachSpalte(Tab,SortBy);
}

function MachSortierbar(myTB)
{ var THead = myTB.getElementsByTagName("thead")[0];
  if (!THead) return;
  var THs = THead.getElementsByTagName("th");
  for each (TH in THs)
  { var H = TH.innerHTML;
    TH.addEventListener ( "click" , function(e){SortiereNachSpalteClick(e)} , true ) ;
  }
}

function BearbeitePersonaltabelle(myTB)
{ MachSortierbar(myTB);
  var DefSort = GM_getValue("DefaultTabSort","-1")
  if (DefSort != "-1") SortiereNachSpalte(myTB,DefSort)
  
  var AnzFM=0, AnzEinsatz=0, AnzSchule=0, AnzBereit=0, AnzDienst=0;
  var AnzGG=0, AnzGGDienst=0, AnzGGBereit=0;
  var AnzRA=0, AnzRADienst=0, AnzRABereit=0;
  var AnzTA=0, AnzTADienst=0, AnzTABereit=0;
  for each (TR in myTB.getElementsByTagName("tr"))
  { if (TR.getElementsByTagName("td").length>5)
    { var TDs = TR.getElementsByTagName("td");
      var Stat = trim(TDs[5].innerHTML);
      var Ausb = trim(TDs[4].innerHTML);

      // Motivation kennzeichnen:
      var Mot = parseInt(TDs[1].innerHTML);
      if (Mot >= 75) TDs[1].style.color = "#66FF66";
      if (Mot <= 25) TDs[1].style.color = "#FF6666";
      
      // Personalstatistik:
      AnzFM++;
      
      // Status kennzeichnen und zählen
      if (Stat == "Beim Einsatz") { AnzDienst++; AnzEinsatz++; TDs[5].style.color="#FF0000"; }
      if (Stat == "Frei - nicht im Dienst") TDs[5].style.color="#555555";
      if (Stat == "Einsatzbereit") { AnzDienst++; AnzBereit++; TDs[5].style.color="#FFFFFF"; }
      if (Stat == "In der Feuerwehrschule") { AnzSchule++; TDs[5].style.color="#5555FF"; }
      
      // Ausbildungsstand
      if (Ausb.match("Gefahrgut"))
      { AnzGG++;
        if (Stat == "Beim Einsatz" || Stat == "Einsatzbereit") AnzGGDienst++;
        if (Stat == "Einsatzbereit") AnzGGBereit++;
      }
      if (Ausb.match("Rettungsassistent"))
      { AnzRA++;
        if (Stat == "Beim Einsatz" || Stat == "Einsatzbereit") AnzRADienst++;
        if (Stat == "Einsatzbereit") AnzRABereit++;
      }
      if (Ausb.match("Taucher"))
      { AnzTA++;
        if (Stat == "Beim Einsatz" || Stat == "Einsatzbereit") AnzTADienst++;
        if (Stat == "Einsatzbereit") AnzTABereit++;
      }
    }
  }

  var ret;
  ret = "<b>" + AnzFM + " FM(SB)</b>";
  if (AnzDienst != AnzFM) 
  { ret += ", davon " + AnzDienst + " im Dienst und ";
    if (AnzSchule) 
    { ret += AnzSchule + " in der Schule."; }
    else
    { ret = ret.substr(0,ret.length-5) + "."; }
  }
  ret += "<br><b>" + AnzBereit + " einsatzbereit</b> (=" + parseInt(1000*AnzBereit/AnzDienst)/10 + "%), ";
  if (AnzEinsatz) ret += AnzEinsatz + " im Einsatz (=" + parseInt(1000*AnzEinsatz/AnzDienst)/10 + "%), ";
  ret = ret.substr(0,ret.length-2) + ".<br>";
  if (AnzGG)
  { ret += "Gefahrgut: " + AnzGG + " insgesamt, " + AnzGGDienst + " im Dienst";
    if (AnzGGDienst != AnzGGBereit)
    { ret += ", davon " + AnzGGBereit + " einsatzbereit.<br>\n"; }
    else
    { ret += " (alle einsatzbereit).<br>\n"; }
  }
  if (AnzRA)
  { ret += "Rettungsassistenten: " + AnzRA + " insgesamt, " + AnzRADienst + " im Dienst";
    if (AnzRADienst != AnzRABereit)
    { ret += ", davon " + AnzRABereit + " einsatzbereit.<br>\n"; }
    else
    { ret += " (alle einsatzbereit).<br>\n"; }
  }
  if (AnzTA)
  { ret += "Taucher: " + AnzTA + " insgesamt, " + AnzTADienst + " im Dienst";
    if (AnzTADienst != AnzTABereit)
    { ret += ", davon " + AnzTABereit + " einsatzbereit.<br>\n"; }
    else
    { ret += " (alle einsatzbereit).<br>\n"; }
  }

  return ret;
}

function SortTabelle(myTB,Spalte,Richtung,Numerisch,Link)
{ var TBody = myTB.getElementsByTagName("tbody")[0];
  if (!TBody) return;
  var ArrTR = new Array();
  for each (TR in TBody.getElementsByTagName("tr"))
  { ArrTR.push(TR);
  }
  if (ArrTR.length==0) return;
  
  ArrTR.sort(function(x,y){return TableSort(x,y,Spalte,Richtung,Numerisch,Link);});

  var H = "";
  for (var i=0;i<ArrTR.length;i++) H += "<tr>" + ArrTR[i].innerHTML + "</tr>\n";
  
  TBody.innerHTML = H;
}

function TableSort(Z1,Z2,S,richtung,num,link)
{ // sortiert Tabellenspalten nach Spalte S
  // übergeben werden zwei <tr> Objekte und die Spaltennummer,
  // nach der sortiert werden soll
  // die weiteren Parameter bedeuten:
  // richtung (t/f)    = Richtung (true = A->Z, false = Z->A)
  // num (true/false)  = numerisch sortieren? sonst alphanumerisch
  // link (true/false) = Zelleninhalt ist ein Link
  var S1,S2;
  
  var TDs = Z1.getElementsByTagName("td");
  if (TDs.length <= S) return 0;
  S1 = removeTags(TDs[S].innerHTML);

  TDs = Z2.getElementsByTagName("td");
  if (TDs.length <= S) return 0;
  S2 = removeTags(TDs[S].innerHTML);

  if (num)
  { S1 = parseInt(S1.replace(".",""));
    S2 = parseInt(S2.replace(".",""));
  }

  if (richtung)
  { if (S1<S2) return -1;
    if (S1>S2) return 1;
  }
  else
  { if (S1<S2) return 1;
    if (S1>S2) return -1;
  }
  return 0;
}

function ClearFreeVehiclesTable(auchHaken)
{ 
  // löschen aller Hervorhebungen und ggf. Haken in der Liste freier Fahrzeuge:
  var D = document.getElementsByClassName("free_vehicle")[0];
  var TB = D.getElementsByTagName("table")[0];
  if (TB==undefined) return;
  for each (TR in TB.getElementsByTagName("tr"))
  { // Farbe entfernen
    for each (TD in TR.getElementsByTagName("td")) { TD.bgColor = undefined; }
    
    var CB=TR.getElementsByTagName("input")[0];
    if (CB) 
    { CB.alt=undefined;
      if (CB.checked && auchHaken) CB.click(); 
    }
    
  }
}

function KonfigHTML()
{ 
  if (document.getElementById("DivKonfigurieren")) return "";
  
  var NewDiv = document.createElement("div");
  NewDiv.id = "DivKonfigurieren";
  var H = "<script type='text/javascript'>\n";
  H += "function toggledisplay()\n";
  H += "{ var e = document.getElementById('KonfigBoxes');\n";
  H += "  e.style.display = (e.style.display == 'block') ? 'none' : 'block';\n";
  H += "}\n";

  H += "</script>";

  H += "<a href='javascript:toggledisplay();';>AAO-Script Konfiguration anzeigen</a>";
//  if (ScriptUpdateAvailable != "") 
//  { H += "<br><br><font color='red'>Es gibt ein AAO-Script-Update (auf Version " + ScriptUpdateAvailable + ")</font>";
//    H += "&nbsp;<a href='" + UPDATEURL + "' target='_new'>Infos</a>";
//    H += "&nbsp;<a id='installURL' href='" + INSTALLURL + "' target='_new'>Installieren</a>";
//  }
  H += "<br><br>\n";
  NewDiv.innerHTML = H;
  
  var hiddenDiv=document.createElement("div");
  hiddenDiv.id = "KonfigBoxes";
  hiddenDiv.style.display = "none";
  
  H = "\n";

  H += "<h2>in Einsatzübersichtstabelle</h3><br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfKlasseInListe'";
  if (showInfoKlasseInListe) H += " checked";
  H += "> Einsatzart anzeigen<br>\n";

  H += "<br><h2>in Infobox auf Einsatzseite</h3><br>\n";
  H += "<input type='checkbox' name='KonfigBox' id='KonfStichwort'";
  if (showInfoStichwort) H += " checked";
  H += "> Einsatzstichwort anzeigen<br>\n";

  H += "<input type='checkbox' name='KonfigBox' id='KonfKlasse'";
  if (showInfoKlasse) H += " checked";
  H += "> Einsatzklasse anzeigen<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfKlassenalarm'";
  if (showInfoKlassenalarm) H += " checked";
  H += "> gemäß Einsatzklasse zu alarmierende Fahrzeuge anzeigen<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfKlassenalarmOpt'";
  if (showInfoKlassenalarmOpt) H += " checked";
  H += "> Anzeige der optionalen Fahrzeuge<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfRTW'";
  if (showInfoRTW) H += " checked";
  H += "> Anzeige der benötigten RTW<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfUnterwegs'";
  if (showInfoUnterwegs) H += " checked";
  H += "> Anzeige der Fahrzeuge, die bereits im Einsatz eingebunden sind<br>\n";

  H += "<input type='checkbox' name='KonfigBox' id='KonfNachforderungen'";
  if (showInfoNachforderungen) H += " checked";
  H += "> Anzeige der Fahrzeuge, die von der Einsatzstelle nachgefordert wurden<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfToAlarm'";
  if (showInfoToAlarm) H += " checked";
  H += "> Anzeige der zu alarmierenden Fahrzeuge<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfFahrzeit'";
  if (showInfoFahrzeit) H += " checked";
  H += "> Anzeige der Fahrzeiten zur Einsatzstelle (von-bis)<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfFahrzeitOpt'";
  if (showInfoFahrzeitOpt) H += " checked";
  H += "> Anzeige der Fahrzeiten für die optionalen Fahrzeuge<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfNichtVerfuegbar'";
  if (showInfoNichtVerfuegbar) H += " checked";
  H += "> Anzeige der benötigten, aber nicht verfügbaren Fahrzeuge<br>\n";
  
  H += "<input type='checkbox' name='KonfigBox' id='KonfVerfuegbar'";
  if (showInfoVerfuegbar) H += " checked";
  H += "> Anzeige aller verfügbarer Fahrzeugklassen<br>\n";

  H += "<br><a href='" + adr + "'>Seite aktualisieren</a>\n";
  H += "<br><br>\n";
  hiddenDiv.innerHTML = H;
  NewDiv.appendChild(hiddenDiv);

  return NewDiv;
}

function KonfigBox_clicked()
{ mylog("KonfigBox_clicked");
  var Boxes = document.getElementsByName("KonfigBox");
  mylog("#Boxes = " + Boxes.length);

  for (var i=0;i<Boxes.length;i++)
  { var Box=Boxes[i];
    var VarNam = Box.id.replace ("Konf","showInfo");
    var OldVal = eval(VarNam);
    var NewVal = Box.checked;
    
    mylog(VarNam + " von " + OldVal + " nach " + NewVal);
    eval(VarNam + " = " + NewVal);
    mylog("Test, " + VarNam + " ist jetzt " + eval(VarNam));
  }
  
  SetVariables();
}

function zweiterAbmarsch_clicked(e)
{ var zATr = document.getElementById("zweiterAbmarschTr").checked;
  var zAGG = document.getElementById("zweiterAbmarschAusb").checked;
  
  if (e.target.id == "zweiterAbmarschTr" && zATr) zAGG=false;
  if (e.target.id == "zweiterAbmarschAusb" && zAGG) zATr=false;
  
  zweiterAbmarsch = 0;
  if (zATr) zweiterAbmarsch = 1;
  if (zAGG) zweiterAbmarsch = 2;

  GM_setValue("zweiterAbmarsch",zweiterAbmarsch);
  ClearFreeVehiclesTable(true);
  FirstRun=true;
  main();
}

function machVorschlag_clicked(e)
{ machVorschlag = document.getElementById("machVorschlag").checked;
  ClearFreeVehiclesTable(true);
  FirstRun=true;
  main();
}

function FillAlarmListe(Einsatzklasse)
{ mylog("FillAlarmListe(" + Einsatzklasse + ")");
  var FZ = getFahrzeugListe(Einsatzklasse);
  ToAlarm = new Array;
  Optional = new Array;
  
  var Teile = FZ.split("|");
  ToAlarm = Teile[0].split(",");
  if (Teile.length > 1) Optional = Teile[1].split(",");
  return;
}

function AddNachforderungen()
{ var D = document.getElementById("mission_reply");
  if (D==undefined) return "";
  var TB = D.getElementsByTagName("table");
  if (TB.length == 0) return "";
  var TRs = TB[0].getElementsByTagName("tr");
  var NFFZ="";
  var alleNF="";
  for (var z=1;z<TRs.length;z++)
  { var TR=TRs[z];
    if (TR.getElementsByTagName("td").length>=2)
    { var Q = TR.getElementsByTagName("td")[1].innerHTML;
      if (Q.indexOf("Leitstelle:") == -1)
      { var RM = TR.getElementsByTagName("td")[2].innerHTML;
        if (RM != undefined)
        { NFFZ = getNachforderungFahrzeug(RM);
          if (NFFZ != "") 
          { if (FZinEinsatz(NFFZ)) NFFZ="";
            if (NFFZ != "")
            {
              ToAlarm.push(NFFZ);
              alleNF += "," + NFFZ;
            }
          }
        }
      }
    }
  }
  if (alleNF != "") alleNF = alleNF.substr(1,100);
  mylog("Nachforderung: " + alleNF);
  return alleNF;
}

function FZinEinsatz(FZ)
{ mylog ("FZinEinsatz(" + FZ + ")");
  mylog ("ToAlarm="+ToAlarm+"\nUnterwegs="+Unterwegs);

  var FZistDrin = false;

  for each (FZA in ToAlarm)
  { var A = FZA.split("/");
    for each (F in A)
    { if (F == FZ) FZistDrin = true; 
    }
  }
  for each (U in Unterwegs)
  { if (U == FZ) FZistDrin = true;
  }
  mylog("returns:"+FZistDrin);
  return FZistDrin;
}

function FillUnterwegsListe()
{ Unterwegs = new Array;
  AmOrt = new Array;
  AufAnfahrt = new Array;
  Wartend = new Array;
  
  var d = document.getElementById("mission_vehicle");
  if (d.getElementsByTagName("table").length == 1)
  { var TB=d.getElementsByTagName("table")[0];
    for each (TR in TB.getElementsByTagName("tr"))
    { var FZ;
      try
      { var FZ=TR.getElementsByTagName("td")[1].innerHTML; 
        FZ = getFahrzeugKlasse(FZ);
        Unterwegs.push(FZ);
        AmOrt.push(FZ);
      } catch(e) {};
    }
  }
  var d = document.getElementById("driving_vehicle");
  if (d.getElementsByTagName("table").length == 1)
  { var TB=d.getElementsByTagName("table")[0];
    for each (TR in TB.getElementsByTagName("tr"))
    { var FZ;
      try
      { var FZ=TR.getElementsByTagName("td")[1].innerHTML; 
        FZ = getFahrzeugKlasse(FZ);
        Unterwegs.push(FZ);
        AufAnfahrt.push(FZ);
      } catch(e) {};
    }
  }
  var d = document.getElementById("waiting_vehicle");
  if (d.getElementsByTagName("table").length == 1)
  { var TB=d.getElementsByTagName("table")[0];
    for each (TR in TB.getElementsByTagName("tr"))
    { var FZ;
      try
      { var FZ=TR.getElementsByTagName("td")[1].innerHTML; 
        FZ = getFahrzeugKlasse(FZ);
        Unterwegs.push(FZ);
        Wartend.push(FZ);
      } catch(e) {};
    }
  }
}

function bereinigeToAlarm()
{ // Alternativ-FZ in ToAalrm ans Ende stellen:

  mylog("vorher:"+ToAlarm);
  for (var ta=0; ta<ToAlarm.length; ta++)
  { if (ToAlarm[ta].indexOf("/") != -1) ToAlarm[ta] = "ZZZ/" + ToAlarm[ta]; }
  ToAlarm = ToAlarm.sort();
  for (var ta=0; ta<ToAlarm.length; ta++)
  { if (ToAlarm[ta].indexOf("ZZZ/") != -1) ToAlarm[ta] = ToAlarm[ta].substring(4,100); }
  mylog("nachher:"+ToAlarm);

  // ebenso in Optional:
  mylog("vorher:"+Optional);
  for (var ta=0; ta<Optional.length; ta++)
  { if (Optional[ta].indexOf("/") != -1) Optional[ta] = "ZZZ/" + Optional[ta]; }
  Optional = Optional.sort();
  for (var ta=0; ta<Optional.length; ta++)
  { if (Optional[ta].indexOf("ZZZ/") != -1) Optional[ta] = Optional[ta].substring(4,100); }
  mylog("nachher:"+Optional);
  
  var gefunden=false;
  
  for each (FZ in Unterwegs)
  { gefunden=false;
    for (var i=0; i<ToAlarm.length; i++)
    { var ALT = ToAlarm[i].split("/");
      mylog("prüfe FZ (" + FZ + ") in ALT (" + ALT + ")");
      for (a=0; a<ALT.length; a++)
      { if (FZ == ALT[a]) 
        { ToAlarm.splice(i,1); i=ToAlarm.length;
          gefunden=true;
        }
      }
    }
    if (!gefunden)
    { for (var i=0; i<Optional.length; i++)
      { var ALT = Optional[i].split("/");
        mylog("prüfe FZ (" + FZ + ") in ALT (" + ALT + ")");
        for (a=0; a<ALT.length; a++)
        { if (FZ == ALT[a]) 
          { Optional.splice(i,1); i=Optional.length;
            gefunden=true;
          }
        }
      }
    }
  }
  mylog("\nNACHHER: ToAlarm=" + ToAlarm + "\nUnterwegs=" + Unterwegs);
}

function Verletzte()
{ var TB = document.getElementById("mission_content").getElementsByTagName("table")[0];
  for (var i=0; i<TB.getElementsByTagName("tr").length; i++)
  { var TR = TB.getElementsByTagName("tr")[i];
    if (TR.getElementsByTagName("th")[0].innerHTML == "Verletzte")
    { var T = TR.getElementsByTagName("td")[0].innerHTML;
      var pos = T.indexOf("Personen - für jede Person") - 5;
      T = T.substr(pos,5);
      var Anz = parseInt(T);
      return Anz;
    }
  }
  return 0;
}

function getFahrzeugKlasse(Fahrzeugname)
{ mylog("getFahrzeugKlasse(" + Fahrzeugname + ")");
  var FZ = Fahrzeugklassen[Fahrzeugname];
  if (FZ == undefined) FZ=Fahrzeugname; 
  mylog("returns " + FZ);
  return FZ;
}

function getFahrzeuggeschwindigkeit(Fahrzeugname)
{ var G = Fahrzeuggeschwindigkeiten[Fahrzeugname];
  if (G == undefined) G = 1000;
  G = parseInt(G);
  return G;
}

function getEinsatzKlasse(Stichwort)
{ if (AlleGleich) return "-gleich-";
  mylog("getEinsatzKlasse(" + Stichwort + ")");
  var EK = Einsatzklassen[Stichwort];
  if (EK == undefined) EK = "undef";
  mylog("returns " + EK);
  return EK;
}

function getNachforderungFahrzeug(Rueckmeldung)
{ mylog("getNachforderungFahrzeug(" + Rueckmeldung + ")");

  var FZ = Nachforderungen[Rueckmeldung];
  if (FZ == undefined) FZ = errateNachforderungFahrzeug(Rueckmeldung);
  mylog("returns " + FZ);
  return FZ;
}

function errateNachforderungFahrzeug(Rueckmeldung)
{ for (F in Fahrzeugklassen)
  { if (Rueckmeldung.indexOf(F) != -1) 
    { return Fahrzeugklassen[F]; }
  }
  return "";
}

function getFahrzeugListe(EKListe)
{ mylog("getFahrzeugListe(" + EKListe + ")");
  if (AlleGleich) return AlleGleich;
  var Klasse="", dazu="", opt="";
  var Teile;
  
  if (EKListe.indexOf("|") != -1)
  { Teile = EKListe.split("|");
    EKListe = Teile[0];
    opt = Teile[1];
  }

  if (EKListe.indexOf("+") != -1)
  { Teile = EKListe.split("+");
    Klasse = Teile[0];
    dazu = Teile[1];
  }
  else
  { var X=getEinsatzklasseFahrzeugliste(EKListe);
    if (X != "")
    { Klasse = EKListe; }
    else
    { dazu = EKListe; }
  }

  mylog("Klasse=" + Klasse + "\ndazu=" + dazu + "\nopt=" + opt);

  Klasse = getEinsatzklasseFahrzeugliste(Klasse);
  if (Klasse != "" && dazu != "") Klasse +=",";
  Klasse += dazu;
  if (opt != "") Klasse += "|" + opt;
  
  mylog("ToAlarm = " + Klasse);

  return Klasse;
}

function getEinsatzklasseFahrzeugliste(Einsatzklasse)
{ mylog("getEinsatzklasseFahrzeugliste(" + Einsatzklasse +")");
  var FZL = Einsatzklasse_Fahrzeugzuordnung[Einsatzklasse];
  if (FZL == undefined)
  { mylog ("Einsatzklasse '" + Einsatzklasse + "' nicht definiert!")
    FZL = "";
  }
  mylog("returns " + FZL);
  return FZL;
}

function getStichwort(Text)
{ mylog("getStichwort(" + Text + ")");
  var Stichwort=Text;
  var Teile = Text.split(">");
  if (Teile.length > 1) 
  { Stichwort = Teile[1]; }
  Stichwort = trim(Stichwort);
  return Stichwort;
}

function getWikiLink(Stichwort)
{ mylog("getWikiLink(" + Stichwort + ")");
  var WL = WikiLinks[Stichwort];
  if (WL == undefined) WL = "";
  mylog("returns " + WL);
  return WL;
}

function trim (S) 
{ return S.replace (/^\s+/, '').replace (/\s+$/, '');
}
function removeTags (S) 
{ return trim(S.replace(/<.*?>/g, ''));
}
function makeDots(Zahl)
{ var Str = Zahl.toString();
  var ret = "";
  while (Str.length>3)
  { ret = "." + Str.substr(Str.length-3,3) + ret;
    Str = Str.substr(0,Str.length-3);
  }
  if (Str.length>0) 
  { ret = Str + ret; }
  else
  { ret = ret.substr(1,ret.length-1); }
  
  return ret;
}

function MarkiereFahrzeuge()
{ var D = document.getElementsByClassName("free_vehicle")[0];
  var TB = D.getElementsByTagName("table")[0];
  if (TB==undefined) return;
  var Zeilen = TB.getElementsByTagName("tr");
  var Anfahrt="";
  
  var imax=0;
  var imin=9999;

  for (var opt=0; opt<Optional.length; opt++)
  { var FZ = Optional[opt];
    var AlternativFZ = FZ.split("/");
    var Alternativen = AlternativFZ.length;
    mylog("(opt) suche nach " + AlternativFZ);
    
    for (var i=1; i<Zeilen.length; i++)
    { var ThisZeile = Zeilen[i];
      var ThisSpalten = ThisZeile.getElementsByTagName("td");
      var ThisFZ = getFahrzeugKlasse(ThisSpalten[2].innerHTML);
      var passt=false;
      for (var a=0 ; a<Alternativen ; a++) { if (ThisFZ == AlternativFZ[a]) passt = true; }
      if (passt)
      { var C = ThisSpalten[0].getElementsByTagName("input")[0];
        var RN = ThisSpalten[1].getElementsByTagName("a")[0];
        if (RN) RN = RN.innerHTML;
        if (C.alt != "x" && RN.substr(0,3).toUpperCase() != "XXX")
        { mylog("(opt) gefunden:" + ThisFZ);
          for (var s=0; s<ThisSpalten.length; s++) ThisSpalten[s].bgColor = "#444422";
          C.alt = "x";
          if (i>imax) imax=i;
          if (i<imin) imin=i;
          i=Zeilen.length;
        } // not checked
      } // FZ passt
    } // for Zeilen
  } // alle Optionalen
  
  if (imax>0)
  { var Zeile = Zeilen[imax];
    Anfahrt = "<font color=#CCCC66>" + Zeile.getElementsByTagName("td")[4].innerHTML + "</font>";
    if (imin != imax)
    { Zeile = Zeilen[imin];
      Anfahrt = "zwischen <font color=#CCCC66>" + Zeile.getElementsByTagName("td")[4].innerHTML + "</font> und " + Anfahrt;
    }
  }
  
  return Anfahrt;
}  

function AlarmiereFahrzeuge()
{ ClearFreeVehiclesTable(!CBClicked);

  var D = document.getElementsByClassName("free_vehicle")[0];
  var TB = D.getElementsByTagName("table")[0];
  if (TB==undefined) return;
  var Zeilen = TB.getElementsByTagName("tr");
  var AlarmZeilen = new Array();
  var Anfahrt="";
  
  var imax=0;
  var imin=9999;
  
  for (var ta=0; ta<ToAlarm.length; ta++)
  { var FZ = ToAlarm[ta];
    var AlternativFZ = FZ.split("/");
    var Alternativen = AlternativFZ.length;
    mylog("suche nach " + AlternativFZ);
    
    for (var i=1; i<Zeilen.length; i++)
    { var ThisZeile = Zeilen[i];
      var ThisSpalten = ThisZeile.getElementsByTagName("td");
      var ThisFZ = getFahrzeugKlasse(ThisSpalten[2].innerHTML);
      var passt=false;
      for (var a=0 ; a<Alternativen ; a++) { if (ThisFZ == AlternativFZ[a]) passt = true; }
      if (passt)
      { var C = ThisSpalten[0].getElementsByTagName("input")[0];
        var RN = ThisSpalten[1].getElementsByTagName("a")[0];
        if (RN) RN = RN.innerHTML;
        if (C.alt != "x" && RN.substr(0,3).toUpperCase() != "XXX")
        { mylog("gefunden:" + ThisFZ);
          if (FirstRun || !CBClicked) 
          { C.click();
            AlarmZeilen.push (ThisZeile);
          }
          C.alt="x";
          for (var s=0; s<ThisSpalten.length; s++) ThisSpalten[s].bgColor = "#442222";
          FZ = "gefunden";
          ToAlarm[ta] = "gefunden";
          if (i>imax) imax=i;
          if (i<imin) imin=i;
          i=Zeilen.length;
        } // not checked
      } // FZ passt
    } // for Zeilen
  } // alle ToAlarm

  if (imax>0)
  { var Zeile = Zeilen[imax];
    Anfahrt = "<font color=#CC6666>" + Zeile.getElementsByTagName("td")[4].innerHTML + "</font>";
    if (imin != imax)
    { Zeile = Zeilen[imin];
      Anfahrt = "zwischen <font color=#CC6666>" + Zeile.getElementsByTagName("td")[4].innerHTML + "</font> und " + Anfahrt;
    }
  }

  if (zweiterAbmarsch != 0)
  { var AlarmWachen = new Array();
    var WachAlarm = new Array();
    
    for (var i=0; i<AlarmZeilen.length; i++)
    { var ThisZeile = AlarmZeilen[i];
      var ThisSpalten = ThisZeile.getElementsByTagName("td");
      var ThisCheckbox = ThisSpalten[0].getElementsByTagName("input")[0];
      var ThisWache = ThisSpalten[3].getElementsByTagName("a")[0].innerHTML;
      var ThisFZTyp = GrTrFahrzeug(ThisSpalten[2].innerHTML);
      var ThisFZAusb = AusbFahrzeug(ThisSpalten[2].innerHTML);
      var ThisFunkName = ThisSpalten[1].innerHTML;
      var FNEndLink = ThisFunkName.indexOf("</a>");
      var ThisFZUnterwegs = ( trim(ThisFunkName.substr(FNEndLink+4)) == "(unterwegs)" );
      
      if (!ThisFZUnterwegs)
      { if (!WachAlarm[ThisWache])
        { AlarmWachen.push (ThisWache);
          WachAlarm[ThisWache] = Array();
          WachAlarm[ThisWache][0] = "";
          WachAlarm[ThisWache][1] = "";
        }
        if (zweiterAbmarsch == 1)
        {
          if (ThisFZTyp == "Gr") WachAlarm[ThisWache][0] += "," + i;
          if (ThisFZTyp == "Tr") WachAlarm[ThisWache][1] += "," + i;
        }
        else if (zweiterAbmarsch == 2)
        {
          if (ThisFZAusb == "") WachAlarm[ThisWache][0] += "," + i;
          if (ThisFZAusb == "Ausb") WachAlarm[ThisWache][1] += "," + i;
        }
      }
    }
    for each (W in AlarmWachen)
    { if (WachAlarm[W][0] && WachAlarm[W][1])
      { var StornoZeilen = WachAlarm[W][0].split(",");
        for each (SZ in StornoZeilen)
        { if (SZ) AlarmZeilen[SZ].getElementsByTagName("input")[0].click();
        }
      }
    }
  }
  
  for (ta=ToAlarm.length; ta>=0; ta--)
  { if (ToAlarm[ta]=="gefunden") ToAlarm.splice(ta,1); }
  
  return Anfahrt;
}

function GrTrFahrzeug(FZBez)
{ var ret="";
  ret = "Tr";
  if (FZBez.substr(0,3) == "LF ") ret="Gr";
  if (FZBez == "Kleinlöschfahrzeug") ret="Gr";
  mylog("FZBez = " + FZBez + ", Typ=" + ret);
  return ret;
}  

function AusbFahrzeug(FZBez)
{ var ret="";
  if (FZBez == "GW-Gefahrgut") ret="Ausb";
  if (FZBez == "GW-Messtechnik") ret="Ausb";
  if (FZBez == "GW-Taucher") ret="Ausb";
  if (FZBez == "RTW") ret="Ausb";
  mylog("FZBez = " + FZBez + ", Typ=" + ret);
  return ret;
}  
  
function zaehleVerfuegbar()
{ // Array aufbauen, Reihenfolge wie in Fahrzeugklassen
  var ArrFZK = new Array();
  var strFZK = "";

  for (F in Fahrzeugklassen)
  { var FZK = Fahrzeugklassen[F];
    if (!strFZK.match("#"+FZK+"#"))
    { ArrFZK.push(FZK);
      strFZK += "#" + FZK + "#";
    }
  }
  var AnzFZK=new Array();
  var AnzFZKXXX=new Array();
  for each (FZK in ArrFZK) 
  { AnzFZK[FZK]=0;
    AnzFZKXXX[FZK]=0;
  }
  
  // Freie-Fahrzeuge-Tabelle durchscannen
  var FV=document.getElementsByClassName("free_vehicle");
  if (!FV) return "";
  var TB=FV[0].getElementsByTagName("table");
  if (TB.length==0) return "";
  for each (TR in TB[0].getElementsByTagName("tr"))
  { var FZ;
    var TDs=TR.getElementsByTagName("td");
    if (TDs.length==5) 
    { FZ=TDs[2].innerHTML;
      var FN=TDs[1].getElementsByTagName("a")[0].innerHTML;
      var FZK=getFahrzeugKlasse(FZ);
      if (FN.substr(0,3).toUpperCase()=="XXX")
      { AnzFZKXXX[FZK]++; }
      else
      { AnzFZK[FZK]++; }
    }
  }

  var ret = "<table border='0'><tr>";
  var c=0;
  for each (FZ in ArrFZK)
  { if (c==MAXSPALTENVERFUEGBAR) c=0, ret+="</tr><tr>";
    ret += "<td style='border:0;'><font color='#66FF66'>"+AnzFZK[FZ]+"</font>";
    if (AnzFZKXXX[FZ]) ret +="<font color='green'>+"+AnzFZKXXX[FZ]+"</font>";
    ret += "<br>"+FZ+"&nbsp;</td>";
    c++;
  }
  ret +="</tr></table>";
  return ret;
}

function mylog(Text)
{ if (!debugging) return;

  var Jetzt = new Date();
  GM_log(Jetzt.toLocaleString() + "\n" + Text); 
}

function GetVariables()
{ mylog("GetVariables");

  showInfoKlasseInListe = GM_getValue("showInfoKlasseInListe",true);
  showInfoStichwort = GM_getValue("showInfoStichwort",true);
  showInfoKlasse = GM_getValue("showInfoKlasse",true);
  showInfoKlassenalarm = GM_getValue("showInfoKlassenalarm",true);
  showInfoKlassenalarmOpt = GM_getValue("showInfoKlassenalarmOpt",true);
  showInfoRTW = GM_getValue("showInfoRTW",true);
  showInfoUnterwegs = GM_getValue("showInfoUnterwegs",true);
  showInfoNachforderungen = GM_getValue("showInfoNachforderungen",true);
  showInfoToAlarm = GM_getValue("showInfoToAlarm",true);
  showInfoFahrzeit = GM_getValue("showInfoFahrzeit",true);
  showInfoFahrzeitOpt = GM_getValue("showInfoFahrzeitOpt",true);
  showInfoNichtVerfuegbar = GM_getValue("showInfoNichtVerfuegbar",true);
  showInfoVerfuegbar = GM_getValue("showInfoVerfuegbar",true);
  
  ScriptUpdateAvailable = GM_getValue("pleaseUpdate","");
}

function SetVariables()
{ mylog("SetVariables");
  
  GM_setValue("showInfoKlasseInListe",showInfoKlasseInListe);
  GM_setValue("showInfoStichwort",showInfoStichwort);
  GM_setValue("showInfoKlasse",showInfoKlasse);
  GM_setValue("showInfoKlassenalarm",showInfoKlassenalarm);
  GM_setValue("showInfoKlassenalarmOpt",showInfoKlassenalarmOpt);
  GM_setValue("showInfoRTW",showInfoRTW);
  GM_setValue("showInfoUnterwegs",showInfoUnterwegs);
  GM_setValue("showInfoNachforderungen",showInfoNachforderungen);
  GM_setValue("showInfoToAlarm",showInfoToAlarm);
  GM_setValue("showInfoFahrzeit",showInfoFahrzeit);
  GM_setValue("showInfoFahrzeitOpt",showInfoFahrzeit);
  GM_setValue("showInfoNichtVerfuegbar",showInfoNichtVerfuegbar);
  GM_setValue("showInfoVerfuegbar",showInfoVerfuegbar);
}

function ZeitToSek(txtZeit)
{ // errechnet aus der Klartext-Zeit die Anzahl der Sekunden
  var Teile = txtZeit.split(".");
  var sek=0;
  for each (Teil in Teile)
  { Teil = trim(Teil);
    var Wert = Teil.split(" ");
    var Zahl = Wert[0];
    if (Zahl.match("0[1-9]+")) Zahl = Zahl.substr(1,Zahl.length);
    Zahl = parseInt(Zahl);
    var Einheit = Wert[1];
    switch (Einheit)
    { case "Sek": sek += Zahl; break;
      case "Min": sek += Zahl*60; break;
      case "Std": sek += Zahl*3600; break;
    }
  }
  return sek;
}

function Verbandseinsatz()
{ var User="X";
  var ret=false;

  var Obj = document.getElementById("navigation_top");
  if (Obj) Obj = Obj.getElementsByTagName("ul")[0];
  if (Obj) Obj = Obj.getElementsByTagName("ul")[0];
  if (Obj) Obj = Obj.getElementsByTagName("li")[0];
  if (Obj) Obj = Obj.getElementsByTagName("a")[0];
  if (Obj) Obj = Obj.innerHTML;
  if (Obj) User = Obj.replace(/Benutzer: /,"");
  mylog("User = " + User);

  Obj = document.getElementById("mission_content");
  if (Obj) Obj = Obj.getElementsByTagName("table")[0];
  if (Obj)
  { var TRs=Obj.getElementsByTagName("tr");
    for (var t=0;t<TRs.length;t++)
    { var TR=TRs[t];
      var THText = TR.getElementsByTagName("th")[0].innerHTML;
      if (THText == "Einsatz von")
      { var UserEinsatz="Y";
        Obj = TR.getElementsByTagName("td")[0];
        if (Obj) Obj = Obj.getElementsByTagName("a")[0];
        if (Obj) UserEinsatz=Obj.innerHTML;
        if (User != UserEinsatz) ret=true;
      }
    }
  }

  mylog("Verbandseinsatz=" + ret);
  return ret;
}

function NowDateString()
{ var Now = new Date();
  var X,R="";
  var X = Now.getFullYear();
  R+=X;
  X = "0" + (Now.getMonth()+1);
  X = X.substr(X.length-2,2);
  R+=X;
  X = "0" + Now.getDate();
  X = X.substr(X.length-2,2);
  R+=X;
  
  return R;
}

// function updateTest()
// { // prüfen, ob heute bereits ein Update-Check stattgefunden hat:
//  var LastUpdate = GM_getValue("LastUpdate","0");
//   var heute = NowDateString();
//   mylog("heute = " + heute + "\nLastUpdate = " + LastUpdate);
//   
//   // wenn ja, nicht noch einmal prüfen
//   if (LastUpdate == heute) return;
// 
//   // heute nicht nochmal prüfen
//   GM_setValue("LastUpdate",heute);
//   
  // userscript-Seite öffnen, um Version auszulesen
//   GM_xmlhttpRequest
//   ( { method: 'GET', 
//       url: UPDATEURL, 
//       onload: function(r) 
 //      { if (r.status==200)
//         { XML = r.responseText;
//           DoUpdateCheck(XML);
//         }
//       }
//     } 
//   )
// }

function DoUpdateCheck(XML)
{ var ThisVersion = GM_getValue("Version","version");
  var OnlineVersion = ParseXMLforVersion(XML);
  mylog("This  ="+ThisVersion);
  mylog("Online="+OnlineVersion);

  if (ThisVersion != OnlineVersion)
  { GM_setValue("pleaseUpdate",OnlineVersion);
    ScriptUpdateAvailable = OnlineVersion;
  }
  else
  { GM_setValue("pleaseUpdate","");
    ScriptUpdateAvailable = "";
  }
}

function ParseXMLforVersion(XML)
{ // aus XML den Versionsstand herausziehen:
  var H = XML;
  var Pos = H.indexOf("<div id='summary'>");
  if (Pos<0) return "OnlineVersion";
  H = H.substr(Pos,H.length);
  
  Pos = H.indexOf("<b>Version:</b>");
  H = H.substr(Pos+16,H.length);
  
  Pos = H.indexOf("<br />");
  H = H.substr(0,Pos-1);

  return H;
}

function init()
{ ToAlarm="";
  NichtVerf="";

  mylog ("init startet");
  document.addEventListener("DOMNodeInserted", nodeInserted, false);
  GetVariables();
//  if (CHECKFORUPDATES) updateTest();
}

function nodeInserted(e)
{ 
  // wenn ich selbst für die Änderung verantwortlich bin, nichts unternehmen
  if (ichBins) return;

  mylog ("nodeInserted, e=" + e.target.innerHTML.substr(0,100));

  // reload auf Übersichtseite hat stattgefunden:
  if (e.target.innerHTML == "Einsätze deines Verbandes")
  { window.setTimeout(main, 10);
    return;
  }
  // reload auf Einsatzseite hat stattgefunden:
  if (e.target.innerHTML.indexOf("<h2>Freie Fahrzeuge</h2>") > 0)
  { window.setTimeout(main, 100);
    return;
  }
  // in Schule wurde eine Wache "aufgeklickt":
  if (e.target.innerHTML.indexOf("<th>Ausbildung</th>") > 0)
  { window.setTimeout(Markiere_Schueler(e),10);
    return;
  }
  // reload auf Leitstellenansicht hat stattgefunden:
  if (e.target.innerHTML == "Leitstellenansicht")
  { window.setTimeout(main, 10);
    return;
  }

  mylog("HREF=" + document.location.href + "\nInserted: " + e.target.innerHTML.substr(0,500));
}

function dt() { debugging=true; }
function df() { debugging=false; }

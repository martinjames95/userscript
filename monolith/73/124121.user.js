// ==UserScript==
// @name           DarthBot Assistant
// @namespace      DarthBot
// @version        3.1.0
// @include        http://prodgame*.lordofultima.com/*/index.aspx*
// ==/UserScript==

(
    function() {

    var CT_mainFunction = function() {

       function createCtTweak() {
           qx.Class.define("darthbotClaimThis.main", {
               type: "singleton",
               extend: qx.core.Object,
               members: {
                   app: null,
				   chat: null,
				   lawlessView: null,
				   buttonRow: null,
				   buttonRowN: null,
				   newcityView: null,				   
                   initialize: function() {
                       this.app = qx.core.Init.getApplication();
					   this.lawlessView = this.app.cityDetailView;
					   this.newcityView = this.app.newCityView;						   
					   this.chat = this.app.chat;

                       this.createClaimButtons();
                   },
                   createClaimButtons: function() {
				   
						var buttonLayout = new qx.ui.layout.HBox(4).set( {alignX:"center"} );
						this.buttonRow = new qx.ui.container.Composite( buttonLayout ).set({maxWidth:306});
						
						var buttonLayoutN = new qx.ui.layout.HBox(4).set({alignX:"center"});
						this.buttonRowN = new qx.ui.container.Composite( buttonLayoutN ).set({maxWidth:306});
							

						this.lawlessView.actionArea.add(this.buttonRow);
						this.newcityView.container.add(new qx.ui.core.Spacer(0,40));
						this.newcityView.container.add(this.buttonRowN);
				
					   btnCcC = new qx.ui.form.Button(" Check ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnCcC.addListener("click", function() {this.claimThis("h")}, this);
					   this.buttonRow.add(btnCcC);
					   
					   btnCC = new qx.ui.form.Button(" Claim ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnCC.addListener("click", function() {this.claimThis("c")}, this);
					   this.buttonRow.add(btnCC);
					   
					   btnRC = new qx.ui.form.Button(" Release ").set({Width:50, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnRC.addListener("click", function() {this.claimThis("r")}, this);
					   this.buttonRow.add(btnRC);
					   
					   btnDC = new qx.ui.form.Button(" Crush ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnDC.addListener("click", function() {this.claimThis("d")}, this);
					   this.buttonRow.add(btnDC);

					   btnNC = new qx.ui.form.Button(" Near ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnNC.addListener("click", function() {this.claimThis("f")}, this);
					   this.buttonRow.add(btnNC);

					   btnPLC = new qx.ui.form.Button(" List ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnPLC.addListener("click", function() {this.claimThis("p")}, this);
					   this.buttonRow.add(btnPLC);
					   
					   btnTC = new qx.ui.form.Button("Test").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnTC.addListener("click", function() {this.claimThis("t")}, this);
					   this.buttonRow.add(btnTC);
					   
					   //Not city area
					   btnCcN = new qx.ui.form.Button(" Check ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnCcN.addListener("click", function() {this.claimThis("k")}, this);
					   this.buttonRowN.add(btnCcN);
					   
					   btnCN = new qx.ui.form.Button(" Claim ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnCN.addListener("click", function() {this.claimThis("n")}, this);
					   this.buttonRowN.add(btnCN);
					   
					   btnRN = new qx.ui.form.Button(" Release ").set({Width:50, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnRN.addListener("click", function() {this.claimThis("b")}, this);
					   this.buttonRowN.add(btnRN);
					   			   
					   btnNN = new qx.ui.form.Button(" Near ").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnNN.addListener("click", function() {this.claimThis("e")}, this);
					   this.buttonRowN.add(btnNN);
					   
					   btnTN = new qx.ui.form.Button("Test").set({Width:40, height: 32, alignX: "center", paddingLeft: 0, paddingRight: 0});
					   btnTN.addListener("click", function() {this.claimThis("tt")}, this);
					   this.buttonRowN.add(btnTN);
			   
                   },
					claimThis: function(v) {
						posX = posY = 0;
						if (v == "c" || v == "r" || v == "d" || v == "f" || v == "h" || v == "p" || v == "t") {
							if (typeof this.lawlessView.city.get_Coordinates == "undefined") {
								posX = this.lawlessView.city.getPosX(); posY = this.lawlessView.city.getPosY();
							} else {
								ctid = this.lawlessView.city.get_Coordinates(); posX = ctid & 0xFFFF; posY = ctid >> 16;
							}
							switch (v) {
								case "c": botAction = " claim "; break;
								case "r": botAction = " release "; break;
								case "d": botAction = " crush "; break;
								case "f": botAction = " near "; break;
								case "h": botAction = " check "; break;
								case "p": botAction = " list "; break;
								case "t": botAction = " test"; break;
							}
						}
						else if (v == "n" || v == "b" || v == "e" || v == "k" || v == "tt") {
							posX = this.newcityView.cityPosX; posY = this.newcityView.cityPosY;
							switch (v) {
								case "n": botAction = " claim "; break;
								case "b": botAction = " release "; break;
								case "e": botAction = " near "; break;
								case "k": botAction = " check "; break;
								case "tt":botAction = " test"; break;
							}
						}
						checkchat = this.chat.chatLine.getValue();
						if (checkchat == null) { this.chat.chatLine.setValue(""); checkchat = ""; }
						if (posX >= 0 && posX <= 9) posX = "00" + posX;
						else if (posX > 9 && posX < 100) posX = "0" + posX;
						if (posY >= 0 && posY <= 9) posY = "00" + posY;
						else if (posY > 9 && posY < 100) posY = "0" + posY;
						if (v == "p"){
							pname = qx.core.Init.getApplication().cityDetailView.city.get_PlayerName();
							this.chat.chatLine.setValue("/whisper GoatPimp"+botAction+pname);
							this.chat.sendCurrent();
						}
						else if (v == "t" || v == "tt") {
							this.chat.chatLine.setValue("/whisper GoatPimp"+botAction);
							this.chat.sendCurrent();
						}
						else
						{
							this.chat.chatLine.setValue("/whisper GoatPimp"+botAction+posX+":"+posY);
							this.chat.sendCurrent();							
						}
					}
				}
           });
       }

       function CT_checkIfLoaded() {
           try {
               if (typeof qx != 'undefined') {
                   a = qx.core.Init.getApplication(); 
                   c = a.cityInfoView;
                   ch = a.chat;
                   wdst = webfrontend.data.ServerTime.getInstance().refTime;
                   if (a && c && ch && wdst) {
                       createCtTweak();
                       window.darthbotClaimThis.main.getInstance().initialize();
                   } else
                       window.setTimeout(CT_checkIfLoaded, 1000);
               } else {
                   window.setTimeout(CT_checkIfLoaded, 1000);
               }
           } catch (e) {
               if (typeof console != 'undefined') console.log(e);
               else if (window.opera) opera.postError(e);
               else GM_log(e);
           }
       }

       if (/lordofultima\.com/i.test(document.domain))
           window.setTimeout(CT_checkIfLoaded, 1000);

    }
    // injecting, because there seem to be problems when creating game interface with unsafeWindow
    var darthbotClaimThisScript = document.createElement("script");
    txt = CT_mainFunction.toString();
    if (window.opera != undefined)
       txt = txt.replace(/</g, "&lt;"); // rofl Opera
    darthbotClaimThisScript.innerHTML = "(" + txt + ")();";
    darthbotClaimThisScript.type = "text/javascript";
    if (/lordofultima\.com/i.test(document.domain))
       document.getElementsByTagName("head")[0].appendChild(darthbotClaimThisScript);
})();
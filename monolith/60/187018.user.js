// ==UserScript==
// @name           select Debit Cards
// @namespace      neo@gmail.com
// @description    select SBI ATM-cum-Debit Card 
// @include        https://www.irctc.co.in/cgi-bin/bv60.dll/irctc/booking/bookticket.do*
// ==/UserScript==
function selectDebit Cards() {
    var form = document.forms.namedItem('BookTicketForm');
    var radioObj, radioLength;
    //alert("BookTicketForm");
    if(form) {
        //to click the "make payment" button
        //var paymentButton = form.elements.namedItem('Submit');
        //if(paymentButton.value == 'Make Payment') {
        //    paymentButton.click();
        //}
       
        //to choose the payment option
        //setBank(11,0,1); for SBI ATM-cum-Debit Card
        radioObj = form.elements.namedItem('gatewayIDV');
       
        if(radioObj) {
            //setBank(gatewayID, payMode, pgType);
            form.elements.namedItem('paymentMode').value = "0";
            //document.BookTicketForm.paymentMode.value = "0";
            form.elements.namedItem('pgType').value = "1";
            //document.BookTicketForm.pgType.value = "1";
            form.elements.namedItem('gatewayID').value = "11";
            //document.BookTicketForm.gatewayID.value = "11";
            form.elements.namedItem('buyTicket').value = "0";
            //document.BookTicketForm.buyTicket.value = "0";
            form.elements.namedItem('screen').value = "paymnt";
            //document.BookTicketForm.screen.value = "paymnt";
           
            if (form.elements.namedItem('TatkalOpt').value == "Y") { 
                form.elements.namedItem('CKFARE').value = "CKFARE";
            }
            //if (document.BookTicketForm.TatkalOpt.value == "Y") {
            //    document.BookTicketForm.TatkalOpt.value = "Y";
            //    document.BookTicketForm.CKFARE.value = "CKFARE";
            //}
           
            form.elements.namedItem('submitClicks').value = parseInt(form.elements.namedItem('submitClicks').value) + 1;
            //document.BookTicketForm.submitClicks.value = parseInt(document.BookTicketForm.submitClicks.value) + 1;
           
            form.submit();
           
            return true;
        }
       
    }//if
}
selectOnlineSBI();
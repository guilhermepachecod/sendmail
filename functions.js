
/*
 * This is a main JavaScript functions page

it has three global namespaces with method.

MYCONN has events

sendmail 
is a function that takes the values of the message box, validates all 
* fields of the inputs and sends them by the method post .post to the 
* send_mail.php page, at the end it changes the fields with error or 
* brings a message of confirmation of the sending.

 validateEmail 
 * is a function that uses regex to validate the e-mail field.

*/


//global namespace

var MYCONN = MYCONN || {};
//subspacename

MYCONN.events = {};
// Method declaration with object

MYCONN.events = {

	sendmail: function() {
		var txtname = $("#txtname").val();
		var txtmail = $("#txtmail").val();
		var txtsub = $("#txtsub").val();
		var txtbody = $("#txtbody").val();
		allok=1;
		if(txtname == ""){
			$("#txtname").addClass("error");
			allok=0;
		}else{
			$("#txtname").removeClass("error");
			if(allok==1){allok=1;}
		}
		if(MYCONN.events.validateEmail(txtmail)){
			$("#txtmail").removeClass("error");
			if(allok==1){allok=1;}
		}else{
			$("#txtmail").addClass("error");
			allok=0;	
		}

		if(txtsub == ""){
			$("#txtsub").addClass("error");
			allok=0;
		}else{
			$("#txtsub").removeClass("error");
			if(allok==1){allok=1;}
		}
		if(txtbody == ""){
			$("#txtbody").addClass("error");
			allok=0;
		}else{
			$("#txtbody").removeClass("error");
			if(allok==1){allok=1;}
		}
		if(allok==1){
			$('#boxmail').hide();
			$('#boxloading').show();
			$('#mailsendbutton').prop("disabled",true);
			var jsonpostdata = '[{ "txtname" : "'+txtname+'", "txtmail" : "'+txtmail+'", "txtsub" : "'+txtsub+'", "txtbody" : "'+txtbody+'" }]';
			sendmailpage = "send_mail.php";
			$.post(sendmailpage,jsonpostdata, function (resultdata) {
				resultreturn = $.parseJSON(resultdata);
				if(resultreturn[0].PASS=="OK"){
					$('#boxloading').hide();
					$('#boxendmsg').show();
				}else{
					$('#boxloading').hide();
					$('#boxendmsg').show();
				}
			});
		}
		
		
	},
	validateEmail: function(xfieldvalue) {
		var regularExpression = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
             return regularExpression.test(xfieldvalue);
	},
}

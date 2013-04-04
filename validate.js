var formValid = true;

var validations = {
	"creditCardNumber": /^\d{16}$/,
	"ccv": /^\d{3}$/,
	"creditCardExpir": /^\d\d[\/]\d\d$/,
	"creditCardOwner": /^[a-zA-Z]+\b\s[a-zA-Z]+$/
}

var showError = function (value, selector, regex) {
	value.focusout(function() {
		if (!regex.test(value.val())) {
			selector.removeClass('invisible');
			formValid = false;
		} else {
			selector.addClass('invisible');
			formValid = true;
		};
	});
}

var showSubmitConfirmation = function(event){   
	$('span.success-message').removeClass('invisible');
	event.preventDefault(); // prevents the page from reloading
};

$(document).ready(function(){
  	if (formValid) {
  		$("form").submit(showSubmitConfirmation); // register a callback
  	};

	showError($('#number'), $('span.number'), validations.creditCardNumber);
	showError($('#ccv'), $('span.ccv'), validations.ccv);
	showError($('#expiration'), $('span.expiration'), validations.creditCardExpir);
	showError($('#name'), $('span.name'), validations.creditCardOwner);

	$('input:radio[name=email-reciept]').click(function () {
	  	if ($(this).attr("id") == "yes" ) {
	  		if ($(this).is(":checked")) {
	  			$('div.recipient-email').removeClass('invisible');
	  		};
	  	} else {
	  			$('div.recipient-email').addClass('invisible');
	  	};
	});

});



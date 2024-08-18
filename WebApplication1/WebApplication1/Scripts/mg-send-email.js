$(document).ready(function () {
    $('.mg-contact-form').validate({
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            email: {
                required: true,
				email: true
            },
            phone_number: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: "Enter first name"
            },
            last_name: {
                required: "Enter last name"
            },
            email: {
                required: "Enter email address"
            },
            phone_number: {
                required: "Enter phone number"
            },
            message: {
                required: "Enter your message."
            }
        },
        submitHandler: function (form) {
			$('.mg-contact-form').trigger('reset');
			$('.alert-msg').fadeIn();
			
			/*
			 * Uncomment below code to send emails
			 */
			 
            /*$.ajax({
                url: "send-email.php",
                type: "POST",
                data: $(form).serialize(),
                dataType: 'html',
                beforeSend: function () {
                    $('.alert-msg').fadeOut();
                    $('.mg-contact-form button[type=submit]').html('SENDING...');
                },
                success: function (data) {
                    $('.alert-msg').html(data).fadeIn();
                    $('.mg-contact-form').trigger('reset');
                    $('.mg-contact-form button[type=submit]').html('SEND MESSAGE');
                },
                error: function (e) {
                    console.log(e)
                }
            });*/
            return false;
        }
    })
});
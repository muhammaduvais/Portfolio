$(document).ready(function(){
    $.validator.addMethod("validPhone", function(value, element) {
        return /^[6-9]\d{9}$/.test(value);
    }, "Please enter a valid 10-digit Indian phone number starting with 6-9.");

    $.validator.addMethod("validEmail", function(value, element) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    }, "Please enter a valid email address.");

    $("#submit-form").validate({
        rules : {
            fname:{
                required:true,
                minlength:4,
                maxlength:15
            },
            Email:{
                required:true,
                validEmail:true
            },
            phone:{
                required:true,
                minlength:10,
                maxlength:10,
                validPhone:true
            },
            message:{
                required:true,
                minlength:20,
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault(); 
            sent(form);
        },
        invalidHandler: function(event, validator) {
            alert("Form validation failed. Please check all the inputs are correct...");
        }
    })
})


function sent(form){
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyzQt1i7oq7D49lOHAvUTv_xCorDBG0hyfLiL4FuQZ_1OwQIOGU2od6DDev1HOpp_nG/exec",
        data: $(form).serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully");
            window.location.reload(); // reload the page after successful submission
        },
        error: function (err) {
            alert("Something Error");
        }
    });
}
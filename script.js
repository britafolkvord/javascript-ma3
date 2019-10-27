//Use RegEx to validate form
var button = document.getElementById(`input-submit`)

button.addEventListener(
    'click',function validate(){
        var firstName = document.getElementById(`input-firstName`).value;
        var lastName = document.getElementById(`input-lastName`).value;
        var email = document.getElementById(`input-email`).value;
        var phoneNumber = document.getElementById(`input-phoneNumber`).value;
        var firstNameReg = /^[a-zA-Z]$/;
        var lastNameReg = /^[a-zA-Z]$/;
        var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var firstNameRes = firstNameReg.test(firstName);
        var lastNameRes = lastNameReg.test(lastName);
        var emailRes = emailRegex.test(email);
        var phoneNumberRes = phoneRegex.test(phoneNumber);
    }
);



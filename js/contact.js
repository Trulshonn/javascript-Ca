const form = document.querySelector("#contactForm");

const name = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const firstNameError = document.querySelector("#firstNameError");
let firstNameHasError = false;
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;
const emailError = document.querySelector("#emailError");
let emailErrorHasError = false;
const subjectError = document.querySelector("#subjectError");
let subjectHasError = false;
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const messagesubmitted = document.querySelector("#messagesubmitted")
let messagesubmittedError = false;

form.addEventListener("submit", validateForm);



function validateForm()  {
    event.preventDefault();

    const nameValue = name.value;
//      const trimmedNamedValue = nameValue.trim();
//      const nameValueLength = trimmedNamedValue.length;

    if(validateLength(nameValue, 1) === true) {
//        console.log("name is valid");
        firstNameError.style.display= "none";
        firstNameHasError = false;
    } else {
//        console.log("first name is required")
        firstNameError.style.display= "block";
        firstNameHasError = true;
        }
 

    const lastNameValue = lastName.value;
//      const trimmedlastNamedValue = lastNameValue.trim();
//      const lastNameValueLength = trimmedlastNamedValue.length;

    if(validateLength(lastNameValue, 3) === true) {
//        console.log("last name is valid");
        lastNameError.style.display= "none";
        lastNameHasError = false;
    } else {
//        console.log("last name must have minimum length of 3")
        lastNameError.style.display= "block";
        lastNameHasError = true;
    }


    const subjectValue = subject.value;
//      const trimmedsubjectValue = subjectValue.trim();
//      const subjectValueLength = trimmedsubjectValue.length;

    if(validateLength(subjectValue, 7) === true) {
//        console.log("subject is valid");
        subjectError.style.display= "none";
        subjectHasError = false;
    } else {
//        console.log("please enter your suject, min 7 letters")
        subjectError.style.display= "block";
        subjectHasError = true;
    }


    const messageValue = message.value;
//      const trimmedmessagedValue = messageValue.trim();
//      const messageValueLength = trimmedmessagedValue.length;

    if(validateLength( messageValue, 15) === true) {
//        console.log("message is valid");
        messageError.style.display= "none";
        messageHasError = false;
    } else {
//        console.log("requires a minimum value of 15 letters")
        messageError.style.display= "block";
        messageHasError = true;
    }

   
    const emailValue = email.value;
    
    if(validateEmail(emailValue)) {
        emailError.style.display = "none";
        emailErrorHasError = false;
    } else {
        emailError.style.display = "block";
        emailErrorHasError = true;
    }

    if (firstNameHasError === true  || lastNameHasError === true  || subjectHasError === true  || messageHasError === true  || emailErrorHasError === true) {
        messagesubmitted.style.display ="none";
    } 
    else {
        messagesubmitted.style.display ="block";
    }

}

function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;
    
    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}


   
    
    
    
    
    
    
    
    
    
    
    
    
    
    


function validateName(){
    let inputFName = document.querySelector("#firstName");
    let valueFName = inputFName.value;
    let inputLName = document.querySelector("#lastName");
    let valueLName = inputLName.value;
    let errorName = document.querySelector("#error-name");

    if(valueFName == "" && valueLName == ""){
        errorName.innerHTML = "Name cannot be empty!"
        inputFName.style.border = "1px solid red";
        inputLName.style.border = "1px solid red";
        return false;
    }else if(valueFName == ""){
        errorName.innerHTML = "First name cannot be empty!"
        inputFName.style.border = "1px solid red";
        return false;
    }else if (valueLName == ""){
        errorName.innerHTML = "Last name cannot be empty!"
        inputLName.style.border = "1px solid red";
        return false;
    }else{
        errorName.innerHTML = ""
        inputFName.style.border = "1px solid black";
        inputLName.style.border = "1px solid black";
        return true;
    }
}

function isEmailValid(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}

function validateEmail(){
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");

    if(valueEmail == ""){
        errorEmail.innerHTML = "Email cannot be empty!"
        inputEmail.style.border = "1px solid red";
        return false;
    }else if(isEmailValid(valueEmail)){
        errorEmail.innerHTML = ""
        inputEmail.style.border = "1px solid black";
        return true;
    }else{
        errorEmail.innerHTML = "Email is not valid"
        inputEmail.style.border = "1px solid red";
        return false;
    }
}

// function isPhoneValid(phone){
//     let phonenum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//     return phonenum.test(phone);
// }

function isPhoneValid(phone){
    return(phone.length >= 12);
}

function validatePhone(){
    let inputPhone = document.querySelector("#phone");
    let valuePhone = inputPhone.value;
    let errorPhone = document.querySelector("#error-phone");

    if(valuePhone == ""){
        errorPhone.innerHTML = "Phone number cannot be empty!"
        inputPhone.style.border = "1px solid red";
        return false;
    }else if(isPhoneValid(valuePhone)){
        errorPhone.innerHTML = ""
        inputPhone.style.border = "1px solid black";
        return true;
    }else{
        errorPhone.innerHTML = "Phone number must be at least 12 numbers"
        inputPhone.style.border = "1px solid red";
        return false;
    }
}

function validateMessage(){
    let inputMessage = document.querySelector("#message");
    let valueMessage = inputMessage.value;
    let errorMessage = document.querySelector("#error-message1");

    if (valueMessage == ""){
        errorMessage.innerHTML = "Message cannot be empty!"
        inputMessage.style.border = "1px solid red";
        return false;
    }else{
        errorMessage.innerHTML = ""
        inputMessage.style.border = "1px solid black";
        return true;
    }
}

let sendBtn = document.querySelector("#send-btn");
sendBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    let resName = validateName();
    let resEmail = validateEmail();
    let resPhone = validatePhone();
    let resMessage = validateMessage();

    if (resName && resEmail && resPhone && resMessage){
        let contactForm = document.querySelector("#contact-form");
        contactForm.submit();
        alert("Thanks for contacting us! Hope you have a wonderful day! :)");
    }
})
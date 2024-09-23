function validationform(){
    const name=document.getElementById("name").Value;
    const address=document.getElementById("address").Value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phonenumber=document.getElementById("phonenumber").value;
    const subject=document.getElementById("subject").value;
    const agree=document.getElementById("agree").checked;
    //cheching the error
    const nameerror=document.getElementById("name-error");
    const addresserror=document.getElementById("address-error");
    const emailerror=document.getElementById("email-error");
    const passworderror=document.getElementById("password-error");
    const phonenumber=document.getElementById("phonenumber-error");
    const subjecterror=document.getElementById("subject-error");
    const agreeerror=document.getElementById("agree-error");



nameerror.textContent="";
addresserror.textContent="";
emailerror.textContent="";
password.textContent="";
phonenumber.textContent="";
subject.textContent="";
agree.textContent="";


let isValid = true;
if (name === "" || /\d/.test(name)) {
nameerror.textContent =
"Please enter your name properly.";
isValid = false;
}
if (address === "") {
addresserror.textContent =
"Please enter your address.";
isValid = false;
}
if (email === "" || !email.includes("@")) {
emailerror.textContent =
"Please enter a valid email address.";
isValid = false;
}
if (password === "" || password.length < 8|| password==="uppercase" || password==="lowercase") {
passworderror.textContent =
"Please enter a password with at least 6 characters.";
isValid = false;
}
if(phonenumber===""||phonenumber.length<10){
    phonenumber.textContent="please enter a correct phone number"
    isValid=false;
}
if (subject === "") {
subjecterror.textContent =
"Please select your course.";
isValid = false;
}
if (!agree) {
agreeerror.textContent =
"Please agree to the above information.";
isValid = false;
}
return isValid;
}


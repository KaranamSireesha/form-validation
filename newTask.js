const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const tc = document.getElementById("tc");
let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();

})

function validate() {
    let fNameValue = fname.value.trim();
    let lNameValue = lname.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();


    if (fNameValue === '') {
        setError(fname, 'fname cannot be empty')
    }
    else if (fNameValue.length < 5) {
        setError(fname, 'fname must have min 3 characters')
    }
    else {
        setSuccess(fname)
    }
    if (lNameValue === '') {
        setError(lname, 'lnmae cannot be empty')
    }
    else if (lNameValue.length < 3) {
        setError(lname, 'lname must have min 1 character')
    }
    else {
        setSuccess(lname)
    }
    if (emailValue === '') {
        setError(email, 'email cannot be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'enter a valid emailId')
    }
    else {
        setSuccess(email)
    }
    if (phoneValue === '') {
        setError(phone, 'please enter your mobile number')
    }
    else if (checkMobile(phoneValue.length < 10)) {
        setError(phone, 'please check the number')
    }
    else if (phoneValue.length > 10) {
        setError(phone, 'enter a valid number')
    }
    else {
        setSuccess(phone)
    }
    if (passwordValue === '') {
        setError(password, 'please enter the password')
    }
    else if (passwordValue.length < 8) {
        setError(password, 'password must contain min 8 characters')
    }
    else {
        setSuccess(password)
    }
    if (cpasswordValue === '') {
        setError(cpassword, 'enter the password')
    }
    else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'please check the password')
    }
    else {
        setSuccess(cpassword)
    }
    if (!tc.checked) {
        setError(tc, 'agree to terms and conditions')
    }
    else {
        setSuccess(tc)
    }
    function setError(input, message) {
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        small.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }
    function setSuccess(input) {
        let parent = input.parentElement;
        parent.classList.add('success');
        parent.classList.remove('error');
    }
    function emailCheck(input) {
        let valid = emailReg.test(input);
        return valid;
    }
    function checkMobile(e) {
        let mobileReg = /^[0]?[6789]\d{9}$/;    
        let valid = mobileReg.test(e);
        return valid;
    }

}


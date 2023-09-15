const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //trim to remove whitespaces
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        setErrorfor(firstname, "firstname cannot be blank");
    }else {
        setSuccessfor(firstname);
    }

    
    if(surnameValue === '') {
        setErrorfor(surname, "surname cannot be blank");
    }else {
        setSuccessfor(surname);
    }

    
    if(emailValue === '') {
        setErrorfor(email, "email cannot be blank");
    }else  if (!isEmail(emailValue)){
        setErrorfor(email, "Not a valid email");
    }else {
        setSuccessfor(email);
    }

    if(passwordValue === '') {
        setErrorfor(password, "password cannot be blank");
    }else {
        setSuccessfor(password);
    }


    if(password2Value === '') {
        setErrorfor(password2, "password2 cannot be blank");
    }else if(passwordValue !== password2Value) {
        setErrorfor(password2, "password doesnt match");
    } else{
        setSuccessfor(password2);
    }
}

 
    function setErrorfor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerText = message;
    }
     function setSuccessfor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
     }

     function isEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }

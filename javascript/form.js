const SUBMIT = document.querySelector("input[type = 'submit']");
SUBMIT.addEventListener('click', (event) => { formValidation(event); });

const FNAME = document.querySelector("#fname");
const EMAIL = document.querySelector("#email");

function formValidation(e) {
    e.preventDefault();
    if (allLetter(FNAME)) {
        console.log("Name is validated")
        if (validateEmail(EMAIL)){
            console.log("Email is validated")
            alert("Form successfully submitted");
            //open newpage();
            openNewHTML('thankyou.html');
            return true;
        }
    }
    return false;
}

//function to change the background of field to pink on focus for error
function errorFocus(field){
    field.style.backgroundColor = 'pink';
};

//function to change the background of field to default on blue
function bg_default(field){
    field.style.backgroundColor = '';
};

function allLetter(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.value == ""){
        alert('Name cannot be blank.');
        name.focus();
        errorFocus(name);
        return false;
    }else {
        if (name.value.match(letters)) {
            bg_default(name)
            return true;
        }
    }
}

//validate Email field
function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value == ""){
        alert('Email cannot be blank.');
        email.focus();
        errorFocus(email);
        return false;
    }else {
        if (email.value.match(mailformat)) {
            bg_default(email)
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            email.focus();
            errorFocus(email);
            return false;
        }
    }
}

// function openNewPage(){
//     document.open();
//     document.write("<h1> Payment Submitted Successfully! </h1>");
//     document.write('<img src="image/thank-you.jpg">');
// }

function openNewHTML(filename){
    var currentPath = location.pathname;
    var indexLastSlash = currentPath.lastIndexOf('/');
    var newHTMLPath = currentPath.substring(0,indexLastSlash) + "/" + filename;
    location.pathname = newHTMLPath;
}

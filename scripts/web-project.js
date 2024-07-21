// declare and Instantiate Variables
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Responsive Navigation Menu - Add Event Listener
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get the date and time the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${text}`;

// Form Validation
const form = document.querySelector('form');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
    validateMessage();
});

function validateEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '' || !isEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }
}

function validateMessage() {
    const messageValue = message.value.trim();
    if (messageValue === '') {
        setError(message, 'Message cannot be empty');
    } else {
        setSuccess(message);
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]+)*\.[a-zA-Z]{2,}))$/.test(email);
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}





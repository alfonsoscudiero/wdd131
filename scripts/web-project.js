// declare and Instantiate Variables
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Create a Responsive Menu - Add Event Listener
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


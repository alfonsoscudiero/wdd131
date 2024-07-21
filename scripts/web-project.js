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






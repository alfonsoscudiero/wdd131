const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get the date and time the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${text}`;


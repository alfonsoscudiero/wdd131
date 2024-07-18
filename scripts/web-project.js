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

// Automatic Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
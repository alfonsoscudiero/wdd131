// Declare variables for elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Event listener to toggle menu visibility
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get the date and time the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${text}`;

// Function calculate Windchill
function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const temperature = 32; // °C
    const windSpeed = 15; // km/h

    const windChillElement = document.getElementById('windchill');

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + ' °C';
    } 
    else {
        windChillElement.textContent = 'N/A';
    }
});
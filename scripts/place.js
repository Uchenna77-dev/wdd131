// Select the first paragraph in the footer for the copyright year
const footerParagraph1 = document.querySelector("footer p:first-of-type");
const currentYear = new Date().getFullYear(); // Get the current year
footerParagraph1.innerHTML = `&copy; ${currentYear} 🪶 Uchenna Onuorah 🪶 Nigeria`; // Dynamically set copyright year

// Select the second paragraph in the footer for the "last modified" date
const footerParagraph2 = document.querySelector("footer p:nth-of-type(2)");
const lastModified = document.lastModified; // Get the last modified date of the document
footerParagraph2.textContent = `Last modified on: ${lastModified}`;


// Static values for temperature and wind speed
const temperature = 5; // Example: in °C
const windSpeed = 10; // Example: in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    // Formula for wind chill in metric units
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Check conditions and display wind chill
const windChillElement = document.querySelector(".wea p.wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `Wind Chill: ${calculateWindChill(
        temperature,
        windSpeed
    )} °C`;
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}
// Select the first paragraph in the footer for the copyright year
const footerParagraph1 = document.querySelector("footer p:first-of-type");
const currentYear = new Date().getFullYear(); // Get the current year
footerParagraph1.innerHTML = `&copy; ${currentYear} 🪶 Uchenna Onuorah 🪶 Nigeria`; // Dynamically set copyright year

// Select the second paragraph in the footer for the "last modified" date
const footerParagraph2 = document.querySelector("footer p:nth-of-type(2)");
const lastModified = document.lastModified; // Get the last modified date of the document
footerParagraph2.textContent = `Last modified on: ${lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function toggleHamButtonVisibility() {
    if (window.innerWidth <= 600) {
        hamButton.style.display = 'block';
    } else {
        hamButton.style.display = 'none'; 
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    }
}
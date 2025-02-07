// Select the first paragraph in the footer for the copyright year
const footerParagraph1 = document.querySelector("footer p:first-of-type");
const currentYear = new Date().getFullYear(); // Get the current year
footerParagraph1.innerHTML = `&copy; ${currentYear} 🪶 Uchenna Onuorah 🪶 Nigeria`; // Dynamically set copyright year

// Select the second paragraph in the footer for the "last modified" date
const footerParagraph2 = document.querySelector("footer p:nth-of-type(2)");
const lastModified = document.lastModified; // Get the last modified date of the document
footerParagraph2.textContent = `Last modified on: ${lastModified}`;

// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Options
const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = '';
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
    
});


function updateReviewCount() {
    // Retrieve the current counter from localStorage; if it doesn't exist, use 0
    let count = localStorage.getItem('reviewCount') || 0;
    
    // Convert the count to a number and increment it by 1
    count = parseInt(count, 10) + 1;
    
    // Save the updated count back to localStorage
    localStorage.setItem('reviewCount', count);
    
    // Update the page display to show the updated counter
    document.getElementById('reviewCount').textContent = count;
  }

  // To view the count in local storage, uncomment the document.addEventListener.
  // document.addEventListener('DOMContentLoaded', updateReviewCount);
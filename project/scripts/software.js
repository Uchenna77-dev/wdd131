    // Select the first paragraph in the footer for the copyright year
const footerParagraph1 = document.querySelector("footer p:first-of-type");
const currentYear = new Date().getFullYear(); // Get the current year
footerParagraph1.innerHTML = `&copy; ${currentYear} 🪶 Uchenna Onuorah 🪶 Nigeria`; // Dynamically set copyright year

// Select the second paragraph in the footer for the "last modified" date
const footerParagraph2 = document.querySelector("footer p:nth-of-type(2)");
const lastModified = document.lastModified; // Get the last modified date of the document
footerParagraph2.textContent = `Last modified on: ${lastModified}`;

 // Toggle extra content on the homepage, if the elements exist
 const toggleBtn = document.getElementById('toggleContent');
 const extraContent = document.getElementById('extraContent');
 if (toggleBtn && extraContent) {
   // Set a default display value if not set
   if (!extraContent.style.display) extraContent.style.display = 'none';
   toggleBtn.addEventListener('click', () => {
     if (extraContent.style.display === 'none') {
       extraContent.style.display = 'block';
       toggleBtn.textContent = 'Show Less';
     } else {
       extraContent.style.display = 'none';
       toggleBtn.textContent = 'Show More';
     }
   });
 }

 // Toggle fun fact visibility on the about page, if elements exist
 const funFactBtn = document.getElementById('funFactBtn');
 const factText = document.getElementById('factText');
 if (funFactBtn && factText) {
   // Set default display value if not set
   if (!factText.style.display) factText.style.display = 'none';
   funFactBtn.addEventListener('click', () => {
     if (factText.style.display === 'none') {
       factText.style.display = 'block';
       funFactBtn.textContent = 'Hide Fun Fact';
     } else {
       factText.style.display = 'none';
       funFactBtn.textContent = 'Show Fun Fact';
     }
   });
 }

 document.addEventListener("DOMContentLoaded", function() {
  // Predefined resource options
  const options = [
    "Beginner's Guide to Software Engineering",
    "Advanced Software Design Patterns",
    "Interview with a Senior Software Engineer",
    "The Future of Software Engineering"
  ];
  
  // Use 'let' so we can update this object later.
  let selectionCounts = {};
  // Initialize selectionCounts for each option to 0.
  options.forEach(option => {
    selectionCounts[option] = 0;
  });
  
  // Check localStorage for existing counts
  const storedCounts = localStorage.getItem("selectionCounts");
  if (storedCounts) {
    const parsedCounts = JSON.parse(storedCounts);
    // Merge stored counts with the default values
    options.forEach(option => {
      if (parsedCounts.hasOwnProperty(option)) {
        selectionCounts[option] = parsedCounts[option];
      }
    });
  }
  
  const selectElement = document.getElementById("resources");
  if (selectElement) {
    // Populate the select element with options
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      selectElement.appendChild(opt);
    });
    
    // Listen for changes on the select element
    selectElement.addEventListener("change", function() {
      const selected = selectElement.value;
      if (selectionCounts.hasOwnProperty(selected)) {
        selectionCounts[selected]++;
        console.log(`"${selected}" has been selected ${selectionCounts[selected]} time(s).`);
        // Save the updated selectionCounts to localStorage
        localStorage.setItem("selectionCounts", JSON.stringify(selectionCounts));
      }
    });
  }
});

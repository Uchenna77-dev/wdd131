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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple-exterior.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Quebec, Canada",
        dedicated: "2014, June, 2",
        area: 1073,
        imageUrl: "images/montreal-quebec.jpeg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 4255,
        imageUrl: "images/madrid-spain-temple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 3810,
        imageUrl: "images/rome-italy-temple.jpg"
    }
];


// Select the container div
const templeContainer = document.getElementById("temple-container");

// Function to display temples
function displayTemples(templeList) {
    templeContainer.innerHTML = ""; // Clear previous content

    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
        `;
        templeContainer.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(filter) {
    let filteredTemples;

    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

// Add event listeners to all nav links
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filterType = link.getAttribute("href").toLowerCase();
        filterTemples(filterType);
    });
});

// Display all temples on initial load
displayTemples(temples);




    

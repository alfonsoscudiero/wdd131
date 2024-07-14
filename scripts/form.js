// Get the current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get the date and time the document was last modified
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${text}`;

// Define the Product Array: Each object contains an id, name, and average_rating.
const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        average_rating: 4.5,
    },
    {
        id: "fc-2050",
        name: "Power laces",
        average_rating: 4.7,
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        average_rating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        average_rating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        average_rating: 5.0
    }
];

// Get the Select Element: 
// Use document.getElementById or a similar method to get the target <select> element.
const productSelect = document.getElementById('product-name');

//  Iterate over each product in the array.
products.forEach(product => {
    // Create New Element: Use document.createElement to create new <option> elements.
    const option = document.createElement('option');
    // Set Attributes: Set necessary attributes (like value) and text content for the new elements.
    option.value = product.id;
    option.textContent = product.name;
    // Append Elements: Append the newly created elements to the target element
    productSelect.appendChild(option);
});


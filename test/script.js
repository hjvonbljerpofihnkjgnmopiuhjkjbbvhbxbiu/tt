// script.js

// Example data (could be fetched from an API or database)
const colors = [
    {name: "Red", hex: "#FF0000", type: "Primary", image: "red.png"},
    {name: "Green", hex: "#00FF00", type: "Secondary", image: "green.png"},
    {name: "Blue", hex: "#0000FF", type: "Primary", image: "blue.png"},
    // Add more colors here
];

// Populate the color list
const colorList = document.getElementById('color-list');
colors.forEach(color => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div>${color.name}`;
    li.addEventListener('click', () => displayColorDetails(color));
    colorList.appendChild(li);
});

// Display color details when a color is selected
function displayColorDetails(color) {
    document.getElementById('color-img').src = color.image;
    document.getElementById('color-name').textContent = `Name: ${color.name}`;
    document.getElementById('color-hex').textContent = `Hex: ${color.hex}`;
    document.getElementById('color-type').textContent = `Type: ${color.type}`;
}

// Handle color picker changes
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', () => {
    const hex = colorPicker.value;
    const rgb = hexToRgb(hex);
    document.getElementById('picked-hex').textContent = `Hex: ${hex}`;
    document.getElementById('picked-rgb').textContent = `RGB: ${rgb}`;
});

// Convert HEX to RGB
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `${r}, ${g}, ${b}`;
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredColors = colors.filter(color => 
        color.name.toLowerCase().includes(searchValue) ||
        color.hex.toLowerCase().includes(searchValue) ||
        color.type.toLowerCase().includes(searchValue)
    );
    colorList.innerHTML = '';
    filteredColors.forEach(color => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div>${color.name}`;
        li.addEventListener('click', () => displayColorDetails(color));
        colorList.appendChild(li);
    });
});

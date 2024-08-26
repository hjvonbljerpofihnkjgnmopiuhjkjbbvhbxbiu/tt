const colors = [
    { name: "Red", hex: "#FF0000", type: "Primary", image: "path_to_red_image.jpg" },
    { name: "Green", hex: "#00FF00", type: "Primary", image: "path_to_green_image.jpg" },
    { name: "Blue", hex: "#0000FF", type: "Primary", image: "path_to_blue_image.jpg" },
    // Add more colors as needed
];

const colorList = document.getElementById('color-list');
const colorName = document.getElementById('color-name');
const colorHex = document.getElementById('color-hex');
const colorType = document.getElementById('color-type');
const colorImage = document.getElementById('color-image');
const colorPicker = document.getElementById('color-picker');
const pickedHex = document.getElementById('picked-hex');
const pickedRgb = document.getElementById('picked-rgb');
const searchInput = document.getElementById('search');

function displayColorDetails(color) {
    colorName.textContent = `Name: ${color.name}`;
    colorHex.textContent = `Hex: ${color.hex}`;
    colorType.textContent = `Type: ${color.type}`;
    colorImage.src = color.image;
}

function generateColorList() {
    colors.forEach(color => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div> ${color.name}`;
        li.addEventListener('click', () => displayColorDetails(color));
        colorList.appendChild(li);
    });
}

function searchColors() {
    const query = searchInput.value.toLowerCase();
    const filteredColors = colors.filter(color => 
        color.name.toLowerCase().includes(query) ||
        color.hex.toLowerCase().includes(query) ||
        color.type.toLowerCase().includes(query)
    );
    colorList.innerHTML = '';
    filteredColors.forEach(color => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div> ${color.name}`;
        li.addEventListener('click', () => displayColorDetails(color));
        colorList.appendChild(li);
    });
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    pickedHex.textContent = `Hex: ${color}`;
    pickedRgb.textContent = `RGB: ${hexToRgb(color)}`;
});

searchInput.addEventListener('input', searchColors);

window.onload = generateColorList;

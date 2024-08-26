const colors = [
    { name: 'Rouge', hex: '#FF0000', type: 'Couleur primaire', image: 'red_image_url' },
    { name: 'Vert', hex: '#00FF00', type: 'Couleur primaire', image: 'green_image_url' },
    { name: 'Bleu', hex: '#0000FF', type: 'Couleur primaire', image: 'blue_image_url' },
    // Ajouter plus de couleurs ici...
];

const colorList = document.getElementById('colorList');
const colorName = document.getElementById('colorName');
const colorHex = document.getElementById('colorHex');
const colorType = document.getElementById('colorType');
const colorSample = document.getElementById('colorSample');
const colorImage = document.getElementById('colorImage');
const pickerOutput = document.getElementById('pickerOutput');
const colorPicker = document.getElementById('colorPicker');

// Afficher la liste des couleurs
colors.forEach(color => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div>${color.name}`;
    li.addEventListener('click', () => displayColorInfo(color));
    colorList.appendChild(li);
});

function displayColorInfo(color) {
    colorName.textContent = `Nom: ${color.name}`;
    colorHex.textContent = `Code HEX: ${color.hex}`;
    colorType.textContent = `Type: ${color.type}`;
    colorSample.style.backgroundColor = color.hex;
    colorImage.src = color.image;
}

colorPicker.addEventListener('input', (e) => {
    const hexValue = e.target.value;
    const rgbValue = hexToRgb(hexValue);
    pickerOutput.textContent = `HEX: ${hexValue} | RGB: ${rgbValue}`;
});

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    colorList.innerHTML = '';
    const filteredColors = colors.filter(color => 
        color.name.toLowerCase().includes(query) || 
        color.hex.toLowerCase().includes(query) ||
        color.type.toLowerCase().includes(query)
    );
    filteredColors.forEach(color => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="color-dot" style="background-color: ${color.hex};"></div>${color.name}`;
        li.addEventListener('click', () => displayColorInfo(color));
        colorList.appendChild(li);
    });
});

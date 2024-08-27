// script.js

// Example data (could be fetched from an API or database)
const colors = [
    {name: "Alpina Purple", hex: "#0E0A19", type: "Violet", image: "https://i.postimg.cc/SxYqFXpt/image.png"},
    {name: "Atlantis Blue", hex: "#002845", type: "Bleu", image: "https://i.postimg.cc/63FR52mb/image.png"},
    {name: "Atlantis Blue II", hex: "#02334E", type: "Bleu", image: "https://i.postimg.cc/wTYzDxKC/image.png"},
    {name: "Baby Blue", hex: "#3961B2", type: "Bleu", image: "https://i.postimg.cc/fTBhp6gy/image.png"},
    {name: "Fire Orange", hex: "#8A2B03", type: "Orange", image: "https://i.postimg.cc/mrG3f6nz/image.png"},
    {name: "Hockenheim Silver", hex: "#7885A2", type: "Gris", image: "https://i.postimg.cc/BQpc9g0M/image.png"},
    
    {name: "Venetian Red", hex: "#FD1404", type: "Rouge", image: "https://i.postimg.cc/63YTcX1K/image.png"},
    {name: "Firenze Red", hex: "#4B000D", type: "Rouge", image: "https://i.postimg.cc/HLb6VSvX/image.png"},
    {name: "Aventurine Grey Metallic", hex: "#1F2322", type: "Gris", image: "https://i.postimg.cc/MHnPKzCK/image.png"},
    {name: "Gea Lucido", hex: "#353517", type: "Jaune", image: "https://i.postimg.cc/JzjkVS2w/image.png"},
    {name: "Rapid Blue II", hex: "#063D8F", type: "Bleu", image: "https://i.postimg.cc/Y9L3FdSt/image.png"},
    {name: "Solarbeam Yellow III", hex: "#BE7813", type: "Jaune", image: "https://i.postimg.cc/Twk6yYhz/image.png"},
    {name: "Brillant Red", hex: "#BB000A", type: "Rouge", image: "https://i.postimg.cc/mkQKYLrZ/image.png"},
    {name: "Kingfisher Blue II", hex: "#032E46", type: "Bleu", image: "https://i.postimg.cc/8CZKMygY/image.png"},
    {name: "Fire Red", hex: "#A70A00", type: "Rouge", image: "https://i.postimg.cc/FRXhx07Q/image.png"},
    {name: "Sao Paulo", hex: "#D0D53D", type: "Jaune", image: "https://i.postimg.cc/ZRDQtwfN/image.png"},
    {name: "Giallo Perlatto", hex: "#B19C0A", type: "Jaune", image: "https://i.postimg.cc/gk8jtQJf/image.png"},
    {name: "Frozen Berry", hex: "#5B505B", type: "Violet", image: "https://i.postimg.cc/VLrnfKNR/image.png"},
    {name: "Furious Fuchsia", hex: "#501733", type: "Violet", image: "https://i.postimg.cc/bNhSPpKz/image.png"},
    {name: "B5 Blue", hex: "#043362", type: "Bleu", image: "https://i.postimg.cc/L8Zz4NxS/image.png"},
    {name: "Sicilian Yellow", hex: "#79570D", type: "Jaune", image: "https://i.postimg.cc/j2FZmCS4/image.png"},
    {name: "Yosemite Blue Magno", hex: "#142942", type: "Bleu", image: "https://i.postimg.cc/FFCmg449/image.png"},
    {name: "Lizard Green II", hex: "#2D530D", type: "Vert", image: "https://i.postimg.cc/JhCBrX6d/image.png"},
    {name: "Firethorn", hex: "#380411", type: "Rouge", image: "https://i.postimg.cc/qMX7sFjQ/image.png"},
    {name: "Crayon", hex: "#9693A1", type: "Gris", image: "https://i.postimg.cc/dQhHTPtP/image.png"},
    
    {name: "Hyper Red", hex: "#3C0612", type: "Rouge", image: "https://i.postimg.cc/6pFGhNYD/3C0612.png"},
    {name: "Satin Red", hex: "#60050C", type: "Rouge", image: "https://i.postimg.cc/3xq2bGJf/60050C.png"},
    {name: "Exposed Red Carbon", hex: "#250D12", type: "Rouge", image: "https://i.postimg.cc/tJdzK4mZ/250D12.png"},
    {name: "Wine Red", hex: "#48161B", type: "Rouge", image: "https://i.postimg.cc/GhrKkvHk/48161B.png"},
    {name: "Rosso Magma", hex: "#410409", type: "Rouge", image: "https://i.postimg.cc/j2v76wFX/410409.png"},
    {name: "Riverside Red", hex: "#6E1A1A", type: "Rouge", image: "https://i.postimg.cc/9QCkFvdH/6E1A1A.png"},
    {name: "Flame Red '88", hex: "#692500", type: "Rouge", image: "https://i.postimg.cc/FsscrpYn/692500.png"},
    {name: "Rally Red", hex: "#7B1516", type: "Rouge", image: "https://i.postimg.cc/9M7bBpdB/7B1516.png"},
    {name: "Rosso Corsa", hex: "#8E1013", type: "Rouge", image: "https://i.postimg.cc/ZY6jBwKb/8E1013.png"},
    {name: "Rosso Fuoco", hex: "#2F090A", type: "Rouge", image: "https://i.postimg.cc/5N7z6zv9/2F090A.png"},
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
    document.getElementById('color-name').textContent = `Nom: ${color.name}`;
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

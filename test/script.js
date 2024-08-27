// script.js

// Example data (could be fetched from an API or database)
const colors = [
    {name: "Alpina Purple", hex: "#0E0A19", type: "Violet", image: "https://i.postimg.cc/SxYqFXpt/image.png"},
    {name: "Atlantis Blue", hex: "#002845", type: "Bleu", image: "https://i.postimg.cc/63FR52mb/image.png"},
    {name: "Atlantis Blue II", hex: "#02334E", type: "Bleu", image: "https://i.postimg.cc/wTYzDxKC/image.png"},
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
    {name: "Neptune Blue", hex: "#122C68", type: "Bleu", image: "https://i.postimg.cc/k5XHD2pq/image.png"},
    {name: "Domolite Silver", hex: "#50586A", type: "Gris", image: "https://i.postimg.cc/MKpfPxNX/image.png"},
    {name: "Blu Genziana", hex: "#22334C", type: "Bleu", image: "https://i.postimg.cc/d3LvCWNQ/image.png"},
    {name: "Miami Blue II", hex: "#005EAB", type: "Bleu", image: "https://i.postimg.cc/RVgsyS0Y/image.png"},
    {name: "Mahogany", hex: "#140B0A", type: "Marron", image: "https://i.postimg.cc/yY29ktpd/image.png"},
    {name: "Lime Mist Poly", hex: "#2A3A1C", type: "Vert", image: "https://i.postimg.cc/28nvLTs7/image.png"},
    {name: "Ladybug Red", hex: "#35000C", type: "Rouge", image: "https://i.postimg.cc/ZqXKcz3B/image.png"},
    {name: "Paris Blue II", hex: "#023398", type: "Bleu", image: "https://i.postimg.cc/FFpXFQRy/image.png"},
    {name: "Wedgewood Blue", hex: "#335D98", type: "Bleu", image: "https://i.postimg.cc/nzLYv74c/image.png"},
    {name: "Caribbean Pearl", hex: "#164165", type: "Bleu", image: "https://i.postimg.cc/wT5RrTQd/image.png"},
    {name: "Cardinal Red Magno", hex: "#45060B", type: "Rouge", image: "https://i.postimg.cc/15XbCfQ8/image.png"},
    {name: "Absolute Zero White", hex: "#9AA2BB", type: "Gris", image: "https://i.postimg.cc/tg6shqTf/image.png"},
    {name: "Malibu Blue", hex: "#12325F", type: "Bleu", image: "https://i.postimg.cc/qM90283J/image.png"},
    {name: "Java Green", hex: "#1A351C", type: "Vert", image: "https://i.postimg.cc/W1XBXgDq/image.png"},
    {name: "Agate Grey", hex: "#25282F", type: "Gris", image: "https://i.postimg.cc/0QWrvbHz/image.png"},
    {name: "Olive", hex: "#2C3D2C", type: "Vert", image: "https://i.postimg.cc/MKdwrhNG/image.png"},
    {name: "Ocean Jade", hex: "#164254", type: "Bleu", image: "https://i.postimg.cc/nLLGGQ7z/image.png"},
    {name: "Mamba Green", hex: "#073012", type: "Vert", image: "https://i.postimg.cc/kMyDqYz0/image.png"},
    {name: "Winter Blue", hex: "#172D57", type: "Bleu", image: "https://i.postimg.cc/7h5RsW25/image.png"},
    {name: "Azzurro Tethys", hex: "#4C5F81", type: "Bleu", image: "https://i.postimg.cc/hjTsXRTb/image.png"},
    {name: "GT Silver", hex: "#4F586B", type: "Gris", image: "https://i.postimg.cc/d37yh8bM/image.png"},
    {name: "Ruby Star / Rubystone Red", hex: "#65033A", type: "Rose", image: "https://i.postimg.cc/hvyR5mvG/image.png"},
    {name: "Racing Yellow II", hex: "#C59309", type: "Jaune", image: "https://i.postimg.cc/WzMXDcLc/image.png"},
    {name: "Nogaro Blue", hex: "#020F49", type: "Bleu", image: "https://i.postimg.cc/RZj6Y6JG/image.png"},
    {name: "Albert Blue II", hex: "#0F1330", type: "Bleu", image: "https://i.postimg.cc/TwsZj64y/image.png"},
    {name: "Etna Blue", hex: "#2E3F64", type: "Bleu", image: "https://i.postimg.cc/T1CQjqwt/image.png"},
    {name: "Ultraviolet", hex: "#231C4C", type: "Violet", image: "https://i.postimg.cc/tgqtXvz7/image.png"},
    {name: "Albert Blue", hex: "#0C0F27", type: "Bleu", image: "https://i.postimg.cc/QxM3Tjxq/image.png"},
    {name: "San Marino Blue", hex: "#030433", type: "Bleu", image: "https://i.postimg.cc/SQ1yVnPP/image.png"},
    {name: "Arena Red", hex: "#2A0507", type: "Rouge", image: "https://i.postimg.cc/pX0qmHpz/image.png"},
    {name: "Meissen Blue", hex: "#4C79B6", type: "Bleu", image: "https://i.postimg.cc/CxgkMr4k/image.png"},
    {name: "Bahama Orange", hex: "#8C5624", type: "Orange", image: "https://i.postimg.cc/4xyZcswg/image.png"},
    {name: "Sepia Brown", hex: "#502A17", type: "Marron", image: "https://i.postimg.cc/QNYftDB5/image.png"},
    {name: "Club Blue", hex: "#062BAA", type: "Bleu", image: "https://i.postimg.cc/W3B6GN0f/image.png"},
    {name: "Viola Purple", hex: "#352965", type: "Violet", image: "https://i.postimg.cc/xCn9cH4s/image.png"},
    {name: "Pascha Red", hex: "#1A0102", type: "Rouge", image: "https://i.postimg.cc/2ygJBN5z/image.png"},
    {name: "Ara Blue II", hex: "#0C1D4B", type: "Bleu", image: "https://i.postimg.cc/9fSNkjGy/image.png"},
    {name: "Racing Grey", hex: "#212633", type: "Gris", image: "https://i.postimg.cc/Gp0yg74H/image.png"},
    {name: "Baby Blue", hex: "#3961B2", type: "Bleu", image: "https://i.postimg.cc/fTBhp6gy/image.png"},
    
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

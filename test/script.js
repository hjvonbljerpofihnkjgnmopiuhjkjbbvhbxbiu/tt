// script.js

// Example data (could be fetched from an API or database)
const colors = [
    {name: "Alpina Purple", hex: "#0E0A19", type: "Violet", image: "https://i.postimg.cc/SxYqFXpt/image.png"},
    {name: "Atlantis Blue", hex: "#002845", type: "Bleu", image: "https://i.postimg.cc/63FR52mb/image.png"},
    {name: "Atlantis Blue II", hex: "#02334E", type: "Bleu", image: "https://i.postimg.cc/wTYzDxKC/image.png"},

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
    {name: "Azure Blue II", hex: "#0436AA", type: "Bleu", image: "https://i.postimg.cc/J7ZZf4kM/image.png"},
    {name: "Gomera Green", hex: "#082223", type: "Vert", image: "https://i.postimg.cc/brhT7GYS/image.png"},
    {name: "Glut Orange", hex: "#B34C03", type: "Orange", image: "https://i.postimg.cc/j5m52NnC/image.png"},
    {name: "Verde Ocno", hex: "#003335", type: "Vert", image: "https://i.postimg.cc/DyVrY4p2/image.png"},
    {name: "Gomera Green II", hex: "#03131B", type: "Vert", image: "https://i.postimg.cc/25fjsrRL/image.png"},
    {name: "Redfire", hex: "#33070F", type: "Rouge", image: "https://i.postimg.cc/kMZyWpPh/image.png"},
    {name: "Medium Quasar Blue", hex: "#041F4B", type: "Bleu", image: "https://i.postimg.cc/C5FXprmg/image.png"},
    {name: "Guards Red II", hex: "#BD001A", type: "Rouge", image: "https://i.postimg.cc/7L4vwNHm/image.png"},
    {name: "Bright Gold", hex: "#382D1C", type: "Marron", image: "https://i.postimg.cc/sfKsDqqq/image.png"},
    {name: "Performance Red", hex: "#7C0F11", type: "Rouge", image: "https://i.postimg.cc/Y9L7nCbW/image.png"},
    {name: "Woodland Green", hex: "#0F1811", type: "Vert", image: "https://i.postimg.cc/XYXyjwJS/image.png"},
    {name: "Bluish Silver", hex: "#3E4553", type: "Gris", image: "https://i.postimg.cc/Kvb8ptLr/image.png"},
    {name: "Light Blue", hex: "#486080", type: "Bleu", image: "https://i.postimg.cc/T16CBTrw/image.png"},
    {name: "Laguna Blue", hex: "#001443", type: "Bleu", image: "https://i.postimg.cc/GtRnzwtP/image.png"},
    {name: "Celeste", hex: "#27313E", type: "Gris", image: "https://i.postimg.cc/rwp6mN7J/image.png"},
    {name: "Mineral Grey", hex: "#3F3D42", type: "Gris", image: "https://i.postimg.cc/Wb1F2Qpf/image.png"},
    {name: "Nitro Yellow", hex: "#AB6F1A", type: "Jaune", image: "https://i.postimg.cc/LXCdjywv/image.png"},
    {name: "Mineral Grey II", hex: "#282727", type: "Gris", image: "https://i.postimg.cc/kgJWVfNB/image.png"},
    {name: "Hydro Blue", hex: "#0244B2", type: "Bleu", image: "https://i.postimg.cc/PrwdWj47/image.png"},
    {name: "Sting Grey", hex: "#595F6B", type: "Gris", image: "https://i.postimg.cc/yNqjDFN5/image.png"},
    {name: "Sarge Green", hex: "#394435", type: "Vert", image: "https://i.postimg.cc/CKTK9Kvk/image.png"},
    {name: "Firecracker Red", hex: "#A8191F", type: "Rouge", image: "https://i.postimg.cc/1XqmWhpJ/image.png"},
    {name: "Snazzberry", hex: "#37161C", type: "Violet", image: "https://i.postimg.cc/KzdQrg7k/image.png"},
    {name: "Gecko Green", hex: "#5BA519", type: "Vert", image: "https://i.postimg.cc/9F18szCS/image.png"},
    {name: "Hellayella", hex: "#916105", type: "Jaune", image: "https://i.postimg.cc/B6HL18mn/image.png"},
    {name: "Sand Beige", hex: "#54473D", type: "Marron", image: "https://i.postimg.cc/PqM0fKjX/image.png"},
    {name: "Aventurine Grey", hex: "#1B1E20", type: "Gris", image: "https://i.postimg.cc/k5Dh9Cfc/image.png"},
    {name: "Ipanema Brown", hex: "#452505", type: "Marron", image: "https://i.postimg.cc/gkXVYJWr/image.png"},
    {name: "Phantom Grey", hex: "#252931", type: "Gris", image: "https://i.postimg.cc/PfPyxhsp/image.png"},
    {name: "Retina-Burning Lime Green", hex: "#5C7804", type: "Vert", image: "https://i.postimg.cc/hPbh9zVX/image.png"},
    {name: "Turbo Blue", hex: "#004284", type: "Bleu", image: "https://i.postimg.cc/9Q94r8Jj/image.png"},
    {name: "Fire Orange", hex: "#8A2B03", type: "Orange", image: "https://i.postimg.cc/mrG3f6nz/image.png"},
    {name: "Vegas Yellow II", hex: "#8C5F15", type: "Jaune", image: "https://i.postimg.cc/zvRLKx8W/image.png"},
    {name: "Bahama Orange", hex: "#824B06", type: "Orange", image: "https://i.postimg.cc/KYNshNXn/image.png"},
    {name: "Sunset Orange II", hex: "#2C110F", type: "Orange", image: "https://i.postimg.cc/3xBJVsw9/image.png"},
    {name: "Vegas Yellow", hex: "#916E1D", type: "Jaune", image: "https://i.postimg.cc/VkwgRV5z/image.png"},
    {name: "Irish Green", hex: "#003820", type: "Vert", image: "https://i.postimg.cc/DzK4XSfZ/image.png"},
    {name: "Tourmaline II", hex: "#021F26", type: "Bleu", image: "https://i.postimg.cc/HW4fXRp9/image.png"},
    {name: "Tungsten Silver", hex: "#323845", type: "Gris", image: "https://i.postimg.cc/3NxWjqcf/image.png"},
    {name: "Nebula Grey II", hex: "#2F333F", type: "Gris", image: "https://i.postimg.cc/j55LP99g/image.png"},
    {name: "Lavender Frost", hex: "#302E43", type: "Violet", image: "https://i.postimg.cc/GhszvSnm/image.png"},
    {name: "XPBlue", hex: "#00090F", type: "Bleu", image: "https://i.postimg.cc/fbLhWh1b/image.png"},
    {name: "Oak Green", hex: "#0F1916", type: "Vert", image: "https://i.postimg.cc/4dY79qHf/image.png"},
    {name: "Sebring Silver", hex: "#31353D", type: "Gris", image: "https://i.postimg.cc/NMCnN908/image.png"},
    {name: "Yellow", hex: "#64571E", type: "Jaune", image: "https://i.postimg.cc/y8Fbq6jR/image.png"},
    {name: "Teal", hex: "#38454A", type: "Vert", image: "https://i.postimg.cc/cHNDXpwm/image.png"},
    {name: "Suzuka Blue", hex: "#28417C", type: "Bleu", image: "https://i.postimg.cc/Y2NLzyC7/image.png"},
    {name: "Dark Green", hex: "#1D2116", type: "Vert", image: "https://i.postimg.cc/Hs7KN5FT/image.png"},
    {name: "Riviera Blue II", hex: "#1A4A92", type: "Bleu", image: "https://i.postimg.cc/mDY3MLnf/image.png"},
    {name: "San Marino Blue II", hex: "#000234", type: "Bleu", image: "https://i.postimg.cc/SsSRTmsp/image.png"},
    {name: "Ara Blue", hex: "#03316C", type: "Bleu", image: "https://i.postimg.cc/mk4vNr2Q/image.png"},
    {name: "Micrommata Green II", hex: "#004917", type: "Vert", image: "https://i.postimg.cc/m2H9F21d/image.png"},
    {name: "Catalunya Red", hex: "#AC0E06", type: "Rouge", image: "https://i.postimg.cc/v8WgQ2Jj/image.png"},
    {name: "Meadowlark Yellow", hex: "#99A18B", type: "Jaune", image: "https://i.postimg.cc/76HcfWBV/image.png"},
    {name: "Wimbledon White II", hex: "#B2B7BC", type: "Blanc", image: "https://i.postimg.cc/5yqSL46Q/image.png"},
    {name: "Lime Gold", hex: "#384432", type: "Vert", image: "https://i.postimg.cc/0Ny5qcpT/image.png"},
    {name: "Champagne Gold", hex: "#4B443D", type: "Marron", image: "https://i.postimg.cc/1zwBsrsK/image.png"},
    {name: "Candy Apple Red", hex: "#AD190F", type: "Rouge", image: "https://i.postimg.cc/7ZMnfM5P/image.png"},
    {name: "Royal Maroon", hex: "#1C0302", type: "Rouge", image: "https://i.postimg.cc/hj0ks7ZK/image.png"},
    {name: "Grey", hex: "#2D2E2F", type: "Gris", image: "https://i.postimg.cc/76L9vGYH/image.png"},
    {name: "Groovy Green", hex: "#435918", type: "Vert", image: "https://i.postimg.cc/KY8pbs0h/image.png"},
    {name: "Calypso Coral", hex: "#97201A", type: "Rouge", image: "https://i.postimg.cc/NLhfqXtZ/image.png"},
    {name: "Lapis Lazuli", hex: "#03071D", type: "Bleu", image: "https://i.postimg.cc/hv8PnjGj/image.png"},
    {name: "Infrared", hex: "#440608", type: "Rouge", image: "https://i.postimg.cc/hvt3DZDd/image.png"},
    {name: "Nebula Grey", hex: "#272B36", type: "Gris", image: "https://i.postimg.cc/SxgLqQXD/image.png"},
    {name: "Liquid Platinum", hex: "#454F62", type: "Gris", image: "https://i.postimg.cc/g0qWr5WS/image.png"},
    {name: "Passionate Pink", hex: "#91114D", type: "Rose", image: "https://i.postimg.cc/C19T2VHK/image.png"},
    {name: "Nori Green", hex: "#0C110B", type: "Vert", image: "https://i.postimg.cc/7Z51H8g4/image.png"},
    {name: "Blue Mica 2.0", hex: "#00114E", type: "Bleu", image: "https://i.postimg.cc/vHqj2yYw/image.png"},
    {name: "Fresh Green", hex: "#278946", type: "Vert", image: "https://i.postimg.cc/Y04gpQW3/image.png"},
    {name: "Redline", hex: "#83000E", type: "Rouge", image: "https://i.postimg.cc/ZK4BskfH/image.png"},
    {name: "Flare Yellow", hex: "#955F24", type: "Jaune", image: "https://i.postimg.cc/T1msK58V/image.png"},
    {name: "Aqua", hex: "#459ECE", type: "Bleu", image: "https://i.postimg.cc/FsNpyB05/image.png"},
    {name: "Atomic Silver", hex: "#202529", type: "Gris", image: "https://i.postimg.cc/YSYLypwX/image.png"},
    {name: "Sonoma Green", hex: "#08271A", type: "Vert", image: "https://i.postimg.cc/G37tKByL/image.png"},
    {name: "Gold", hex: "#5C4C36", type: "Jaune", image: "https://i.postimg.cc/ZR9bDH3J/image.png"},
    {name: "Daytona Grey II", hex: "#0D0F12", type: "Gris", image: "https://i.postimg.cc/yd9qZbc3/image.png"},
    {name: "Satin Paper Purple", hex: "#372439", type: "Violet", image: "https://i.postimg.cc/kXJZJ41b/image.png"},
    {name: "Sunstone", hex: "#918B88", type: "Gris", image: "https://i.postimg.cc/bv9kwzFZ/image.png"},
    {name: "Floret Silver", hex: "#3F4855", type: "Gris", image: "https://i.postimg.cc/4NRVCL5L/image.png"},
    {name: "Brown", hex: "#3E1C0B", type: "Marron", image: "https://i.postimg.cc/4xmJWZ9r/image.png"},
    {name: "Gentian Blue", hex: "#000517", type: "Bleu", image: "https://i.postimg.cc/L5fsPkNm/image.png"},
    {name: "Dove Grey / Powder Grey", hex: "#596177", type: "Gris", image: "https://i.postimg.cc/rs1NJPJm/image.png"},
    {name: "Alpina Purple", hex: "#0E0A19", type: "Violet", image: "https://i.postimg.cc/RVhkg1tR/image.png"},
    {name: "Montego Blue Mica", hex: "#00080D", type: "Bleu", image: "https://i.postimg.cc/gkPW2LLq/image.png"},
    {name: "Vintage Red", hex: "#62090B", type: "Rouge", image: "https://i.postimg.cc/SK7nsbDD/image.png"},
    {name: "Sunburst Yellow", hex: "#B47400", type: "Jaune", image: "https://i.postimg.cc/d010qZZt/image.png"},
    
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



$(document).ready(function() {
  jQuery.fn.pickify = function() {
    return this.each(function() {
      $picker = $(this);
      $selector = $picker.children('.selector_color');

      $icon = $picker.children('.icon');
      $inputContainer = $icon.children('.inputContainer');
      $input = $inputContainer.children('input.change');

      $inputContainerRGB = $icon.children('.inputContainerRGB');
      $inputRGB = $inputContainerRGB.children('input.changeRGB');

      $board = $selector.children('.board');
      $choice = $board.children();
      $rainbow = $selector.children('.rainbow');
      $change = $board.children('.choice');

      var coefX = ($board.width()-10)/100;
      var coefY = ($board.height()-10)/100;

      var colors = $picker.attr('data-hsv').split(',');
      $picker.data('hsv', {
        h: colors[0],
        s: colors[1],
        v: colors[2]
      })
      var hex = '#' + rgb2hex(hsv2rgb({
        h: colors[0],
        s: colors[1],
        v: colors[2]
      }));

      var hue = colors[0];
      var rgb = str_hex2rgb(hex);
      var hsv = "hsv(" + colors[0] + "°, " + colors[1] + "%, " + colors[2] + "%" + ")";

      //hsv(180°, 60%, 78%)

      $("#mainHEX").html(hex);
      $("#mainRGB").html(rgb);
      $("#mainHSV").html(hsv);

      $input.val(hex);
      $inputRGB.val(rgb);
      //$('body').add($icon).css('background-color', hex);
      $icon.css('background-color', hex);
      $rainbow.slider().find(".ui-slider-handle").css('background-color', hex);
      $change.css('background-color', hex);

      // making things happen
      $rainbow.slider({
        value: colors[0],
        min: 0,
        max: 359,
        slide: function(event, ui) {
          changeHue(ui.value)
        },
        stop: function() {
          changeColour($picker.data('hsv'), true)
        }
      })
      $choice.draggable({
        containment: '.board',
        cursor: 'crosshair',
        create: function() {
          $choice.css({
            'left': colors[1] * coefX,
            'top': 180 - colors[2] * coefY
          });
        },
        drag: function(event, ui) {
          changeSatVal(ui.position.left, ui.position.top)
        },
        stop: function() {
          changeColour($picker.data('hsv'), true)
        }

      });

      /*Changing the style of input when I click outside them*/
      $(document).click(function() {
        $input.css("font-weight", "normal");
        /*Changing Input Line Opacity*/
        if($input.css("color")=="rgb(255, 255, 255)")
          $input.css("border-bottom-color", "rgba(255,255,255,0.2)");
        else
          $input.css("border-bottom-color", "rgba(0, 0, 0, 0.2)");

        $inputRGB.css("font-weight", "normal");
        /*Changing Input Line Opacity*/
        if($inputRGB.css("color")=="rgb(255, 255, 255)")
          $inputRGB.css("border-bottom-color", "rgba(255,255,255,0.2)");
        else
          $inputRGB.css("border-bottom-color", "rgba(0, 0, 0, 0.2)");
      });

      /*Changing the input style when I click on it*/
      $input.click( function(e){
        if($input.css("color")=="rgb(255, 255, 255)")
          $input.css("border-bottom-color", "rgba(255, 255, 255, 1)");
        else
          $input.css("border-bottom-color", "rgba(0, 0, 0, 1)");
        $input.css("font-weight", "bold");
        $inputRGB.css("font-weight", "normal");
        if($inputRGB.css("color")=="rgb(255, 255, 255)")
          $inputRGB.css("border-bottom-color", "rgba(255,255,255,0.2)");
        else
          $inputRGB.css("border-bottom-color", "rgba(0, 0, 0, 0.2)");
        event.stopPropagation();
      });

      $inputRGB.click( function(e){
        if($inputRGB.css("color")=="rgb(255, 255, 255)")
          $inputRGB.css("border-bottom-color", "rgba(255, 255, 255, 1)");
        else
          $inputRGB.css("border-bottom-color", "rgba(0, 0, 0, 1)");
        $inputRGB.css("font-weight", "bold");
        $input.css("font-weight", "normal");
        if($input.css("color")=="rgb(255, 255, 255)")
          $input.css("border-bottom-color", "rgba(255,255,255,0.2)");
        else
          $input.css("border-bottom-color", "rgba(0, 0, 0, 0.2)");
        event.stopPropagation();
      });

      $board.on('click', function(e) {
        var left = e.pageX - $board.offset().left;
        var top = e.pageY - $board.offset().top;
        $choice.css({
          'left': left,
          'top': top
        });
        changeSatVal(left, top);
        changeColour($picker.data('hsv'), true);
      });

      // drag var actions
      function changeHue(hue) {
        $board.css('background-color', 'hsl(' + hue + ',100%,50%)');
        var hsv = $picker.data('hsv');
        hsv.h = hue;
        changeColour(hsv);

        /*Changing the color of the handle in the hue bar*/
        var hsl = 'hsl(' + hue + ',100%,50%)';
        $rainbow.slider().find(".ui-slider-handle").css('background-color', '#' + hsl);
      }

      function changeSatVal(sat, val) {
        sat = Math.floor(sat / coefX);
        val = Math.floor(100 - val / coefY);
        var hsv = $picker.data('hsv');
        hsv.s = sat;
        hsv.v = val;
        changeColour(hsv);
      }

      // changing the colours
      function changeColour(hsv, restyle, hex, input) {
        var rgb = hsv2rgb(hsv);
        if (!hex) {
          var hex = rgb2hex(rgb)
        }

        if(!input&&hex=="ff0004") hex="ff0000";

        $picker.data('hsv', hsv).data('hex', hex).data('rgb', rgb);
        $icon.css('background-color', '#' + hex);
        $input.val('#' + hex);

        var rgb = $icon.css('background-color');

        if(input!="RGB")
          $inputRGB.val(rgb);

        $change.css('background-color', '#' + hex);
        if (restyle) {
          changeStyle(rgb);
        }

        var rgbObj = getRGBobj(rgb);
        var hsl = rgb2hsl(rgbObj);
        console.log(hsl);
        /*HERE*/

        checkLightHue(hsv);
        colorValues(rgb, "hsv(" + hsv.h + "°, " + hsv.s + "%, " + hsv.v + "%" + ")" );
      }

      function changeStyle(rgb) {
        var rgb = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
        //$('body').css('background-color', rgb);
      }

      /*CHANGE VALUES
      whenever I change the color is chaned, the color values are updated
    */
    function colorValues(rgb,hsv){
      var hex = str_rgb2hex(rgb);
      $("#mainHEX").html(hex);
      $("#mainRGB").html(rgb);
      $("#mainHSV").html(hsv);
    }

      // input change at each key pressed
      $input.keyup(function(e) {
        if (e.which != (37 || 39)) {
          var coursorPosition=$input[0].selectionStart;
          inputChange($input.val());
          $input[0].selectionStart=coursorPosition;
          $input[0].selectionEnd=coursorPosition;
        }
      });

      function inputChange(val) {
        var hex = val.replace(/[^A-F0-9]/ig, '');
        if (hex.length > 6) {
          hex = hex.slice(0, 6);
        }
        $input.val('#' + hex);
        if (hex.length == 6) {
          inputColour(hex, "HEX");
        }

        var hsl = 'hsl(' + hue + ',100%,50%)';
        $rainbow.slider().find(".ui-slider-handle").css('background-color', '#' + hsl);
      }

      //input change at each key pressed
      $inputRGB.keyup(function(e) {
        /*37 and 39 are the ASCII for the arrows left and right */
        if (e.which != (37 || 39)) {
          var coursorPosition=$inputRGB[0].selectionStart;
          inputChangeRGB($inputRGB.val());
          //Moving the cursor at the end
          $inputRGB[0].selectionStart = coursorPosition;
          $inputRGB[0].selectionEnd = coursorPosition;
        }
      });

      function inputChangeRGB(rgb) {
        /*cheching if rgb has "rgb()" otherwise I add it*/
        if(rgb.indexOf("rgb(")==-1){
          rgb="rgb(" + rgb + ")";
          }

        var hex = str_rgb2hex(rgb);
        var hex_value = hex.replace('#','');
        //hex_from_rgb = rgb.replace(/[^A-F0-9]/ig, '');
        if (hex_value.length > 6) {
          hex_value = hex_value.slice(0, 6);
        }
        //$inputRGB.val(rgb);
        $input.val('#' + hex_value);
        if (hex_value.length == 6) {
          inputColour(hex_value, "RGB");
        }

        var hsl = 'hsl(' + hue + ',100%,50%)';
        $rainbow.slider().find(".ui-slider-handle").css('background-color', '#' + hsl);
      }

      function inputColour(hex, input) {
        var hsv = hex2hsv(hex);
        $icon.css('background-color', '#' + hex);

        var newX = (hsv.s * coefX)+10;
        var newY = (hsv.v * coefY)-10;

        $choice.css({
          left: newX,
          top: 180 - newY
        });

        $rainbow.children().css('left', hsv.h / 3.6 + '%');
        $board.css('background-color', 'hsl(' + hue + ',100%,50%)');
        changeColour(hsv, true, hex, input);
      }

      function hex2hsv(hex) {
        var r = parseInt(hex.substring(0, 2), 16) / 255;
        var g = parseInt(hex.substring(2, 4), 16) / 255;
        var b = parseInt(hex.substring(4, 6), 16) / 255;
        var max = Math.max.apply(Math, [r, g, b]);
        var min = Math.min.apply(Math, [r, g, b]);
        var chr = max - min;
        hue = 0;
        val = max;
        sat = 0;
        if (val > 0) {
          sat = chr / val;
          if (sat > 0) {
            if (r == max) {
              hue = 60 * (((g - min) - (b - min)) / chr);
              if (hue < 0) {
                hue += 360;
              }
            } else if (g == max) {
              hue = 120 + 60 * (((b - min) - (r - min)) / chr);
            } else if (b == max) {
              hue = 250 + 60 * (((r - min) - (g - min)) / chr);
            }
          }
        }
        return {
          h: hue,
          s: Math.round(sat * 100),
          v: Math.round(val * 100)
        }
      }

      function hsv2rgb(hsv) {
        h = hsv.h;
        s = hsv.s;
        v = hsv.v;
        var r, g, b;
        var i;
        var f, p, q, t;
        h = Math.max(0, Math.min(360, h));
        s = Math.max(0, Math.min(100, s));
        v = Math.max(0, Math.min(100, v));
        s /= 100;
        v /= 100;
        if (s == 0) {
          r = g = b = v;
          return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
          };
        }
        h /= 60;
        i = Math.floor(h);
        f = h - i; // factorial part of h
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));
        switch (i) {
          case 0:
            r = v;
            g = t;
            b = p;
            break;
          case 1:
            r = q;
            g = v;
            b = p;
            break;
          case 2:
            r = p;
            g = v;
            b = t;
            break;
          case 3:
            r = p;
            g = q;
            b = v;
            break;
          case 4:
            r = t;
            g = p;
            b = v;
            break;
          default:
            r = v;
            g = p;
            b = q;
        }
        return {
          r: Math.round(r * 255),
          g: Math.round(g * 255),
          b: Math.round(b * 255)
        };
      }

      function rgb2hex(rgb) {
        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return hex(rgb.r) + hex(rgb.g) + hex(rgb.b);
      }

      /******************************/
      function rgb2hsl(rgb) {

          var r = rgb.r, g = rgb.g, b = rgb.b;

          r /= 255, g /= 255, b /= 255;

          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, l = (max + min) / 2;

          if (max == min) {
          h = s = 0; // achromatic
          } else {
          var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
          }

          h /= 6;
      }

      return {
        h: h,
        s: s,
        l: l
      }
        //[ h, s, l ];
    }




      /*String rgb/hex converter*/
      function str_rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + str_hex(rgb[1]) + str_hex(rgb[2]) + str_hex(rgb[3]);
        }

      function str_hex(x) {
          var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
          return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
      }

      function str_hex2rgb(hex){
          hex = hex.replace('#','');
          r = parseInt(hex.substring(0,2), 16);
          g = parseInt(hex.substring(2,4), 16);
          b = parseInt(hex.substring(4,6), 16);

          result = 'rgb('+r+','+g+','+b+')';
          return result;
      }


      /*get RGB OBJ from string*/
      function getRGBobj(str){
        var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        return match ? {
          r: match[1],
          g: match[2],
          b: match[3]
        } : {};
      }


      /* Changing the input color depending on the light of the color selected
      color: white-> light>50
      color: black-> light<50
      */
      function checkLightHue(hsv){
        if(hsv.h>=205&&hsv.s>=50||hsv.v<=50){
          $input.css("color", "white");
          $inputContainer.css("color", "white");
          $input.css("border-bottom-color", "rgba(255,255,255,0.2)");

          $inputRGB.css("color", "white");
          $inputContainerRGB.css("color", "white");
          $inputRGB.css("border-bottom-color", "rgba(255,255,255,0.2)");
          }
        else{
          $input.css("color", "black");
          $inputContainer.css("color", "black");
          $input.css("border-bottom-color", "rgba(0,0,0,0.2)");

          $inputRGB.css("color", "black");
          $inputContainerRGB.css("color", "black");
          $inputRGB.css("border-bottom-color", "rgba(0,0,0,0.2)");
          }
         $input.css("font-weight", "normal");
         $inputRGB.css("font-weight", "normal");
      }
    });
  };

  $('.picker').pickify();

});


/*Expanded Menu Functions*/
$expandContainer = $("#allColorCodes");
$mainBar = $("#ColourExpandBar");
$secondaryBars = $expandContainer.children(".secondaryBar");
$iconExpendadMenuColors = $mainBar.find("i");

$mainBar.on("click", function(){
  if($secondaryBars.height()=="0"){
    $iconExpendadMenuColors.addClass("collapsed_icon_active");
    $mainBar.children(".txtCollapse").html("Show Less");
    $secondaryBars.removeClass("collapsedBar");
      }
  else{
    $secondaryBars.addClass("collapsedBar");
    $iconExpendadMenuColors.removeClass("collapsed_icon_active");
    $mainBar.children(".txtCollapse").html("Show colour values");
      }
});

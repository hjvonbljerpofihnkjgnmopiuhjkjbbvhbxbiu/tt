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
    {name: "Titanium Grey", hex: "#1B1E23", type: "Gris", image: "https://i.postimg.cc/ydDXSNt7/image.png"},
    {name: "Sunlight Silver", hex: "#545C6C", type: "Gris", image: "https://i.postimg.cc/y6r26Mw5/image.png"},
    {name: "Innocent Blue Mica", hex: "#031745", type: "Bleu", image: "https://i.postimg.cc/1t42pSTL/image.png"},
    {name: "Glacier White", hex: "#8590A6", type: "Gris", image: "https://i.postimg.cc/xCR7DCmJ/image.png"},
    {name: "Tango Red", hex: "#87121B", type: "Rouge", image: "https://i.postimg.cc/wBhxNhCC/image.png"},
    {name: "Long Beach Blue", hex: "#012349", type: "Bleu", image: "https://i.postimg.cc/rpFcDv9r/image.png"},
    {name: "Hockenheim Silver", hex: "#7885A2", type: "Gris", image: "https://i.postimg.cc/1tQG0rfw/image.png"},
    {name: "Sunset Orange", hex: "#491505", type: "Orange", image: "https://i.postimg.cc/yxS7Vcyp/image.png"},
    {name: "Strawberry Red II", hex: "#2F0612", type: "Rouge", image: "https://i.postimg.cc/Z5DZywss/image.png"},
    {name: "Diamond Alaskan White", hex: "#8389A5", type: "Blanc", image: "https://i.postimg.cc/mrJHVNk8/image.png"},
    {name: "Sage Green", hex: "#1A1F15", type: "Vert", image: "https://i.postimg.cc/FsksV535/image.png"},
    {name: "Pewter", hex: "#25282C", type: "Gris", image: "https://i.postimg.cc/y8znyRWm/image.png"},
    {name: "Horizon Blue", hex: "#01306B", type: "Bleu", image: "https://i.postimg.cc/05YzJJRR/image.png"},
    {name: "Ivory", hex: "#99947B", type: "Orange", image: "https://i.postimg.cc/m2W68J51/image.png"},
    {name: "Strawberry Red", hex: "#320315", type: "Rouge", image: "https://i.postimg.cc/6qM22D7b/image.png"},
    {name: "Cyan", hex: "#2B5864", type: "Bleu", image: "https://i.postimg.cc/fyYs1Xsc/image.png"},
    {name: "MC20 Blue", hex: "#00349C", type: "Bleu", image: "https://i.postimg.cc/gjcZn03Q/image.png"},
    {name: "Amethyst", hex: "#0F0410", type: "Violet", image: "https://i.postimg.cc/mk4zzyFm/image.png"},
    {name: "Blu Elettrico II", hex: "#020B2A", type: "Bleu", image: "https://i.postimg.cc/8P2RNMZn/image.png"},
    {name: "Grigio Nimbus II", hex: "#2F3747", type: "Gris", image: "https://i.postimg.cc/mg75sbyC/image.png"},
    {name: "Top Secret Bright Gold", hex: "#724C25", type: "Orange", image: "https://i.postimg.cc/QM2PGHRQ/image.png"},
    {name: "Dino Dream Brown II", hex: "#4F2E11", type: "Marron", image: "https://i.postimg.cc/59sc7qxv/image.png"},
    {name: "AMR Green II", hex: "#003443", type: "Vert", image: "https://i.postimg.cc/T16rnWs3/image.png"},
    {name: "Skyfall Silver", hex: "#21252D", type: "Gris", image: "https://i.postimg.cc/ry1H3GMg/image.png"},
    {name: "White", hex: "#8C95B3", type: "Gris", image: "https://i.postimg.cc/wvSgdF8G/image.png"},
    {name: "Azzurro Le Castellet", hex: "#173A74", type: "Bleu", image: "https://i.postimg.cc/J4CM6TQy/image.png"},
    {name: "French Racing Blue", hex: "#1C5EA4", type: "Bleu", image: "https://i.postimg.cc/L8NSsmFf/image.png"},
    {name: "Blu Krawczyk", hex: "#002273", type: "Bleu", image: "https://i.postimg.cc/59LMCBMf/image.png"},
    {name: "Azzurro La Plata II", hex: "#3265C0", type: "Bleu", image: "https://i.postimg.cc/j5fBybmM/image.png"},
    {name: "Blu Simond", hex: "#0D0E14", type: "Noir", image: "https://i.postimg.cc/qM4W6WLG/image.png"},
    {name: "Azzurro Monaco", hex: "#0F1433", type: "Bleu", image: "https://i.postimg.cc/52krGyMP/image.png"},
    {name: "Gulf Blue", hex: "#4071B3", type: "Bleu", image: "https://i.postimg.cc/j5Ry46kB/image.png"},
    {name: "Vouge Silver", hex: "#646E7A", type: "Gris", image: "https://i.postimg.cc/D0Msh9yK/image.png"},
    {name: "Oslo Blue", hex: "#003263", type: "Bleu", image: "https://i.postimg.cc/3Jkm1xnr/image.png"},
    {name: "Blu Sideris", hex: "#010636", type: "Bleu", image: "https://i.postimg.cc/pLx8HJPr/image.png"},
    {name: "Arancio Borealis", hex: "#C73600", type: "Orange", image: "https://i.postimg.cc/tT1n5rNS/image.png"},
    {name: "Blu Arione", hex: "#043D7A", type: "Bleu", image: "https://i.postimg.cc/VsCb0V65/image.png"},
    {name: "Slipstream Green", hex: "#2B412A", type: "Vert", image: "https://i.postimg.cc/13JgZxW7/image.png"},
    {name: "AMR Blue", hex: "#021D2D", type: "Bleu", image: "https://i.postimg.cc/ZKm0BY2D/image.png"},
    {name: "AMR Green", hex: "#061F23", type: "Vert", image: "https://i.postimg.cc/T3XqszkW/image.png"},
    {name: "Azzurro Vela", hex: "#000D32", type: "Bleu", image: "https://i.postimg.cc/cLMMGFjk/image.png"},
    {name: "Viola Hong Kong", hex: "#0B0110", type: "Violet", image: "https://i.postimg.cc/cJFRrrdQ/image.png"},
    {name: "Verde Francesca", hex: "#23403F", type: "Vert", image: "https://i.postimg.cc/0QrpmPNh/image.png"},
    {name: "Viola Al Humaid", hex: "#100626", type: "Violet", image: "https://i.postimg.cc/d3yrH6rB/image.png"},
    {name: "Verde Scuro", hex: "#011A20", type: "Vert", image: "https://i.postimg.cc/JhYXRvQx/image.png"},
    {name: "Ice", hex: "#70748A", type: "Gris", image: "https://i.postimg.cc/rmvtr43t/image.png"},
    {name: "Ultra Blue", hex: "#023798", type: "Bleu", image: "https://i.postimg.cc/CMq8VvnC/image.png"},
    {name: "Black Olive", hex: "#030E10", type: "Noir", image: "https://i.postimg.cc/MK0jnvDv/image.png"},
    {name: "Champion Silver", hex: "#5B6883", type: "Gris", image: "https://i.postimg.cc/GmcTGd7z/image.png"},
    {name: "Madeira Red", hex: "#300B00", type: "Rouge", image: "https://i.postimg.cc/Bvb87NGK/image.png"},
    {name: "Dark Sapphire Blue", hex: "#050811", type: "Bleu", image: "https://i.postimg.cc/y8YWWnxb/image.png"},
    {name: "Gun Metal", hex: "#1A1E25", type: "Gris", image: "https://i.postimg.cc/Jhsn5nb3/image.png"},
    {name: "Azure Blue", hex: "#102680", type: "Bleu", image: "https://i.postimg.cc/wvJjnG47/image.png"},
    {name: "Malibu Sunset", hex: "#D08400", type: "Orange", image: "https://i.postimg.cc/BZTvgR1z/image.png"},
    {name: "Aubergine", hex: "#210015", type: "Violet", image: "https://i.postimg.cc/Kvm8sQP8/image.png"},
    {name: "Rosso Rubino", hex: "#2A010B", type: "Rouge", image: "https://i.postimg.cc/jS5dR5kV/image.png"},
    {name: "China Blue II", hex: "#3A67A1", type: "Bleu", image: "https://i.postimg.cc/7ZWPhkp5/image.png"},
    {name: "Blue LH", hex: "#001854", type: "Bleu", image: "https://i.postimg.cc/mr1LFns8/image.png"},
    {name: "Lime Yellow", hex: "#6B7132", type: "Jaune", image: "https://i.postimg.cc/Y9cpNx2k/image.png"},
    {name: "Viola Ophelia", hex: "#1A000F", type: "Violet", image: "https://i.postimg.cc/YSRzjmH1/image.png"},
    {name: "Project ONE Red", hex: "#53060C", type: "Rouge", image: "https://i.postimg.cc/zXhwKQND/image.png"},
    {name: "Blu Corsa II", hex: "#001A48", type: "Bleu", image: "https://i.postimg.cc/3RWmRS9T/image.png"},
    {name: "Verde Selvans", hex: "#215702", type: "Vert", image: "https://i.postimg.cc/wvPJsXbs/image.png"},
    {name: "Giallo Evros", hex: "#A26400", type: "Orange", image: "https://i.postimg.cc/KvhgDZxK/image.png"},
    {name: "Petrol Blue", hex: "#203E5D", type: "Bleu", image: "https://i.postimg.cc/0y8Mhc6P/image.png"},
    {name: "Blu Tiffany", hex: "#19607D", type: "Bleu", image: "https://i.postimg.cc/Y9mhQPPf/image.png"},
    {name: "Azzurro Aquarius", hex: "#243850", type: "Bleu", image: "https://i.postimg.cc/L4LJXrLm/image.png"},
    {name: "Viola Bast", hex: "#2E000B", type: "Violet", image: "https://i.postimg.cc/QdxCfCPM/image.png"},
    {name: "Cerulean Blue", hex: "#022458", type: "Bleu", image: "https://i.postimg.cc/1zbzRHzg/image.png"},
    {name: "Mansory Grey", hex: "#191A1B", type: "Gris", image: "https://i.postimg.cc/05YNx71Q/image.png"},
    {name: "Magma Orange", hex: "#F12702", type: "Orange", image: "https://i.postimg.cc/PxmdXncc/image.png"},
    {name: "Bright Iris", hex: "#2A2B63", type: "Violet", image: "https://i.postimg.cc/gcHG1d3L/image.png"},
    {name: "Topaz", hex: "#423F44", type: "Gris", image: "https://i.postimg.cc/zGV5Lg6T/image.png"},
    {name: "Super Bright Yellow", hex: "#A17B19", type: "Jaune", image: "https://i.postimg.cc/PJXndp1p/image.png"},
    {name: "Turquoise", hex: "#154A67", type: "Bleu", image: "https://i.postimg.cc/SQdpDdpW/image.png"},
    {name: "Greenish Yellow Mica", hex: "#383418", type: "Vert", image: "https://i.postimg.cc/ncwftLrr/image.png"},
    {name: "Wine Red", hex: "#2E0B1C", type: "Rouge", image: "https://i.postimg.cc/2ycMmHzM/image.png"},
    {name: "Opal Teal", hex: "#051518", type: "Bleu", image: "https://i.postimg.cc/dtfpxSNT/image.png"},
    {name: "Medium Red Pearl", hex: "#380912", type: "Rouge", image: "https://i.postimg.cc/VNQTY08f/image.png"},
    {name: "China Blue", hex: "#244572", type: "Bleu", image: "https://i.postimg.cc/3xg1FLsh/image.png"},
    {name: "Giallo Belenus", hex: "#604E02", type: "Jaune", image: "https://i.postimg.cc/Ls2TCtS1/image.png"},
    {name: "Willow Green", hex: "#6F9067", type: "Vert", image: "https://i.postimg.cc/5t9FZpR8/image.png"},
    {name: "Verde Medio Nijinsky", hex: "#1D2A17", type: "Vert", image: "https://i.postimg.cc/d0WTvdbp/image.png"},
    {name: "Verde Masoni Opaco", hex: "#363931", type: "Vert", image: "https://i.postimg.cc/x8mkKZXV/image.png"},
    {name: "Arancio Triplo Strato", hex: "#EC3700", type: "Orange", image: "https://i.postimg.cc/XYLrcdYq/image.png"},
    {name: "Ross Nestor", hex: "#360811", type: "Rouge", image: "https://i.postimg.cc/R00NPhWR/image.png"},
    {name: "Oro Chiaro II", hex: "#4F3F2B", type: "Marron", image: "https://i.postimg.cc/1RWnqp4z/image.png"},
    {name: "Rosso Bordeaux", hex: "#3A060C", type: "Rouge", image: "https://i.postimg.cc/dVCLpp67/image.png"},
    {name: "Mariana Blue", hex: "#0A0B1B", type: "Bleu", image: "https://i.postimg.cc/Kz0zt2GW/image.png"},
    {name: "Paris Blue", hex: "#002DB1", type: "Bleu", image: "https://i.postimg.cc/HnKkP974/image.png"},
    {name: "Verde Tevere", hex: "#233935", type: "Vert", image: "https://i.postimg.cc/W3VVzf0H/image.png"},
    {name: "Rosso Imola", hex: "#300006", type: "Rouge", image: "https://i.postimg.cc/5yNMqY75/image.png"},
    {name: "Blu Aegir", hex: "#0D263F", type: "Bleu", image: "https://i.postimg.cc/3rnhr1Nt/image.png"},
    {name: "Jade Green", hex: "#1B504C", type: "Vert", image: "https://i.postimg.cc/76qvwJkv/image.png"},
    {name: "Yachting Blue", hex: "#151B2A", type: "Bleu", image: "https://i.postimg.cc/Kvwd4H2D/image.png"},
    {name: "Azzurro Sardegna", hex: "#385170", type: "Bleu", image: "https://i.postimg.cc/Vkt2tWsQ/image.png"},
    {name: "Pastel Orange", hex: "#742B00", type: "Orange", image: "https://i.postimg.cc/Fz1BHjC6/image.png"},
    {name: "Dark Sea Blue", hex: "#061024", type: "Bleu", image: "https://i.postimg.cc/L8j054vm/image.png"},
    {name: "Rosso Sangue", hex: "#350109", type: "Rouge", image: "https://i.postimg.cc/B6FCYMy4/image.png"},
    {name: "Elysium", hex: "#383640", type: "Gris", image: "https://i.postimg.cc/hGTJN6Sy/image.png"},
    {name: "Champagne", hex: "#3D342D", type: "Marron", image: "https://i.postimg.cc/zBNLN7vJ/image.png"},
    {name: "Brown", hex: "#1D1813", type: "Marron", image: "https://i.postimg.cc/C5LzBKbX/image.png"},
    {name: "AMG One Silver", hex: "#68749D", type: "Gris", image: "https://i.postimg.cc/NGpyh1cc/image.png"},
    {name: "Azzurro La Plata", hex: "#386BD0", type: "Bleu", image: "https://i.postimg.cc/ht7h767D/image.png"},
    {name: "Horizon Blue", hex: "#405D8A", type: "Bleu", image: "https://i.postimg.cc/PqsJbymm/image.png"},
    {name: "LH Purple", hex: "#1C0921", type: "Violet", image: "https://i.postimg.cc/43qDH2Vg/image.png"},
    {name: "Gemera Grey", hex: "#272A31", type: "Gris", image: "https://i.postimg.cc/ZYrG0cqG/image.png"},
    {name: "Rose Gold", hex: "#322121", type: "Marron", image: "https://i.postimg.cc/26xxNVzK/image.png"},
    {name: "Battleship Grey", hex: "#3B3F4B", type: "Gris", image: "https://i.postimg.cc/FFDxPdCf/image.png"},
    {name: "Galactic White", hex: "#555E6E", type: "Gris", image: "https://i.postimg.cc/gJGvsmvq/image.png"},
    {name: "Rosso Dubai", hex: "#5B0410", type: "Rouge", image: "https://i.postimg.cc/5yRLfzDn/image.png"},
    {name: "Rosa Acantis", hex: "#501031", type: "Rose", image: "https://i.postimg.cc/8kKhd8sM/image.png"},
    {name: "Valencia Orange", hex: "#5F160E", type: "Orange", image: "https://i.postimg.cc/qRB3nQT1/image.png"},
    {name: "Marathon Blue", hex: "#293C55", type: "Bleu", image: "https://i.postimg.cc/zvVH2B3W/image.png"},
    {name: "Silver Pearl", hex: "#4B505C", type: "Gris", image: "https://i.postimg.cc/2yMbsDBt/image.png"},
    {name: "Special One Turquoise", hex: "#1AACDA", type: "Turquoise", image: "https://i.postimg.cc/SNYzWJBb/image.png"},
    {name: "Exposed Blue Carbon II", hex: "#030811", type: "Bleu", image: "https://i.postimg.cc/SRBRZfBF/image.png"},
    {name: "Light Blue", hex: "#475F7E", type: "Bleu", image: "https://i.postimg.cc/cLMMPFdc/image.png"},
    {name: "Silver Blue", hex: "#23395D", type: "Bleu", image: "https://i.postimg.cc/8CZdzsJJ/image.png"},
    {name: "Shark Blue", hex: "#0141C6", type: "Bleu", image: "https://i.postimg.cc/bJ8XpCnN/image.png"},
    {name: "Sequoia Green", hex: "#050F14", type: "Vert", image: "https://i.postimg.cc/k4hyfD73/image.png"},
    {name: "Midnight Silver", hex: "#1F222A", type: "Gris", image: "https://i.postimg.cc/zXDgVqNT/image.png"},
    {name: "Deep Blue Metallic", hex: "#00061F", type: "Bleu", image: "https://i.postimg.cc/HsfdFt6j/image.png"},
    {name: "Titanium", hex: "#2A292B", type: "Gris", image: "https://i.postimg.cc/HxZCz0JY/image.png"},

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



      // Initialisation du color picker
        var colorPicker = new iro.ColorPicker("#picker", {
            width: 320, // Largeur du color picker
            color: "#f00", // Couleur initiale (rouge)
            layout: [
                { 
                    component: iro.ui.Box, // Composant roue de couleur
                },
                { 
                    component: iro.ui.Slider, // Composant slider
                    options: {
                        sliderType: 'hue' // Type de slider pour la teinte
                    }
                }
            ]
        });

        // Écouteur d'événements pour les changements de couleur
        colorPicker.on('color:change', function(color) {
            // Met à jour les valeurs HEX et RGB en temps réel
            document.getElementById('color-display').style.backgroundColor = color.hexString;
            document.getElementById('hex-value').textContent = color.hexString; // Affiche la valeur HEX
            document.getElementById('rgb-value').textContent = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`; // Affiche la valeur RGB
        });

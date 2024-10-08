// Fonction principale pour récupérer et traiter le fichier CSV
function fetchCSVandCount(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let rows = data.split('\n').map(row => row.split(','));
            
            // Compter les cellules non vides dans la colonne F (index 5) pour les lignes 3 à 43 (index 2 à 42)
            let filledCellsCount = 0;
            for (let i = 2; i <= 42; i++) {  // F3:F43 correspond aux lignes 3 à 43, donc index 2 à 42
                let cellValue = rows[i][5];  // Colonne F a l'index 5 (0-based index)
                if (cellValue && cellValue.trim() !== '') {
                    filledCellsCount++;
                }
            }

            // Afficher le nombre de cellules remplies
            displayResult(filledCellsCount);
        })
        .catch(error => console.error('Erreur lors de la récupération des données CSV :', error));
}

// Fonction pour afficher le résultat dans un div avec l'ID 'result'
function displayResult(count) {
    document.getElementById('result').innerText = `Eploye total : ${count}`;
}

// Appel de la fonction avec l'URL de ton CSV Google Sheets exporté
fetchCSVandCount('https://docs.google.com/spreadsheets/d/1M19pAtJYNnDCaKxhO5XjWIlxqT7p2zvk6FHqKYVBJ1g/export?format=csv&gid=821726330');

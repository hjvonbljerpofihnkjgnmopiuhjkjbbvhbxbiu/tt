// Fonction principale qui va récupérer et traiter le CSV
function fetchCSVandProcess(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let rows = data.split('\n').map(row => row.split(','));
            
            // Trouver la dernière ligne remplie
            let lastFilledRowIndex = rows.length - 1;
            while (lastFilledRowIndex >= 0 && rows[lastFilledRowIndex].join('').trim() === '') {
                lastFilledRowIndex--;
            }

            // Si aucune ligne n'est remplie, on arrête ici
            if (lastFilledRowIndex < 0) {
                console.error("Aucune donnée dans le CSV.");
                return;
            }

            // Récupérer toutes les valeurs de la colonne C (indice 2) jusqu'à la dernière ligne remplie
            let columnCValues = [];
            for (let i = 0; i <= lastFilledRowIndex; i++) {
                columnCValues.push(rows[i][2]);  // Colonne C a l'index 2 (0-based index)
            }

            // Comparer et compter deux types d'entrées dans la colonne C
            let type1Count = 0;
            let type2Count = 0;
            columnCValues.forEach(value => {
                if (value === "💲 Note de frais") {
                    type1Count++;
                } else if (value === "♻️ Fabrication de kits") {
                    type2Count++;
                }
            });

            // Afficher les résultats
            displayResults(type1Count, type2Count);
        })
        .catch(error => console.error('Erreur lors de la récupération des données CSV :', error));
}

// Fonction pour afficher les résultats
function displayResults(type1Count, type2Count) {
    document.getElementById('result2').innerText = `💲 Note de frais: ${type1Count}`;
        document.getElementById('result3').innerText = `♻️ Fabrication de kits: ${type2Count}`;
}

// Appel de la fonction avec l'URL de ton CSV Google Sheets exporté
fetchCSVandProcess('https://docs.google.com/spreadsheets/d/1M19pAtJYNnDCaKxhO5XjWIlxqT7p2zvk6FHqKYVBJ1g/export?format=csv&gid=142553681');

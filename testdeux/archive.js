// Fonction pour récupérer et traiter le CSV
function fetchCSVAndGenerateChart(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let rows = data.split('\n').map(row => row.split(','));

            // Récupérer les lignes de la plage B4:I23 (indices 3 à 22)
            let weeks = [];
            let revenues = [];
            let grossProfits = [];
            let netProfits = [];

            for (let i = 3; i <= 22; i++) {  // B4:I23 correspond aux lignes 4 à 23, donc indices 3 à 22
                let week = rows[i][1];  // Colonne B (S39, S40, etc.) - index 1
                let revenue = rows[i][4];  // Colonne E (Chiffre d'affaires) - index 4
                let grossProfit = rows[i][7];  // Colonne H (Bénéfice brut) - index 7
                let netProfit = rows[i][8];  // Colonne I (Bénéfice net) - index 8

                // Si les colonnes importantes sont remplies
                if (week && revenue && grossProfit && netProfit) {
                    weeks.push(week.trim());  // Ajout de la semaine

                    // Nettoyer les espaces pour les milliers et convertir en nombre
                    revenues.push(parseFloat(revenue.replace(/\s/g, '').trim()));
                    grossProfits.push(parseFloat(grossProfit.replace(/\s/g, '').trim()));
                    netProfits.push(parseFloat(netProfit.replace(/\s/g, '').trim()));
                }
            }

            // Générer le graphique avec les données extraites
            generateChart(weeks, revenues, grossProfits, netProfits);
        })
        .catch(error => console.error('Erreur lors de la récupération des données CSV :', error));
}

// Fonction pour générer le graphique avec Chart.js
function generateChart(weeks, revenues, grossProfits, netProfits) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',  // Type de graphique: ligne
        data: {
            labels: weeks,  // Les semaines sur l'axe X
            datasets: [
                {
                    label: 'Chiffre d\'affaires (en €)',
                    data: revenues,  // Données pour le chiffre d'affaires
                    borderColor: 'rgba(75, 192, 192, 1)',  // Couleur de la ligne
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Couleur du remplissage
                    fill: true
                },
                {
                    label: 'Bénéfice brut (en €)',
                    data: grossProfits,  // Données pour le bénéfice brut
                    borderColor: 'rgba(255, 206, 86, 1)',  // Couleur de la ligne
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',  // Couleur du remplissage
                    fill: true
                },
                {
                    label: 'Bénéfice net (en €)',
                    data: netProfits,  // Données pour le bénéfice net
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    fill: true
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  // Commencer l'axe Y à 0
                }
            },
            responsive: true,  // Le graphique est réactif
            plugins: {
                title: {
                    display: true,
                    text: 'Chiffre d\'affaires, Bénéfice brut et Bénéfice net par semaine'
                }
            }
        }
    });
}
// Appel de la fonction avec l'URL du CSV Google Sheets exporté
fetchCSVAndGenerateChart('https://docs.google.com/spreadsheets/d/1M19pAtJYNnDCaKxhO5XjWIlxqT7p2zvk6FHqKYVBJ1g/export?format=csv&gid=49803468');

// URLs des tableaux Google Sheets
const urlRoxWood = 'https://docs.google.com/spreadsheets/d/13d4Y9xWXVuQVHhLZXh65Y8KeHKs0N3X_c-9py_ss_9Q/export?format=csv&gid=821726330';
const urlPaleto = 'https://docs.google.com/spreadsheets/d/1M19pAtJYNnDCaKxhO5XjWIlxqT7p2zvk6FHqKYVBJ1g/export?format=csv&gid=582059801';

// Fonction pour récupérer le CSV
function fetchCSV(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => data.split('\n').map(row => row.split(',')));
}

// Fonction pour traiter les données des employés de RoxWood
function processRoxWoodData(rows) {
    const roxwoodIDs = rows.filter(row => row[22].toLowerCase() === 'true').map(row => row[3].trim());
    return calculateTotals(roxwoodIDs, rows);
}

// Fonction pour traiter les données des employés de Paleto
function processPaletoData(rows) {
    const paletoIDs = rows.filter(row => row[22].toLowerCase() === 'false').map(row => row[3].trim());
    return calculateTotals(paletoIDs, rows);
}

// Fonction pour calculer les totaux pour un groupe donné
function calculateTotals(ids, rows) {
    let totalInvoices = 0;
    let totalRevenue = 0;
    let totalCost = 0;
    let totalGrossProfit = 0;
    let totalNetProfit = 0;

    for (const row of rows) {
        if (ids.includes(row[2].trim())) {
            totalInvoices += parseInt(row[4].replace(/\s/g, '') || '0', 10); // Colonne E
            totalRevenue += parseFloat(row[5].replace(/\s/g, '') || '0'); // Colonne F
            totalCost += parseFloat(row[7].replace(/\s/g, '') || '0'); // Colonne H
            totalGrossProfit += parseFloat(row[9].replace(/\s/g, '') || '0'); // Colonne J
            totalNetProfit += totalGrossProfit - parseFloat(row[22].replace(/\s/g, '') || '0'); // Colonne W
        }
    }

    return {
        totalInvoices,
        totalRevenue,
        totalCost,
        totalGrossProfit,
        totalNetProfit
    };
}

// Fonction pour afficher les résultats dans le HTML
function displayResults(group, results) {
    document.getElementById(`${group}-invoice-total`).textContent = results.totalInvoices;
    document.getElementById(`${group}-revenue-total`).textContent = results.totalRevenue.toFixed(2);
    document.getElementById(`${group}-cost-total`).textContent = results.totalCost.toFixed(2);
    document.getElementById(`${group}-gross-profit-total`).textContent = results.totalGrossProfit.toFixed(2);
    document.getElementById(`${group}-net-profit-total`).textContent = results.totalNetProfit.toFixed(2);
}

// Fonction principale pour exécuter le script
function main() {
    Promise.all([fetchCSV(urlRoxWood), fetchCSV(urlPaleto)])
        .then(([roxwoodData, paletoData]) => {
            // Suppression de la ligne d'en-tête
            roxwoodData.shift();
            paletoData.shift();

            // Traitement des données
            const roxwoodResults = processRoxWoodData(roxwoodData);
            const paletoResults = processPaletoData(paletoData);

            // Affichage des résultats
            displayResults('roxwood', roxwoodResults);
            displayResults('paleto', paletoResults);
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

// Appel de la fonction principale
main();

// Fonction pour récupérer et traiter les CSV
function fetchCSV(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => data.split('\n').map(row => row.split(',')))
        .catch(error => console.error('Erreur lors de la récupération des données CSV :', error));
}

// Fonction principale pour traiter les employés
function processEmployees() {
    Promise.all([
        fetchCSV('https://docs.google.com/spreadsheets/d/1C9HySR7QsHFbGVLgSL1AliO0IANVKt0fOAT9s79WTYA/export?format=csv&gid=821726330'), // Tableau 1
        fetchCSV('https://docs.google.com/spreadsheets/d/1M19pAtJYNnDCaKxhO5XjWIlxqT7p2zvk6FHqKYVBJ1g/export?format=csv&gid=582059801')  // Tableau 2
    ]).then(([tableau1, tableau2]) => {
        const roxwoodIds = [];
        const paletoIds = [];

        // Récupérer les identifiants des employés de Roxwood et Paleto
        for (let i = 2; i <= 31; i++) {  // D3:W32 correspond aux lignes 3 à 32 (index 2 à 31)
            const employeeId = tableau1[i][3].trim();  // Colonne D = identifiant
            const isRoxwood = tableau1[i][22].trim().toUpperCase() === 'TRUE';  // Colonne W = boolean
            if (isRoxwood) {
                roxwoodIds.push(employeeId);
            } else {
                paletoIds.push(employeeId);
            }
        }

        console.log("Identifiants Roxwood:", roxwoodIds);
        console.log("Identifiants Paleto:", paletoIds);

        // Traiter les employés de Roxwood
        processRoxwoodEmployees(roxwoodIds, tableau2);

        // Traiter les employés de Paleto
        processPaletoEmployees(paletoIds, tableau2);
    });
}

// Fonction pour nettoyer les valeurs et les convertir en nombre
function parseValue(value) {
    return parseFloat(value.replace(/[^0-9.-]+/g,"").trim()) || 0; // Nettoyage et conversion
}

// Fonction pour traiter les employés de Roxwood
function processRoxwoodEmployees(roxwoodIds, tableau2) {
    let totalFactures = 0;
    let totalChiffreAffaire = 0;
    let totalAchats = 0;
    let totalBeneficeBrut = 0;
    let totalSalaires = 0;

    for (let i = 5; i <= 34; i++) {  // B6:W35 correspond aux lignes 6 à 35 (index 5 à 34)
        const employeeId = tableau2[i][3].trim();  // Colonne D = identifiant

        if (roxwoodIds.includes(employeeId)) {
            totalFactures += parseValue(tableau2[i][4]);  // Colonne E = nombre de factures
            totalChiffreAffaire += parseValue(tableau2[i][5]);  // Colonne F = chiffre d'affaires
            totalAchats += parseValue(tableau2[i][7]);  // Colonne H = chiffre d'achat
            totalBeneficeBrut += parseValue(tableau2[i][9]);  // Colonne J = bénéfice
            totalSalaires += parseValue(tableau2[i][22]);  // Colonne W = salaires
        }
    }

    console.log("Roxwood - Total Factures:", totalFactures);
    console.log("Roxwood - Total Chiffre d'Affaire:", totalChiffreAffaire);
    console.log("Roxwood - Total Achats:", totalAchats);
    console.log("Roxwood - Total Bénéfice Brut:", totalBeneficeBrut);
    console.log("Roxwood - Total Salaires:", totalSalaires);

    // Afficher les résultats dans les div correspondants
    document.getElementById('roxwood-factures').textContent = totalFactures;
    document.getElementById('roxwood-chiffre-affaire').textContent = totalChiffreAffaire;
    document.getElementById('roxwood-achats').textContent = totalAchats;
    document.getElementById('roxwood-benefice-brut').textContent = totalBeneficeBrut;
    document.getElementById('roxwood-benefice-net').textContent = (totalBeneficeBrut - totalSalaires).toFixed(2);
}

// Fonction pour traiter les employés de Paleto
function processPaletoEmployees(paletoIds, tableau2) {
    let totalFactures = 0;
    let totalChiffreAffaire = 0;
    let totalAchats = 0;
    let totalBeneficeBrut = 0;
    let totalSalaires = 0;

    for (let i = 5; i <= 34; i++) {  // B6:W35 correspond aux lignes 6 à 35 (index 5 à 34)
        const employeeId = tableau2[i][3].trim();  // Colonne D = identifiant

        if (paletoIds.includes(employeeId)) {
            totalFactures += parseValue(tableau2[i][4]);  // Colonne E = nombre de factures
            totalChiffreAffaire += parseValue(tableau2[i][5]);  // Colonne F = chiffre d'affaires
            totalAchats += parseValue(tableau2[i][7]);  // Colonne H = chiffre d'achat
            totalBeneficeBrut += parseValue(tableau2[i][9]);  // Colonne J = bénéfice
            totalSalaires += parseValue(tableau2[i][22]);  // Colonne W = salaires
        }
    }

    console.log("Paleto - Total Factures:", totalFactures);
    console.log("Paleto - Total Chiffre d'Affaire:", totalChiffreAffaire);
    console.log("Paleto - Total Achats:", totalAchats);
    console.log("Paleto - Total Bénéfice Brut:", totalBeneficeBrut);
    console.log("Paleto - Total Salaires:", totalSalaires);

    // Afficher les résultats dans les div correspondants
    document.getElementById('paleto-factures').textContent = totalFactures;
    document.getElementById('paleto-chiffre-affaire').textContent = totalChiffreAffaire;
    document.getElementById('paleto-achats').textContent = totalAchats;
    document.getElementById('paleto-benefice-brut').textContent = totalBeneficeBrut;
    document.getElementById('paleto-benefice-net').textContent = (totalBeneficeBrut - totalSalaires).toFixed(2);
}

// Appeler la fonction principale pour traiter les employés
processEmployees();

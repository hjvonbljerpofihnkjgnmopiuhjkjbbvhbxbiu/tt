document.addEventListener('DOMContentLoaded', function () {
    const caTable = document.getElementById('ca-table');
    const resultatRecherche = document.getElementById('resultat-recherche');

    // URL des CSV
    const urlChiffreAffaire = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTojLuKf6yD5c2xHBzE1ApfSBf_3gNZpiD7SKmnyMUmKoNzHqddpU5fZ1N0YeCbAQGZw/pub?gid=0&single=true&output=csv';
    const urlRecherche = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTojLuKf6yD5c2xHBzE1ApfSBf_3gNZpiD7SKmnyMUmKoNzHqddpU5fZ1N0YeCbAQGZw/pub?gid=0&single=true&output=csv';

    // Fonction pour récupérer les données CSV
    function fetchCSV(url) {
        return fetch(url).then(response => response.text());
    }

    // Charger les données du tableau de Chiffre d'affaire
    fetchCSV(urlChiffreAffaire).then(csvData => {
        const rows = csvData.split('\n').slice(28, 34); // Y29 à AB34
        rows.forEach(row => {
            const cols = row.split(',');
            const tr = document.createElement('tr');
            cols.slice(24, 28).forEach(col => { // Y à AB
                const td = document.createElement('td');
                td.textContent = col.trim();
                tr.appendChild(td);
            });
            caTable.appendChild(tr);
        });
    });

    // Charger les données du tableau pour la recherche du numéro 57755
    fetchCSV(urlRecherche).then(csvData => {
        const rows = csvData.split('\n').slice(4, 36); // B5 à W36
        const targetNumber = '57755';
        let found = false;
        
        rows.forEach(row => {
            const cols = row.split(',');
            if (cols[2].trim() === targetNumber) { // Colonne C (index 2)
                found = true;
                resultatRecherche.innerHTML = `
                    <p>Numéro trouvé :</p>
                    <p>B: ${cols[1]}, C: ${cols[2]}, D: ${cols[3]}, ..., W: ${cols[22]}</p>
                `;
            }
        });

        if (!found) {
            resultatRecherche.innerHTML = '<p>Numéro 57755 non trouvé.</p>';
        }
    });
});

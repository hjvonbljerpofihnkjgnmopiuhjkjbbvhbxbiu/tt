document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const resetBtn = document.getElementById('reset-btn');
    const confirmResetModal = document.getElementById('confirm-reset-modal');
    const confirmResetBtn = document.getElementById('confirm-reset');
    const cancelResetBtn = document.getElementById('cancel-reset');

    const jsonURL = 'https://raw.githubusercontent.com/hjvonbljerpofihnkjgnmopiuhjkjbbvhbxbiu/tt/main/data.js'; // Remplace par l'URL de ton fichier JSON

    const discordWebhookURL = 'https://discord.com/api/webhooks/1272132345045975072/GnHJEFxdyzALQwIeuwbB6QEVwODbZzLC-fdvcJsnW1BSCfZsTvS2EbvLj1Fubvw634Kp'; // Remplace par l'URL de ton webhook Discord

    // Récupérer les données du fichier JSON
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            // Sauvegarder les données initiales dans LocalStorage si elles n'existent pas
            if (!localStorage.getItem('counterData')) {
                localStorage.setItem('counterData', JSON.stringify(data.elements));
            }
            // Charger les données depuis LocalStorage
            data.elements = JSON.parse(localStorage.getItem('counterData'));
            displayData(data.elements);
        });

    // Fonction pour afficher les éléments
    function displayData(elements) {
        elements.forEach((item, index) => {
            const counterDiv = document.createElement('div');
            counterDiv.className = 'counter';

            const textSpan = document.createElement('span');
            textSpan.textContent = item.text;

            const minusBtn = document.createElement('button');
            minusBtn.textContent = '-';
            minusBtn.addEventListener('click', () => updateValue(index, -1));

            const valueSpan = document.createElement('span');
            valueSpan.textContent = item.value;
            valueSpan.className = 'value';

            const plusBtn = document.createElement('button');
            plusBtn.textContent = '+';
            plusBtn.addEventListener('click', () => updateValue(index, 1));

            counterDiv.appendChild(textSpan);
            counterDiv.appendChild(minusBtn);
            counterDiv.appendChild(valueSpan);
            counterDiv.appendChild(plusBtn);

            container.appendChild(counterDiv);
        });
    }

    // Fonction pour mettre à jour la valeur
    function updateValue(index, change) {
        let data = JSON.parse(localStorage.getItem('counterData'));
        data[index].value += change;
        localStorage.setItem('counterData', JSON.stringify(data));
        updateUI();
        sendDiscordWebhook(data);
    }

    // Fonction pour envoyer les données au webhook Discord
    function sendDiscordWebhook(data) {
        const content = {
            content: `**Mise à jour des valeurs**:\n${data.map(item => `${item.text}: ${item.value}`).join('\n')}`
        };

        fetch(discordWebhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Erreur lors de l\'envoi du webhook Discord');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la requête webhook Discord:', error);
        });
    }

    // Fonction pour mettre à jour l'interface utilisateur
    function updateUI() {
        const values = document.querySelectorAll('.value');
        let data = JSON.parse(localStorage.getItem('counterData'));
        values.forEach((valueSpan, index) => {
            valueSpan.textContent = data[index].value;
        });
    }

    // Gestion du reset avec la modale de confirmation
    resetBtn.addEventListener('click', function() {
        confirmResetModal.style.display = 'flex';
    });

    confirmResetBtn.addEventListener('click', function() {
        localStorage.removeItem('counterData');
        location.reload();
    });

    cancelResetBtn.addEventListener('click', function() {
        confirmResetModal.style.display = 'none';
    });
});

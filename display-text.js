// display-text.js

fetch('.1.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('text-content').innerText = text;
    })
    .catch(error => console.error('Error fetching text:', error));

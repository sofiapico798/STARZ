fetch('componente.html') .then(response => response.text()) 
.then(data => { document.getElementById('componente-placeholder')
    .innerHTML = data; });

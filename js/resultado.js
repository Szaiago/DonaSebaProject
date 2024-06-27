document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('searchResults'));
    const resultContainer = document.getElementById('result-container');

    if (results && results.length > 0) {
        results.forEach(result => {
            const productCard = document.createElement('div');
            productCard.classList.add('card-produtos');

            productCard.innerHTML = `
                <div class="img-produto" style="background-image: ${result.image}; background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
                <div class="info-produto">
                    <h1>${result.name}</h1>
                    <p>${result.description}</p>
                </div>
            `;

            resultContainer.appendChild(productCard);
        });
    } else {
        resultContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
});
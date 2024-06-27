function filterProducts(category) {
    const productCards = document.querySelectorAll('.card-produtos');
    const results = [];

    productCards.forEach(card => {
        if (card.id === category) {
            const productName = card.querySelector('h1').innerText;
            const productDescription = card.querySelector('p').innerText;
            const productImage = card.querySelector('.img-produto').style.backgroundImage;

            results.push({
                image: productImage,
                name: productName,
                description: productDescription
            });
        }
    });

    if (results.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(results));
        window.location.href = `paginas/${category}.html`;
    } else {
        alert('Nenhum produto encontrado.');
    }
}
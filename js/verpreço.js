function togglePrice() {
    const checkbox = document.getElementById('toggle-units');
    const priceElement = document.getElementById('price');
    const labelElement = document.getElementById('toggle-label');

    if (checkbox.checked) {
        priceElement.innerText = 'R$44.99';
        labelElement.innerText = 'VER 100 UN';
    } else {
        priceElement.innerText = 'R$64.99';
        labelElement.innerText = 'VER 50 UN';
    }
}
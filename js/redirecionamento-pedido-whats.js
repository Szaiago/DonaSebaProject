function toggleSection(event) {
    const section = event.currentTarget;
    section.classList.toggle('open');
}

function redirectToWhatsApp() {
    const nomeProduto = document.getElementById('nome-pedido').textContent;
    const precoProduto = document.getElementById('price').textContent;
    const mensagem = `Olá, gostaria de saber mais sobre o ${nomeProduto} que está com preço de ${precoProduto}`;
    const numeroTelefone = '4998087342';
    const url = `https://wa.me/55${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}

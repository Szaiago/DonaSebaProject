function toggleSection(event) {
    const section = event.currentTarget;
    section.classList.toggle('open');
}

function redirectToWhatsApp() {
    const nomeProduto = document.getElementById('nome-pedido').textContent;
    const mensagem = `Olá, gostaria de saber mais sobre o ${nomeProduto}`;
    const numeroTelefone = '49991469771';
    const url = `https://wa.me/55${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}
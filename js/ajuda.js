document.getElementById('ajuda-link').addEventListener('click', function(event) {
    event.preventDefault();
    const numeroTelefone = '4791587771'; // Substitua com o número de WhatsApp correto
    const mensagem = `Olá, preciso de ajuda.`;
    const url = `https://wa.me/55${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
});
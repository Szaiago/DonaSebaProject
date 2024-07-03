function enviarWhatsApp() {
    const nomeCliente = document.getElementById('Nome-Cliente').value.trim();
    const cep = document.getElementById('CEP').value.trim();
    const dataEntrega = document.getElementById('Data-Entrega').value.trim();
    const infoAdicionais = document.getElementById('Info-Adicionais').value.trim();
    const nomePedido = document.getElementById('nome-pedido').textContent.trim();
    const priceTotal = document.getElementById('price-total').textContent.trim();
    const oQueVem = document.getElementById('o-que-vem').textContent.trim();
    const cidade = document.getElementById('Cidade-span').textContent.trim();
    const bairro = document.getElementById('Bairro-span').textContent.trim();
    const rua = document.getElementById('Rua-span').textContent.trim();
    const errorContainer = document.getElementById('error-container');

    if (!nomeCliente || !dataEntrega || !cidade || !nomePedido || !priceTotal || !oQueVem) {
        errorContainer.style.display = 'block';
        document.getElementById('Nome-Cliente-span').textContent = !nomeCliente ? 'Nome do Cliente é obrigatório.' : '';
        document.getElementById('Data-Entrega-span').textContent = !dataEntrega ? 'Data de Entrega é obrigatória.' : '';
        document.getElementById('Cidade-span').textContent = !cidade ? 'Cidade é obrigatória.' : '';
        document.getElementById('nome-pedido-span').textContent = !nomePedido ? 'Nome do Pedido é obrigatório.' : '';
        document.getElementById('price-total-span').textContent = !priceTotal ? 'Preço Total é obrigatório.' : '';
        document.getElementById('o-que-vem-span').textContent = !oQueVem ? 'O que vem é obrigatório.' : '';
        return;
    }

    abrirModal();

    let mensagem = `Olá, gostaria de fazer um pedido:\n\n` +
        `Nome do Cliente: ${nomeCliente}\n` +
        (cep ? `CEP: ${cep}\n` : '') +
        `Cidade: ${cidade}\n`;

    if (bairro && rua) {
        mensagem += `Bairro: ${bairro}\n` +
                    `Rua: ${rua}\n`;
    } else {
        mensagem += 'Bairro: Preencha Manualmente\n' +
                    'Rua: Preencha Manualmente\n' +
                    'Alguns CEPs podem variar e acabar não encontrando informações de bairro e rua.\n';
    }

    mensagem += `Data de Entrega: ${dataEntrega}\n` +
                `Informações Adicionais: ${infoAdicionais}\n` +
                `Nome do Pedido: ${nomePedido}\n` +
                `Preço Total: ${priceTotal}\n` +
                `O que vem: ${oQueVem}`;

    const numeroWhatsApp = '47991587771';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Verificar se é dispositivo móvel para redirecionar de forma adequada
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = urlWhatsApp; // Redireciona diretamente para o WhatsApp no navegador móvel
    } else {
        alert("Para continuar, clique no botão 'OK'!");
        setTimeout(function() {
            fecharModal();
            window.open(urlWhatsApp, '_blank');
        }, 1000); // Apenas para simulação, ajuste conforme necessário
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const botaoFinalizarCompra = document.getElementById('Finalizar-compra');
    botaoFinalizarCompra.addEventListener('click', enviarWhatsApp);
});

function abrirModal() {
    document.getElementById('seu-modal-id').style.display = 'block';
}

function fecharModal() {
    document.getElementById('seu-modal-id').style.display = 'none';
}

function fecharErro() {
    document.getElementById('error-container').style.display = 'none';
}

$(document).ready(function(){
    $('#CEP').on('blur', function(){
        const cep = $(this).val().replace(/\D/g, '');
        if (cep !== "") {
            const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                $.getJSON(`https://viacep.com.br/ws/${cep}/json/?callback=?`, function(dados){
                    if (!("erro" in dados)) {
                        $('#Cidade').val(dados.localidade);
                        $('#Cidade-span').text(dados.localidade);
                        $('#Bairro').val(dados.bairro || '');
                        $('#Rua').val(dados.logradouro || '');
                        $('#Bairro-span').text(dados.bairro || '');
                        $('#Rua-span').text(dados.logradouro || '');
                    } else {
                        alert("CEP não encontrado.");
                    }
                });
            } else {
                alert("Formato de CEP inválido.");
            }
        }
    });
});

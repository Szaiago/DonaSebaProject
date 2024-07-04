$(document).ready(function() {
    // Array para armazenar os produtos selecionados
    let produtosSelecionados = [];

    // Função para atualizar a lista de produtos selecionados na página
    function atualizarListaProdutos() {
        const listaProdutosElement = $('#o-que-vem');
        listaProdutosElement.empty(); // Limpa o conteúdo antes de atualizar

        if (produtosSelecionados.length === 0) {
            listaProdutosElement.text('Nenhum produto selecionado.');
        } else {
            // Ordena os produtos pelo nome antes de exibir
            produtosSelecionados.sort((a, b) => a.nome.localeCompare(b.nome));

            // Constrói a lista de produtos selecionados em formato de lista
            const listaHTML = '<ul>' +
                produtosSelecionados.map(produto => `<li>${produto.nome}</li>`).join('') +
                '</ul>';

            listaProdutosElement.html(listaHTML);
        }

        // Calcula o preço total dos produtos selecionados
        const precoTotal = produtosSelecionados.reduce((total, produto) => total + produto.valor, 0).toFixed(2);
        $('#price-total').text(`Total: R$${precoTotal}`);

        // Verifica se a lista de produtos não está vazia e abre o dropdown
        if (produtosSelecionados.length > 0) {
            const dropdownToggleElement = $('.dropdown-toggle'); // Ajuste o seletor conforme necessário
            if (!dropdownToggleElement.hasClass('open')) {
                dropdownToggleElement.addClass('open');
                toggleSection({ currentTarget: dropdownToggleElement[0] });
            }
        }
    }

    // Evento de clique nos checkboxes para adicionar/remover produtos
    $('.adicionar-produto-check').on('change', function() {
        const isChecked = $(this).prop('checked');
        const nomeProduto = $(this).data('nome-produto');
        const valorProduto = parseFloat($(this).data('valor-produto'));

        if (isChecked) {
            // Adiciona o produto à lista de produtos selecionados
            produtosSelecionados.push({ nome: nomeProduto, valor: valorProduto });
        } else {
            // Remove o produto da lista de produtos selecionados
            produtosSelecionados = produtosSelecionados.filter(produto => produto.nome !== nomeProduto);
        }

        // Atualiza a lista de produtos e o preço total na página
        atualizarListaProdutos();
    });
});

// Função para abrir/fechar a seção (dropdown)
function toggleSection(event) {
    const section = event.currentTarget;
    section.classList.toggle('open');
}

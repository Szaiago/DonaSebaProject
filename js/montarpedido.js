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
        let precoTotal = 0;
        produtosSelecionados.forEach(produto => {
            if (!isNaN(produto.valor)) {
                precoTotal += produto.valor;
            }
        });

        $('#price-total').text(`Total: R$${precoTotal.toFixed(2)}`);
    }

    // Código para o cálculo do preço do bolo conforme quantidade (kg) selecionada
    const sectionTipo = document.getElementById('bolos');
    const enviarButtons = sectionTipo.querySelectorAll('.enviar-kg-bolo');
    const quantidadeInputs = sectionTipo.querySelectorAll('.quantidade-kg-bolo');
    const precoPorKg = 54.99; // Valor fixo do produto por kg

    enviarButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const input = quantidadeInputs[index];
            const quantidadeKg = parseFloat(input.value);
            const nomeProduto = `BOLO BRIGADEIRO (${quantidadeKg} kg)`;
            const valorTotal = (quantidadeKg * precoPorKg).toFixed(2);

            // Verifica se a quantidade é válida e maior que zero para atualizar o valor do produto
            if (!isNaN(quantidadeKg) && quantidadeKg > 0) {
                const produtoExistente = produtosSelecionados.find(produto => produto.nome === nomeProduto);

                if (produtoExistente) {
                    produtoExistente.valor = parseFloat(valorTotal);
                } else {
                    produtosSelecionados.push({ nome: nomeProduto, valor: parseFloat(valorTotal) });
                }

                // Atualiza a lista de produtos e o preço total na página
                atualizarListaProdutos();
            } else {
                // Caso a quantidade não seja válida, não faz nada
                console.log('Quantidade inválida.');
            }
        });
    });

    // Evento de clique nos checkboxes para adicionar/remover produtos
    $('.adicionar-produto-check').on('change', function() {
        const isChecked = $(this).prop('checked');
        const nomeProduto = $(this).data('nome-produto');
        const valorProduto = parseFloat($(this).data('valor-produto'));

        if (isChecked) {
            // Adiciona o produto à lista de produtos selecionados
            produtosSelecionados.push({ nome: nomeProduto, valor: valorProduto });

            // Atualiza a lista de produtos e o preço total na página
            atualizarListaProdutos();
        } else {
            // Remove o produto da lista de produtos selecionados
            produtosSelecionados = produtosSelecionados.filter(produto => produto.nome !== nomeProduto);

            // Atualiza a lista de produtos e o preço total na página
            atualizarListaProdutos();
        }
    });
});

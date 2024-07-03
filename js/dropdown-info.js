function toggleSection(event) {
    const section = event.currentTarget;
    const dropdownContent = section.querySelector('.dropdown-content');

    section.classList.add('open');
    dropdownContent.addEventListener('click', stopPropagation); // Impede a propagação do clique dentro do dropdown
}

function stopPropagation(event) {
    event.stopPropagation(); // Impede a propagação do evento de clique dentro do dropdown
}

document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.dropdown');
    const sectionContent = section.querySelector('.section-tipo-content');
    const quantidadeInput = section.querySelector('#quantidade-kg-bolo');
    const enviarButton = section.querySelector('#enviar-kg-bolo');

    section.addEventListener('click', toggleSection);

    sectionContent.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no content propague para fechar o dropdown
    });

    // Impede o fechamento ao clicar dentro da sub-seção
    const subSection = section.querySelector('.sub-section');
    subSection.addEventListener('click', stopPropagation);

    // Impede o fechamento ao clicar em qualquer input dentro do dropdown
    const dropdownInputs = section.querySelectorAll('.dropdown-content input');
    dropdownInputs.forEach(input => {
        input.addEventListener('click', stopPropagation);
    });

    // Impede o fechamento ao clicar em qualquer elemento com a classe dropdown-function dentro do dropdown
    const dropdownFunctions = section.querySelectorAll('.dropdown-content .dropdown-function');
    dropdownFunctions.forEach(func => {
        func.addEventListener('click', stopPropagation);
    });

    // Impede o fechamento ao interagir com o input quantidade-kg-bolo
    quantidadeInput.addEventListener('focus', function(event) {
        section.classList.add('open');
        event.stopPropagation();
    });

    // Impede o fechamento ao interagir com o botão enviar-kg-bolo
    enviarButton.addEventListener('click', function(event) {
        section.classList.add('open');
        event.stopPropagation();
    });

});

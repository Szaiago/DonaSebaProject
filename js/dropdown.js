document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const hamburger = document.querySelector('.hamburger');
    const dropdownContent = document.querySelector('.dropdown-content');

    hamburger.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation(); // Impede que o clique se propague para o window
    });

    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o window
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    

    dropdown.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
    });

    const dropdownAjuda = document.querySelector('.dropdown-ajuda');
    const dropdownContentAjuda = document.querySelector('.dropdown-content-ajuda');
    

    dropdownAjuda.addEventListener('click', function(event) {
        dropdownContentAjuda.classList.toggle('show');
    });


    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
        if (!dropdownAjuda.contains(event.target)) {
            dropdownContentAjuda.classList.remove('show');
        }
    });
});

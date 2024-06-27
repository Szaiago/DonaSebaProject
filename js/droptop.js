document.addEventListener('DOMContentLoaded', (event) => {
    const socialMediaFooter = document.querySelector('.rede-sociais-footer');
    const dropdownContent = document.querySelector('.dropdown-content-rede-sociais');

    socialMediaFooter.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!socialMediaFooter.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

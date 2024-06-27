document.addEventListener('DOMContentLoaded', function () {
    var socialFooter = document.querySelector('.rede-sociais-footer');
    socialFooter.addEventListener('mouseenter', function () {
        var socialText = this.querySelector('.social-text');
        var socialLinks = this.querySelector('.social-links');
        socialText.style.display = 'none';
        socialLinks.style.display = 'flex';
    });
    socialFooter.addEventListener('mouseleave', function () {
        var socialText = this.querySelector('.social-text');
        var socialLinks = this.querySelector('.social-links');
        socialText.style.display = 'block';
        socialLinks.style.display = 'none';
    });
    socialFooter.addEventListener('click', function () {
        var socialText = this.querySelector('.social-text');
        var socialLinks = this.querySelector('.social-links');
        if (socialLinks.style.display === 'none') {
            socialText.style.display = 'none';
            socialLinks.style.display = 'flex';
        } else {
            socialText.style.display = 'block';
            socialLinks.style.display = 'none';
        }
    });
});
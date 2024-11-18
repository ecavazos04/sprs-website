
document.addEventListener('DOMContentLoaded', function() {
    const langToggleLinks = document.querySelectorAll('.lang-toggle');
    langToggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('href').split('=')[1];
            alert(`Switching to language: ${lang}`);
            // Language switching logic here
        });
    });
});

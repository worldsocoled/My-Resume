document.querySelectorAll('.technical-skills li, .soft-skills li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});

window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
// Scroll to the top smoothly when button is clicked
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


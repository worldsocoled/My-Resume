document.querySelectorAll('.technical-skills li, .soft-skills li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});
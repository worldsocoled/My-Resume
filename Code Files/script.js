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

document.getElementById('backToTop').onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};

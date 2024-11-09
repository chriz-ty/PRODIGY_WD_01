document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const navHeight = nav.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > navHeight) {
            nav.style.backgroundColor = '#1a1a1a';
        } else {
            nav.style.backgroundColor = '#333';
        }
    });

    const navLinks = nav.getElementsByTagName('a');
    for (let link of navLinks) {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffd700';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    }
});
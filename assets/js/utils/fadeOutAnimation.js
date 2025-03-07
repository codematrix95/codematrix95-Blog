const fadeOutAnimation = () => {
    const body = document.body;
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            body.classList.add('fade-out');

            body.addEventListener('animationend', () => {
                body.style.visibility = 'hidden';
                window.location.href = href;
            });
        });
    });
};

export default fadeOutAnimation;
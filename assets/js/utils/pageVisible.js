const pageVisible = () => {
    const body = document.body;
    body.classList.add('fade-in');
    body.addEventListener('animationstart', () => {
        body.style.visibility = 'visible';
    });
    window.removeEventListener('load', pageVisible);
};

export default pageVisible;
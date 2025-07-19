const pageVisible = () => {
    const body = document.body;
    body.className = "";
    body.classList.add('fade-in');
};

export default pageVisible;
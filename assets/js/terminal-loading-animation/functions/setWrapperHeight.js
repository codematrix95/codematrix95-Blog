export default (x) => {
    return new Promise((resolve) => {
        const wrappers = document.getElementsByClassName('wrapper');

        for (let i = 0; i < wrappers.length; i++) {
            if (x === true) {
                wrappers[i].style.height = wrappers[i].clientHeight + 'px';
            } else if (x === false) {
                wrappers[i].removeAttribute('style');
            }
        }
        resolve();
    });
};
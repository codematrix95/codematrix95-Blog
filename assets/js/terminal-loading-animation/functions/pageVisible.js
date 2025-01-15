export default (x) => {
    return new Promise((resolve) => {
        if (x === false) {
            document.documentElement.style.opacity = 0;
        } else if (true) {
            document.documentElement.removeAttribute('style');
        }
        resolve();
    });
};

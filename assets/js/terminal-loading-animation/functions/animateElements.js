const typedTextAnimation = async (e, node, delay) => {
    const typingSpeed = 25; 
    const delayBeforeCaretRemoval = 500;
    const text = node.textContent;

    for (let l = 0; l < text.length; l++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                e.classList.add('typing-start');
                e.textContent += text.charAt(l);
                resolve(); 
            }, typingSpeed);
        });
    }

    await delay(delayBeforeCaretRemoval);
    e.classList.remove('typing-start');
    e.classList.add('typing-end');
};

const svgIconAnimation = (e) => {
    e.classList.add('flicker-icon');
    e.firstChild.classList.add('fade-in-icon');

    e.addEventListener('animationend', () => {
        e.classList.add('typing-end');
    });
};

export default async (nodes) => {
    return new Promise(async (resolve) => {
        const typing = document.getElementsByClassName('typing');
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (let k = 0; k < typing.length; k++) {
            if (nodes[k].nodeName === '#text') {
                await typedTextAnimation(typing[k], nodes[k], delay);
            }

            if (nodes[k].nodeName === 'svg') {
                svgIconAnimation(typing[k]);
            }
        }
        resolve();
    });
};

const typedTextAnimation = async (e, node, delay, typingSpeed) => {
    const text = node.textContent;
    let caretDelay = 600;
    let fontSize = parseInt(window.getComputedStyle(e).fontSize, 10);

    if (fontSize > 16) {
        typingSpeed * 1.5;
        caretDelay * 1.5;
    } else {
        true;
    }

    e.classList.add('typing-start');

    for (let l = 0; l < text.length; l++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                e.textContent += text.charAt(l);
                resolve();
            }, typingSpeed);
        });
    }

    await delay(caretDelay);
    e.classList.remove('typing-start');
    e.classList.add('typing-end');
};

const matrixImgAnimation = (e) => {
    e.parentNode.classList.add('flicker-img');
    e.classList.add('fade-in-img');
};

const svgIconAnimation = (e, typingSpeed) => {
    let duration = typingSpeed * 24;

    e.classList.add('flicker-icon');
    e.firstChild.style.animation = `fade-in ${duration}ms ease-in forwards`;

    e.addEventListener('animationend', () => {
        e.classList.add('typing-end');
    });
};

export default async (nodes) => {
    return new Promise(async (resolve) => {
        const typing = document.getElementsByClassName('typing');

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (let k = 0; k < typing.length; k++) {
            let typingSpeed = 30;

            if (nodes[k].nodeName === '#text') {
                await typedTextAnimation(typing[k], nodes[k], delay, typingSpeed);
            }

            if (nodes[k].nodeName === 'IMG') {
                matrixImgAnimation(typing[k]);
            }

            if (nodes[k].nodeName === 'svg') {
                svgIconAnimation(typing[k], typingSpeed);
            }
        }
        resolve();
    });
};

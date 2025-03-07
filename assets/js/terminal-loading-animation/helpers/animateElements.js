const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const typeText = async (e, text, adjustedTypingSpeed) => {
    let currentText = '';

    for (let l = 0; l < text.length; l++) {
        currentText += text.charAt(l);
        e.textContent = currentText;
        await delay(adjustedTypingSpeed);
    }
};

const typedTextAnimation = async (e, node, typingSpeed) => {
    const firstElement = document.getElementsByClassName('typing')[0];

    const text = node.textContent;
    const fontSize = parseInt(window.getComputedStyle(e).fontSize, 10);

    const adjustedTypingSpeed = fontSize > 16 ? typingSpeed * 1.5 : typingSpeed;
    const adjustedCaretDelay = fontSize > 16 ? 600 * 1.5 : 600;

    e.classList.add('typing-start');

    if (e === firstElement) {
        await delay(750);
        await typeText(e, text, adjustedTypingSpeed);
    } else {
        await typeText(e, text, adjustedTypingSpeed);
    }

    await delay(adjustedCaretDelay);

    e.classList.remove('typing-start');
    e.classList.add('typing-end');
};

const heroImgAnimation = (e) => {
    e.parentNode.classList.add('flicker-img');
    e.classList.add('fade-in-img');
    e.addEventListener('animationend', () => {}, { once: true });
};

const svgIconAnimation = (e, typingSpeed) => {
    const duration = typingSpeed * 24;

    e.classList.add('flicker-icon');
    e.firstChild.style.animation = `fade-in ${duration}ms ease-in forwards`;

    e.addEventListener(
        'animationend',
        () => {
            e.classList.add('typing-end');
            e.firstChild.removeAttribute('style');
        },
        { once: true }
    );
};

const animateElements = async (nodes) => {
    return new Promise(async (resolve) => {
        const typing = document.querySelectorAll('.typing');

        for (let i = 0; i < typing.length; i++) {
            const typingSpeed = 30;
            const e = typing[i];
            const node = nodes[i];

            if (!node) continue;

            switch (node.nodeName) {
                case '#text':
                    await typedTextAnimation(e, node, typingSpeed);
                    break;

                case 'IMG':
                    heroImgAnimation(e);
                    break;

                case 'svg':
                    svgIconAnimation(e, typingSpeed);
                    break;

                default:
                    console.warn(`Unhandled node type: ${node.nodeName}`);
            }
        }

        document.querySelectorAll('span.typing').forEach((e) => {
            if (e.firstChild && e.firstChild.parentElement) {
                const parentOfFirstChild = e.firstChild.parentElement;
                parentOfFirstChild.replaceWith(
                    ...parentOfFirstChild.childNodes
                );
            }
            e.replaceWith(e.innerHTML);
        });

        nodes.length = 0;

        resolve();
    });
};

export default animateElements;

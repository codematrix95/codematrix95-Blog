const typedTextAnimation = async (e, node, delay, typingSpeed) => {
    const text = node.textContent;
    const fontSize = parseInt(window.getComputedStyle(e).fontSize, 10);

    const adjustedTypingSpeed = fontSize > 16 ? typingSpeed * 1.5 : typingSpeed;
    const adjustedCaretDelay = fontSize > 16 ? 600 * 1.5 : 600;

    e.classList.add('typing-start');

    let currentText = '';

    for (let l = 0; l < text.length; l++) {
        currentText += text.charAt(l);
        e.textContent = currentText;
        await new Promise((resolve) =>
            setTimeout(resolve, adjustedTypingSpeed)
        );
    }

    await delay(adjustedCaretDelay);

    e.classList.remove('typing-start');
    e.classList.add('typing-end');
};

export default typedTextAnimation;

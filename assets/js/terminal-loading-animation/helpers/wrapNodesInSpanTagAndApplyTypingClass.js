const wrapNodesInSpanTagAndApplyTypingClass = (nodes) => {
    return new Promise((resolve) => {
        nodes.forEach((node) => {
            if (node.nodeName === '#text' || node.nodeName === 'svg') {
                const span = document.createElement('span');
                span.classList.add('typing');
                node.parentNode.replaceChild(span, node);

                if (node.nodeName === 'svg') {
                    span.appendChild(node);
                }
            }

            if (node.nodeName === 'IMG') {
                node.classList.add('typing');
            }
        });
        resolve();
    });
};

export default wrapNodesInSpanTagAndApplyTypingClass;

export default (nodes) => {
    return new Promise((resolve) => {
        nodes.forEach(node => {
            const span = document.createElement('span');
            span.classList.add('typing');
            if (node.nodeName === '#text') {
                node.parentNode.replaceChild(span, node);
            } else if (node.nodeName === 'svg') {
                node.parentNode.replaceChild(span, node);
                span.appendChild(node);
            }
        });
        resolve();
    });
};

// export default (nodes) => {
//     return new Promise((resolve) => {
//         for (let i = 0; i < nodes.length; i++) {
//             const span = document.createElement('span');
//             span.classList.add('typing');
//             if (nodes[i].nodeName === '#text') {
//                 nodes[i].parentNode.replaceChild(span, nodes[i]);
//             } else if (nodes[i].nodeName === 'svg') {
//                 nodes[i].parentNode.replaceChild(span, nodes[i]);
//                 span.appendChild(nodes[i]);
//             }
//         }
//         resolve();
//     });
// };

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

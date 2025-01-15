const handleTextNode = (node) => {
    if (node.parentNode.tagName === 'SCRIPT') {
        return NodeFilter.FILTER_REJECT;
    }
    return node.nodeValue.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
};

const acceptNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
        return handleTextNode(node);
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.classList.contains('svg-icon')) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node.classList.contains('matrix-image')) {
            return NodeFilter.FILTER_ACCEPT;
        }
    }
    return NodeFilter.FILTER_SKIP;
};



const pushAcceptedNodeToNodesArray = (nodes, treeWalker) => {
    let currentNode;
    while ((currentNode = treeWalker.nextNode())) {
        nodes.push(currentNode);
    }
};

export default (nodes) => {
    return new Promise((resolve) => {
        const treeWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
            { acceptNode }
        );
        pushAcceptedNodeToNodesArray(nodes, treeWalker);
        resolve();
    });
};

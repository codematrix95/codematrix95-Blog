import setWrapperHeight from './helpers/setWrapperHeight.js';
import createNodeArray from './helpers/createNodeArray.js';
import wrapNodesInSpanTagAndApplyTypingClass from './helpers/wrapNodesInSpanTagAndApplyTypingClass.js';
import animateElements from './helpers/animateElements.js';
import handleCookieLogic from './helpers/handleCookieLogic.js';

const terminalLoadingAnimation = () => {
    const nodes = [];
    setWrapperHeight(true)
        .then(() => createNodeArray(nodes))
        .then(() => wrapNodesInSpanTagAndApplyTypingClass(nodes))
        .then(() => animateElements(nodes))
        .then(() => setWrapperHeight(false));
};

export default terminalLoadingAnimation
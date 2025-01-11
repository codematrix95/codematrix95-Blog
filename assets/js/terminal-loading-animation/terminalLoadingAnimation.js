import setWrapperHeight from './functions/setWrapperHeight.js';
import createNodeArray from './functions/createNodeArray.js';
import wrapNodesInSpanTagAndApplyTypingClass from './functions/wrapNodesInSpanTagAndApplyTypingClass.js';
import animateElements from './functions/animateElements.js';
import pageVisible from './functions/pageVisible.js';
import handleCookieLogic from './functions/handleCookieLogic.js';

pageVisible(false);
window.onload = () => {
    const terminalLoadingAnimation = () => {
        const nodes = [];
        setWrapperHeight(true)
            .then(() => createNodeArray(nodes))
            .then(() => wrapNodesInSpanTagAndApplyTypingClass(nodes))
            .then(() => pageVisible(true))
            .then(() => animateElements(nodes))
            .then(() => setWrapperHeight(false));
    };
    handleCookieLogic(terminalLoadingAnimation);
};

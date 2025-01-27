import setWrapperHeight from './functions/setWrapperHeight.js';
import createNodeArray from './functions/createNodeArray.js';
import wrapNodesInSpanTagAndApplyTypingClass from './functions/wrapNodesInSpanTagAndApplyTypingClass.js';
import animateElements from './functions/animateElements.js';
import handleCookieLogic from './functions/handleCookieLogic.js';

const terminalLoadingAnimation = () => {
    const nodes = [];
    setWrapperHeight(true)
        .then(() => createNodeArray(nodes))
        .then(() => wrapNodesInSpanTagAndApplyTypingClass(nodes))
        .then(() => animateElements(nodes))
        .then(() => setWrapperHeight(false));
};

const onLoad = () => {
    // handleCookieLogic(terminalLoadingAnimation);
    terminalLoadingAnimation();
    window.removeEventListener('load', onLoad); 
};

window.addEventListener('load', onLoad);

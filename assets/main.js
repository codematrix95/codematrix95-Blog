// const setWrapperHeight = (x) => {
//     return new Promise((resolve) => {
//         const wrappers = document.getElementsByClassName('wrapper');

//         for (let i = 0; i < wrappers.length; i++) {
//             x === true
//                 ? (wrappers[i].style.height = wrappers[i].clientHeight + 'px')
//                 : wrappers[i].removeAttribute('style');
//         }
//         resolve();
//     });
// };

// const doesCookieExist = (cookieName) => {
//     return document.cookie
//         .split('; ')
//         .some((cookie) => cookie.startsWith(`${cookieName}=`));
// };

// const createNodeArray = (nodes) => {
//     return new Promise((resolve) => {
//         const treeWalker = document.createTreeWalker(
//             document.body,
//             NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, // Show both text and element nodes
//             {
//                 acceptNode: (node) => {
//                     if (node.nodeType === Node.TEXT_NODE) {
//                         // Exclude text nodes inside <script> or empty/whitespace-only text nodes
//                         if (node.parentNode.tagName === 'SCRIPT') {
//                             return NodeFilter.FILTER_REJECT;
//                         }
//                         return node.nodeValue.trim()
//                             ? NodeFilter.FILTER_ACCEPT
//                             : NodeFilter.FILTER_REJECT;
//                     } else if (node.classList.contains('svg-icon')) {
//                         return NodeFilter.FILTER_ACCEPT;
//                     }
//                     return NodeFilter.FILTER_SKIP;
//                 },
//             }
//         );

//         // Collect text and <svg> elements with class "svg-icon"
//         let currentNode;
//         while ((currentNode = treeWalker.nextNode())) {
//             nodes.push(currentNode);
//         }

//         console.log(nodes);
//         resolve();
//         // console.log('Nodes:', nodes);
//     });
// };

// const wrapNodesInSpanTagAndApplyTypingClass = (nodes) => {
//     return new Promise((resolve) => {
//         for (let i = 0; i < nodes.length; i++) {
//             console.log(nodes[i]);
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

// const typeTextForTextNodes = async (nodes) => {
//     return new Promise(async (resolve) => {
//         const typing = document.getElementsByClassName('typing');
//         const typingSpeed = 25; // Speed in milliseconds
//         const delayBeforeCaretRemoval = 500;
//         const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//         console.log(typing);

//         for (let k = 0; k < typing.length; k++) {
//             if (nodes[k].nodeName === '#text') {
//                 const text = nodes[k].textContent;

//                 for (let l = 0; l < text.length; l++) {
//                     await new Promise((resolve) => {
//                         setTimeout(() => {
//                             typing[k].classList.add('typing-start');
//                             typing[k].textContent += text.charAt(l);
//                             resolve(); // Proceed to the next character after the delay
//                         }, typingSpeed);
//                     });
//                 }

//                 await delay(delayBeforeCaretRemoval);
//                 typing[k].classList.remove('typing-start');
//                 typing[k].classList.add('typing-end');
//             }

//             if (nodes[k].nodeName === 'svg') {
//                 await delay(delayBeforeCaretRemoval);
//                 typing[k].classList.add('flicker-icon');
//                 typing[k].firstChild.classList.add('fade-in-icon');

//                 typing[k].addEventListener('animationend', () => {
//                     typing[k].classList.add('typing-end');
//                 });
//             }

//             if (k === typing.length - 1) {
//                 setWrapperHeight(false);
//             }
//         }
//         resolve();
//     });
// };

// const pageVisible = (x) => {
//     return new Promise((resolve) => {
//         if (x === false) {
//             document.documentElement.style.opacity = 0;
//         } else {
//             document.documentElement.style.opacity = 1;
//         }
//         resolve();
//     });
// };

// pageVisible(false);
// window.onload = () => {
//     // const cookieName = 'pageVisited';
//     // if (!doesCookieExist(cookieName)) {
//         const nodes = [];
//         setWrapperHeight(true)
//             .then(() => createNodeArray(nodes))
//             .then(() => wrapNodesInSpanTagAndApplyTypingClass(nodes))
//             .then(() => pageVisible(true))
//             .then(() => typeTextForTextNodes(nodes));
//     // } else {
//     //     pageVisible(true);
//     //     const flickerImg = document.getElementsByClassName('flicker-img')[0];
//     //     const fadeInImg = document.getElementsByClassName('fade-in-img')[0];

//     //     flickerImg.classList.remove('flicker-img');
//     //     fadeInImg.classList.remove('fade-in-img');
//     // }
//     // const expiryDays = 7; // Number of days until the cookie expires
//     // const date = new Date();
//     // date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
//     // document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
// };

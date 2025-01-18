import pageVisible from "./pageVisible.js";

const doesCookieExist = (cookieName) => {
    return document.cookie
        .split('; ')
        .some((cookie) => cookie.startsWith(`${cookieName}=`));
};

const cookieExists = () => {
    const flickerImg = document.getElementsByClassName('flicker-img')[0];
    const fadeInImg = document.getElementsByClassName('fade-in-img')[0];

    flickerImg.classList.remove('flicker-img');
    fadeInImg.classList.remove('fade-in-img');
};

const cookieExpirationDate = (cookieName) => {
    const expiryDays = 7;
    const date = new Date();
    date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

export default (runFunction) => {
    const cookieName = 'pageVisited';
    if (!doesCookieExist(cookieName)) {
        runFunction();
    } 
    cookieExpirationDate(cookieName);
};

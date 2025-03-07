const doesCookieExist = (cookieName) => {
    return document.cookie
        .split('; ')
        .some((cookie) => cookie.startsWith(`${cookieName}=`));
};

const cookieExpirationDate = (cookieName) => {
    const expiryDays = 7;
    const date = new Date();
    date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

const handleCookieLogic = (runFunction) => {
    const cookieName = 'pageVisited';
    if (!doesCookieExist(cookieName)) {
        runFunction();
    }
    cookieExpirationDate(cookieName);
};

export default handleCookieLogic;

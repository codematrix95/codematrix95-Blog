const isFunctionOrArrayOfFunctions = (x) => {
    switch (typeof x) {
        case 'function':
            x();
            break;
        case 'object':
            x.forEach((e) => {
                e();
            });
            break;
        default:
            break;
    }
};

const onLoad = (x, y) => {
    if (y === undefined) {
        isFunctionOrArrayOfFunctions(x);
    } else {
        y(x);
    }
    window.removeEventListener('load', onLoad);
};

export default onLoad;

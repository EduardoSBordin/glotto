// src/platformUtils.js
export const getPlatform = () => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return "ios";
    } else if (/Android/i.test(navigator.userAgent)) {
        return "android";
    }
    return "other";
};

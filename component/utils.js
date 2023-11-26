// utils.js
export const formatNumber = (numberString) => {
    const firstPart = numberString.slice(0, 4);
    const secondPart = numberString.slice(4, 8);
    const thirdPart = numberString.slice(8, 12);
    const endPart = numberString.slice(12);
    return firstPart + ' ' + secondPart + ' ' + thirdPart + endPart;
  };
  
  export const hideNumbers = (numberString) => {
    const length = numberString.length;
    const hiddenPart = '**** **** ****';
    const visiblePart = numberString.slice(length - 4, length);
    return hiddenPart + visiblePart;
  };
  
  export const hideNumbersCVC = () => {
    const hiddenPart = '****';
    return hiddenPart;
  };
  
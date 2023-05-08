export const detectFirefox = () => {
  if (/Firefox/.test(navigator.userAgent)) {
    // the browser is Firefox
    return true;
  }
  return false;
};

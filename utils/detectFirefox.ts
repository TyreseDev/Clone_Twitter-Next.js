/**
 * This function return boolean that detect if the current browser is using firefox
 */
export const detectFirefox = () => {
  if (/Firefox/.test(navigator.userAgent)) {
    return true;
  }
  return false;
};

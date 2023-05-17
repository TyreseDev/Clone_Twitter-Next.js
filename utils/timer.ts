export const timer = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

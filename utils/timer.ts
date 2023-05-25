/**
 * Simple async timer
 *
 * @param {number} duration The duration in milliseconds to wait before resolving the promise.
 *
 * @returns {promise} Return a promise
 *
 * @example
 * // example 1
 * timer(2000).then(() => {
 *   // code
 * });
 *
 * //example 2
 * const foo async()=>{
 *   await timer(2000)
 *   // code
 * }
 */
export const timer = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

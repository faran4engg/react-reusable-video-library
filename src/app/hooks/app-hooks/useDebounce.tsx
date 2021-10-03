export const useDebounce = (func, delay) => {
  let timeout;
  return function (...args) {
    // @ts-ignore
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
};

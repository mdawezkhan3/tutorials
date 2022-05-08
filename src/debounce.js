const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

btn.addEventListener('click', debounce(function() {
  console.info('HOLA! oppo', new Date().toUTCString());
}, 3000));
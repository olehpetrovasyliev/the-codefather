(() => {
    document.addEventListener('click', ({ target: t }) => {
    if (t.parentNode.classList.contains('catalog-icon')) {
        const catalog = [...document.querySelectorAll('.catalog-icon')];
        const index = [...document.querySelectorAll('.catalog-icon')].indexOf(t.parentNode);
        catalog[index].classList.toggle('active');
  }
});
})();
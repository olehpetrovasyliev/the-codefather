document.addEventListener('click', (event) => {
  const target = event.target;
  const linkHover = target.closest('.link-hover');

  if (linkHover) {
    const catalogIcon = linkHover.querySelector('.catalog-icon');
    catalogIcon.classList.toggle('active');

    if (linkHover.classList.contains('link-hover')) {
      event.preventDefault();
    }
  }
});

document.addEventListener('mouseover', (event) => {
  const target = event.target;
  const catalogIcon = target.closest('.catalog-icon');

  if (catalogIcon) {
    const linkHover = catalogIcon.closest('.link-hover');
    if (linkHover) {
      const link = linkHover.querySelector('a');
      link.removeAttribute('href');
    }
  }
});

document.addEventListener('mouseout', (event) => {
  const target = event.target;
  const catalogIcon = target.closest('.catalog-icon');

  if (catalogIcon) {
    const linkHover = catalogIcon.closest('.link-hover');
    if (linkHover) {
      const link = linkHover.querySelector('a');
      link.setAttribute('href', '#');
    }
  }
  const linkHovers = document.querySelectorAll('.link-hover');
linkHovers.forEach((linkHover) => {
  linkHover.addEventListener('mouseleave', (event) => {
    const target = event.currentTarget;
    target.blur();
  });
});
});

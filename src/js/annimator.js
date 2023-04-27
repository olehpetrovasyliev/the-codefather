const elements = document.querySelectorAll('.my-element');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    element.classList.add('animate');
  } else {
    element.classList.remove('animate');
  }
});

elements.forEz;
observer.observe(element);

const element = document.querySelector('.my-element');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    element.classList.add('animate');
  } else {
    element.classList.remove('animate');
  }
});
observer.observe(element);
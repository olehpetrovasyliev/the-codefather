const elements = document.querySelectorAll('.my-element');
elements.forEach(element => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
  observer.observe(element);
});
const btnElement = document.querySelector('.catalog-button');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    btnElement.classList.add('heartbeat');
  } else {
    btnElement.classList.remove('heartbeat');
  }
});
observer.observe(btnElement);

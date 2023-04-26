window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector("[data-header]");
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffsetY = window.pageYOffset;

  if (pageOffsetY > headerOffsetTrigger) {
    header.classList.add("no-transparency");
  } else {
    header.classList.remove("no-transparency");
  }
}
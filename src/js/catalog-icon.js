(() => {
  document.addEventListener('click', (event) => {
    const { target: t } = event;
    if (t.parentNode.classList.contains('catalog-icon')) {
      const catalog = [...document.querySelectorAll('.catalog-icon')];
      const index = [...document.querySelectorAll('.catalog-icon')].indexOf(t.parentNode);
      catalog[index].classList.toggle('active');
    }
    event.preventDefault();
    event.stopPropagation(); // запобігти поширенню події
  });

  const disableLink = (element) => {
    const nearestLink = element.closest('a');
    if (nearestLink) {
      nearestLink.removeAttribute('href');
      nearestLink.style.pointerEvents = 'none';
    }
  };

  const enableLink = (element) => {
    const nearestLink = element.closest('a');
    if (nearestLink) {
      nearestLink.setAttribute('href', '#');
      nearestLink.style.pointerEvents = 'auto';
    }
  };

  const toggleActive = (element) => {
    const catListLinkWrapper = element.closest('.cat-list-link-wrapper');
    if (catListLinkWrapper && (catListLinkWrapper.matches(':hover') || catListLinkWrapper.matches(':focus'))) {
      element.classList.add('active');
      catListLinkWrapper.querySelector('.cat-list-link').classList.add('active');
    } else {
      element.classList.remove('active');
      element.parentNode.querySelectorAll('a').forEach((a) => enableLink(a));
    }
  };

  document.addEventListener('mouseover', ({ target: t }) => {
    if (t.classList.contains('catalog-icon')) {
      disableLink(t);
    }
  });

  document.addEventListener('mouseout', ({ target: t }) => {
    if (t.classList.contains('catalog-icon')) {
      enableLink(t);
    }
  });

  document.addEventListener('click', ({ target: t, event }) => {
    if (t.classList.contains('active')) {
      t.classList.remove('active');
      enableLink(t);
      t.parentNode.querySelectorAll('a').forEach((a) => enableLink(a));
    } else if (t.classList.contains('catalog-icon')) {
      disableLink(t);
      t.classList.add('active');
      t.parentNode.querySelectorAll('a').forEach((a) => disableLink(a));
    }
    toggleActive(t);
    event.preventDefault();
    event.stopPropagation(); // запобігти поширенню події
  });
   const overflovItems = document.querySelectorAll('li.overflov');

  // Додаємо слухачів подій до цих вузлів
  overflovItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      const overflov = item.querySelector('.overflov');
      overflov.classList.remove('active');
    });
  });
  
})();

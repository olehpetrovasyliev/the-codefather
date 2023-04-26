const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
        keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) { return '0<span class="' + currentClass + '"></span>' + '0<span class="' + totalClass + '"></span>'; }
    },
});
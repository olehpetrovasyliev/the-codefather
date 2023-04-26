const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
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
    }
});
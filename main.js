const links = document.querySelectorAll("nav li");
        const menuBtn = document.querySelector('.fa-bars');
        const nav = document.querySelector('nav');

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        links.forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });

      const trendingSwiper = new Swiper(".trending__swiper", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 50,
      });
      
      const testimonialSwiper = new Swiper(".testimonial__swiper", {
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
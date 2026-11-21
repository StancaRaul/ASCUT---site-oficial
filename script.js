document.addEventListener('DOMContentLoaded', () => {

    // Meniu mobil

    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // Filtru evenimente pe Homepage

    const homeFilterBtns = document.querySelectorAll('#homeEventFilters .pill-btn');
    const homeCards = document.querySelectorAll('#homeEventsContainer .ascut-card');
    if (homeFilterBtns.length && homeCards.length) {
        homeFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                homeFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                homeCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Filtru categorii pe pagina Proiecte

    const projectFilterBtns = document.querySelectorAll('#projectFilters .pill-btn');
    const projectGroups = document.querySelectorAll('.category-group');
    if (projectFilterBtns.length && projectGroups.length) {
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                projectGroups.forEach(group => {
                    if (filter === 'all' || group.dataset.group === filter) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                });
            });
        });
    }

    // Filtru Foto / Video pe pagina Galerie

    const galleryFilterBtns = document.querySelectorAll('#galleryFilters .pill-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryFilterBtns.length && galleryItems.length) {
        galleryFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                galleryFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.media === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Formular Contact

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nume = document.getElementById('nume').value.trim();
            formStatus.textContent = `Mulțumim, ${nume}! Mesajul tău a fost trimis către ASCUT UTCN.`;
            formStatus.style.display = 'block';
            contactForm.reset();
        });
    }

    // Hero Slideshow

    const heroSlideshow = document.getElementById('heroSlideshow');
    if (heroSlideshow) {
        const slides = heroSlideshow.querySelectorAll('.hero-slide');
        const dots = heroSlideshow.querySelectorAll('.hero-dot');
        const prevBtn = document.getElementById('heroPrev');
        const nextBtn = document.getElementById('heroNext');
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            currentSlide = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentSlide);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        };

        const startAutoplay = () => {
            stopAutoplay();
            slideInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        };

        const stopAutoplay = () => {
            if (slideInterval) clearInterval(slideInterval);
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
                startAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
                startAutoplay();
            });
        }

        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.slide, 10);
                showSlide(idx);
                startAutoplay();
            });
        });

        heroSlideshow.addEventListener('mouseenter', stopAutoplay);
        heroSlideshow.addEventListener('mouseleave', startAutoplay);

        startAutoplay();
    }
});
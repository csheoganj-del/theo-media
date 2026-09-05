// THEOMEDIA JAVASCRIPT CORE
document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. INIT LENIS SMOOTH SCROLL (if supported and preferred)
    let lenis = null;
    if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
        try {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: false,
                touchMultiplier: 1.5,
                infinite: false,
            });

            if (typeof ScrollTrigger !== 'undefined') {
                lenis.on('scroll', ScrollTrigger.update);
                gsap.ticker.add((time) => { lenis.raf(time * 1000); });
                gsap.ticker.lagSmoothing(0, 0);
            }
        } catch (err) {
            console.warn('Lenis init fallback:', err);
        }
    }

    // 2. MOBILE NAVIGATION DRAWER
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-btn, .btn-wa-drawer');

    if (mobileMenuBtn && mobileDrawer) {
        const toggleDrawer = (open) => {
            const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
            mobileDrawer.classList.toggle('open', isOpen);
            mobileMenuBtn.classList.toggle('active', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDrawer();
        });

        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleDrawer(false);
            });
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                toggleDrawer(false);
            }
        });
    }

    // 3. HERO ANIMATION
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        const heroTl = gsap.timeline({ delay: 0.2 });
        
        heroTl.fromTo(".huge-brand", 
            { y: -40, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(".huge-brand", 
            { textShadow: "0 0px 0px rgba(0,0,0,0)" },
            { textShadow: "0 15px 40px rgba(0, 0, 0, 0.05)", duration: 0.6, ease: "power2.out" }, 
            "-=0.5"
        )
        .to(".gl-3", { opacity: 1, y: "-3vh", duration: 0.7, ease: "power2.out" }, "-=0.3")
        .to(".gl-2", { opacity: 1, y: "-1vh", duration: 0.7, ease: "power2.out" }, "-=0.5")
        .to(".gl-1", { opacity: 1, y: "1vh", duration: 0.7, ease: "power2.out" }, "-=0.5")
        .fromTo(".hero-content", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
            "+=0.1"
        );
    }

    // 4. PRICING EXPAND / COLLAPSE DETAILS
    document.querySelectorAll(".p-expand-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const hiddenList = this.nextElementSibling;
            if (hiddenList && hiddenList.classList.contains("p-f-hidden")) {
                hiddenList.classList.add("expanded");
                this.style.display = "none";
            }
        });
    });

    // 5. MOBILE PRICING TABS (Sticky Nav)
    const pmnLinks = document.querySelectorAll(".pmn-link");
    pmnLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const topPos = targetEl.getBoundingClientRect().top + window.scrollY - 120;
                if (lenis) {
                    lenis.scrollTo(topPos);
                } else {
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                }
                pmnLinks.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    if (window.innerWidth <= 1024) {
        const pCards = document.querySelectorAll(".p-card");
        window.addEventListener("scroll", () => {
            let current = "";
            pCards.forEach(card => {
                if (card.getBoundingClientRect().top < window.innerHeight / 2) {
                    current = "#" + card.getAttribute("id");
                }
            });
            pmnLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === current) {
                    link.classList.add("active");
                }
            });
        }, { passive: true });
    }

    // 6. TACTILE CONVERSION BUTTONS
    document.querySelectorAll(".tactile-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            if (navigator.vibrate) {
                try { navigator.vibrate(12); } catch (err) {}
            }
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.inOut' });
            }
        });
    });

});

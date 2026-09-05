
// 1. INIT LENIS SMOOTH SCROLL
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0, 0);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 2. HERO ANIMATION
if (!prefersReducedMotion) {
    const heroTl = gsap.timeline({ delay: 0.3 });
    
    // 1. THEOMEDIA enters with weight
    heroTl.fromTo(".huge-brand", 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    // 2. Soft depth shadow appears
    .fromTo(".huge-brand", 
        { textShadow: "0 0px 0px rgba(0,0,0,0)" },
        { textShadow: "0 15px 40px rgba(0, 0, 0, 0.05)", duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
    )
    // 3. Faint white layered screens settle behind
    .to(".gl-3", { opacity: 1, y: "-3vh", duration: 0.8, ease: "power2.out" }, "-=0.4")
    .to(".gl-2", { opacity: 1, y: "-1vh", duration: 0.8, ease: "power2.out" }, "-=0.6")
    .to(".gl-1", { opacity: 1, y: "1vh", duration: 0.8, ease: "power2.out" }, "-=0.6")
    
    // 4. Everything becomes calm, THEN reveal content below
    .fromTo(".hero-content", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
        "+=0.2" // wait a moment after layers settle
    );
} else {
    gsap.set([".huge-brand", ".gl-3", ".gl-2", ".gl-1", ".hero-content"], { opacity: 1 });
}

// 3. PRICING INTERACTIONS
if (!prefersReducedMotion) {
    gsap.fromTo(".pricing-header", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".pricing-section", start: "top 75%" } }
    );
    if (window.innerWidth > 1024) {
        gsap.fromTo(".p-card",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, scrollTrigger: { trigger: ".pricing-cards", start: "top 75%" } }
        );
    } else {
        gsap.utils.toArray(".p-card").forEach(card => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: card, start: "top 80%" } }
            );
        });
    }
}
document.querySelectorAll(".p-expand-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const hiddenList = this.nextElementSibling;
        if (hiddenList && hiddenList.classList.contains("p-f-hidden")) {
            hiddenList.classList.add("expanded");
            this.style.display = "none";
        }
    });
});
document.querySelectorAll(".pmn-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            const topPos = targetEl.getBoundingClientRect().top + window.scrollY - 100;
            lenis.scrollTo(topPos);
            document.querySelectorAll(".pmn-link").forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        }
    });
});
if (window.innerWidth <= 1024) {
    const pCards = document.querySelectorAll(".p-card");
    const pLinks = document.querySelectorAll(".pmn-link");
    window.addEventListener("scroll", () => {
        let current = "";
        pCards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight / 2) current = "#" + card.getAttribute("id");
        });
        pLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === current) link.classList.add("active");
        });
    }, { passive: true });
}

});

// 4. MOBILE SERVICES
if (window.innerWidth <= 1024 && !prefersReducedMotion) {
    gsap.utils.toArray(".m-stage").forEach(stage => {
        gsap.fromTo(stage.querySelector(".m-text"), 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: stage, start: "top 75%" } }
        );
        gsap.fromTo(stage.querySelector(".m-visual"),
            { opacity: 0, scale: 0.95, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: stage, start: "top 75%" } }
        );
    });
    gsap.fromTo(".m-t", { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.1, scrollTrigger: { trigger: ".m-pos", start: "top 50%" }});
    gsap.fromTo(".m-b", { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, stagger: 0.1, scrollTrigger: { trigger: ".m-dash", start: "top 50%" }});
}

// 5. DESKTOP MORPHING SERVICES
if (window.innerWidth > 1024 && !prefersReducedMotion) {
    const morphTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".desktop-services",
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 0.8
        }
    });

    gsap.set(".st-1", { opacity: 1, y: 0, filter: "blur(0px)" });
    gsap.set([".st-2", ".st-3"], { opacity: 0, y: 30, filter: "blur(4px)" });
    gsap.set(".u-side-icons", { opacity: 0 });
    gsap.set([".u-main-pos", ".u-main-dash", ".up-pos", ".up-dash"], { display: "none", opacity: 0 });

    // Web -> POS
    morphTl
        .to(".st-1", { opacity: 0, y: -40, filter: "blur(4px)", duration: 0.6 })
        .to(".u-nav-links", { opacity: 0, duration: 0.2 }, "-=0.6")
        .to(".u-pos-time", { display: "block", opacity: 1, duration: 0.2 }, "-=0.4")
        .to(".u-head-btn", { opacity: 0, duration: 0.2 }, "-=0.6")
        .to(".u-head-user", { display: "block", opacity: 1, duration: 0.3 }, "-=0.4")
        .to(".u-transformer", { width: "80px", height: "100%", top: "60px", zIndex: 11, duration: 0.8, ease: "power3.inOut" }, "-=0.6")
        .to(".u-hero-img", { opacity: 0, duration: 0.2 }, "-=0.8")
        .to(".u-side-icons", { display: "flex", opacity: 1, duration: 0.4 }, "-=0.2")
        .to(".u-main-web", { opacity: 0, y: -20, duration: 0.3 }, "-=0.6")
        .set(".u-main-web", { display: "none" }, "-=0.3")
        .set(".u-main", { left: "80px", width: "calc(100% - 80px)", height: "calc(100% - 60px)" }, "-=0.3")
        .set(".u-main-pos", { display: "flex" }, "-=0.3")
        .fromTo(".u-main-pos", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(".u-panel", { width: "240px", height: "calc(100% - 60px)", borderTop: "none", duration: 0.8, ease: "power3.inOut" }, "-=0.8")
        .to(".up-web", { opacity: 0, duration: 0.2 }, "-=0.8")
        .set(".up-web", { display: "none" }, "-=0.6")
        .set(".up-pos", { display: "flex" }, "-=0.6")
        .fromTo(".up-pos", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.4")
        .to(".st-2", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 })
        .to({}, { duration: 0.2 });

    // POS -> Dash
    morphTl
        .to(".st-2", { opacity: 0, y: -40, filter: "blur(4px)", duration: 0.6 })
        .to(".u-header", { backgroundColor: "#F3EFE5", duration: 0.6 }, "-=0.6")
        .to(".u-transformer", { backgroundColor: "#24372D", width: "70px", duration: 0.6 }, "-=0.6")
        .to(".si", { borderColor: "rgba(255,255,255,0.2)", duration: 0.3 }, "-=0.6")
        .to(".si.active", { backgroundColor: "#344536", borderColor: "#72745A", duration: 0.3 }, "-=0.6")
        .to(".u-main-pos", { opacity: 0, y: -20, duration: 0.3 }, "-=0.6")
        .set(".u-main-pos", { display: "none" }, "-=0.3")
        .set(".u-main", { left: "70px", width: "calc(100% - 70px)" }, "-=0.3")
        .set(".u-main-dash", { display: "flex" }, "-=0.3")
        .fromTo(".u-main-dash", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(".u-panel", { width: "260px", backgroundColor: "white", duration: 0.6 }, "-=0.6")
        .to(".up-pos", { opacity: 0, duration: 0.2 }, "-=0.6")
        .set(".up-pos", { display: "none" }, "-=0.4")
        .set(".up-dash", { display: "flex" }, "-=0.4")
        .fromTo(".up-dash", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.4")
        .fromTo(".umdc-bar", { scaleY: 0, transformOrigin: "bottom" }, { scaleY: 1, stagger: 0.05, duration: 0.4 }, "-=0.2")
        .to(".st-3", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 }, "-=0.2");
}


// 6. FINAL CTA INK FILL
if (document.querySelector(".final-cta")) {
    const finalTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".final-cta",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });

    finalTl.to(".ink-mask", { scale: 50, duration: 1 })
           .to(".cta-content", { opacity: 1, pointerEvents: "auto", duration: 0.2 }, "-=0.2");
}


// TACTILE CONVERSION BUTTONS
document.querySelectorAll(".tactile-btn, .btn-pricing, .btn-primary, .fc-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        // Only intercept standard link clicks
        if (this.tagName === 'A' && this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = this.getAttribute('target');
            
            // Vibrate immediately
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
            
            // Compression animation
            gsap.to(this, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => {
                if (target === "_blank") {
                    window.open(href, '_blank');
                } else {
                    window.location.href = href;
                }
            }});
            
            // Arrow nudge if it has an arrow character (like &rarr;)
            if (this.innerHTML.includes('→') || this.innerHTML.includes('&rarr;')) {
                // Just let the whole button compress, it's elegant enough without complex DOM parsing
            }
        } else if (this.tagName === 'A' && this.getAttribute('href').startsWith('#')) {
            // It's a jump link, just vibrate
            if (navigator.vibrate) navigator.vibrate(10);
        }
    });
});

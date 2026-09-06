// THEOMEDIA JAVASCRIPT CORE
document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Native scrolling works with browser anchors, keyboard and reduced motion.
    const lenis = null;

    // Helper for smooth scroll
    const scrollToTarget = (targetId) => {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            const topPos = targetEl.getBoundingClientRect().top + window.scrollY - 80;
            if (lenis) {
                lenis.scrollTo(topPos);
            } else {
                window.scrollTo({ top: topPos, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
            }
        }
    };

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
            mobileDrawer.inert = !isOpen;
            const mainEl = document.querySelector('main');
            if (mainEl) mainEl.inert = isOpen;
            const footerEl = document.querySelector('footer');
            if (footerEl) footerEl.inert = isOpen;
            const fcEl = document.querySelector('.fc-wrapper');
            if (fcEl) fcEl.inert = isOpen;
            if (lenis) isOpen ? lenis.stop() : lenis.start();
            if (isOpen) mobileDrawer.querySelector('a').focus();
            else mobileMenuBtn.focus();
        };

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDrawer();
        });

        drawerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    toggleDrawer(false);
                    setTimeout(() => {
                        scrollToTarget(href);
                    }, 300);
                } else {
                    toggleDrawer(false);
                }
            });
        });

        window.matchMedia('(min-width: 769px)').addEventListener('change', e => {
            if (e.matches) toggleDrawer(false);
        });
        document.addEventListener('keydown', e => {
            if (e.key !== 'Tab' || !mobileDrawer.classList.contains('open')) return;
            const links = [...mobileDrawer.querySelectorAll('a[href]')];
            const first = links[0], last = links[links.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); mobileMenuBtn.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); mobileMenuBtn.focus();
            } else if (document.activeElement === mobileMenuBtn) {
                e.preventDefault(); (e.shiftKey ? last : first).focus();
            }
        });
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                toggleDrawer(false);
            }
        });
    }

    // Keep essential content visible; decorative motion never controls the message.
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.fromTo('.huge-brand .char', { y: '15%' }, {
            y: '0%', duration: 0.7, stagger: 0.035, ease: 'power3.out',
            clearProps: 'transform'
        });
    }

    // 4. PRICING EXPAND / COLLAPSE DETAILS
    document.querySelectorAll(".p-expand-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const hiddenList = this.nextElementSibling;
            if (hiddenList && hiddenList.classList.contains("p-f-hidden")) {
                const expanded = hiddenList.classList.toggle("expanded");
                this.setAttribute('aria-expanded', String(expanded));
                this.textContent = expanded ? 'SHOW FEWER DETAILS −' : 'VIEW EVERYTHING INCLUDED +';
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
                    window.scrollTo({ top: topPos, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
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

    // 6. SELECT PACKAGE SHORTCUT
    document.querySelectorAll(".select-pkg-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const pkgName = this.getAttribute("data-package");
            const pkgSelect = document.getElementById("cPackage");
            if (pkgSelect && pkgName) {
                for (let option of pkgSelect.options) {
                    if (option.value.includes(pkgName.split(" ")[0]) || option.text.includes(pkgName.split(" ")[0])) {
                        pkgSelect.value = option.value;
                        break;
                    }
                }
            }
            scrollToTarget("#contact");
            const nameInput = document.getElementById("cName");
            if (nameInput) setTimeout(() => nameInput.focus({ preventScroll: true }), 600);
        });
    });

    // 7. FAQ ACCORDION INTERACTION
    document.querySelectorAll(".faq-question").forEach(questionBtn => {
        questionBtn.addEventListener("click", function() {
            const item = this.parentElement;
            const isOpen = item.classList.contains("active");

            // Close other accordion items
            document.querySelectorAll(".faq-item").forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                    const btn = other.querySelector(".faq-question");
                    if (btn) btn.setAttribute("aria-expanded", "false");
                }
            });

            // Toggle clicked item
            item.classList.toggle("active", !isOpen);
            this.setAttribute("aria-expanded", String(!isOpen));
        });
    });

    // 8. INQUIRY FORM SUBMISSION HANDLER
    const inquiryForm = document.getElementById('inquiryForm');
    const formFeedback = document.getElementById('formFeedback');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('cName').value.trim();
            const email = document.getElementById('cEmail').value.trim();
            const pkg = document.getElementById('cPackage').value;
            const message = document.getElementById('cMessage').value.trim();

            const subject = encodeURIComponent(`New Project Enquiry: ${pkg} — ${name}`);
            const body = encodeURIComponent(
                `Hi TheoMedia,\n\nI would like to start a project with TheoMedia.\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Selected Package: ${pkg}\n\n` +
                `Project Details:\n${message}\n\n` +
                `Best regards,\n${name}`
            );

            // Open prefilled email client
            const mailtoUrl = `mailto:hello@theomedia.co.uk?subject=${subject}&body=${body}`;
            window.location.href = mailtoUrl;

            // Show confirmation in form
            if (formFeedback) {
                formFeedback.innerHTML = `✓ Opening your email client to send your enquiry to <strong>hello@theomedia.co.uk</strong>. If your email client did not open, you can also reach us directly via <a href="https://wa.me/353852258004" target="_blank" style="text-decoration:underline;">WhatsApp</a>.`;
                formFeedback.className = 'form-feedback success';
            }
        });
    }

    // 9. TACTILE BUTTONS FEEDBACK
    document.querySelectorAll(".tactile-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            if (navigator.vibrate) {
                try { navigator.vibrate(12); } catch (err) {}
            }
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.to(this, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.inOut' });
            }
        });
    });

});

/* =================================
   YV ALGO — JAVASCRIPT
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
       Current Year
    ----------------------------- */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* -----------------------------
       Header Scroll Effect
    ----------------------------- */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    /* -----------------------------
       Smooth Anchor Navigation
    ----------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});

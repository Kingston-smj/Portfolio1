(function () {
    "use strict";

    const dialog = document.getElementById("project-dialog");
    const frame = dialog.querySelector(".dialog-media");
    const title = dialog.querySelector(".dialog-title");
    const close = dialog.querySelector(".dialog-close");

    const triggers = document.querySelectorAll(".project-trigger");
    triggers.forEach(btn => {
        btn.addEventListener("click", () => {
            title.textContent = btn.getAttribute("data-project");
            frame.src = btn.getAttribute("data-animation");
            frame.alt = `Animated preview of ${btn.getAttribute("data-project")}`;
            if (typeof dialog.showModal === "function") {
                dialog.showModal();
            } else {
                dialog.setAttribute("open", "");
            }
        });
    });

    close.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        frame.src = "";
    });
})();

(function () {
    "use strict";

    const photoDialog = document.getElementById("photo-dialog");
    const photoImg = photoDialog.querySelector(".dialog-media");
    const photoClose = photoDialog.querySelector(".dialog-close");

    document.querySelectorAll(".photo-strip img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            photoImg.src = img.src;
            photoImg.alt = img.alt;
            photoDialog.showModal ? photoDialog.showModal() : photoDialog.setAttribute("open", "");
        });
    });

    photoClose.addEventListener("click", () => photoDialog.close());

    photoDialog.addEventListener("click", (e) => {
        if (e.target === photoDialog) photoDialog.close();
    });

    photoDialog.addEventListener("close", () => {
        photoImg.src = "";
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            
            const spans = menuToggle.querySelectorAll('span');
            if (isActive) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});
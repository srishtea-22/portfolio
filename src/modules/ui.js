export function animateOnLoad(selector) {
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.querySelectorAll(selector).forEach((letter, index) => {
                letter.style.transitionDelay = `${index * 0.2}s`; 
                letter.classList.add("show");
            });
        }, 100);
    });
}

export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        };
    });
});

let lastScrollTop = 0;

export const projectObserver = new IntersectionObserver((entries) => {
    let currentScrollTop = window.scrollY;

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
        } else if (currentScrollTop < lastScrollTop) {
            entry.target.classList.add("hide");
        }
    });

    lastScrollTop = currentScrollTop;
});

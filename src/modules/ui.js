export function animateOnLoad(selector){
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.querySelectorAll(selector).forEach(letter => {
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
        }
    }) 
})
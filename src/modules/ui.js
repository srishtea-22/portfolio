export function animateOnLoad(selector){
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.querySelectorAll(selector).forEach(letter => {
                letter.classList.add("show");
            });
        }, 100);
    });
}
const faders = document.querySelectorAll(".fade-section");

function showOnScroll() {
    faders.forEach(block => {
        const pos = block.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            block.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

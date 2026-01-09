/* Fade-in on scroll */
const faders = document.querySelectorAll(".fade-section");
function showSections() {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);

/* Scroll progress indicator */
const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
    const height = document.body.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / height) * 100;
    progress.style.height = scrolled + "%";
});



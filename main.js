var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Programmer", "Problem Solver"],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
});



/* Certifications Slider */
let certIndex = 0;

const track = document.querySelector(".cert-track");
const cards = document.querySelectorAll(".cert-card");
const leftBtn = document.querySelector(".cert-btn.left");
const rightBtn = document.querySelector(".cert-btn.right");

function updateCertSlider() {
  const wrapperWidth = document.querySelector(".cert-wrapper").offsetWidth;
  track.style.transform = `translateX(${-certIndex * wrapperWidth}px)`;

  // Disable / Enable Buttons
  leftBtn.disabled = certIndex === 0;
  rightBtn.disabled = certIndex === cards.length - 1;

  // Optional dim effect when disabled
  leftBtn.style.opacity = leftBtn.disabled ? "0.4" : "1";
  rightBtn.style.opacity = rightBtn.disabled ? "0.4" : "1";
}

function nextCert() {
  if (certIndex < cards.length - 1) {
    certIndex++;
    updateCertSlider();
  }
}

function prevCert() {
  if (certIndex > 0) {
    certIndex--;
    updateCertSlider();
  }
}

// Adjust on resize
window.addEventListener("resize", updateCertSlider);

// Initialize state correctly
updateCertSlider();

var typed = new Typed(".text", {
    strings: ["Software Developer", "Problem Solver", "AI Automation Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
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







//Contact me section
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const whatsappMessage =
`*New Portfolio Inquiry*

 Name: ${name}
 Email: ${email}
 Phone: ${phone}

 Subject: ${subject}

 Message:
${message}`;

      const whatsappURL =
        `https://wa.me/919508314532?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, "_blank");

      form.reset();
    });
  }
});
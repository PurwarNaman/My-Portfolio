const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("active");
  } else {
    scrollToTopBtn.classList.remove("active");
  }
});

scrollToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const sections = document.querySelectorAll("section");
const navLinks2 = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks2.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

const animateElements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  animateElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("load", () => {
  checkScroll();
});

window.addEventListener("scroll", () => {
  checkScroll();
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted:", { name, email, subject, message });

    contactForm.reset();

    alert("Message sent successfully!");
  });
}

const newsletterForm = document.querySelector(".footer-newsletter form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    console.log("Newsletter subscription:", email);

    newsletterForm.reset();

    alert("Subscribed successfully!");
  });
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "10px 0";
    header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
  } else {
    header.style.padding = "20px 0";
    header.style.backgroundColor = "rgba(10, 10, 10, 0.9)";
  }
});

const skillSections = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.value;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillSections.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    showProgress();
  }
});

// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Smooth scroll for Explore button
const exploreBtn = document.querySelector(".btn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

function showSections() {
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0px)";
        }
    });
}


window.addEventListener("scroll", showSections);

// Initial state (hidden)
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.7s ease";
});

showSections();


document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.querySelector(".hamburguer");
    const navLinks = document.querySelector(".nav-links");

    if (hamburguer && navLinks) {
        hamburguer.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
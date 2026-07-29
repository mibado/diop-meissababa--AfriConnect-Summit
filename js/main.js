// ===============================
// CHANGEMENT DE THEME
// ===============================

const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = themeBtn.querySelector("i");

// Charger le thème enregistré
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
        icon.classList.remove("bi-moon-stars");
        icon.classList.add("bi-sun");
    }
}

themeBtn.addEventListener("click", () => {

    let currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "light") {

        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

        icon.classList.remove("bi-moon-stars");
        icon.classList.add("bi-sun");

    } else {

        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");

        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon-stars");
    }

});


// ===============================
// FILTRE DES INTERVENANTS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active le bouton sélectionné
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        speakerCards.forEach(card => {

            if (category === "all" || card.dataset.category === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// ANNEE AUTOMATIQUE FOOTER
// ===============================

document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// BOUTON RETOUR EN HAUT
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


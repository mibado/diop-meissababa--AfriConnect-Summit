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

// =========================
// FORMULAIRE CONTACT
// =========================

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();


        // Récupération des valeurs

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const type = document.getElementById("type");
        const country = document.getElementById("country");
        const message = document.getElementById("message");


        let isValid = true;



        // Fonction erreur

        function showError(input, text){

            const error = input.parentElement.querySelector(".error");

            error.textContent = text;

            input.style.border = "1px solid red";

            isValid = false;

        }



        // Fonction supprimer erreur

        function removeError(input){

            const error = input.parentElement.querySelector(".error");

            if(error){

                error.textContent = "";

            }

            input.style.border = "1px solid transparent";

        }



        // Vérification nom

        if(name.value.trim() === ""){

            showError(name,"Veuillez entrer votre nom.");

        }else{

            removeError(name);

        }



        // Vérification email

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(email.value.trim()===""){

            showError(email,"Veuillez entrer votre email.");

        }

        else if(!emailRegex.test(email.value)){

            showError(email,"Email invalide.");

        }

        else{

            removeError(email);

        }




        // Téléphone

        if(phone.value.trim()===""){

            showError(phone,"Veuillez entrer votre téléphone.");

        }

        else if(phone.value.length < 8){

            showError(phone,"Numéro trop court.");

        }

        else{

            removeError(phone);

        }





        // Message

        if(message.value.trim()===""){

            showError(message,"Veuillez écrire un message.");

        }

        else{

            removeError(message);

        }





        // Validation finale

        if(isValid){


            const success = document.getElementById("successMsg");


            success.textContent =
            "✅ Votre inscription a été envoyée avec succès !";


            success.style.color = "green";

            success.style.fontWeight = "bold";



            // vider formulaire

            form.reset();



            // disparition message après 5 secondes

            setTimeout(()=>{

                success.textContent="";

            },5000);


        }


    });


}


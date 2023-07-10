/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
import 'bootstrap';

import $ from 'jquery';
import Popper from '@popperjs/core';

// Maintenant, vous pouvez utiliser jQuery et Popper.js
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    placement: 'right',
    container: 'body'
  });
});


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["CROISSANCE", "BUSINESS", "NOTORIÉTÉ"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Changement de couleur du logo au défilement
window.addEventListener('scroll', function() {
    // Récupérer la position actuelle du défilement
    var scrollPosition = window.scrollY;

    // Récupérer la hauteur de la fenêtre de visualisation
    var viewportHeight = window.innerHeight;

    // Vérifier si la position actuelle du défilement est supérieure à 108% de la hauteur de la fenêtre de visualisation
    if ((scrollPosition > viewportHeight * 0.15) && (scrollPosition < viewportHeight * 0.94)) {

        document.querySelector('.logo_nav').style.backgroundColor = 'rgba(245, 245, 245, 0.4)';
    } else if (scrollPosition > viewportHeight * 0.95) {
        // Changer l'image du logo en blanc
        document.querySelector('.logo_nav').style.backgroundColor = 'rgba(245, 245, 245, 0.8)';
        document.querySelector('.logo_nav .logo').style.filter = 'invert(100%)';
    } else {
        // Réinitialiser l'image du logo à son état original
        document.querySelector('.logo_nav').style.backgroundColor = 'transparent';
        document.querySelector('.logo_nav .logo').style.filter = '';
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
      var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
      myModal.show();
    }, 5000); // 5000 milliseconds = 5 seconds
  });


  
// FORMULAIRE
// Récupérer le formulaire
var form = document.getElementById('contact_form');

// Ajouter un écouteur d'événements pour la soumission du formulaire
form.addEventListener('submit', function(event) {
  // Empêcher le comportement de soumission par défaut
  event.preventDefault();

  // Envoyer le formulaire au serveur
  var formData = new FormData(form);
  var request = new XMLHttpRequest();
  request.open('POST', form.action);

  // Lorsque la requête est terminée
  request.onload = function() {
    if (request.status === 200) {
      // Afficher le pop-up de succès uniquement si la requête a réussi
      var successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      
      // Réinitialiser le formulaire (facultatif)
      form.reset();
    } else {
      // Gérer les erreurs ou afficher un message d'erreur
      console.error('Une erreur s\'est produite lors de l\'enregistrement des données.');
    }
  };

  // Envoyer la requête avec les données du formulaire
  request.send(formData);
});

//COOKIES

import 'cookieconsent/build/cookieconsent.min.css';
import cookieconsent from 'cookieconsent';

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#000"
            },
            "button": {
                "background": "#f1d600"
            }
        },
        "position": "bottom-right",
        "content": {
            "message": "Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.",
            "dismiss": "Compris !",
            "link": "En savoir plus"
        }
    });
});

  



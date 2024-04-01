const conteneurMessage = document.getElementById('message-erreur');

function verificationMdp(mot_de_passe) {
    const lettres_maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettres_min = "abcdefghijklmnopqrstuvwxyz";
    const caracteres_speciaux = "!@#$%^&*()_+{}[]|\\;:'\"<>,.?/";
    const nombres = "0123456789";

    const errors = [];

    if (mot_de_passe.length < 8) {
        errors.push("Le mot de passe doit contenir au moins 8 caractères.");
    }
    if (!mot_de_passe.split('').some(caractere => lettres_maj.includes(caractere))) {
        errors.push("Le mot de passe doit contenir des majuscules.");
    }
    if (!mot_de_passe.split('').some(caractere => lettres_min.includes(caractere))) {
        errors.push("Le mot de passe doit contenir des minuscules.");
    }
    if (!mot_de_passe.split('').some(caractere => caracteres_speciaux.includes(caractere))) {
        errors.push("Le mot de passe doit contenir des caractères spéciaux.");
    }
    if (!mot_de_passe.split('').some(caractere => nombres.includes(caractere))) {
        errors.push("Le mot de passe doit contenir au moins un chiffre.");
    }

    return errors;
}

function verifEmail(email) {
    // Expression régulière pour valider le format de l'email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = [];
    
    // Vérifie si l'email correspond au format requis
    if (!regexEmail.test(email)) {
        errors.push("Veuillez saisir une adresse email valide.");
    }

    return errors;
}

function connexion() {
    // gestion d'événement pour le mot de passe
    document.getElementById('mdp').addEventListener('input', function() {
        const motDePasse = this.value;
        const errorsMdp = verificationMdp(motDePasse);
    
        // Supprimer les messages d'erreur précédents
        conteneurMessage.innerHTML = '';
    
        errorsMdp.forEach(error => {
            const span = document.createElement('span');
            span.textContent = error;
            conteneurMessage.appendChild(span);
        });
    });

    // gestion d'événement pour l'email
    document.getElementById('email').addEventListener('input', function() {
        const email = this.value;
        const errorsEmail = verifEmail(email);
    
        // Supprimer les messages d'erreur précédents
        conteneurMessage.innerHTML = '';
    
        errorsEmail.forEach(error => {
            const span = document.createElement('span');
            span.textContent = error;
            conteneurMessage.appendChild(span);
        });
    });
}

function inscription() {
    const errors = [];

    if (nom.length < 3) {
        errors.push("Le nom doit contenir au moins 3 caractères.");
    }

    if (prenom.length < 3){
        errors.push("Le prenom doit contenir au moins 3 caractères.");
    }

    if (adresse.length < 6){
        errors.push("L'adresse doit contenir au moins 6 caractères.");
    }

    if (cdp.length === 5){
        errors.push("Le code postal n'est pas valide.");
    }
    return errors;
}

const mdp = document.getElementById('mdpinscription')
const mdpconfirm = document.getElementById('mdpconfirm')
if (mdpconfirm===mdp && verificationMdp(mdp))


connexion();
inscription();
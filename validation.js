document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('Form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var isValid = validateForm();
        if (isValid) {
            alert('Formulaire soumis avec succès');
            // Vous pouvez envoyer le formulaire ici si nécessaire
            // form.submit();
        }
    });

    function validateForm() {
        var prenom = document.getElementById('prenom').value;
        var nom = document.getElementById('nom').value;
        var email = document.getElementById('email').value;
        var mot_de_passe = document.getElementById('mot_de_passe').value;

        var prenomError = document.getElementById('prenomError');
        var nomError = document.getElementById('nomError');
        var emailError = document.getElementById('emailError');
        var mot_de_passeError = document.getElementById('mot_de_passeError');

        var isValid = true;

        // Validation du prenom
        if (prenom.trim() === '') {
            prenomError.textContent = 'Le prenom est requis';
            isValid = false;
        } else {
            prenomError.textContent = '';
        }

        // Validation du nom
        if (nom.trim() === '') {
            nomError.textContent = 'Le nom est requis';
            isValid = false;
        } else {
            nomError.textContent = '';
        }

        // Validation de l'email
        if (email.trim() === '') {
            emailError.textContent = 'L\'email est requis';
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'L\'email n\'est pas valide';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validation du mot de passe
        if (mot_de_passe.trim() === '') {
            mot_de_passeError.textContent = 'Le mot de passe est requis';
            isValid = false;
        }  else {
            mot_de_passeError.textContent = '';
        }

        return isValid;
    }

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

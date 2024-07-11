

document.getElementById('form').addEventListener("submit" , function(e) {

    e.preventDefault();

        // Récupération des valeurs des champs
        const prenom = document.getElementById('prenom').value.trim();
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('mdp').value.trim();

        // Réinitialisation des messages d'erreur
        document.getElementById('prenomError').textContent = '';
        document.getElementById('nomError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('mdpError').textContent = '';
        document.getElementById('message').textContent = '';
        document.getElementById('message').classList.add('hidden');

        // Définition des regex et des critères de longueur
        const prenomRegex = /^[a-zA-Z]{3,15}$/;  // Entre 3 et 15 caractères alphabétiques
        const nomRegex = /^[a-zA-Z]{3,15}$/;  // Entre 3 et 15 caractères alphabétiques
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Format email
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;  // Mot de passe

        let isValid = true;

        // Validation des champs vides
        if (!prenom) {
            document.getElementById('prenomError').textContent = 'Le prenom est requis.';
            isValid = false;
        } else if (!nomRegex.test(nom)) {
            document.getElementById('prenomError').textContent = 'Le prenom doit contenir entre 3 et 15 caractères alphabétiques.';
            isValid = false;
        }
        if (!nom) {
            document.getElementById('nomError').textContent = 'Le nom est requis.';
            isValid = false;
        } else if (!nomRegex.test(nom)) {
            document.getElementById('nomError').textContent = 'Le nom doit contenir entre 3 et 15 caractères alphabétiques.';
            isValid = false;
        }

        if (!email) {
            document.getElementById('emailError').textContent = 'L\'email est requis.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'L\'email n\'est pas valide.';
            isValid = false;
        }

        if (!mdp) {
            document.getElementById('mdpError').textContent = 'Le mot de passe est requis.';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            document.getElementById('mdpError').textContent = 'Le mot de passe doit contenir entre 8 et 20 caractères, incluant au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.';
            isValid = false;
        }

        // Si toutes les validations passent
        if (isValid) {
            document.getElementById('message').textContent = "Formulaire validé avec succès!";
            document.getElementById('message').classList.remove('hidden');
            form.classList.add('hidden');  // Masquer le formulaire
        }
    });


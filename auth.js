document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Empêche le rechargement de la page après la soumission du formulaire

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Liste des identifiants et mots de passe autorisés
    const validUsers = {
        "GYCSRY3V": "00JR",
        "TH5X5FLD": "3MQ9",
        "TAKSMHN4": "41UE",
        "Z56ER267": "4DJR"
    };

    // Vérification des identifiants
    if (validUsers[username] && validUsers[username] === password) {
        alert("Connexion réussie !");
        window.location.href = "bonjour.html";  // Redirige vers la page "Bonjour"
    } else {
        alert("Identifiant ou mot de passe incorrect.");  // Message d'erreur en cas d'échec
    }
});

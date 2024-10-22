// functions/auth.js

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const { username, password } = body;

    // Liste des utilisateurs et mots de passe autorisés
    const users = {
        "GYCSRY3V": "00JR",
        "TH5X5FLD": "3MQ9",
        "TAKSMHN4": "41UE",
        "Z56ER267": "4DJR"
   };

    // Vérification des identifiants et redirection
    if (validUsers[username] && validUsers[username] === password) {
        alert("Connexion réussie !");
        window.location.href = "bonjour.html";  // Redirection vers la page "Bonjour"
    } else {
        alert("Identifiant ou mot de passe incorrect.");
    }
});

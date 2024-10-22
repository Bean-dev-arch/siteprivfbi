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

    if (users[username] && users[username] === password) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false }),
        };
    }
};


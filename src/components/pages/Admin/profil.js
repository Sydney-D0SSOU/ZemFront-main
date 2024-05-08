import React, { useState, useEffect } from 'react';

function Dashboard() {
    // État local pour stocker les informations de l'utilisateur
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Récupérer les données de l'utilisateur depuis le sessionStorage
        const storedUserInfo = sessionStorage.getItem('user');
        
        // Vérifier si des données sont présentes dans le sessionStorage
        if (storedUserInfo) {
            // Si des données sont présentes, les convertir en objet JavaScript
            const parsedUserInfo = JSON.parse(storedUserInfo);
            // Mettre à jour l'état local avec les informations de l'utilisateur
            setUserInfo(parsedUserInfo.user);
        }
    }, []); // Le tableau vide assure que ce code ne s'exécute qu'une seule fois lors du chargement du composant

    return (
        <div>
            <h1>Informations de l'utilisateur :</h1>
            {userInfo ? (
                <div>
                    <p>Nom : {userInfo.nom}</p>
                    <p>Prénom : {userInfo.prenom}</p>
                    <p>Email : {userInfo.email}</p>
                    <p>Type d'utilisateur : {userInfo.type_utilisateur}</p>
                    {/* Ajoutez d'autres champs ici si nécessaire */}
                </div>
            ) : (
                <p>Aucune information sur l'utilisateur n'a été trouvée.</p>
            )}
        </div>
    );
}

export default Dashboard;

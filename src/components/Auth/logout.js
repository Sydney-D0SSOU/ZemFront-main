import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Supprimer les données utilisateur du sessionStorage
        sessionStorage.removeItem('user');
        // Rediriger l'utilisateur vers la page de connexion
        history.push('/connecter');
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
};

import React, { useState, useEffect } from 'react';
import { MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuListComposition from './DropDown';
import Swal from 'sweetalert2';
import MenuAd from './MenuAd';

function FirstPart() {
    return (
       React.createElement(MenuAd,null)
    );
}

function ScndPart() {
    const isMobile = useMediaQuery('(max-width:700px)');
    const [isLoggedIn] = useState(true); // Assume que l'utilisateur est connecté

   
    const handleLogout = () => {
        // Supprimer les données utilisateur du sessionStorage
        sessionStorage.removeItem('user');
        // Effectuer d'autres opérations de déconnexion si nécessaire
        Swal.fire({
            icon: 'success',
            title: 'Déconnexion réussie',
            showConfirmButton: false,
            timer: 1500
        });
      };
      

    return (
        <div className={`absolute bg-[#1F1F1F] top-0 border-[#3B3B3B] border-b-2  h-[20%] ${isMobile ? 'left-[0] w-full ' : 'left-[18%] w-[82%] '}`} style={{ backgroundColor: '#333333' }}>
            <div className={`font-bold text-lg absolute top-[50px] text-white ${isMobile ? 'left-[20%]' : 'left-[15%]'}`}>Dashboard</div>
            {isMobile && isLoggedIn && <MenuListComposition />}
            <TextField
                size="small"
                variant="filled"
                label="Rechercher un Zem"
                placeholder="Entez son Identifiant"
                InputProps={{ style: { backgroundColor: 'pink', color: 'white' } }} // Change la couleur de fond et de texte de la barre de recherche
                className={`absolute ${isMobile ? 'left-[45%] top-[0px]' : 'left-[50%] top-[30px]'}`}
            />
           <AccountCircleIcon
                fontSize="large"
                style={{ color: 'blue', cursor: 'pointer' }}
                className={`absolute top-[36px] ${isMobile ? 'left-[90%]' : 'left-[90%]'}`}
                onClick={handleLogout} // Ajoute la fonction pour se déconnecter au clic
            />
        </div>
    );
}


function AddSoAdmin() {
    const isMobile = useMediaQuery('(max-width:700px)');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        numero_plaque: '',
        user_type_id: '',
    });
    const [userTypes, setUserTypes] = useState([]);

    useEffect(() => {
        fetchUserTypes();
    }, []);

    const fetchUserTypes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user-types');
            setUserTypes(response.data);
        } catch (error) {
            console.error('Error fetching user types:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/users', formData);
            console.log('Sous-administrateur ajouté avec succès');
            // Afficher une alerte de succès avec SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Sous-administrateur ajouté avec succès',
                showConfirmButton: false,
                timer: 1500
            });
            // Réinitialiser le formulaire après soumission
            setFormData({
                name: '',
                email: '',
                contact: '',
                password: '',
                numero_plaque: '',
                user_type_id: '',
            });
        } catch (error) {
            console.error('Error adding sous-administrator:', error);
            // Afficher une alerte d'erreur avec SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Erreur lors de l\'ajout du sous-administrateur',
                text: error.message
            });
        }
    };

    return (
        <div className='bg-[#1F1F1F]'>
            {!isMobile && <FirstPart />}
            <div className="flex flex-col w-full">
                <ScndPart />
                <div className="flex-grow">
                    <div className={`overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[18%]'}`}>
                        <div className={`font-bold text-lg text-white p-4 ${isMobile ? 'text-center' : 'text-left'}`}>Ajouter un sous-administrateur</div>
                        <form onSubmit={handleSubmit} className="p-4">
                            <TextField
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                size="small"
                                variant="filled"
                                label="Nom"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            />
                            <TextField
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                size="small"
                                variant="filled"
                                label="Email"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            />
                            <TextField
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                size="small"
                                variant="filled"
                                label="Contact"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            />
                            <TextField
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                type="password"
                                size="small"
                                variant="filled"
                                label="Mot de passe"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            />
                            <TextField
                                name="numero_plaque"
                                value={formData.numero_plaque}
                                onChange={handleInputChange}
                                size="small"
                                variant="filled"
                                label="Numéro de plaque"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            />
                            <TextField
                                select
                                name="user_type_id"
                                value={formData.user_type_id}
                                onChange={handleInputChange}
                                size="small"
                                variant="filled"
                                label="Type d'utilisateur"
                                fullWidth
                                className="mb-2"
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                            >
                                <MenuItem value="">Sélectionnez un type d'utilisateur</MenuItem>
                                {userTypes.map(userType => (
                                    <MenuItem key={userType.id} value={userType.id}>{userType.libelle}</MenuItem>
                                ))}
                            </TextField>
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800 ml-4">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSoAdmin;

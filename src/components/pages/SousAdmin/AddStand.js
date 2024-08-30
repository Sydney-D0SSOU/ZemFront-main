import { useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import logo from "../../Images/lg.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuListComposition from '../../DropDown';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../../Auth/AuthContext';
import MenuSousAd from './MenuSousAd';
function FirstPart() {
    return (
        React.createElement(MenuSousAd,null)
    );
}

function ScndPart() {
    const isMobile = useMediaQuery('(max-width:700px)');

    return (
        <div className={`absolute bg-[#1F1F1F] top-0 border-[#3B3B3B] border-b-2  h-[20%] ${isMobile ? 'left-[0] w-full ' : 'left-[18%] w-[82%] '}`} style={{ backgroundColor: '#333333' }}>
            <div className={`font-bold text-lg absolute top-[50px] text-white ${isMobile ? 'left-[20%]' : 'left-[15%]'}`}>Dashboard</div>
            {isMobile && <MenuListComposition />}
            <TextField
                size="small"
                variant="filled"
                label="Rechercher un Zem"
                placeholder="Entez son Identifiant"
                InputProps={{ style: { backgroundColor: 'pink', color: 'white' } }}
                className={`absolute ${isMobile ? 'left-[45%] top-[0px]' : 'left-[50%] top-[30px]'}`}
            />
            <AccountCircleIcon
                fontSize="large"
                style={{ color: 'blue', cursor: 'pointer' }}
                className={`absolute top-[36px] ${isMobile ? 'left-[90%]' : 'left-[90%]'}`}
            />
        </div>
    );
}



function ThirdPart() {
    const isMobile = useMediaQuery('(max-width:700px)');
    
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        mot_de_passe: '',
        mot_de_passe_confirmation: '',
        nom_stand: '',
        emplacement: '',
        ID_utilisateur: 2,
        ID_sous_administrateur: userData ? userData.sous_administrateur.id  : '' ,
        quartier_id: ''
    });
    const [quartiers, setQuartiers] = useState([]);

    useEffect(() => {
        const storedUserData = JSON.parse(sessionStorage.getItem('user'));
        if (storedUserData) {
            setUserData(storedUserData.user);
        }
        fetchQuartiers();
    }, []);

    const fetchQuartiers = async () => {
        try {
            const response = await fetch('https://emploipourtous.africa/api/quartiers');
    
            if (!response.ok) {
                throw new Error('Une erreur s\'est produite lors de la récupération des quartiers');
            }
            
            
    
            const data = await response.json();
            setQuartiers(data.quartiers);
        } catch (error) {
            console.error(error);
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
            const response = await fetch('https://emploipourtous.africa/api/stands', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    ID_sous_administrateur:userData ? userData.sous_administrateur.id  : '',
                }),
            });
            if (!response.ok) {
                throw new Error('Une erreur s\'est produite lors de l\'ajout du stand');
            }
            const responseData = await response.json();
            console.log('Réponse de l\'API:', responseData);
            // Si la réponse est correcte, réinitialisez le formulaire et affichez un message de succès
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                mot_de_passe: '',
                mot_de_passe_confirmation: '',
                nom_stand: '',
                emplacement: '',
                ID_sous_administrateur:'' ,
                quartier_id: '',
                ID_utilisateur: 2,
            });
    
            console.log('Stand ajouté avec succès');
        } catch (error) {
            console.error(error);
            // Afficher une erreur si la requête échoue
            alert('Une erreur s\'est produite lors de l\'ajout du stand. Veuillez réessayer.');
        }
    };
    
    

    return (
        <div className={`absolute top-[15%]  bg-[#1F1F1F] h-[100%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[18%]'}`}>
            <div className="font-bold text-lg text-white ">Ajouter un stand</div>
           <div>Bienvenue, {userData ? userData.sous_administrateur.id  : 'Utilisateur'}</div>

            <form onSubmit={handleSubmit} className="p-2">
                <TextField
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Nom"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                 <TextField
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Prénom"
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
                    name="mot_de_passe"
                    value={formData.mot_de_passe}
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
                    name="mot_de_passe_confirmation"
                    value={formData.mot_de_passe_confirmation}
                    onChange={handleInputChange}
                    type="password"
                    size="small"
                    variant="filled"
                    label="Confirmer le mot de passe"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="nom_stand"
                    value={formData.nom_stand}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Nom du stand"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="emplacement"
                    value={formData.emplacement}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Emplacement"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    select
                    name="quartier_id"
                    value={formData.quartier_id}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Quartier"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                >
                    {Array.isArray(quartiers) && quartiers.map((quartier) => (
                        <MenuItem key={quartier.id} value={quartier.id}>
                             {quartier.nom}
                        </MenuItem>
                    ))}
                </TextField>
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-900">Ajouter</button>
            </form>
        </div>
    );
}




export default function Dashboard() {
    const isMobile = useMediaQuery('(max-width:700px)');

    return (
        <div className='bg-[#1F1F1F]'>
            {!isMobile && <FirstPart/>}
            <div className="flex flex-col w-full">
                <ScndPart />
                <div className="flex-grow">
                    <ThirdPart />
                </div>
            </div>
        </div>
    );
}

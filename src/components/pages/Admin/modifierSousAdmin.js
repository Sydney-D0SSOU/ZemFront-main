import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'; // Importez useState une seule fois
import logo from "../../Images/lg.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuListComposition from '../../DropDown';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../../Auth/AuthContext';
import MenuAd from './MenuAd';

function FirstPart() {
    return (
       React.createElement(MenuAd,null)
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
    const [editedZem, setEditedZem] = useState({
        nom: 'John',
        prenom: 'Doe',
        email: 'Zem1m2.doe@example.com',
        mot_de_passe: 'pword22@',
        confirmation_mot_de_passe: 'pword22@',
        ID_administrateur: 1,
        ID_utilisateur: 3,
        departement_id: 1
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('URL_DE_VOTRE_API_POUR_MODIFIER_LE_ZEM', editedZem);
            console.log('ZEM mis à jour avec succès :', response.data);
            setEditedZem({
                nom: '',
                prenom: '',
                email: '',
                mot_de_passe: '',
                confirmation_mot_de_passe: '',
                ID_administrateur: '',
                ID_utilisateur: '',
                departement_id: ''
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du ZEM :', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedZem({ ...editedZem, [name]: value });
    };

    return (
        <div className={`overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[18%]'}`}>
            <h1 className="text-white text-2xl font-bold p-4">Modifier les informations d'un Sous Administrateur</h1>
            <form onSubmit={handleSubmit} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="nom" className="text-white">Nom :</label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            value={editedZem.nom}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="prenom" className="text-white">Prénom :</label>
                        <input
                            type="text"
                            name="prenom"
                            id="prenom"
                            value={editedZem.prenom}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-white">Email :</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={editedZem.email}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mot_de_passe" className="text-white">Mot de passe :</label>
                        <input
                            type="password"
                            name="mot_de_passe"
                            id="mot_de_passe"
                            value={editedZem.mot_de_passe}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmation_mot_de_passe" className="text-white">Confirmation du mot de passe :</label>
                        <input
                            type="password"
                            name="confirmation_mot_de_passe"
                            id="confirmation_mot_de_passe"
                            value={editedZem.confirmation_mot_de_passe}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ID_administrateur" className="text-white">ID Administrateur :</label>
                        <input
                            type="text"
                            name="ID_administrateur"
                            id="ID_administrateur"
                            value={editedZem.ID_administrateur}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ID_utilisateur" className="text-white">ID Utilisateur :</label>
                        <input
                            type="text"
                            name="ID_utilisateur"
                            id="ID_utilisateur"
                            value={editedZem.ID_utilisateur}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departement_id" className="text-white">ID Département :</label>
                        <input
                            type="text"
                            name="departement_id"
                            id="departement_id"
                            value={editedZem.departement_id}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md p-2 ml-2 w-full"
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Enregistrer les modifications
                </button>
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

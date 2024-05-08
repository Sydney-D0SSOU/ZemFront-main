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

import TableCell from '@mui/material/TableCell';

import Button from '@mui/material/Button';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuListComposition from '../../DropDown';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link depuis react-router-dom
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';

import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../../Auth/AuthContext';
import MenuStand from './MenuStand';

function FirstPart() {
    return (
      <MenuStand/>  
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
    const [zemList, setZemList] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reason, setReason] = useState('');
    const [selectedZemId, setSelectedZemId] = useState(null);

    useEffect(() => {
        const fetchZemList = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/zems-listes');
                const zemData = response.data.zem;
                console.log('Données ZEM récupérées avec succès :', zemData);
                setZemList(zemData);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération de la liste des ZEM :', error);
            }
        };

        fetchZemList();
    }, []);

    const handleDisable = (id) => {
        setSelectedZemId(id);
        setShowConfirmation(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Envoyer la demande de désactivation avec la raison
            console.log('Désactiver ZEM avec ID:', selectedZemId, 'Raison:', reason);
            // Réinitialiser l'état et le formulaire après envoi
            setShowConfirmation(false);
            setReason('');
            setSelectedZemId(null);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la désactivation du ZEM :', error);
        }
    };

    return (
        <div className={`overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[18%]'}`}>
            <div className={`font-bold text-lg text-white p-4 ${isMobile ? 'text-center' : 'text-left'}`}>Ajouter un sous-administrateur</div>
            
            <h1 className="text-white text-lg font-bold mb-4">Liste des ZEM</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border text-white border-white px-4 py-2">Nom</th>
                        <th className="border  text-white border-white px-4 py-2">Prénom</th>
                        <th className="border  text-white border-white px-4 py-2">Email</th>
                        <th className="border  text-white border-white px-4 py-2">Plaques</th>
                        <th className="border  text-white    border-white px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {zemList.map((zem) => (
                        <tr key={zem.id} className="bg-gray-800">
                            <td className="border border-white px-4 py-2 text-white">{zem.user.nom}</td>
                            <td className="border border-white px-4 py-2 text-white">{zem.user.prenom}</td>
                            <td className="border border-white px-4 py-2 text-white">{zem.user.email}</td>
                            <td className="border border-white px-4 py-2 text-white">{zem.numero_de_plaque}</td>
                            <td className="border border-white px-4 py-2 flex justify-center">
                                <BlockIcon className="text-red-500 hover:text-red-700 cursor-pointer mr-2" onClick={() => handleDisable(zem.id)} />
                                {showConfirmation && selectedZemId === zem.id && (
                                    <div className="bg-red-100 p-4 rounded-md mb-4">
                                        <p className="text-red-600">Êtes-vous sûr de désactiver ce ZEM ?</p>
                                        <TextField
                                            label="Raison de la désactivation"
                                            variant="outlined"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            fullWidth
                                            className="mt-2"
                                        />
                                        <div className="flex justify-end mt-2">
                                            <Button variant="outlined" color="primary" onClick={() => setShowConfirmation(false)}>Annuler</Button>
                                            <Button variant="contained" color="primary" onClick={handleSubmit} className="ml-2">Oui</Button>
                                        </div>
                                    </div>
                                )}
                                
                                <Link to={`/ModifierZem`}>
                                    <EditIcon className="text-blue-500 hover:text-blue-700 cursor-pointer mr-2"  />
                                </Link>
                                       
                                <TableCell align="center" className="border border-white px-4 py-2">
                                    <Link to={`/Portefeuille/${zem.id}`}>
                                        <AccountBalanceWalletIcon className="text-green-500 hover:text-green-700 cursor-pointer" />
                                    </Link>
                                </TableCell>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

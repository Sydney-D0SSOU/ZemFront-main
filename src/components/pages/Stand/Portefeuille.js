import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import '../../../App.css';
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
import MoneyIcon from '@mui/icons-material/Money';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MenuStand from './MenuStand';
function FirstPart() {
    return (
     <MenuStand/> 
    );
}


function ScndPart() {
  const isMobile = useMediaQuery('(max-width:700px)');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume que l'utilisateur est connecté

  const handleLogout = () => {
      // Code pour gérer la déconnexion de l'utilisateur
      setIsLoggedIn(false);
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
function Wallet() {
    // Exemple de données pour simuler le portefeuille du Zem
    const walletData = {
        history: [
            { date: '10/02/2023', amount: 100, type: 'Payment' },
            { date: '12/02/2023', amount: -50, type: 'Withdrawal' },
            // Ajoutez d'autres transactions si nécessaire
        ],
        balance: 50, // Solde actuel du portefeuille
        totalRevenue: 5000 // Chiffre d'affaires total
    };

    // Fonction pour gérer le retrait
    const handleWithdrawal = (amount) => {
        // Code pour gérer le retrait du montant spécifié
        console.log(`Withdrawal amount: ${amount}`);
    };
    const isMobile = useMediaQuery('(max-width:700px)');
    return (
        <div className={`overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[20%]'}`}>
            <div className="flex justify-center items-center">
                <MoneyIcon style={{ color: '#FFDE59', fontSize: '3rem' }} />
                <div className="text-[#FFDE59] text-3xl ml-2">Portefeuille de HOUNTON Franc</div>
            </div>
            <div className="w-[80%] mt-4 bg-[#333333] p-4 rounded-lg">
                <div className="text-white text-lg mb-4">Historique des transactions :</div>
                <div className="overflow-auto max-h-80">
                    <table className="w-full text-white">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {walletData.history.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 text-white">Solde actuel : {walletData.balance} FCFA</div>
                <div className="mt-2 text-white">Chiffre d'affaires total : {walletData.totalRevenue} FCFA</div>
                <div className="mt-4">
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Montant du retrait"
                        type="number"
                    />
                    <Button
                        variant="contained"
                        onClick={() => handleWithdrawal(100)} // Exemple de gestion du retrait avec un montant de 100 FCFA
                        className="ml-2"
                    >
                        Valider le retrait
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function Portefeuille() {
    const isMobile = useMediaQuery('(max-width:700px)'); // Vous pouvez ajuster la largeur maximale en fonction de votre cas d'utilisation

    return (
        <div className='bg-[#1F1F1F] flex'>
            {!isMobile && <FirstPart />}
            <div className="flex flex-col ">
                <ScndPart /> <br/>
                <div className="mt-20">
                <br/>
                    <Wallet />
                </div>
            </div>
        </div>
    );
}

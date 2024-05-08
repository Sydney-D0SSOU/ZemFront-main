

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

function FirstPart() {
    return (
        <div className="grid grid-cols-1 w-[18%] fix border-r-2 border-[#3B3B3B] bg-[#1F1F1F]">
            <div className="  h-[30vh] border-[#3B3B3B] border-b-2 p-7 relative">
                <a href="/">
                    <img src={logo} alt="logo" className='flex items-center justify-center ' />
                </a>
                <div className="text-[#8E8E8E] absolute top-[90%]">Menu</div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4  border-[#3B3B3B] border-b-2 h-[40vh] relative">
                <div className="flex gap-3">
                    <WidgetsIcon fontSize="small" style={{ color: '#8C52FF' }} className='' />
                    <div className="text-white text-[16px]"><a href="/">Dashboard</a></div>
                </div>
                <div className="flex gap-3">
                    <AccountBalanceWalletIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/"> Portefeuille</a></div>
                </div>
                <div className="flex gap-3">
                    <LocalTaxiIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/">Courses</a></div>
                </div>
                <div className="flex gap-3">
                    <NotificationsIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/">Notification</a></div>
                </div>
                <div className="text-[#8E8E8E] absolute top-[90%] left-[10%]"><a href="/">Preference</a></div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4  border-[#3B3B3B] border-b-2 h-[20vh]">
                <div className="flex gap-3">
                    <PersonIcon fontSize="small" style={{ color: 'white' }} />
                    <div className="text-white "><a href="/">Mon compte</a></div>
                </div>
                <div className="flex gap-3">
                    <SettingsIcon fontSize="small" style={{ color: 'white' }} />
                    <div className="text-white "><a href="/">Options</a></div>
                </div>
                <div className="text-[#8E8E8E] absolute top-[86%]"><a href="/">Support</a></div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4 h-[10vh]">
                <div className="flex gap-3">
                    <HelpIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white "><a href="/">Aide et support</a></div>
                </div>
            </div>
        </div>
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


function ThirdPart() {
    const isMobile = useMediaQuery('(max-width:700px)');
    return (
        <div className={`overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%] ${isMobile ? 'w-full left-0' : 'w-[82%] left-[18%]'}`}>
            <div className={`border-[#3B3B3B] border-r-2 grid grid-cols-2 gap-10 p-7 ${isMobile ? 'w-full' : 'w-[65%]'} `}>
                <div className="flex items-center justify-between p-2">
                    <div className="m-auto ">
                        <div className="flex justify-between ">
                            <div className="flex flex-col items-center w-[200px] border border-gray-300 rounded-lg p-4 mr-6">
                                <div className="text-[#FFDE59] text-[14px] font-semibold">Courses Payées</div>
                                <div className="text-white text-[16px] flex items-center mt-3">
                                    <span className="ml-2 text-lg text-white">26555 </span>
                                </div>
                                <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-[14px] font-semibold">Stand</button>
                            </div>
                            <div className="flex flex-col items-center w-[200px] border border-gray-300 rounded-lg p-4 mr-6">
                                <div className="text-[#FFDE59] text-[14px] font-semibold">Nombre de Client</div>
                                <div className="text-white text-[16px] flex items-center mt-3">
                                    <span className="ml-2 text-lg text-white">265 </span>
                                </div>
                                <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-[14px] font-semibold">Transporteurs</button>
                            </div>
                            <div className="flex flex-col items-center w-[200px] border border-gray-300 rounded-lg p-4 mr-">
                                <div className="text-[#FFDE59] text-[14px] font-semibold">Chiffre d'Affaires</div>
                                <div className="text-white text-[16px] flex items-center mt-3">
                                    <span className="ml-2 text-lg text-white">2655577 FCFA </span>
                                </div>
                                <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-[14px] font-semibold">Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={`border-[#3B3B3B] border-r-2 grid grid-cols-2 gap-10 p-7 ${isMobile ? 'w-full' : 'w-[65%]'} `}>
            
            
                <div className="w-full text-[#FFDE59]">En Cours</div>
                <div className="w-full text-[#FFDE59]  ml-[70%]">...</div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">1000</div>
                    <div className="text-[#8E8E8E] text-[16px]">courses</div>
                    <div className="text-[#8E8E8E] text-[16px]">personne</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">10000</div>
                    <div className="text-[#8E8E8E] text-[16px]">paiement</div>
                    <div className="text-[#8E8E8E] text-[16px]">Transporteur</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">300</div>
                    <div className="text-[#8E8E8E] text-[16px]">courses</div>
                    <div className="text-[#8E8E8E] text-[16px]">colis</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">500</div>
                    <div className="text-[#8E8E8E] text-[16px]">paiement</div>
                    <div className="text-[#8E8E8E] text-[16px]">stand</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">1000</div>
                    <div className="text-[#8E8E8E] text-[16px]">courses</div>
                    <div className="text-[#8E8E8E] text-[16px]">personne</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
                <div className="w-full h-[150px] rounded-2xl border-2 border-[#3B3B3B] p-2">
                    <div className="text-white text-[32px]">10000</div>
                    <div className="text-[#8E8E8E] text-[16px]">paiement</div>
                    <div className="text-[#8E8E8E] text-[16px]">Transporteur</div>
                    <div className="text-[#FFDE59] text-[80%] ml-[70%]">voir les détails</div>
                </div>
            </div>
        </div>
    );
}


function FourthPart() {
    return (
        
        <div className="overflow-auto absolute top-[20%] border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-[80%]  w-[18%] right-[10%]">
           
            <div className="flex items-center justify-between p-2">
                <div className="text-[#FFDE59] text-[80%]">Courses</div>
                <div className="text-[#FFDE59] text-[80%] ml-[20%]">...</div>
            </div>
        
            <div className="w-full h-[75px] rounded-2xl border-2 border-[#3B3B3B] p-2 flex flex-col justify-center mb-2">
                <div className="flex justify-between items-center mt-0">
                    <div className="text-white text-[20px] flex items-center">
                        <MoneyIcon style={{ color: '#FFDE59', fontSize: '1.5rem' }} />
                        <span className="ml-2">165f</span>
                    </div>
                    <div className="text-[#FFDE59] text-[70%] text-green-500">valider</div>
                </div>
                <div className="flex justify-between items-center mt-0">
                    <div className="text-[#8E8E8E] text-[20px]">topka-kandi</div>
                    <div className="text-[#8E8E8E] text-[11px]">10/02/2000</div>
                </div>
            </div>
            <div className="w-full h-[75px] rounded-2xl border-2 border-[#3B3B3B] p-2 flex flex-col justify-center mb-2">
                <div className="flex justify-between items-center mt-0">
                    <div className="text-white text-[20px] flex items-center">
                        <MoneyIcon style={{ color: '#FFDE59', fontSize: '1.5rem' }} />
                        <span className="ml-2">165f</span>
                    </div>
                    <div className="text-[#FFDE59] text-[70%] text-green-500">valider</div>
                </div>
                <div className="flex justify-between items-center mt-0">
                    <div className="text-[#8E8E8E] text-[20px]">topka-kandi</div>
                    <div className="text-[#8E8E8E] text-[11px]">10/02/2000</div>
                </div>
            </div>
            <div className="w-full h-[75px] rounded-2xl border-2 border-[#3B3B3B] p-2 flex flex-col justify-center mb-2">
                <div className="flex justify-between items-center mt-0">
                    <div className="text-white text-[20px] flex items-center">
                        <MoneyIcon style={{ color: '#FFDE59', fontSize: '1.5rem' }} />
                        <span className="ml-2">165f</span>
                    </div>
                    <div className="text-[#FFDE59] text-[70%] text-green-500">valider</div>
                </div>
                <div className="flex justify-between items-center mt-0">
                    <div className="text-[#8E8E8E] text-[20px]">topka-kandi</div>
                    <div className="text-[#8E8E8E] text-[11px]">10/02/2000</div>
                </div>
            </div>
            <div className="w-full h-[75px] rounded-2xl border-2 border-[#3B3B3B] p-2 flex flex-col justify-center mb-2">
                <div className="flex justify-between items-center mt-0">
                    <div className="text-white text-[20px] flex items-center">
                        <MoneyIcon style={{ color: '#FFDE59', fontSize: '1.5rem' }} />
                        <span className="ml-2">165f</span>
                    </div>
                    <div className="text-[#FFDE59] text-[70%] text-green-500">valider</div>
                </div>
                <div className="flex justify-between items-center mt-0">
                    <div className="text-[#8E8E8E] text-[20px]">topka-kandi</div>
                    <div className="text-[#8E8E8E] text-[11px]">10/02/2000</div>
                </div>
            </div>
        </div>
    );
}



export default function Dashboard() {
    const isMobile = useMediaQuery('(max-width:700px)'); // Vous pouvez ajuster la largeur maximale en fonction de votre cas d'utilisation

    return (
        <div className='bg-[#1F1F1F]'>
            {!isMobile && <FirstPart/>}
            <div className="flex flex-col w-full">
                <ScndPart />
                <div className="flex">
                    <ThirdPart />
                    <FourthPart />
                </div>
            </div>
        </div>
    );
}

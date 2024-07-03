import { useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../../App.css';
import Button from '@mui/material/Button';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PaymentIcon from '@mui/icons-material/Payment';
import logo from '../../Images/logo2.png';

function Card({ title, icon, onClick }) {
    return (
        <div className="flex flex-col items-center w-full max-w-[300px] border border-gray-300 rounded-lg p-4 m-4 bg-black text-black">
            <div className="flex items-center mb-2">
                {icon}
                <div className="text-[#FFDE59] text-[18px] font-semibold ml-2">{title}</div>
            </div>
            <Button variant="contained" className="mt-3" style={{ backgroundColor: 'orange', color: 'white' }} onClick={onClick}>
                Consulter
            </Button>
        </div>
    );
}

function MainContent() {
    const navigate = useNavigate(); // Initialize useNavigate
    const isMobile = useMediaQuery('(max-width:700px)');

    return (
        <div className={`overflow-auto absolute top-0 bg-[#1F1F1F] h-full ${isMobile ? 'w-full left-0' : 'w-[100%] left-0'}`}>
            <div className="flex flex-col items-center p-4">
                <img src={logo} alt="Logo" className="mb-4" style={{ width: '150px' }} />
                <h3 className="text-[#FFDE59] mb-4">Gestionnaire de stand</h3>
                <div className="flex flex-wrap justify-center items-center">
                    <Card
                        title="Ajouter un Zem"
                        icon={<DirectionsBikeIcon style={{ color: '#FFDE59', fontSize: '2rem' }} />}
                        onClick={() => navigate('/AddZem')} // Navigate to /AddZem
                    />
                    <Card
                        title="Ajouter une course"
                        icon={<DirectionsRunIcon style={{ color: '#FFDE59', fontSize: '2rem' }} />}
                        onClick={() => navigate('/Trajet')} // Navigate to /Trajet
                    />
                    <Card
                        title="Payer un Zem"
                        icon={<PaymentIcon style={{ color: '#FFDE59', fontSize: '2rem' }} />}
                        onClick={() => navigate('/portefeuille')} // Navigate to /portefeuille
                    />
                </div>
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <div className="bg-[#1F1F1F] min-h-screen flex justify-center items-center">
            <MainContent />
        </div>
    );
}

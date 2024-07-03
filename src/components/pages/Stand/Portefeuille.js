import React from 'react';
import { useMediaQuery, TextField, Button, Container } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../Images/lg.png";
import '../../../App.css';
import { useNavigate } from 'react-router-dom';

function Wallet() {
    // Example wallet data
    const walletData = {
        history: [
            { date: '10/02/2023', amount: 100, type: 'Payment' },
            { date: '12/02/2023', amount: -50, type: 'Withdrawal' },
            // Additional transactions can be added here
        ],
        balance: 50, // Current wallet balance
        totalRevenue: 5000 // Total revenue
    };

    // Handle withdrawal
    const handleWithdrawal = (amount) => {
        // Implement withdrawal logic here
        console.log(`Withdrawal amount: ${amount}`);
    };

    const isMobile = useMediaQuery('(max-width:700px)');
    return (
        <Container maxWidth="md" sx={{ bgcolor: '#1F1F1F', p: 2, borderRadius: 2, boxShadow: 3 }}>
            <div className="flex justify-center items-center mb-4">
                <MoneyIcon style={{ color: '#FFDE59', fontSize: '3rem' }} />
                <div className="text-[#FFDE59] text-3xl ml-2">Portefeuille de HOUNTON Franc</div>
            </div>
            <div className="bg-[#333333] p-4 rounded-lg">
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
                <div className="mt-4 flex items-center">
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Montant du retrait"
                        type="number"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        onClick={() => handleWithdrawal(100)} // Example withdrawal amount
                        className="ml-2"
                    >
                        Valider le retrait
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default function Portefeuille() {
    const isMobile = useMediaQuery('(max-width:700px)'); // Adjust as needed
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className="bg-[#1F1F1F] flex flex-col items-center min-h-screen p-4">
            <div className="flex items-center w-full mb-4">
                <ArrowBackIcon
                    fontSize="large"
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={() => navigate(-1)} // Navigate to the previous page
                />
                <img src={logo} alt="Logo" className="w-32 mx-auto" />
            </div>
            <div className={`w-full max-w-md ${isMobile ? 'flex flex-col items-center' : 'flex'}`}>
                <TextField
                    size="small"
                    variant="filled"
                    label="Rechercher un Zem"
                    placeholder="Entrez son Identifiant"
                    fullWidth
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    className="mr-2"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="mt-2 sm:mt-0"
                >
                    Search
                </Button>
            </div>
            <div className="mt-8 w-full">
                <Wallet />
            </div>
        </div>
    );
}

import MenuStand from './MenuStand';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../Auth/AuthContext'; // Importez useAuth pour accéder aux données de l'utilisateur


function TrajetForm({ onSubmit }) {
    const { user } = useAuth(); // Récupérer l'utilisateur connecté

    const [formData, setFormData] = useState({
        datedeb: '',
        datefin: '',
        duree: '',
        prix: '',
        depart: '',
        destination: '',
        distance: '',
        prixkm: '',
        revenuZem: '',
        benefStand: '',
        client_id: '', // Utiliser l'ID de l'utilisateur connecté
        zem_id: '', // ID du Zem à récupérer
        stand_id: user ? user.user.id : '' // ID du stand à partir de l'utilisateur connecté

    });
    const [loading, setLoading] = useState(false);
    const [zemName, setZemName] = useState(''); // Pour afficher le nom du Zem après la recherche

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:8000/api/abonnements', formData);
            setLoading(false);
            showAlert('success', 'Trajet enregistré avec succès');
            onSubmit();
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement du trajet:', error);
            showAlert('error', 'Une erreur s\'est produite. Veuillez réessayer.');
            setLoading(false);
        }
    };
    // Fonction pour rechercher le Zem par numéro de plaque
    const searchZem = async (numeroPlaque) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/search/${numeroPlaque}`);
            const zemId = response.data.id; // Récupérer l'ID du Zem depuis la réponse
            setFormData({
                ...formData,
                zem_id: zemId // Mettre à jour l'ID du Zem dans le formulaire
            });
            setZemName(response.data.name); // Mettre à jour le nom du Zem
            console.log(response.data.name)
        } catch (error) {
            console.error('Erreur lors de la recherche du Zem:', error);
            alert('Une erreur s\'est produite lors de la recherche du Zem');
        }
    };

    const showAlert = (type, message) => {
        Swal.fire({
            icon: type,
            title: type === 'success' ? 'Succès' : 'Erreur',
            text: message
        });
    };

    const inputStyle = { backgroundColor: 'gray', borderRadius: '5px', color: 'white', border: '1px solid white' };
    const mainContentWidth = `calc(100% - 18%)`; // 18% est la largeur du menu

    return (
        <div className="flex">
            <MenuStand />
            <div className="w-full  overflow-auto">
                <div className="border-[#3B3B3B] border-b-2 bg-[#1F1F1F] ">
                    <div className="flex p-4">
                        <div className="w-full">
                            <div className="border border-gray-500 rounded p-4">
                                <h2 className="text-lg font-bold mb-4 text-white text-center">Enregistrer un nouveau trajet</h2>
                                <form onSubmit={handleSubmit} className="p-4">
                                    <div className="border border-gray-500 rounded p-4">
                                        <div className="flex justify-between">
                                            <TextField
                                                name="datedeb"
                                                label="Date de début"
                                                type="date"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.datedeb}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                            <TextField
                                                name="datefin"
                                                label="Date de fin"
                                                type="date"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.datefin}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                        </div>
                                        <div className="flex justify-between">

                                            <TextField
                                                name="duree"
                                                label="Durée"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.duree}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                            <TextField
                                                name="prix"
                                                label="Prix"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.prix}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                        </div>
                                        <div className="flex justify-between">

                                            <TextField
                                                name="depart"
                                                label="Départ"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.depart}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                            <TextField
                                                name="destination"
                                                label="Destination"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                        </div>
                                        <div className="flex justify-between">

                                            <TextField
                                                name="distance"
                                                label="Distance"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.distance}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                            <TextField
                                                name="prixkm"
                                                label="Prix par kilomètre"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.prixkm}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                        </div>
                                        <TextField
                                            name="revenuZem"
                                            label="Revenu Zem"
                                            variant="filled"
                                            fullWidth
                                            margin="normal"
                                            value={formData.revenuZem}
                                            onChange={handleChange}
                                            InputLabelProps={{ style: { color: 'orange' } }}
                                            InputProps={{ style: inputStyle }}
                                        />
                                        <div className="flex justify-between">

                                            <TextField
                                                name="benefStand"
                                                label="Bénéfice Stand"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={formData.benefStand}
                                                onChange={handleChange}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                            <TextField
                                                name="zem_id"
                                                label="Numéro de plaque du Zem"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                onChange={(e) => searchZem(e.target.value)}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle }}
                                            />
                                        </div>
                                        {zemName && ( // Afficher le nom du Zem si disponible
                                            <TextField
                                                name="zemName"
                                                label="Nom du Zem"
                                                variant="filled"
                                                fullWidth
                                                margin="normal"
                                                value={zemName}
                                                InputLabelProps={{ style: { color: 'orange' } }}
                                                InputProps={{ style: inputStyle, color: 'white' }}
                                            />
                                        )}

                                    </div>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        style={{ marginTop: '1rem', backgroundColor: '#ff5722', borderRadius: '5px' }}
                                        disabled={loading}
                                    >
                                        {loading ? 'Enregistrement en cours...' : 'Enregistrer'}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrajetForm;

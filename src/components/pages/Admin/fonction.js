import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddFonctionnaliteForm() {
    const [libFonction, setLibFonction] = useState('');

    const handleInputChange = (e) => {
        setLibFonction(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://emploipourtous.africa/api/fonctionnalites', { libFonction });
            console.log('Fonctionnalité ajoutée avec succès');
            setLibFonction('');
            showAlert('success', 'Fonctionnalité ajoutée avec succès');
        } catch (error) {
            console.error(error);
            showAlert('error', 'Une erreur s\'est produite. Veuillez réessayer.');
        }
    };

    const showAlert = (type, message) => {
        Swal.fire({
            icon: type,
            title: type === 'success' ? 'Succès' : 'Erreur',
            text: message
        });
    };

    return (
        <div className="flex-grow mr-4 border border-gray-500 rounded p-4">
            <TextField
                value={libFonction}
                onChange={handleInputChange}
                size="small"
                variant="filled"
                label="Libellé Fonctionnalité"
                fullWidth
                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
            />
            <button onClick={handleSubmit} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800 mt-4">Ajouter Fonctionnalité</button>
        </div>
    );
}

export default AddFonctionnaliteForm;

import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddModuleForm() {
    const [libModule, setLibModule] = useState('');
    const [fonctionnaliteId, setFonctionnaliteId] = useState('');
    const [fonctionnalites, setFonctionnalites] = useState([]);

    // Fetch fonctionnalites on component mount
    useEffect(() => {
        async function fetchFonctionnalites() {
            try {
                const response = await axios.get('https://emploipourtous.africa/api/fonctionnalites');
                setFonctionnalites(response.data);
            } catch (error) {
                console.error('Error fetching fonctionnalites:', error);
            }
        }
        fetchFonctionnalites();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'libModule') {
            setLibModule(value);
        } else if (name === 'fonctionnaliteId') {
            setFonctionnaliteId(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://emploipourtous.africa/api/modules', { libelle: libModule, fonctionnalite_id: fonctionnaliteId });
            console.log('Module ajouté avec succès');
            setLibModule('');
            setFonctionnaliteId('');
            showAlert('success', 'Module ajouté avec succès');
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
        <div className="flex-grow border border-gray-500 rounded p-4">
            <TextField
                name="libModule"
                value={libModule}
                onChange={handleInputChange}
                size="small"
                variant="filled"
                label="Libellé Module"
                fullWidth
                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
            />
            <select
                name="fonctionnaliteId"
                value={fonctionnaliteId}
                onChange={handleInputChange}
                className="p-2 rounded mt-4"
            >
                <option value="">Sélectionner une fonctionnalité</option>
                {fonctionnalites.map(fonctionnalite => (
                    <option key={fonctionnalite.id} value={fonctionnalite.id}>{fonctionnalite.libFonction}</option>
                ))}
            </select>
            <button onClick={handleSubmit} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800 mt-4">Ajouter Module</button>
        </div>
    );
}

export default AddModuleForm;

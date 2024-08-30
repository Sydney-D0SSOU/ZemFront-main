import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddTypeUtilisateurForm() {
    const [libTypeUtilisateur, setLibTypeUtilisateur] = useState('');
    const [idModule, setIdModule] = useState('');
    const [modules, setModules] = useState([]);

    // Fetch modules on component mount
    useEffect(() => {
        async function fetchModules() {
            try {
                const response = await axios.get('https://emploipourtous.africa/api/modules');
                setModules(response.data);
            } catch (error) {
                console.error('Error fetching modules:', error);
            }
        }
        fetchModules();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'libTypeUtilisateur') {
            setLibTypeUtilisateur(value);
        } else if (name === 'idModule') {
            setIdModule(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://emploipourtous.africa/api/user-types', { libelle: libTypeUtilisateur, idModule });
            console.log('Type utilisateur ajouté avec succès');
            setLibTypeUtilisateur('');
            setIdModule('');
            showAlert('success', 'Type utilisateur ajouté avec succès');
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
                name="libTypeUtilisateur"
                value={libTypeUtilisateur}
                onChange={handleInputChange}
                size="small"
                variant="filled"
                label="Libellé du type"
                fullWidth
                InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                className="mb-2"
            />
            <select
                name="idModule"
                value={idModule}
                onChange={handleInputChange}
                className="p-2 rounded mb-2"
            >
                <option value="">Sélectionner un module</option>
                {modules.map(module => (
                    <option key={module.id} value={module.id}>{module.libelle}</option>
                ))}
            </select>
            <button onClick={handleSubmit} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800">Ajouter Type Utilisateur</button>
        </div>
    );
}

export default AddTypeUtilisateurForm;

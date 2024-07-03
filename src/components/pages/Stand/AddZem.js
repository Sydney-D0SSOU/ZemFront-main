import React, { useState, useEffect } from 'react';
import { MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';
import logo from '../../Images/logo2.png';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function AddZem() {
    const isMobile = useMediaQuery('(max-width:700px)');
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        numero_plaque: '',
        user_type_id: '',
        added_by: user ? user.user.id : '',
    });
    const [userTypes, setUserTypes] = useState([]);

    useEffect(() => {
        fetchUserTypes();
    }, []);

    const fetchUserTypes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user-types');
            setUserTypes(response.data);
        } catch (error) {
            console.error('Error fetching user types:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithUser = {
                ...formData,
                added_by: user.user.id
            };
            await axios.post('http://localhost:8000/api/users', formDataWithUser);
            console.log('Un zem ajouté avec succès', user.user.id, formDataWithUser);
            Swal.fire({
                icon: 'success',
                title: 'Un Zem ajouté avec succès',
                showConfirmButton: false,
                timer: 1500
            });
            setFormData({
                name: '',
                email: '',
                contact: '',
                password: '',
                numero_plaque: '',
                user_type_id: '',
                added_by: user.user.id
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout du Zem:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur lors de l\'ajout du Zem',
                text: error.message
            });
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1F1F] p-4 relative">
            <ArrowBackIcon 
                onClick={handleBackClick} 
                style={{ color: '#FFDE59', cursor: 'pointer', position: 'absolute', top: '20px', left: '20px', fontSize: '2rem', fontWeight: 'bold' }} 
            />
            <img src={logo} alt="Logo" className="mb-4" style={{ width: isMobile ? '100px' : '150px' }} />
            <h3 className="text-[#FFDE59] text-lg font-bold mb-4">Ajouter un Zem 🏍️</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <TextField
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Nom"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Email"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Contact"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    type="password"
                    size="small"
                    variant="filled"
                    label="Mot de passe"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    name="numero_plaque"
                    value={formData.numero_plaque}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Numéro de plaque"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                />
                <TextField
                    select
                    name="user_type_id"
                    value={formData.user_type_id}
                    onChange={handleInputChange}
                    size="small"
                    variant="filled"
                    label="Type d'utilisateur"
                    fullWidth
                    className="mb-2"
                    InputProps={{ style: { backgroundColor: 'white', borderRadius: '5px' } }}
                >
                    <MenuItem value="">Sélectionnez un type d'utilisateur</MenuItem>
                    {userTypes.map(userType => (
                        <MenuItem key={userType.id} value={userType.id}>{userType.libelle}</MenuItem>
                    ))}
                </TextField>
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default AddZem;

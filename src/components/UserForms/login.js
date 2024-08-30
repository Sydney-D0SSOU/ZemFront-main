import React, { useState } from 'react';
import logo from '../Images/lg.png';
import axios from 'axios';
import lg from '../Images/ia.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import Swal from 'sweetalert2';

const ULoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (userData) => {
        console.log('User data after login:', userData);
        if (userData.user) {
            Swal.fire({
                icon: 'success',
                title: 'Connexion réussie',
                text: 'Bienvenue!',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                if (userData.user_type === 'Gestionnaire de stand') {
                    navigate('/Stand');
                } else if (userData.user_type === 'Sous_Administrateur') {
                    navigate('/SousAdmin');
                } else if (userData.user.user_type === '') {
                    navigate('/SousAdmin');
                } else {
                    // Redirection par défaut
                    navigate('/Dashboard');
                }
            });
            login(userData);
        } else {
            setMessage('Nom d\'utilisateur ou mot de passe incorrect');
            Swal.fire({
                icon: 'error',
                title: 'Erreur de connexion',
                text: 'Nom d\'utilisateur ou mot de passe incorrect'
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://emploipourtous.africa/api/login', formData);
            const responseData = response.data;

            if (responseData.user) {
                handleLogin(responseData);
            }
        } catch (error) {
            console.error('Une erreur s\'est produite', error);
            setMessage('Nom d\'utilisateur ou mot de passe incorrect');
            Swal.fire({
                icon: 'error',
                title: 'Erreur de connexion',
                text: 'Nom d\'utilisateur ou mot de passe incorrect'
            });
        }
    };

    return (
        <div className="">
            <div className="flex items-center justify-center min-h-screen bg-[#022146] md:w-[50%]">
                <div className="grid grid-cols-1 gap-10 p-8 w-[70%]">
                    <div className="relative flex items-center justify-center bottom-14">
                        <a href="/">
                            <img src={logo} alt="logo" className="w-[60%]" />
                        </a>
                    </div>
                    <h2 className="text-5xl font-semibold text-left text-white">Bienvenue</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-3">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Adresse email"
                                className="text-white transparent-input"
                            />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Mot de passe"
                                className="text-white transparent-input"
                            />
                            <span onClick={togglePasswordVisibility} className='text-[#fe904c]'>
                                {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                            </span>
                            <button
                                type="submit"
                                className="p-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Se connecter
                            </button>
                            <p className="mt-2 text-center text-white">
                                Pas de compte ? <Link to="/inscription">Inscrivez-vous</Link>
                            </p>
                            {message && <p className="text-red-500">{message}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <img src={lg} alt="logo" className="w-[30%] absolute left-[60%] top-[20%] hidden md:block" />
        </div>
    );
};

export default ULoginForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link si vous utilisez React Router
import logo from '../Images/logo1.png';
import '../RegistrationForm.css';
import axios from 'axios';
import lg from '../Images/ib.png';


const DLoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
            const response = await axios.post('/api/log', formData);    
            if (response.status === 200) {
                // Handle successful login, e.g., redirect to a dashboard
                console.log('Login successful');
                // You can use React Router to redirect the user if needed
            } else {
                // Handle authentication errors, e.g., display an error message
                console.log('Login failed');
            }
        } catch (error) {
            // Handle network or server errors
            console.error('An error occurred', error);
        }
    };
    
    return (
        <div className="bg-[#022146]">
        <div className="flex items-center justify-center min-h-screen bg-white md:w-[80%] relative md:left-[20%]">
            <a href="/">
                <img src={logo} alt="logo" className="w-[100px] absolute left-[80%] top-0" />
            </a>
            <h2 className="text-2xl font-semibold text-[#022146] absolute left-24 top-8">Devenir transporteur</h2>
            <div className="grid grid-cols-1 gap-10 p-8 md:w-[50%] w-[70%]">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-3">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Nom d'utilisateur"
                            className="transparent-input"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mot de passe"
                            className="transparent-input"
                        />
                        <label className="">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            /> Se rappeler
                        </label>
                        <button
                            type="submit"
                            className="p-2 text-white transition duration-300 bg-[#022146] rounded hover:bg-blue-600"
                            >
                            Se connecter
                        </button>
                        <p className="mt-2 text-center text-[#022146]">
                            Pas de compte ? <Link to="/DriverInscription">Inscrivez-vous</Link>
                            {/* Si vous utilisez React Router, utilisez le composant Link pour la navigation */}
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <img src={lg} alt="logo" className="w-[350px] absolute left-0 top-[20%] hidden md:block" />
        </div>
    );
};

export default DLoginForm;

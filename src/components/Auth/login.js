import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link si vous utilisez React Router
import logo from '../Images/logo1.png';
import '../RegistrationForm.css';
import axios from 'axios';
import lg from '../Images/ib.png';
import { useNavigate } from 'react-router-dom';



const DLoginForm = () => {
    const history = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false); // Nouvel état pour suivre la visibilité du mot de passe

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/Dlog', formData);
            if (response.data.success) {
                history('/Stand');
            } else {
                console.log("Nom d'utilisateur ou mot de passe incorrect");
            }
        } catch (error) {
            console.error("Une erreur s'est produite", error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
      
    return (
        <div className="bg-[#022146]">
        <div className="flex items-center justify-center min-h-screen bg-white md:w-[80%] relative md:left-[20%]">
            <a href="/">
                <img src={logo} alt="logo" className="w-[100px] absolute left-[80%] top-0" />
            </a>
            <h2 className="text-2xl font-semibold text-[#022146] absolute left-24 top-8">Devenir transporteur</h2>
            <div className="grid grid-cols-1 gap-10 p-8 md:w-[50%] w-[70%]">
                {/*<div className="relative flex items-center justify-center bottom-14">
                    <img src={logo} alt="logo" className="w-[60%]" />
                </div>
                <h2 className="text-5xl font-semibold text-left text-[#022146]">Bienvenue</h2>*/}
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
                        type={showPassword ? 'text' : 'password'} // Modifier le type du champ en fonction de showPassword
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Mot de passe"
                        className="transparent-input"
                    />
                    <label htmlFor="showPassword" className="text-[#022146]">
                        Afficher le mot de passe
                        <input
                            id="showPassword"
                            type="checkbox"
                            checked={showPassword}
                            onChange={togglePasswordVisibility}
                            className="ml-2"
                        />
                    </label>
                    <button
                        type="submit"
                        className="p-2 text-white transition duration-300 bg-[#022146] rounded hover:bg-blue-600"
                    >
                        Se connecter
                    </button>
                    <p className="mt-2 text-center text-[#022146]">
                        Pas de compte ? <Link to="/DriverInscription">Inscrivez-vous</Link>
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

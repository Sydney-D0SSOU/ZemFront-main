import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import logo from '../Images/logo1.png';
import '../RegistrationForm.css';
import lg from '../Images/ib.png';

const DRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    contacts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Envoi des données au serveur via une requête POST
      const response = await axios.post('http://localhost:3001/api/reg', formData);
      console.log(response.data); // Si le serveur renvoie une réponse
    } catch (error) {
      console.error(error);
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
            <div className="input-with-icon">
              <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="transparent-input"
              />
            </div>
            <input
              type="text"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              placeholder="Contacts"
              className="transparent-input"
            />
            <button
              type="submit"
              className="p-2 text-white transition duration-300 bg-[#022146] rounded hover:bg-blue-600"
            >
              S'inscrire
            </button>
          </div>
        </form>
            </div>
        </div>
        <img src={lg} alt="logo" className="w-[350px] absolute left-0 top-[20%] hidden md:block" />
        </div>
  );
};

export default DRegistrationForm;

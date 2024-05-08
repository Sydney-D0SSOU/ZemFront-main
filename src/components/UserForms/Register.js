import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import logo from "../Images/lg.png";
import '../RegistrationForm.css';
import { useNavigate } from 'react-router-dom';

const URegistrationForm = () => {
  const history = useNavigate();
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
      const response = await axios.post('http://localhost:3001/api/reg', formData);

      if (response.data.success) {
        history('/Stand'); // Replace '/success-page' with your desired route
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#022146] md:w-[50%]">
      <div className="grid grid-cols-1 gap-10 p-8 w-[70%]">
        <div className='relative flex items-center justify-center bottom-14'>
          <a href="/">
            <img src={logo} alt="logo" className="w-[60%]" />
          </a>
        </div>
        <h2 className="text-5xl font-semibold text-left text-white">Bienvenue</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nom d'utilisateur"
              className="text-white transparent-input"
            />
            <div className="input-with-icon">
              <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="text-white transparent-input"
              />
            </div>
            <input
              type="text"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              placeholder="Contacts"
              className="text-white transparent-input"
            />
            <button
              type="submit"
              className="p-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default URegistrationForm;

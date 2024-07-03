import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../Auth/AuthContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo2.png';
import MapComponent from './Mapcomponent';

function TrajetForm({ onSubmit }) {
  const { user } = useAuth();
  const navigate = useNavigate();

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
    client_id: '',
    zem_id: '',
    stand_id: user ? user.user.id : ''
  });

  const [loading, setLoading] = useState(false);
  const [zemName, setZemName] = useState('');

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

  const searchZem = async (numeroPlaque) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/search/${numeroPlaque}`);
      const zemId = response.data.id;
      setFormData({
        ...formData,
        zem_id: zemId
      });
      setZemName(response.data.name);
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

  const handleBackClick = () => {
    navigate(-1);
  };

  const inputStyle = { backgroundColor: 'white', borderRadius: '5px', color: 'black', border: '1px solid gray' };
  const labelStyle = { color: '#FF5722' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1F1F] p-4 relative">
      <ArrowBackIcon
        onClick={handleBackClick}
        style={{ color: '#FFDE59', cursor: 'pointer', position: 'absolute', top: '20px', left: '20px', fontSize: '2rem', fontWeight: 'bold' }}
      />
      <img src={logo} alt="Logo" className="mb-8 w-32" />
      <h2 className="text-lg font-bold mb-4 text-white text-center">Enregistrer un nouveau trajet</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
        <TextField
          name="datedeb"
          label="Date de début"
          type="date"
          variant="filled"
          fullWidth
          value={formData.datedeb}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="datefin"
          label="Date de fin"
          type="date"
          variant="filled"
          fullWidth
          value={formData.datefin}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="duree"
          label="Durée"
          variant="filled"
          fullWidth
          value={formData.duree}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="prix"
          label="Prix"
          variant="filled"
          fullWidth
          value={formData.prix}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          id="depart"
          name="depart"
          label="Départ"
          variant="filled"
          fullWidth
          value={formData.depart}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          id="destination"
          name="destination"
          label="Destination"
          variant="filled"
          fullWidth
          value={formData.destination}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="distance"
          label="Distance"
          variant="filled"
          fullWidth
          value={formData.distance}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
          disabled
        />
        <TextField
          name="prixkm"
          label="Prix par kilomètre"
          variant="filled"
          fullWidth
          value={formData.prixkm}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="revenuZem"
          label="Revenu Zem"
          variant="filled"
          fullWidth
          value={formData.revenuZem}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="benefStand"
          label="Bénéfice Stand"
          variant="filled"
          fullWidth
          value={formData.benefStand}
          onChange={handleChange}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          name="zem_id"
          label="Numéro de plaque du Zem"
          variant="filled"
          fullWidth
          onChange={(e) => searchZem(e.target.value)}
          InputLabelProps={{ style: labelStyle }}
          InputProps={{ style: inputStyle }}
        />
        {zemName && (
          <TextField
            name="zemName"
            label="Nom du Zem"
            variant="filled"
            fullWidth
            value={zemName}
            InputLabelProps={{ style: labelStyle }}
            InputProps={{ style: inputStyle, color: 'black' }}
            disabled
          />
        )}
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
      <MapComponent setDistance={(distance) => setFormData({ ...formData, distance })} setFormData={setFormData} formData={formData} />
    </div>
  );
}

export default TrajetForm;

// MapComponent.jsx
import React, { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.8566, // Valeur par défaut pour Paris, ajustez selon votre besoin
  lng: 2.3522
};

const MapComponent = ({ setDistance, setFormData, formData }) => {
  const onMapClick = useCallback((e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();

    // Exemple de calcul de distance simplifié, remplacez-le par une logique appropriée
    const distance = Math.sqrt(Math.pow(lat - center.lat, 2) + Math.pow(lng - center.lng, 2));

    setDistance(distance);
    setFormData({
      ...formData,
      distance: distance.toFixed(2)
    });
  }, [setDistance, setFormData, formData]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBka441v3cCn6j1nj8ki8DWn0KdLO8s" // Utilisez votre clé API ici
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
      >
        {/* Vous pouvez ajouter des marqueurs ou d'autres éléments ici */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

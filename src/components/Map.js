import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ from, to }) => {
    const positionFrom = from ? [from.lat, from.lng] : null;
    const positionTo = to ? [to.lat, to.lng] : null;

    return (
        <div style={{ width: '70%', height: '30%' }}>
            <MapContainer center={[21.505, -0.09]} zoom={1} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {positionFrom && <Marker position={positionFrom}><Popup>Lieu de départ</Popup></Marker>}
                {positionTo && <Marker position={positionTo}><Popup>Lieu d'arrivée</Popup></Marker>}
            </MapContainer>
        </div>
    );
};

const RoutingForm = () => {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajouter ici la logique pour soumettre les données du formulaire
        // par exemple, calculer la distance entre les deux points
    };

    return (
        <div className="flex">
            
            <div style={{ width: '50%' }}>
                <form onSubmit={handleSubmit} style={{ padding: '20px', height: '100%' }}>
                    <div className="mb-4">
                        <label htmlFor="from">Lieu de départ</label>
                        <input
                            type="text"
                            id="from"
                            placeholder="Lieu de départ"
                            value={from ? `${from.lat}, ${from.lng}` : ''}
                            readOnly
                            className="block w-full p-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="to">Lieu d'arrivée</label>
                        <input
                            type="text"
                            id="to"
                            placeholder="Lieu d'arrivée"
                            value={to ? `${to.lat}, ${to.lng}` : ''}
                            readOnly
                            className="block w-full p-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">Calculer</button>
                </form>
            </div>
            <div style={{ width: '50%', height: '40px', marginleft: '10px' }}>
                <MapComponent from={from} to={to} />
            </div>
        </div>
    );
};

export default RoutingForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import MenuAd from './MenuAd';

function ListUser() {
    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                setUserList(response.data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération de la liste des utilisateurs :', error);
            }
        };

        fetchUserList();
    }, []);

    const handleDisable = (id) => {
        Swal.fire({
            title: 'Êtes-vous sûr de désactiver cet utilisateur ?',
            showCancelButton: true,
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler',
            input: 'text',
            inputLabel: 'Raison de la désactivation',
            inputPlaceholder: 'Entrez la raison...',
            inputValidator: (value) => {
                if (!value) {
                    return 'Vous devez entrer une raison !';
                }
            },
            preConfirm: (reason) => {
                // Envoyer la demande de désactivation avec la raison
                console.log('Désactiver utilisateur avec ID:', id, 'Raison:', reason);
                // Mettre à jour l'état ou effectuer d'autres actions si nécessaire
            }
        });
    };

    const handleEdit = (id) => {
        Swal.fire({
            title: 'Modifier Utilisateur',
            input: 'text',
            inputLabel: 'Nouveau Nom',
            inputPlaceholder: 'Entrez le nouveau nom...',
            inputValidator: (value) => {
                if (!value) {
                    return 'Vous devez entrer un nouveau nom !';
                }
            },
            preConfirm: (newName) => {
                // Envoyer la demande de modification avec le nouveau nom
                console.log('Modifier utilisateur avec ID:', id, 'Nouveau nom:', newName);
                // Mettre à jour l'état ou effectuer d'autres actions si nécessaire
            }
        });
    };

    // Filtrer la liste des utilisateurs en fonction de la valeur de recherche
    const filteredUsers = userList.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-[#1F1F1F]'>
            <MenuAd />

            <div className="flex flex-col w-full">
                <div className="flex-grow ml-[18%]">
                    <div className="border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-screen overflow-auto">
                        <input
                            type="text"
                            placeholder="Rechercher par nom..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="m-4 px-4 py-2 border rounded bg-gray-800 text-white"
                        />
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border text-white border-white px-4 py-2">Nom</th>
                                    <th className="border text-white border-white px-4 py-2">Email</th>
                                    <th className="border text-white border-white px-4 py-2">Numéro de Plaque</th>
                                    <th className="border text-white border-white px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="bg-gray-900">
                                        <td className="border border-white px-4 py-2 text-white">{user.name}</td>
                                        <td className="border border-white px-4 py-2 text-white">{user.email}</td>
                                        <td className="border border-white px-4 py-2 text-white">{user.numero_plaque}</td>
                                        <td className="border border-white px-4 py-2">
                                            <button onClick={() => handleDisable(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Désactiver
                                            </button>
                                            <button onClick={() => handleEdit(user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Modifier
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListUser;

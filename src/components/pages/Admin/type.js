import React from 'react';
import TextField from '@mui/material/TextField';
import MenuAd from './MenuAd';
import AddTypeUtilisateurForm from './add_typeUser';

function type() {
    return (
        <div className='bg-[#1F1F1F]'>
            <MenuAd />
            <div className="flex flex-col w-full">
                <div className="flex-grow ml-[18%]">
                    <div className="border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-screen overflow-auto">
                        
                        <div className="flex p-4 mt-4">
                            <div className="w-full">
                                <div className="border border-gray-500 rounded p-4">
                                    <h2 className="text-lg font-bold mb-4 text-white">Ajouter Type Utilisateur</h2>
                                    <AddTypeUtilisateurForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default type;

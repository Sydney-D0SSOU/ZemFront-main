import React from 'react';
import MenuAd from './MenuAd';
import AddFonctionnaliteForm from './fonction';

function AddFonctionPage() {
    // Calcul de la largeur de la page moins la largeur du menu
    const mainContentWidth = `calc(100% - 18%)`; // 18% est la largeur du menu

    return (
        <div className='bg-[#1F1F1F]'>
            <MenuAd />
            <div className="flex flex-col w-full">
                <div className="flex-grow ml-[18%]">
                    <div className="border-[#3B3B3B] border-b-2 bg-[#1F1F1F] min-h-screen overflow-auto">
                        <div className="flex justify-center items-center h-full mt-10">
                            <div style={{ width: mainContentWidth }} className="border border-gray-500 rounded p-4">
                                <h2 className="text-lg font-bold mb-4 text-white text-center">Ajouter Fonctionnalité</h2>
                                <AddFonctionnaliteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFonctionPage;

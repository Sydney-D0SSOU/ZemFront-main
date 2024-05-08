import React from 'react';
import TextField from '@mui/material/TextField';
import MenuAd from './MenuAd';
import AddModuleForm from './add_module';

function mod() {
    return (
        <div className='bg-[#1F1F1F]'>
            <MenuAd />
            <div className="flex flex-col w-full">
                <div className="flex-grow ml-[18%]">
                    <div className="border-[#3B3B3B] border-b-2 bg-[#1F1F1F] h-screen overflow-auto">
                        <div className="flex p-4">
                            <div className="w-1/2 pr-4">
                                <div className="border border-gray-500 rounded p-4">
                                    <h2 className="text-lg font-bold mb-4 text-white">Ajouter Module</h2>
                                    <AddModuleForm />
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default mod;

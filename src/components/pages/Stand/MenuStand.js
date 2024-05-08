import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import '../../../App.css';
import logo from "../../Images/lg.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuListComposition from '../../DropDown';
import MoneyIcon from '@mui/icons-material/Money';

function MenuStand() {
    return (
        <div className="grid grid-cols-1 w-[18%] fix border-r-2 border-[#3B3B3B] bg-[#1F1F1F]">
            <div className="  h-[30vh] border-[#3B3B3B] border-b-2 p-7 relative ">
                <a href="/">
                    <img src={logo} alt="logo" className='flex items-center justify-center ' />
                </a>
                <div className="text-[#ffffff] absolute top-[87%] left-[05%]">Menu</div>
            </div>

              <div className="grid w-full grid-cols-1 gap-4 p-4  border-[#3B3B3B] border-b-2 h-[60vh] relative">
                <div className="flex gap-3">
                    <WidgetsIcon fontSize="small" style={{ color: '#8C52FF' }} className='' />
                    <div className="text-white text-[16px]"><a href="/Stand">Dashboard</a></div>
                </div>
                <div className="flex gap-3">
                    <AccountBalanceWalletIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/Portefeuille"> Portefeuille</a></div>
                </div>
                <div className="flex gap-3">
                    <AddBoxIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/AddZem"> Add Zem</a></div>
                </div>
                <div className="flex gap-3">
                    <LocalTaxiIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/Trajet">Courses</a></div>
                </div>
                <div className="flex gap-3">
                    <LocalTaxiIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/ZemListes">Listes Zem</a></div>
                </div>
                <div className="flex gap-3">
                    <NotificationsIcon fontSize="small" style={{ color: 'white' }}/>
                    <div className="text-white "><a href="/">Notification</a></div>
                </div>  
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4  border-[#3B3B3B] border-b-2 h-[20vh]">
                <div className="flex gap-3">
                    <PersonIcon fontSize="small" style={{ color: 'white' }} />
                    <div className="text-white "><a href="/">Mon compte</a></div>
                </div>
                <div className="flex gap-3">
                    <SettingsIcon fontSize="small" style={{ color: 'white' }} />
                    <div className="text-white "><a href="/">Options</a></div>
                </div>
                <div className="text-white absolute top-[86%] left-[01%]"><a href="/">Support</a></div>
               
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4 h-[10vh]">
                <div className="flex gap-3">
                    <HelpIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white "><a href="/">Aide et support</a></div>
                </div>
            </div>
        </div>
    );
}

export default MenuStand ;
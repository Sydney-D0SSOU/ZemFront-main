import React, { useState } from 'react';
import logo from "../../Images/lg.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoneyIcon from '@mui/icons-material/Money';
import GroupIcon from '@mui/icons-material/Group';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MenuStand() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="fixed h-full grid grid-cols-1 w-[18%] border-r-2 border-[#3B3B3B] bg-[#1F1F1F]">
            <div className="h-[30vh] border-[#3B3B3B] border-b-2 p-7 relative ">
                <a href="/">
                    <img src={logo} alt="logo" className='flex items-center justify-center ' />
                </a>
                <div className="text-[#ffffff] absolute top-[87%] left-[05%]">Menu</div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 p-4  border-[#3B3B3B] border-b-2 h-[60vh] relative">
                <div className="flex gap-3">
                    <WidgetsIcon fontSize="small" style={{ color: '#8C52FF' }} className='' />
                    <div className="text-white text-[16px]"><a href="/admin">Dashboard</a></div>
                </div>
               
                <div className="flex gap-3">
                    <AddBoxIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/AddSousAdmin"> Add Sous admin</a></div>
                </div>
                
              
                <div className="flex gap-3">
                    <NotificationsIcon fontSize="small" style={{ color: 'white' }}/>
                    <div className="text-white "><a href="/">Notification</a></div>
                </div>  
                {/* Nouveaux éléments */}
                <div className="flex gap-3" onClick={handleClick}>
                    <AddBoxIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]">Administration</div>
                </div>
                <Menu
                    id="admin-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            backgroundColor: '#000',
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <WidgetsIcon fontSize="small" style={{ color: 'white', marginRight: '8px' }} />
                        <a href="/mod" style={{ color: '#fff' }}>Ajouter module</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <AddBoxIcon fontSize="small" style={{ color: 'white', marginRight: '8px' }} />
                        <a href="/fonction" style={{ color: '#fff' }}>Ajouter fonction</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <GroupIcon fontSize="small" style={{ color: 'white', marginRight: '8px' }} />
                        <a href="/type" style={{ color: '#fff' }}>Ajouter type User</a>
                    </MenuItem>
                </Menu>
                <div className="flex gap-3">
                    <GroupIcon fontSize="small" style={{ color: 'white' }} className='' />
                    <div className="text-white text-[16px]"><a href="/listUser">Liste Users</a></div>
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

export default MenuStand;

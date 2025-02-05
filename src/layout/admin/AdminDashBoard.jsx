import React, { useState } from 'react';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
const AdminDashBoard = () => {
    
    return (
        <div className='flex'>
            <div className='bg-Mprimary min-h-screen'>
            <Menu/>
            </div>
            <div className='flex-1'>
            <Outlet/>
            </div>
        </div>
    );
};

export default AdminDashBoard;
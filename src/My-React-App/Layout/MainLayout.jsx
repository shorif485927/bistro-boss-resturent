import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Common/Navbar';

const MainLayout = () => {
         const loacation = useLocation()
          const currentLocation = loacation.pathname.includes('login') 
          
          
    return (
        <div>
            { currentLocation || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
import React from 'react'
import {Link, Outlet} from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Login from '../components/Login';
import { IonIcon } from '@ionic/react';
import { logoBuffer, power } from 'ionicons/icons';
import myIcon from './logo.png';

function Root() {
    const {isLoggedIn, logOut, user} = useAuth();

    if (isLoggedIn) {
        return (
            <div className={''}>
    <div className='flex flex-col h-screen gradient-bg-2'>
        <div className='absolute w-full top-0 bg-gray-100 px-5 py-2 z-40 flex justify-between items-center shadow-md'>
            {/* Logo Section */}
            <Link to='/' className='flex items-center'>
                <div style={{ width: 150, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={myIcon} alt="Logo" style={{ maxHeight: '250%', maxWidth: '125%', objectFit: 'contain' }}/>
                </div>
            </Link>

            {/* User Greeting */}
            <div className='text-lg'>Welcome, {user.username}!</div>

            {/* Logout Button */}
            <div>
                <button onClick={logOut} className='flex items-center hover:bg-red-400 p-1 rounded-md transition duration-300 hover:scale-95'>
                    <IonIcon icon={power} size='text-lg' />
                    <div className='text-xs ml-1'>Log Out</div>
                </button>
            </div>
        </div>

        <div className='grow overflow-y-auto'>
            <div className='h-full'><Outlet/></div>
        </div>
    </div>
</div>

        )
    } else {
        return <Login/>
    }


}

export default Root
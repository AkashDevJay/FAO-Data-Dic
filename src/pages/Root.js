import React from 'react'
import {Link, Outlet} from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Login from '../components/Login';
import { IonIcon } from '@ionic/react';
import { logoBuffer, power } from 'ionicons/icons';

function Root() {
    const {isLoggedIn, logOut, user} = useAuth();

    if (isLoggedIn) {
        return (
            <div className={''}>
                <div className='flex flex-col h-screen gradient-bg-2'>
                    <div className='absolute w-full top-0 bg-gray-100 px-5 py-2 z-40 flex justify-between shadow-md'>
                        <div className='py-2 text-lg'><Link to='/'><IonIcon icon={logoBuffer} color='dark' size='large'/></Link></div>
                        <div className='py-3'>Welcome, {user.username}!</div>
                        <div className='text-right'>
                            <button onClick={logOut} className='hover:bg-red-400 p-1 rounded-md transition duration-300 hover:scale-95'> <IonIcon icon={power} size='text-lg' /> <div className='text-xs'>Log Out</div></button>
                        </div>
                    </div>
                    <div className='grow overflow-y-auto'>
                        {/* <div className="dashboard-bg h-full absolute top-0" style={{width: 'calc(100vw - 10px)'}}></div> */}
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
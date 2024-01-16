import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Alert from './Alert';
import { isEmptyString } from '../utils/validations';

const Login = () => { 
    const {login} = useAuth();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({});
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    const onFinish = async (event) => {
        event.preventDefault();

        if (isEmptyString(formData.username)) {

            setIsError(true);
            setErrorMessage('Username Cannot Be Empty!');

            userNameRef.current.focus();

            return;
        }

        if (isEmptyString(formData.password)) {
            setIsError(true);
            setErrorMessage('Password Cannot Be Empty!');

            passwordRef.current.focus();

            return;
        }

        let result = await login(formData.username, formData.password);

        if (result) {
            setIsError(true);
            setErrorMessage(result);
        }
    };

    const handleOnChange = (event) => {
        setIsError(false);
        setFormData(old => ({...old, [event.target.name]: event.target.value}));
    }

    return (
        <div>
        <div className="flex flex-col md:flex-row" style={{height: '100vh'}}>
            <div className="h-full bg-slate-100 main-bg absolute top-0 left-0 w-full"><h1 className='flex md:justify-left justify-center md:items-center h-full main-text italic text-7xl font-serif text-center md:text-left pt-20 md:pt-0 md:pr-80 leading-relaxed text-white '></h1></div>
            <div className='absolute w-5/12 h-full top-0 right-0 backdrop-blur-lg hidden md:block' style={{zIndex: 0}}></div>
            <div className='pb-10 w-full h-full relative'>
                <div className='flex justify-end md:items-center items-end h-full w-full pt-5 z-10'>
                    <div className=' basis-full md:basis-1/3 px-10 mx-5 md:mx-12 rounded-xl shadow drop-shadow-m bg-slate-50 pop-down'>
                        <div className='text-3xl text-center pb-10 pt-5'>Sign In</div>
                        <form onSubmit={onFinish}>
                            <label className='leading-10 text-sm'>User Name: </label>
                            <input ref={userNameRef} type='text' name='username' required onChange={handleOnChange} className="block w-full mb-5 rounded-md border-0 focus:ring-0 py-1.5 pl-5 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Username Here'/>
                            
                            <label className='leading-10 text-sm'>Password: </label>
                            <input ref={passwordRef} type='password' name='password' required onChange={handleOnChange} className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-5 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Password Here'/>
                            
                            <div className={`${isError ? ' h-14 mt-5' : 'h-0'} overflow-hidden`} style={{transition: '0.3s'}}>
                                <Alert 
                                    show={true} 
                                    fixed={true} 
                                    message={errorMessage} 
                                    background={'bg-red-500'} 
                                    foreColor={'text-slate-100'}
                                    hideAction={() => setIsError (false)}
                                />
                            </div>

                            <div className='text-center pb-10'>
                                <button type='submit' className='px-5 py-2 mt-10 shadow-2xl drop-shadow-sm bg-green-700 text-slate-100 bold hover:bg-green-600 transition ease-in-out duration-300 focus:border-green-300 hover:scale-110 rounded-xl'  onClick={onFinish}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Login;
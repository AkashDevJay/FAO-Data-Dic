import { IonIcon } from "@ionic/react";
import { arrowBack, backspace, checkmarkCircleSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo({top:0});
    }, []);

    const submitForm = (event) => {
        event.preventDefault();

        let requestObject = {};

        for (let data of event.target) {
            requestObject[data.name] = data.value;
        }

        // Form data can be fetched from the request object variable
        // console.log(requestObject);
        
        setIsFormSubmitted(true);
    }

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full pt-20 mt-5 px-5">
                <div className="absolute z-20"><Link to={'/'}><IonIcon icon={arrowBack} size="large" /></Link></div>
                <div className="grow py-10 pop-up md:w-2/3 m-auto w-full">
                    <div className='bg-slate-100 border-4 p-10 shadow-2xl drop-shadow-sm transition ease-in-out duration-300 rounded-xl'> 
                        {
                            isFormSubmitted ? 
                            <div className="pop-right">
                                <div className="text-center"><IonIcon icon={checkmarkCircleSharp} size="large" color="success"/></div>
                                <div className="text-xl text-center">Form Submitted!</div>
                                <div className="text-center">
                                    <button className='px-3 py-1 mt-2 shadow-2xl drop-shadow-sm bg-green-500 text-slate-100 bold hover:bg-green-600 transition ease-in-out duration-300 focus:border-green-300 hover:scale-110 rounded-xl'><Link to={'/'}>Return to home</Link></button>
                                </div>
                            </div>
                            :
                            <>
                                <div className="text-xl pb-5">Please fill the below form</div>
                                <form onSubmit={submitForm}>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Ministry: </label>
                                        <input type='text' name='ministry' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Ministry Here' autoFocus/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Department: </label>
                                        <input type='text' name='department' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Department Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Sub Department: </label>
                                        <input type='text' name='subDepartment' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Sub Department Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Data Source Name: </label>
                                        <input type='text' name='dataSourceName' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Data Source Name Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Data Source: </label>
                                        <input type='text' name='dataSource' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Data Source Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Source Ownerhsip: </label>
                                        <input type='text' name='sourceOwnership' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Source Ownerhsip Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Purpose of the data source: </label>
                                        <input type='text' name='purposeOfDataSource' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Purpose of the data source Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Name of the present owner: </label>
                                        <input type='text' name='nameOfTheOwner' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Name of the present owner Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Title of the owner: </label>
                                        <input type='text' name='titleOfTheOwner' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Title of the owner Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Contact information: </label>
                                        <input type='text' name='contactInfo' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Contact information Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Update frequency: </label>
                                        <input type='text' name='updateFrequency' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Update frequency Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>File name: </label>
                                        <input type='text' name='fileName' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='File name Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Scope data element: </label>
                                        <input type='text' name='scopeDataElement' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Scope data element Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Field name: </label>
                                        <input type='text' name='fieldName' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Field name Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Filed description: </label>
                                        <input type='text' name='fieldDesc' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Filed description Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Data Format: </label>
                                        <input type='text' name='dataFormat' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Data Format Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Calculated field: </label>
                                        <input type='text' name='calcField' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Calculated field Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Original Source: </label>
                                        <input type='text' name='originalSource' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Original Source Here'/>
                                    </div>
                                    <div className="input flex flex-col md:flex-row md:items-center mb-5">
                                        <label className='leading-8 text-sm pr-4 basis-3/6'>Special Remarks: </label>
                                        <input type='text' name='remarks' className="block w-full rounded-md border-0 focus:ring-0 py-1.5 pl-4 text-gray-900 placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-300 focus:scale-105 focus-visible:outline-0" placeholder='Special Remarks Here'/>
                                    </div>

                                    <div className="text-right">
                                        <button type='submit' className='px-5 py-2 mt-10 shadow-2xl drop-shadow-sm bg-green-700 text-slate-100 bold hover:bg-green-600 transition ease-in-out duration-300 focus:border-green-300 hover:scale-110 rounded-xl'>Submit</button>
                                    </div>
                                </form>
                            </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataForm;
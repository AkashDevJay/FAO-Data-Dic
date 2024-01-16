import { IonIcon } from "@ionic/react";
import { albumsSharp, newspaperSharp } from "ionicons/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        window.scrollTo({top:0});
    }, []);

    return (
        <div className="h-full relative">
            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center h-full pop-up">
                <div className="p-10 text-center">
                    <Link to={'/form'}>
                        <div className='bg-slate-100 hover:text-slate-100 text-xl hover:bg-green-600 border-4 hover:border-green-400 font-bold px-20 py-10 mt-10 shadow-2xl drop-shadow-sm transition ease-in-out duration-300 focus:border-green-300 hover:scale-110 rounded-xl cursor-pointer'> 
                            <IonIcon icon={newspaperSharp} size="large"/>
                            <div className="pt-2">Form</div> 
                        </div>
                    </Link>
                </div>
                <div className="p-10 text-center">
                    <Link to={'/powerBI'}>
                        <div className='bg-slate-100 hover:text-slate-100 text-xl hover:bg-green-600 border-4 hover:border-green-400 font-bold px-20 py-10 mt-10 shadow-2xl drop-shadow-sm transition ease-in-out duration-300 focus:border-green-300 hover:scale-110 rounded-xl cursor-pointer'> 
                            <IonIcon icon={albumsSharp} size="large"/>
                            <div className="pt-2">Power BI</div> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
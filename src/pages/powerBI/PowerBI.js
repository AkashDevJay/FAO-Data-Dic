import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PowerBI = () => {
    useEffect(() => {
        window.scrollTo({top:0});
    }, []);

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full pt-20 mt-5 px-5">
                <div className="absolute"><Link to={'/'}><IonIcon icon={arrowBack} size="large" /></Link></div>
                <div className="grow p-5 pop-up text-6xl text-center">
                    POWER BI
                </div>
            </div>
        </div>
    );
}

export default PowerBI;
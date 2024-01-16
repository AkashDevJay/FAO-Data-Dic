import { IonIcon } from "@ionic/react";
import { closeCircleSharp } from "ionicons/icons";

const Alert = ({show, message, hideAction, fixed, background, foreColor}) => {
    return (
        <div className={(show ? fixed ? 'z-10 w-full flex cursor-pointer ' : 'absolute pop-down z-10 w-full flex cursor-pointer ' : 'hidden ') + background + ' rounded-md text-sm ' + foreColor} onClick={hideAction}>
            <div className="grow p-3 animate-pulse text-xs">{message}</div>
            <div className="px-5 cursor-pointer flex justify-center items-center" onClick={hideAction}><IonIcon icon={closeCircleSharp} /></div>
        </div>
    )
}

export default Alert;
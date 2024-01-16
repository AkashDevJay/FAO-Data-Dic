import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar(props) {
    const [activeRoute, setActiveRoute] = useState('');
    const navigate = useNavigate();
    const navs = [
        {
            id: 1,
            label: "Dashboard",
            route: "/",
            icon: "",
            isActive: false,
        }
    ];

    const switchRoute = (route) => {
        navigate(route);
        setActiveTab();
    }

    const setActiveTab = () => {
        setActiveRoute(window.location.pathname.split('/')[1]);
    }

    useEffect(() => {
        setActiveTab();
    }, []);

    return (
        <div className="h-full px-4 bg-slate-100">
            <div className="p-5 cursor-pointer"><img src={'logo'} width={100} alt={'CLC'} onClick={() => switchRoute(navs[0].route)}/></div>
            <ul>{navs.map(nav => (<li key={nav.id} className={`cursor-pointer hover:bg-slate-300 ease-in duration-300 rounded-md px-4 py-2 m-2 ${('/' + activeRoute) === nav.route ? "gradient-bg-1" : "bg-slate-100"}`} onClick={() => switchRoute(nav.route)}>{nav.label}</li>))}</ul>
            {!props.hidden ? <div className="md:hidden" style={{height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: -3, backdropFilter: 'blur(5px)'}} onMouseEnter={() => props.setHidden(true)}></div> : ''}
        </div>

    );
}

export default Sidebar;
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PowerBI = () => {
    useEffect(() => {
        window.scrollTo({top:0});
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col"> {/* Use flexbox for layout */}
            <div className="p-4 z-10"> {/* Add padding for the header and z-index to ensure it's above the iframe */}
                <Link to={'/'}>
                    <IonIcon icon={arrowBack} size="large" />
                </Link>
            </div>
            <div className="flex-grow relative"> {/* Flex-grow allows this div to take up the remaining space */}
                <iframe 
                    title="Sample Report Demo"
                    style={{ 
                        width: '100%',  // Set iframe width to 100% of its parent
                        height: '100%', // Set iframe height to 100% of its parent
                        position: 'absolute', // Position it absolutely within the 'flex-grow' div
                        top: 0,
                        left: 0,
                        border: 'none' // Optional: remove the border
                    }}
                    // src="https://playground.powerbi.com/sampleReportEmbed"
                    src="https://app.powerbi.com/reportEmbed?reportId=543b6bee-8aca-43f3-a530-eb8af8a9b44c&autoAuth=true&ctid=c3a2e36d-d569-4973-b673-adceb6707fe9"
                    frameBorder="0"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    );
}

export default PowerBI;

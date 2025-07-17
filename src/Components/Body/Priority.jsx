import { useAppContext } from '../../AppContext';
const Priority = ({ type }) => {

    const { darkMode  } = useAppContext();

    const commonStyle = {
        stroke: 'currentColor',
        color: `${darkMode ? 'white' : 'gray'}`,
        className: 'icon',
        height: '1em',
        width: '1em',
        xmlns: 'http://www.w3.org/2000/svg',
    };
    
    return (
        <div>
            {/* No priority */}
            {type === 0 && <svg {...commonStyle} fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024">
                <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path>
            </svg>}

            {/* Low */}
            {type === 1 && <svg {...commonStyle} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h.01"></path><path d="M7 20v-4"></path>
            </svg>}

            {/* Medium */}
            {type === 2 && <svg {...commonStyle} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path>
            </svg>}

            {/* High */}
            {type === 3 && <svg {...commonStyle} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path>
            </svg>}

            {/* Urgent */}
            {type === 4 && <svg {...commonStyle} fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{color: "rgb(245, 138, 66)"}}>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>}
        </div>
    );
};

export default Priority;
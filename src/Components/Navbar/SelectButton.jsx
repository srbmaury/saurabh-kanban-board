import { useState } from 'react';
import { useAppContext } from '../../AppContext';

const SelectButton = ({ isDropdownOpen, setDropdownOpen }) => {
    const [rotationAngle, setRotationAngle] = useState(0);
    const { darkMode }  = useAppContext();

    const handleButtonClick = () => {
        setDropdownOpen(!isDropdownOpen);
        setRotationAngle(prevAngle => prevAngle === 180 ? 0 : 180);
    };

    return (
        <button
            type="button"
            className={`flex items-center justify-between gap-2.5 rounded-md px-2 py-0.5 border border-solid cursor-pointer shadow-md ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
            onClick={handleButtonClick}
        >
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" transform="rotate(-90)">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path>
            </svg>
            Display
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ transform: `rotate(${rotationAngle}deg)` }}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </button>
    );
};

export default SelectButton;
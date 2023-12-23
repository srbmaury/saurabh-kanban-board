import React from 'react';
import { useAppContext } from '../../AppContext';
import Ticket from './ticket';
import Headings from './Headings';

const Board = () => {
    const { darkMode } = useAppContext();

    return (
        <div style={{ backgroundColor: darkMode ? "#121212" : "rgba(244,245,248,255)", height: Math.max("92.25vh", "min-content") }} className='p-3'>
            <Headings />
        </div>
    );
};

export default Board;
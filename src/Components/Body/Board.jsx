import React from 'react'
import { useAppContext } from '../../AppContext';
import Ticket from './ticket';
import Headings from './Headings';

const Board = () => {

    const { darkMode } = useAppContext();
    return (
        <div style={{ backgroundColor: darkMode ? "#121212" : "rgba(244,245,248,255)", height: "92.25vh"}} className='p-3'>
            <Headings />
            <Ticket title={"CAM-5"} description={"Enhance Search Functionality"} name={"John Doe"} online={false} />
        </div>
    )
}

export default Board
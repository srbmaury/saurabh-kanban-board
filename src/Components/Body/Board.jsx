import { useAppContext } from '../../AppContext';
import Populate from './Populate/Populate';

const Board = () => {
    const { darkMode } = useAppContext();

    return (
        <div style={{ backgroundColor: darkMode ? "#121212" : "rgba(244,245,248,255)", minHeight: "92.25vh", overflowY: "auto"}} className='p-3'>
            {/* Populate data using API */}
            <Populate />
        </div>
    );
};

export default Board;
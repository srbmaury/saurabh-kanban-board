import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../AppContext';
import Status from './Status';
import Priority from './Priority';
import UserIcon from './UserIcon';
import RightIcons from './RightIcons';

const Headings = () => {
    const [data, setData] = useState(null);
    const { grouping, setGrouping, darkMode } = useAppContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedgrouping = localStorage.getItem('grouping') || 'user';
                setGrouping(storedgrouping);
                const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setGrouping]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-full">
            <ul className={`flex flex-wrap justify-around gap-3 ${grouping === 'user' ? 'sm:flex-col lg:flex-row' : ''}`}>
                {grouping === 'status' && ["Backlog", "Todo", "In progress", "Done", "Cancelled"].map(status => (
                    <li key={status} className={`flex justify-between w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex gap-2'>
                            <Status type={status} /> {status} 
                        </div>
                        <RightIcons />
                    </li>
                ))}

                {grouping === 'priority' && ["No Priority", "Low", "Medium", "High", "Urgent"].map(priority => (
                    <li key={priority} className={`flex justify-between w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex gap-2'>
                            <span className='mt-1'>
                                <Priority type={priority} /> 
                            </span>
                            {priority} 
                        </div>
                        <RightIcons />
                    </li>
                ))}

                {grouping === 'user' && data.users.map(user => (
                    <li key={user.id} className={`flex justify-between w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex gap-2'>
                            <UserIcon name={user.name} online={user.available} /> {user.name} 
                        </div>
                        <RightIcons />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Headings;
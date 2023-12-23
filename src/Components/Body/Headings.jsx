import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../AppContext';
import Status from './Status';
import Priority from './Priority';
import UserIcon from './UserIcon';
import RightIcons from './RightIcons';
import Ticket from './ticket';

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
                    <li key={status} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <span className='flex gap-2'>
                                <Status type={status} />
                                <span style={{ marginTop: "-5px" }}>{status}</span>
                            </span>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each status */}
                        <ul>
                            {data.tickets
                                .filter(ticket => ticket.status === status)
                                .map(ticket => {
                                    const user = data.users.find((user) => user.id === ticket.userId);
                                    return (
                                        <li key={ticket.id}>
                                            <Ticket
                                                id={ticket.id}
                                                title={ticket.title}
                                                name={user.name}
                                                online={user.online}
                                            />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                ))}

                {grouping === 'user' && data.users.map(user => (
                    <li key={user.id} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <UserIcon name={user.name} online={user.available} /> {user.name}
                            </div>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each user */}
                        <ul>
                            {data.tickets
                                .filter(ticket => ticket.userId === user.id)
                                .map(ticket => (
                                    <li key={ticket.id}>
                                        <Ticket
                                            id={ticket.id}
                                            title={ticket.title}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))}

                {grouping === 'priority' && ["No Priority", "Low", "Medium", "High", "Urgent"].map((priority, index) => (
                    <li key={priority} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <Priority type={priority} /> {priority}
                            </div>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each priority */}
                        <ul>
                            {data.tickets
                                .filter(ticket => ticket.priority === index)
                                .map(ticket => {
                                    const user = data.users.find((user) => user.id === ticket.userId);
                                    return (
                                        <li key={ticket.id}>
                                            <Ticket
                                                id={ticket.id}
                                                title={ticket.title}
                                                name={user.name}
                                                online={user.online}
                                            />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Headings;
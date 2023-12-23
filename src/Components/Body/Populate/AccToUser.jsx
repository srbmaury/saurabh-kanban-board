import React, { useEffect, useState } from 'react';
import UserIcon from '../UserIcon';
import RightIcons from '../RightIcons';
import Ticket from '../ticket';
import { useAppContext } from '../../../AppContext';

const AccToUser = ({ data, grouping, darkMode }) => {
    const { ordering } = useAppContext();
    const [sortedTickets, setSortedTickets] = useState([]);

    useEffect(() => {
        const tickets = data.tickets.sort((a, b) => {
            if (ordering === 'priority') {
                return a.priority - b.priority;
            }
            return a.title.localeCompare(b.title);
        });
        setSortedTickets(tickets);
    }, [ordering]);

    return (
        <>
            {grouping === 'user' && data.users.map(user => {
                // Filter tickets based on user id
                const userTickets = sortedTickets.filter(ticket => ticket.userId === user.id);

                return (
                    <li key={user.id} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <UserIcon name={user.name} online={user.available} /> {user.name}
                                <span className="ml-2 text-gray-500">{userTickets.length}</span>
                            </div>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each user */}
                        <ul>
                            {userTickets.map(ticket => (
                                <li key={ticket.id}>
                                    <Ticket
                                        id={ticket.id}
                                        title={ticket.title}
                                        priority={ticket.priority}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                );
            })}
        </>
    );
};

export default AccToUser;
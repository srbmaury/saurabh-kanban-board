import React, { useEffect, useState } from 'react';
import Ticket from '../ticket';
import Priority from '../Priority';
import RightIcons from '../RightIcons';
import { useAppContext } from '../../../AppContext';

const AccToPriority = ({ data, grouping, darkMode }) => {
    const { ordering } = useAppContext();
    const [sortedTickets, setSortedTickets] = useState([]);

    useEffect(() => {
        const tickets = data.tickets.sort((a, b) => {
            if (ordering === 'priority') {
                return b.priority - a.priority;
            }
            return a.title.localeCompare(b.title);
        });
        setSortedTickets(tickets);
    }, [ordering]);

    return (
        <>
            {grouping === 'priority' && ["No Priority", "Low", "Medium", "High", "Urgent"].map((priority, index) => {
                // Filter tickets based on priority
                const priorityTickets = sortedTickets.filter(ticket => ticket.priority === index);

                return (
                    <li key={priority} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <Priority type={index} /> {priority}
                                <span className="ml-2 text-gray-500">{priorityTickets.length}</span>
                            </div>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each priority */}
                        <ul>
                            {priorityTickets.map(ticket => {
                                const user = data.users.find((user) => user.id === ticket.userId);
                                return (
                                    <li key={ticket.id}>
                                        <Ticket
                                            id={ticket.id}
                                            title={ticket.title}
                                            name={user.name}
                                            available={user.available}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </>
    );
}

export default AccToPriority;
import React, { useEffect, useState } from 'react';
import Status from '../Status';
import RightIcons from '../RightIcons';
import Ticket from '../ticket';
import { useAppContext } from '../../../AppContext';

const AccToStatus = ({ data, grouping, darkMode }) => {
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
        console.log(sortedTickets);
    }, [ordering]);

    return (
        <>
            {grouping === 'status' && ["Backlog", "Todo", "In progress", "Done", "Cancelled"].map(status => {
                // Filter tickets based on status
                const statusTickets = sortedTickets.filter(ticket => ticket.status === status);

                return (
                    <li key={status} className={`my-4 w-72 ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className='flex justify-between'>
                            <span className='flex gap-2'>
                            <span style={{ marginTop: "5px" }}><Status type={status} /></span>
                                {status}
                                <span className="ml-2 text-gray-500">{statusTickets.length}</span>
                            </span>
                            <RightIcons />
                        </div>
                        {/* Nested mapping for tickets under each status */}
                        <ul>
                            {statusTickets.map(ticket => {
                                const user = data.users.find((user) => user.id === ticket.userId);
                                return (
                                    <li key={ticket.id}>
                                        <Ticket
                                            id={ticket.id}
                                            title={ticket.title}
                                            priority={ticket.priority}
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
};

export default AccToStatus;
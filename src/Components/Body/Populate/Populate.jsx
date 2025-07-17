import { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppContext';
import AccToStatus from './AccToStatus';
import AccToUser from './AccToUser';
import AccToPriority from './AccToPriority';

const Populate = () => {
    const { grouping, setGrouping, ordering, darkMode } = useAppContext();

    const [data, setData] = useState(null);
    const [sortedTickets, setSortedTickets] = useState([]);

    // Sample data to replace expired API
    const sampleData = {
        users: [
            { id: 'usr-1', name: 'Anoop Sharma', available: true },
            { id: 'usr-2', name: 'Yogesh', available: true },
            { id: 'usr-3', name: 'Shankar Kumar', available: false },
            { id: 'usr-4', name: 'Ramesh', available: true },
            { id: 'usr-5', name: 'Suresh', available: false }
        ],
        tickets: [
            {
                id: 'CAM-1',
                title: 'Update User Profile',
                tag: ['Feature Request'],
                priority: 4,
                status: 'In progress',
                userId: 'usr-1'
            },
            {
                id: 'CAM-2',
                title: 'Fix Login Bug',
                tag: ['Bug'],
                priority: 3,
                status: 'Todo',
                userId: 'usr-2'
            },
            {
                id: 'CAM-3',
                title: 'Add Dark Mode',
                tag: ['Feature Request', 'UI/UX'],
                priority: 2,
                status: 'Done',
                userId: 'usr-3'
            },
            {
                id: 'CAM-4',
                title: 'Database Optimization',
                tag: ['Technical Debt'],
                priority: 1,
                status: 'Backlog',
                userId: 'usr-4'
            },
            {
                id: 'CAM-5',
                title: 'Mobile Responsive Design',
                tag: ['Feature Request', 'UI/UX'],
                priority: 4,
                status: 'In progress',
                userId: 'usr-5'
            },
            {
                id: 'CAM-6',
                title: 'API Rate Limiting',
                tag: ['Security'],
                priority: 3,
                status: 'Todo',
                userId: 'usr-1'
            },
            {
                id: 'CAM-7',
                title: 'Email Notifications',
                tag: ['Feature Request'],
                priority: 2,
                status: 'Done',
                userId: 'usr-2'
            },
            {
                id: 'CAM-8',
                title: 'Performance Testing',
                tag: ['Testing'],
                priority: 1,
                status: 'Backlog',
                userId: 'usr-3'
            },
            {
                id: 'CAM-9',
                title: 'User Authentication',
                tag: ['Security', 'Feature Request'],
                priority: 4,
                status: 'In progress',
                userId: 'usr-4'
            },
            {
                id: 'CAM-10',
                title: 'Data Export Feature',
                tag: ['Feature Request'],
                priority: 3,
                status: 'Todo',
                userId: 'usr-5'
            },
            {
                id: 'CAM-11',
                title: 'Fix Search Functionality',
                tag: ['Bug'],
                priority: 2,
                status: 'Done',
                userId: 'usr-1'
            },
            {
                id: 'CAM-12',
                title: 'Add Unit Tests',
                tag: ['Testing'],
                priority: 1,
                status: 'Cancelled',
                userId: 'usr-2'
            }
        ]
    };

    // To fetch data from API (replaced with sample data)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedgrouping = localStorage.getItem('grouping') || 'user';
                setGrouping(storedgrouping);
                // Use sample data instead of API call
                setData(sampleData);
            } catch (error) {
                console.error('Error setting data:', error);
            }
        };

        fetchData();
    }, [setGrouping]);

    // To maintain ordering
    useEffect(() => {
        if (!data) return;

        setSortedTickets((prevTickets) => {
            const tickets = [...data.tickets];
            if (ordering === 'priority') {
                tickets.sort((a, b) => b.priority - a.priority);
            } else {
                tickets.sort((a, b) => a.title.localeCompare(b.title));
            }
            return tickets;
        });
    }, [data, ordering]);

    if (!data) {
        return (
            // Loading
            <div className="flex h-screen overflow-y-hidden" style={{ marginTop: "-100px" }}>
                <div className="m-auto flex ">
                    <div role="status">
                        <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                    <div className={`ml-2 ${darkMode ? 'text-white' : 'text-black'}`}>Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <ul className={`flex flex-wrap gap-3 ${grouping === 'user' ? 'sm:flex-col lg:flex-row' : ''}`}>
                {/* Grouping */}
                <AccToStatus sortedTickets={sortedTickets} data={data} grouping={grouping} darkMode={darkMode} />
                <AccToUser sortedTickets={sortedTickets} data={data} grouping={grouping} darkMode={darkMode} />
                <AccToPriority sortedTickets={sortedTickets} data={data} grouping={grouping} darkMode={darkMode} />
            </ul>
        </div>
    );
};

export default Populate;
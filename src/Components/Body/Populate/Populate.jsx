import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppContext';
import AccToStatus from './AccToStatus';
import AccToUser from './AccToUser';
import AccToPriority from './AccToPriority';

const Populate = () => {
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
                <AccToStatus data={data} grouping={grouping} darkMode={darkMode} />
                <AccToUser data={data} grouping={grouping} darkMode={darkMode} />
                <AccToPriority data={data} grouping={grouping} darkMode={darkMode} />
            </ul>
        </div>
    );
};

export default Populate;
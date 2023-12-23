import React, { useEffect, useState } from 'react';

const UserIcon = ({ name, online }) => {

    const [userInitials, setUserInitials] = useState("");
    const [userColor, setUserColor] = useState("");
    
    const stringToColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = ((hash & 0x00ffffff) | 0xa000000).toString(16).slice(1);
        return `#${color}`;
    };

    useEffect(() => {
        if (name !== undefined) {
            const initials = name
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase())
                .join('');

            const color = stringToColor(name);

            setUserInitials(initials);
            setUserColor(color);
        }
    }, [name]);

    return (
        <div className="w-6 h-6 rounded-full cursor-pointer flex items-center justify-center relative" style={{
            backgroundColor: userColor,
            borderRadius: '50%',
            color: 'white',
            fontSize: '0.5rem',
            fontWeight: 'bold',
        }}>
            {userInitials}
            <div
                className={`absolute left-3.5 top-3.5 w-3 h-3 ${online ? 'bg-green-400' : 'bg-gray-400'} rounded-full border-2 border-white`}
                title="Online"
            ></div>
        </div>
    );
};

export default UserIcon;